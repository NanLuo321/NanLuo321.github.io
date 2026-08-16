import * as THREE from 'three';

function solarPosition(date, latitude, longitude) {
  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  const jd = date.getTime() / 86400000 + 2440587.5;
  const n = jd - 2451545.0;

  const L = ((280.460 + 0.9856474 * n) % 360 + 360) % 360;
  const g = ((357.528 + 0.9856003 * n) % 360 + 360) % 360;

  const lambda =
    L +
    1.915 * Math.sin(g * rad) +
    0.020 * Math.sin(2 * g * rad);

  const epsilon = 23.439 - 0.0000004 * n;

  const decl = Math.asin(
    Math.sin(epsilon * rad) *
    Math.sin(lambda * rad)
  );

  let ra =
    Math.atan2(
      Math.cos(epsilon * rad) *
      Math.sin(lambda * rad),
      Math.cos(lambda * rad)
    ) / rad;

  ra = (ra + 360) % 360;


  const T = n / 36525;


  const gmst =
    ((280.46061837 +
      360.98564736629 * n +
      0.000387933 * T * T -
      T * T * T / 38710000) %
      360 + 360) % 360;


  const lst =
    (gmst + longitude + 360) % 360;


  const hourAngle =
    ((lst - ra + 540) % 360) - 180;


  const lat = latitude * rad;
  const ha = hourAngle * rad;


  const altitude =
    Math.asin(
      Math.sin(lat) *
      Math.sin(decl) +
      Math.cos(lat) *
      Math.cos(decl) *
      Math.cos(ha)
    );


  let azimuth =
    Math.atan2(
      Math.sin(ha),
      Math.cos(ha) *
      Math.sin(lat) -
      Math.tan(decl) *
      Math.cos(lat)
    ) / rad + 180;


  azimuth =
    (azimuth + 360) % 360;


  return {
    altitude,
    azimuth:azimuth * rad,
    altitudeDeg:altitude * deg
  };
}



function vectorFromSolar(
  altitude,
  azimuth,
  radius=32
){

  const horizontal =
    Math.cos(altitude);


  return new THREE.Vector3(
    Math.sin(azimuth) *
    horizontal *
    radius,

    Math.sin(altitude) *
    radius,

    Math.cos(azimuth) *
    horizontal *
    radius
  );

}



function setCss(root,name,value){
  root?.style?.setProperty(name,value);
}



export function createSolarEngine({
  scene,
  renderer,
  root
}){


const state={

  // 黑龙江附近
  latitude:45.8,
  longitude:126.5,

  direction:
    new THREE.Vector3(0,1,0),

  color:
    new THREE.Color(
      1,
      0.85,
      0.58
    ),

  intensity:0,

  altitudeDeg:0,

  azimuthDeg:0,

  locationName:"Harbin"

};



const group =
new THREE.Group();


group.name =
"rainform-real-solar-system";


scene.add(group);




const sunLight =
new THREE.DirectionalLight(
  0xffe7bd,
  0
);


sunLight.castShadow=true;


sunLight.shadow.mapSize.set(
  1024,
  1024
);


group.add(sunLight);
group.add(sunLight.target);




// =====================
// 太阳主体
// =====================

const sun =
new THREE.Mesh(

 new THREE.SphereGeometry(
   0.55,
   48,
   48
 ),

 new THREE.MeshBasicMaterial({

   color:0xffffd6,

   transparent:true,

   opacity:0.95,

   depthWrite:false

 })

);

sun.name =
"real-time-sun";


group.add(sun);




// =====================
// 内光晕
// =====================

const glow =
new THREE.Mesh(

new THREE.SphereGeometry(
 1.2,
 48,
 48
),

 new THREE.MeshBasicMaterial({

   color:0xffb45c,

   transparent:true,

   opacity:0.18,

   blending:
   THREE.AdditiveBlending,

   depthWrite:false

 })

);


group.add(glow);




// =====================
// 外光晕
// =====================

const outerGlow =
new THREE.Mesh(

 new THREE.SphereGeometry(
 2.5,
 48,
 48
),

 new THREE.MeshBasicMaterial({

   color:0xffd18a,

   transparent:true,

   opacity:0.05,

   blending:
   THREE.AdditiveBlending,

   depthWrite:false

 })

);


group.add(outerGlow);
// =====================
// 大气层效果
// =====================

const atmosphere =
new THREE.Mesh(

 new THREE.SphereGeometry(
   100,
   32,
   16
 ),

 new THREE.ShaderMaterial({

  side:THREE.BackSide,

  transparent:true,

  depthWrite:false,


  uniforms:{

   uSunDir:{
    value:state.direction
   },

   uDay:{
    value:0
   },

   uColor:{
    value:state.color
   }

  },


  vertexShader:`

  varying vec3 vDir;

  void main(){

    vec4 world =
    modelMatrix *
    vec4(position,1.0);


    vDir =
    normalize(
      world.xyz-cameraPosition
    );


    gl_Position =
    projectionMatrix *
    viewMatrix *
    world;

  }

  `,


  fragmentShader:`

  uniform vec3 uSunDir;
  uniform float uDay;
  uniform vec3 uColor;

  varying vec3 vDir;


  void main(){

    float sun =
    max(
      dot(
        vDir,
        normalize(uSunDir)
      ),
      0.0
    );


    float halo =
    pow(sun,18.0)
    *
    0.1
    *
    uDay;


    float horizon =
    pow(
      1.0-abs(vDir.y),
      4.0
    )
    *
    0.015
    *
    uDay;


    gl_FragColor =
    vec4(
      uColor*(halo+horizon),
      halo+horizon
    );

  }

  `

 })

);


atmosphere.renderOrder=-10;

group.add(atmosphere);




// =====================
// 地理位置
// =====================

function applyLocation(
 lat,
 lon,
 name
){

 if(
  !Number.isFinite(lat) ||
  !Number.isFinite(lon)
 )
 return;


 state.latitude =
 Math.max(
  -90,
  Math.min(
   90,
   lat
  )
 );


 state.longitude =
 Math.max(
  -180,
  Math.min(
   180,
   lon
  )
 );


 state.locationName =
 name || "GPS";

}




async function locate(){

 if(!navigator.geolocation)
 return;


 await new Promise(resolve=>{

  navigator.geolocation.getCurrentPosition(

   p=>{

    applyLocation(
     p.coords.latitude,
     p.coords.longitude,
     "GPS"
    );


    resolve();

   },


   ()=>resolve(),


   {
    enableHighAccuracy:true,
    timeout:10000,
    maximumAge:60000
   }

  );


 });

}




// =====================
// 更新太阳
// =====================

function update(){


const pos =
solarPosition(
 new Date(),
 state.latitude,
 state.longitude
);



const vector =
vectorFromSolar(
 pos.altitude,
 pos.azimuth,
 32
);



state.direction
.copy(vector)
.normalize();



state.altitudeDeg =
pos.altitudeDeg;



state.azimuthDeg =
pos.azimuth *
180 /
Math.PI;




const day =
THREE.MathUtils.clamp(
 (pos.altitudeDeg+6)/30,
 0,
 1
);



state.intensity =
day *
1.5;




// =====================
// 真实光照方向
// =====================

sunLight.position.copy(vector);

sunLight.intensity =
state.intensity;


sunLight.color.copy(
state.color
);




// =====================
// 视觉太阳位置
// 防止跑出镜头
// =====================

const visualSun =
vector.clone()
.normalize()
.multiplyScalar(14);



sun.position.copy(
visualSun
);


glow.position.copy(
visualSun
);


outerGlow.position.copy(
visualSun
);




// 光晕呼吸动画

const pulse =
1+
Math.sin(
 performance.now()*0.002
)
*0.03;


glow.scale.setScalar(
pulse
);


outerGlow.scale.setScalar(
pulse*1.05
);




// 夜晚隐藏太阳

const visible =
visualSun.y>-5;


sun.visible =
visible;


glow.visible =
visible;


outerGlow.visible =
visible;




// 大气

atmosphere.material
.uniforms
.uSunDir.value
.copy(
state.direction
);


atmosphere.material
.uniforms
.uDay.value =
day;


atmosphere.material
.uniforms
.uColor.value
.copy(
state.color
);




if(root){

 root.dataset.solarAltitude =
 state.altitudeDeg.toFixed(2);


 root.dataset.solarAzimuth =
 state.azimuthDeg.toFixed(2);


 root.dataset.solarState =
 pos.altitudeDeg>-0.833
 ?
 "day"
 :
 "night";

}


}




function start(){

 locate();

 update();

}





return {

 state,

 start,

 update,

 locate,

 applyLocation,

 sunLight,

 sun

};


}