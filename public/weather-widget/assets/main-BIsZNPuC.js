/*! Rainform © 2026 afterimage · PolyForm Noncommercial 1.0.0 · https://rainform.pages.dev/ *//**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gu=0,Rs=1,Vu=2,Rc=1,Wu=2,zn=3,hi=0,tn=1,Qt=2,ui=0,un=1,pr=2,Ps=3,Ds=4,Pc=5,ri=100,Xu=101,Yu=102,qu=103,$u=104,Zu=200,Wo=201,Ku=202,ju=203,Xo=204,Yo=205,Ju=206,Qu=207,ed=208,td=209,nd=210,id=211,rd=212,ad=213,od=214,sd=0,ld=1,cd=2,Da=3,ud=4,dd=5,hd=6,fd=7,Dc=0,pd=1,md=2,di=0,gd=1,vd=2,_d=3,xd=4,Sd=5,Md=6,yd=7,Lc=300,mr=301,gr=302,qo=303,$o=304,Xa=306,Zo=1e3,yn=1001,Ko=1002,en=1003,Ed=1004,jr=1005,Tt=1006,ro=1007,Di=1008,fi=1009,bd=1010,wd=1011,La=1012,Uc=1013,vr=1014,kn=1015,Xr=1016,Fc=1017,Ic=1018,_r=1020,Ad=35902,Td=1021,Cd=1022,mn=1023,Rd=1024,Pd=1025,ur=1026,xr=1027,Dd=1028,Nc=1029,Ld=1030,Oc=1031,Bc=1033,ao=33776,oo=33777,so=33778,lo=33779,Ls=35840,Us=35841,Fs=35842,Is=35843,Ns=36196,Os=37492,Bs=37496,zs=37808,ks=37809,Hs=37810,Gs=37811,Vs=37812,Ws=37813,Xs=37814,Ys=37815,qs=37816,$s=37817,Zs=37818,Ks=37819,js=37820,Js=37821,co=36492,Qs=36494,el=36495,Ud=36283,tl=36284,nl=36285,il=36286,Fd=3200,Id=3201,Nd=0,Od=1,ai="",ln="srgb",gi="srgb-linear",ss="display-p3",Ya="display-p3-linear",Ua="linear",ut="srgb",Fa="rec709",Ia="p3",Vi=7680,rl=519,Bd=512,zd=513,kd=514,zc=515,Hd=516,Gd=517,Vd=518,Wd=519,al=35044,Nt=35048,ol="300 es",Hn=2e3,Na=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const Br=Math.PI/180,Hr=180/Math.PI;function wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function ls(i,e){return(i%e+e)%e}function Xd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Yd(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function qd(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function $d(i,e=1){return e-Math.abs(ls(i,e*2)-e)}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jd(i,e){return i+Math.random()*(e-i)}function Qd(i){return i*(.5-Math.random())}function eh(i){i!==void 0&&(sl=i);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function th(i){return i*Br}function nh(i){return i*Hr}function ih(i){return(i&i-1)===0&&i!==0}function rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ah(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oh(i,e,t,n,r){const a=Math.cos,o=Math.sin,s=a(t/2),c=o(t/2),l=a((e+n)/2),d=o((e+n)/2),h=a((e-n)/2),f=o((e-n)/2),m=a((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(s*d,c*h,c*f,s*l);break;case"YZY":i.set(c*f,s*d,c*h,s*l);break;case"ZXZ":i.set(c*h,c*f,s*d,s*l);break;case"XZX":i.set(s*d,c*g,c*m,s*l);break;case"YXY":i.set(c*m,s*d,c*g,s*l);break;case"ZYZ":i.set(c*g,c*m,s*d,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pi={DEG2RAD:Br,RAD2DEG:Hr,generateUUID:wr,clamp:Gt,euclideanModulo:ls,mapLinear:Xd,inverseLerp:Yd,lerp:zr,damp:qd,pingpong:$d,smoothstep:Zd,smootherstep:Kd,randInt:jd,randFloat:Jd,randFloatSpread:Qd,seededRandom:eh,degToRad:th,radToDeg:nh,isPowerOfTwo:ih,ceilPowerOfTwo:rh,floorPowerOfTwo:ah,setQuaternionFromProperEuler:oh,normalize:Xt,denormalize:sr};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,r,a,o,s,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l)}set(e,t,n,r,a,o,s,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=r[0],p=r[3],u=r[6],E=r[1],S=r[4],w=r[7],L=r[2],C=r[5],T=r[8];return a[0]=o*_+s*E+c*L,a[3]=o*p+s*S+c*C,a[6]=o*u+s*w+c*T,a[1]=l*_+d*E+h*L,a[4]=l*p+d*S+h*C,a[7]=l*u+d*w+h*T,a[2]=f*_+m*E+g*L,a[5]=f*p+m*S+g*C,a[8]=f*u+m*w+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*s*l-n*a*d+n*s*c+r*a*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=d*o-s*l,f=s*c-d*a,m=l*a-o*c,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-d*n)*_,e[2]=(s*n-r*o)*_,e[3]=f*_,e[4]=(d*t-r*c)*_,e[5]=(r*a-s*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new qe;function kc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sh(){const i=Oa("canvas");return i.style.display="block",i}const ll={};function Hc(i){i in ll||(ll[i]=!0,console.warn(i))}function lh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const cl=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[gi]:{transfer:Ua,primaries:Fa,toReference:i=>i,fromReference:i=>i},[ln]:{transfer:ut,primaries:Fa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ya]:{transfer:Ua,primaries:Ia,toReference:i=>i.applyMatrix3(ul),fromReference:i=>i.applyMatrix3(cl)},[ss]:{transfer:ut,primaries:Ia,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ul),fromReference:i=>i.applyMatrix3(cl).convertLinearToSRGB()}},ch=new Set([gi,Ya]),ot={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ch.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Jr[e].toReference,r=Jr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Jr[i].primaries},getTransfer:function(i){return i===ai?Ua:Jr[i].transfer}};function dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class uh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=Oa("canvas")),Wi.width=e.width,Wi.height=e.height;const n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=dr(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dh=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(fo(r[o].image)):a.push(fo(r[o]))}else a=fo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class Vt extends Bi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=yn,r=yn,a=Tt,o=Di,s=mn,c=fi,l=Vt.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=wr(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Lc;Vt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,w=(m+1)/2,L=(u+1)/2,C=(d+f)/4,T=(h+_)/4,B=(g+p)/4;return S>w&&S>L?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=C/n,a=T/n):w>L?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=C/r,a=B/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=T/a,r=B/a),this.set(n,r,a,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(f-d)/E,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Vt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vc extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends Vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],l=n[r+1],d=n[r+2],h=n[r+3];const f=a[o+0],m=a[o+1],g=a[o+2],_=a[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==m||d!==g){let p=1-s;const u=c*f+l*m+d*g+h*_,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,u*E);p=Math.sin(p*C)/L,s=Math.sin(s*C)/L}const w=s*E;if(c=c*p+f*w,l=l*p+m*w,d=d*p+g*w,h=h*p+_*w,p===1-s){const L=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=L,l*=L,d*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],c=n[r+1],l=n[r+2],d=n[r+3],h=a[o],f=a[o+1],m=a[o+2],g=a[o+3];return e[t]=s*g+d*h+c*m-l*f,e[t+1]=c*g+d*f+l*h-s*m,e[t+2]=l*g+d*m+s*f-c*h,e[t+3]=d*g-s*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),d=s(r/2),h=s(a/2),f=c(n/2),m=c(r/2),g=c(a/2);switch(o){case"XYZ":this._x=f*d*h+l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h+f*m*g;break;case"YZX":this._x=f*d*h+l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h-f*m*g;break;case"XZY":this._x=f*d*h-l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(a-l)*m,this._z=(o-r)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(a-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(o-r)/m,this._x=(a+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*s+r*l-a*c,this._y=r*d+o*c+a*s-n*l,this._z=a*d+o*l+n*c-r*s,this._w=o*d-n*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,s),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*n),d=2*(s*t-a*r),h=2*(a*n-o*t);return this.x=t+c*l+o*h-s*d,this.y=n+c*d+s*l-a*h,this.z=r+c*h+a*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new N,dl=new Fi;class Ar{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(a,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),ea.subVectors(this.max,Dr),Xi.subVectors(e.a,Dr),Yi.subVectors(e.b,Dr),qi.subVectors(e.c,Dr),jn.subVectors(Yi,Xi),Jn.subVectors(qi,Yi),Si.subVectors(Xi,qi);let t=[0,-jn.z,jn.y,0,-Jn.z,Jn.y,0,-Si.z,Si.y,jn.z,0,-jn.x,Jn.z,0,-Jn.x,Si.z,0,-Si.x,-jn.y,jn.x,0,-Jn.y,Jn.x,0,-Si.y,Si.x,0];return!mo(t,Xi,Yi,qi,ea)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Xi,Yi,qi,ea))?!1:(ta.crossVectors(jn,Jn),t=[ta.x,ta.y,ta.z],mo(t,Xi,Yi,qi,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new N,new N,new N,new N,new N,new N,new N,new N],_n=new N,Qr=new Ar,Xi=new N,Yi=new N,qi=new N,jn=new N,Jn=new N,Si=new N,Dr=new N,ea=new N,ta=new N,Mi=new N;function mo(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){Mi.fromArray(i,a);const s=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),c=e.dot(Mi),l=t.dot(Mi),d=n.dot(Mi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>s)return!1}return!0}const mh=new Ar,Lr=new N,go=new N;class Yr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Lr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(go)),this.expandByPoint(Lr.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new N,vo=new N,na=new N,Qn=new N,_o=new N,ia=new N,xo=new N;class qr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vo.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(vo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(na),s=Qn.dot(this.direction),c=-Qn.dot(na),l=Qn.lengthSq(),d=Math.abs(1-o*o);let h,f,m,g;if(d>0)if(h=o*c-s,f=o*s-c,g=a*d,h>=0)if(f>=-g)if(f<=g){const _=1/d;h*=_,f*=_,m=h*(h+o*f+2*s)+f*(o*h+f+2*c)+l}else f=a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f=-a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vo).addScaledVector(na,f),m}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,a){_o.subVectors(t,e),ia.subVectors(n,e),xo.crossVectors(_o,ia);let o=this.direction.dot(xo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const c=s*this.direction.dot(ia.crossVectors(Qn,ia));if(c<0)return null;const l=s*this.direction.dot(_o.cross(Qn));if(l<0||c+l>o)return null;const d=-s*Qn.dot(xo);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,a,o,s,c,l,d,h,f,m,g,_,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l,d,h,f,m,g,_,p)}set(e,t,n,r,a,o,s,c,l,d,h,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=a,u[5]=o,u[9]=s,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),a=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*d,m=o*h,g=s*d,_=s*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-s*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,m=c*h,g=l*d,_=l*h;t[0]=f+_*s,t[4]=g*s-m,t[8]=o*l,t[1]=o*h,t[5]=o*d,t[9]=-s,t[2]=m*s-g,t[6]=_+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,m=c*h,g=l*d,_=l*h;t[0]=f-_*s,t[4]=-o*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*d,t[9]=_-f*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,m=o*h,g=s*d,_=s*h;t[0]=c*d,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=s*c,_=s*l;t[0]=c*d,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*d,t[9]=-s*d,t[2]=-l*d,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,m=o*l,g=s*c,_=s*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+_,t[5]=o*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*d,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,vh)}lookAt(e,t,n){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ei.crossVectors(n,on),ei.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ei.crossVectors(n,on)),ei.normalize(),ra.crossVectors(on,ei),r[0]=ei.x,r[4]=ra.x,r[8]=on.x,r[1]=ei.y,r[5]=ra.y,r[9]=on.y,r[2]=ei.z,r[6]=ra.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],E=n[3],S=n[7],w=n[11],L=n[15],C=r[0],T=r[4],B=r[8],b=r[12],M=r[1],P=r[5],U=r[9],O=r[13],$=r[2],K=r[6],W=r[10],ie=r[14],k=r[3],ce=r[7],me=r[11],ge=r[15];return a[0]=o*C+s*M+c*$+l*k,a[4]=o*T+s*P+c*K+l*ce,a[8]=o*B+s*U+c*W+l*me,a[12]=o*b+s*O+c*ie+l*ge,a[1]=d*C+h*M+f*$+m*k,a[5]=d*T+h*P+f*K+m*ce,a[9]=d*B+h*U+f*W+m*me,a[13]=d*b+h*O+f*ie+m*ge,a[2]=g*C+_*M+p*$+u*k,a[6]=g*T+_*P+p*K+u*ce,a[10]=g*B+_*U+p*W+u*me,a[14]=g*b+_*O+p*ie+u*ge,a[3]=E*C+S*M+w*$+L*k,a[7]=E*T+S*P+w*K+L*ce,a[11]=E*B+S*U+w*W+L*me,a[15]=E*b+S*O+w*ie+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+a*c*h-r*l*h-a*s*f+n*l*f+r*s*m-n*c*m)+_*(+t*c*m-t*l*f+a*o*f-r*o*m+r*l*d-a*c*d)+p*(+t*l*h-t*s*m-a*o*h+n*o*m+a*s*d-n*l*d)+u*(-r*s*d-t*c*h+t*s*f+r*o*h-n*o*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],E=h*p*l-_*f*l+_*c*m-s*p*m-h*c*u+s*f*u,S=g*f*l-d*p*l-g*c*m+o*p*m+d*c*u-o*f*u,w=d*_*l-g*h*l+g*s*m-o*_*m-d*s*u+o*h*u,L=g*h*c-d*_*c-g*s*f+o*_*f+d*s*p-o*h*p,C=t*E+n*S+r*w+a*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=E*T,e[1]=(_*f*a-h*p*a-_*r*m+n*p*m+h*r*u-n*f*u)*T,e[2]=(s*p*a-_*c*a+_*r*l-n*p*l-s*r*u+n*c*u)*T,e[3]=(h*c*a-s*f*a-h*r*l+n*f*l+s*r*m-n*c*m)*T,e[4]=S*T,e[5]=(d*p*a-g*f*a+g*r*m-t*p*m-d*r*u+t*f*u)*T,e[6]=(g*c*a-o*p*a-g*r*l+t*p*l+o*r*u-t*c*u)*T,e[7]=(o*f*a-d*c*a+d*r*l-t*f*l-o*r*m+t*c*m)*T,e[8]=w*T,e[9]=(g*h*a-d*_*a-g*n*m+t*_*m+d*n*u-t*h*u)*T,e[10]=(o*_*a-g*s*a+g*n*l-t*_*l-o*n*u+t*s*u)*T,e[11]=(d*s*a-o*h*a-d*n*l+t*h*l+o*n*m-t*s*m)*T,e[12]=L*T,e[13]=(d*_*r-g*h*r+g*n*f-t*_*f-d*n*p+t*h*p)*T,e[14]=(g*s*r-o*_*r-g*n*c+t*_*c+o*n*p-t*s*p)*T,e[15]=(o*h*r-d*s*r+d*n*c-t*h*c-o*n*f+t*s*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,l=a*o,d=a*s;return this.set(l*o+n,l*s-r*c,l*c+r*s,0,l*s+r*c,d*s+n,d*c-r*o,0,l*c-r*s,d*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,d=o+o,h=s+s,f=a*l,m=a*d,g=a*h,_=o*d,p=o*h,u=s*h,E=c*l,S=c*d,w=c*h,L=n.x,C=n.y,T=n.z;return r[0]=(1-(_+u))*L,r[1]=(m+w)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(f+u))*C,r[6]=(p+E)*C,r[7]=0,r[8]=(g+S)*T,r[9]=(p-E)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=$i.set(r[0],r[1],r[2]).length();const o=$i.set(r[4],r[5],r[6]).length(),s=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const l=1/a,d=1/o,h=1/s;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=d,xn.elements[5]*=d,xn.elements[6]*=d,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=Hn){const c=this.elements,l=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(s===Hn)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===Na)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=Hn){const c=this.elements,l=1/(t-e),d=1/(n-r),h=1/(o-a),f=(t+e)*l,m=(n+r)*d;let g,_;if(s===Hn)g=(o+a)*h,_=-2*h;else if(s===Na)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new N,xn=new vt,gh=new N(0,0,0),vh=new N(1,1,1),ei=new N,ra=new N,on=new N,hl=new vt,fl=new Fi;class Yn{constructor(e=0,t=0,n=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class cs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _h=0;const pl=new N,Zi=new Fi,Nn=new vt,aa=new N,Ur=new N,xh=new N,Sh=new Fi,ml=new N(1,0,0),gl=new N(0,1,0),vl=new N(0,0,1),_l={type:"added"},Mh={type:"removed"},Ki={type:"childadded",child:null},So={type:"childremoved",child:null};class $t extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new N,t=new Yn,n=new Fi,r=new N(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ur,aa,this.up):Nn.lookAt(aa,Ur,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mh),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}$t.DEFAULT_UP=new N(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new N,On=new N,Mo=new N,Bn=new N,ji=new N,Ji=new N,xl=new N,yo=new N,Eo=new N,bo=new N;class Rn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Sn.subVectors(r,t),On.subVectors(n,t),Mo.subVectors(e,t);const o=Sn.dot(Sn),s=Sn.dot(On),c=Sn.dot(Mo),l=On.dot(On),d=On.dot(Mo),h=o*l-s*s;if(h===0)return a.set(0,0,0),null;const f=1/h,m=(l*c-s*d)*f,g=(o*d-s*c)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(s,Bn.z),c)}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),On.subVectors(e,t),Sn.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;ji.subVectors(r,n),Ji.subVectors(a,n),yo.subVectors(e,n);const c=ji.dot(yo),l=Ji.dot(yo);if(c<=0&&l<=0)return t.copy(n);Eo.subVectors(e,r);const d=ji.dot(Eo),h=Ji.dot(Eo);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(ji,o);bo.subVectors(e,a);const m=ji.dot(bo),g=Ji.dot(bo);if(g>=0&&m<=g)return t.copy(a);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(n).addScaledVector(Ji,s);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return xl.subVectors(a,r),s=(h-d)/(h-d+(m-g)),t.copy(r).addScaledVector(xl,s);const u=1/(p+_+f);return o=_*u,s=f*u,t.copy(n).addScaledVector(ji,o).addScaledVector(Ji,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},oa={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=ls(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=wo(o,a,e+1/3),this.g=wo(o,a,e),this.b=wo(o,a,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=ln){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ot.fromWorkingColorSpace(zt.copy(this),e),Math.round(Gt(zt.r*255,0,255))*65536+Math.round(Gt(zt.g*255,0,255))*256+Math.round(Gt(zt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,a=zt.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let c,l;const d=(s+o)/2;if(s===o)c=0,l=0;else{const h=o-s;switch(l=d<=.5?h/(o+s):h/(2-o-s),o){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=ln){ot.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(oa);const n=zr(ti.h,oa.h,t),r=zr(ti.s,oa.s,t),a=zr(ti.l,oa.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ce;Ce.NAMES=Wc;let yh=0;class Tr extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=un,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=Yo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==un&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,sa=new He;class Ue{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array),a=Xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}}class Xc extends Ue{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends Ue{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends Ue{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eh=0;const hn=new vt,Ao=new $t,Qi=new N,sn=new Ar,Fr=new Ar,Ut=new N;class Ot extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kc(e)?Yc:Xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];sn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Fr.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(sn.min,Fr.min),sn.expandByPoint(Ut),Ut.addVectors(sn.max,Fr.max),sn.expandByPoint(Ut)):(sn.expandByPoint(Fr.min),sn.expandByPoint(Fr.max))}sn.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Ut.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let l=0,d=s.count;l<d;l++)Ut.fromBufferAttribute(s,l),c&&(Qi.fromBufferAttribute(e,l),Ut.add(Qi)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],c=[];for(let B=0;B<n.count;B++)s[B]=new N,c[B]=new N;const l=new N,d=new N,h=new N,f=new He,m=new He,g=new He,_=new N,p=new N;function u(B,b,M){l.fromBufferAttribute(n,B),d.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),f.fromBufferAttribute(a,B),m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,M),d.sub(l),h.sub(l),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(P),s[B].add(_),s[b].add(_),s[M].add(_),c[B].add(p),c[b].add(p),c[M].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,b=E.length;B<b;++B){const M=E[B],P=M.start,U=M.count;for(let O=P,$=P+U;O<$;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new N,w=new N,L=new N,C=new N;function T(B){L.fromBufferAttribute(r,B),C.copy(L);const b=s[B];S.copy(b),S.sub(L.multiplyScalar(L.dot(b))).normalize(),w.crossVectors(C,b);const P=w.dot(c[B])<0?-1:1;o.setXYZW(B,S.x,S.y,S.z,P)}for(let B=0,b=E.length;B<b;++B){const M=E[B],P=M.start,U=M.count;for(let O=P,$=P+U;O<$;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new N,a=new N,o=new N,s=new N,c=new N,l=new N,d=new N,h=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),s.add(d),c.add(d),l.add(d),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(s,c){const l=s.array,d=s.itemSize,h=s.normalized,f=new l.constructor(c.length*d);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){s.isInterleavedBufferAttribute?m=c[_]*s.data.stride+s.offset:m=c[_]*d;for(let u=0;u<d;u++)f[g++]=l[m++]}return new Ue(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,n);t.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let d=0,h=l.length;d<h;d++){const f=l[d],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const a=e.morphAttributes;for(const l in a){const d=[],h=a[l];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new vt,yi=new qr,la=new Yr,Ml=new N,er=new N,tr=new N,nr=new N,To=new N,ca=new N,ua=new He,da=new He,ha=new He,yl=new N,El=new N,bl=new N,fa=new N,pa=new N;class wt extends $t{constructor(e=new Ot,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){ca.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=s[c],h=a[c];d!==0&&(To.fromBufferAttribute(h,e),o?ca.addScaledVector(To,d):ca.addScaledVector(To.sub(t),d))}t.add(ca)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(a),yi.copy(e.ray).recast(e.near),!(la.containsPoint(yi.origin)===!1&&(yi.intersectSphere(la,Ml)===null||yi.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(Sl.copy(a).invert(),yi.copy(e.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,L=S;w<L;w+=3){const C=s.getX(w),T=s.getX(w+1),B=s.getX(w+2);r=ma(this,u,e,n,l,d,h,C,T,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const E=s.getX(p),S=s.getX(p+1),w=s.getX(p+2);r=ma(this,o,e,n,l,d,h,E,S,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,L=S;w<L;w+=3){const C=w,T=w+1,B=w+2;r=ma(this,u,e,n,l,d,h,C,T,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const E=p,S=p+1,w=p+2;r=ma(this,o,e,n,l,d,h,E,S,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function bh(i,e,t,n,r,a,o,s){let c;if(e.side===tn?c=n.intersectTriangle(o,a,r,!0,s):c=n.intersectTriangle(r,a,o,e.side===hi,s),c===null)return null;pa.copy(s),pa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(pa);return l<t.near||l>t.far?null:{distance:l,point:pa.clone(),object:i}}function ma(i,e,t,n,r,a,o,s,c,l){i.getVertexPosition(s,er),i.getVertexPosition(c,tr),i.getVertexPosition(l,nr);const d=bh(i,e,t,n,er,tr,nr,fa);if(d){r&&(ua.fromBufferAttribute(r,s),da.fromBufferAttribute(r,c),ha.fromBufferAttribute(r,l),d.uv=Rn.getInterpolation(fa,er,tr,nr,ua,da,ha,new He)),a&&(ua.fromBufferAttribute(a,s),da.fromBufferAttribute(a,c),ha.fromBufferAttribute(a,l),d.uv1=Rn.getInterpolation(fa,er,tr,nr,ua,da,ha,new He)),o&&(yl.fromBufferAttribute(o,s),El.fromBufferAttribute(o,c),bl.fromBufferAttribute(o,l),d.normal=Rn.getInterpolation(fa,er,tr,nr,yl,El,bl,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:l,normal:new N,materialIndex:0};Rn.getNormal(er,tr,nr,h.normal),d.face=h}return d}class Cr extends Ot{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new vn(l,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(h,2));function g(_,p,u,E,S,w,L,C,T,B,b){const M=w/T,P=L/B,U=w/2,O=L/2,$=C/2,K=T+1,W=B+1;let ie=0,k=0;const ce=new N;for(let me=0;me<W;me++){const ge=me*P-O;for(let Ie=0;Ie<K;Ie++){const q=Ie*M-U;ce[_]=q*E,ce[p]=ge*S,ce[u]=$,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[p]=0,ce[u]=C>0?1:-1,d.push(ce.x,ce.y,ce.z),h.push(Ie/T),h.push(1-me/B),ie+=1}}for(let me=0;me<B;me++)for(let ge=0;ge<T;ge++){const Ie=f+ge+K*me,q=f+ge+K*(me+1),R=f+(ge+1)+K*(me+1),X=f+(ge+1)+K*me;c.push(Ie,q,X),c.push(q,R,X),k+=6}s.addGroup(m,k,b),m+=k,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=Sr(i[t]);for(const r in n)e[r]=n[r]}return e}function wh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Ah={clone:Sr,merge:Yt};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $c extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new N,wl=new He,Al=new He;class fn extends $c{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,wl,Al),t.subVectors(Al,wl)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class Rh extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(ir,rr,e,t);r.layers=this.layers,this.add(r);const a=new fn(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new fn(ir,rr,e,t);o.layers=this.layers,this.add(o);const s=new fn(ir,rr,e,t);s.layers=this.layers,this.add(s);const c=new fn(ir,rr,e,t);c.layers=this.layers,this.add(c);const l=new fn(ir,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(const l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zc extends Vt{constructor(e,t,n,r,a,o,s,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,r,a,o,s,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ph extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),a=new Rt({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ui});a.uniforms.tEquirect.value=t;const o=new wt(r,a),s=t.minFilter;return t.minFilter===Di&&(t.minFilter=Tt),new Rh(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Co=new N,Dh=new N,Lh=new qe;class Tn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Co.subVectors(n,t).cross(Dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Co),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lh.getNormalMatrix(e),r=this.coplanarPoint(Co).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Yr,ga=new N;class Kc{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,a=new Tn,o=new Tn){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],d=r[5],h=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],E=r[13],S=r[14],w=r[15];if(n[0].setComponents(c-a,f-l,p-m,w-u).normalize(),n[1].setComponents(c+a,f+l,p+m,w+u).normalize(),n[2].setComponents(c+o,f+d,p+g,w+E).normalize(),n[3].setComponents(c-o,f-d,p-g,w-E).normalize(),n[4].setComponents(c-s,f-h,p-_,w-S).normalize(),t===Hn)n[5].setComponents(c+s,f+h,p+_,w+S).normalize();else if(t===Na)n[5].setComponents(s,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ga.x=r.normal.x>0?e.max.x:e.min.x,ga.y=r.normal.y>0?e.max.y:e.min.y,ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jc(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Uh(i){const e=new WeakMap;function t(s,c){const l=s.array,d=s.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),s.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:h}}function n(s,c,l){const d=c.array,h=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,s),h.count===-1&&f.length===0&&i.bufferSubData(l,0,d),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(i.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:r,remove:a,update:o}}class Ln extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,d=c+1,h=e/s,f=t/c,m=[],g=[],_=[],p=[];for(let u=0;u<d;u++){const E=u*f-o;for(let S=0;S<l;S++){const w=S*h-a;g.push(w,-E,0),_.push(0,0,1),p.push(S/s),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<s;E++){const S=E+l*u,w=E+l*(u+1),L=E+1+l*(u+1),C=E+1+l*u;m.push(S,w,C),m.push(w,L,C)}this.setIndex(m),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,af=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ff=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Fh,alphahash_pars_fragment:Ih,alphamap_fragment:Nh,alphamap_pars_fragment:Oh,alphatest_fragment:Bh,alphatest_pars_fragment:zh,aomap_fragment:kh,aomap_pars_fragment:Hh,batching_pars_vertex:Gh,batching_vertex:Vh,begin_vertex:Wh,beginnormal_vertex:Xh,bsdfs:Yh,iridescence_fragment:qh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:jh,clipping_planes_vertex:Jh,color_fragment:Qh,color_pars_fragment:ef,color_pars_vertex:tf,color_vertex:nf,common:rf,cube_uv_reflection_fragment:af,defaultnormal_vertex:of,displacementmap_pars_vertex:sf,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:uf,colorspace_fragment:df,colorspace_pars_fragment:hf,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Tf,envmap_vertex:vf,fog_vertex:_f,fog_pars_vertex:xf,fog_fragment:Sf,fog_pars_fragment:Mf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:Ef,lights_lambert_fragment:bf,lights_lambert_pars_fragment:wf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Df,lights_physical_fragment:Lf,lights_physical_pars_fragment:Uf,lights_fragment_begin:Ff,lights_fragment_maps:If,lights_fragment_end:Nf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:kf,map_fragment:Hf,map_pars_fragment:Gf,map_particle_fragment:Vf,map_particle_pars_fragment:Wf,metalnessmap_fragment:Xf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:qf,morphcolor_vertex:$f,morphnormal_vertex:Zf,morphtarget_pars_vertex:Kf,morphtarget_vertex:jf,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:sp,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:hp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:vp,shadowmap_vertex:_p,shadowmask_pars_fragment:xp,skinbase_vertex:Sp,skinning_pars_vertex:Mp,skinning_vertex:yp,skinnormal_vertex:Ep,specularmap_fragment:bp,specularmap_pars_fragment:wp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Tp,transmission_fragment:Cp,transmission_pars_fragment:Rp,uv_pars_fragment:Pp,uv_pars_vertex:Dp,uv_vertex:Lp,worldpos_vertex:Up,background_vert:Fp,background_frag:Ip,backgroundCube_vert:Np,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:kp,depth_frag:Hp,distanceRGBA_vert:Gp,distanceRGBA_frag:Vp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:Yp,linedashed_frag:qp,meshbasic_vert:$p,meshbasic_frag:Zp,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:rm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:sm,points_vert:lm,points_frag:cm,shadow_vert:um,shadow_frag:dm,sprite_vert:hm,sprite_frag:fm},ve={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Cn={basic:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([ve.lights,ve.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Cn.physical={uniforms:Yt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const va={r:0,b:0,g:0},bi=new Yn,pm=new vt;function mm(i,e,t,n,r,a,o){const s=new Ce(0);let c=a===!0?0:1,l,d,h=null,f=0,m=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const w=g(E);w===null?u(s,c):w&&w.isColor&&(u(w,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===Xa)?(d===void 0&&(d=new wt(new Cr(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Sr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),bi.copy(S.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(bi)),d.material.toneMapped=ot.getTransfer(w.colorSpace)!==ut,(h!==w||f!==w.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=w,f=w.version,m=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new wt(new Ln(2,2),new Rt({name:"BackgroundMaterial",uniforms:Sr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(w.colorSpace)!==ut,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,f=w.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,S){E.getRGB(va,qc(i)),n.buffers.color.setClear(va.r,va.g,va.b,S,o)}return{getClearColor:function(){return s},setClearColor:function(E,S=1){s.set(E),c=S,u(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(s,c)},render:_,addToRenderList:p}}function gm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,o=!1;function s(M,P,U,O,$){let K=!1;const W=h(O,U,P);a!==W&&(a=W,l(a.object)),K=m(M,O,U,$),K&&g(M,O,U,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,w(M,P,U,O),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,P,U){const O=U.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let K=$[P.id];K===void 0&&(K={},$[P.id]=K);let W=K[O];return W===void 0&&(W=f(c()),K[O]=W),W}function f(M){const P=[],U=[],O=[];for(let $=0;$<t;$++)P[$]=0,U[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,P,U,O){const $=a.attributes,K=P.attributes;let W=0;const ie=U.getAttributes();for(const k in ie)if(ie[k].location>=0){const me=$[k];let ge=K[k];if(ge===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;W++}return a.attributesNum!==W||a.index!==O}function g(M,P,U,O){const $={},K=P.attributes;let W=0;const ie=U.getAttributes();for(const k in ie)if(ie[k].location>=0){let me=K[k];me===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),$[k]=ge,W++}a.attributes=$,a.attributesNum=W,a.index=O}function _(){const M=a.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function p(M){u(M,0)}function u(M,P){const U=a.newAttributes,O=a.enabledAttributes,$=a.attributeDivisors;U[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),$[M]!==P&&(i.vertexAttribDivisor(M,P),$[M]=P)}function E(){const M=a.newAttributes,P=a.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==M[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function S(M,P,U,O,$,K,W){W===!0?i.vertexAttribIPointer(M,P,U,$,K):i.vertexAttribPointer(M,P,U,O,$,K)}function w(M,P,U,O){_();const $=O.attributes,K=U.getAttributes(),W=P.defaultAttributeValues;for(const ie in K){const k=K[ie];if(k.location>=0){let ce=$[ie];if(ce===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const me=ce.normalized,ge=ce.itemSize,Ie=e.get(ce);if(Ie===void 0)continue;const q=Ie.buffer,R=Ie.type,X=Ie.bytesPerElement,se=R===i.INT||R===i.UNSIGNED_INT||ce.gpuType===Uc;if(ce.isInterleavedBufferAttribute){const Q=ce.data,Le=Q.stride,ye=ce.offset;if(Q.isInstancedInterleavedBuffer){for(let Ne=0;Ne<k.locationSize;Ne++)u(k.location+Ne,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ne=0;Ne<k.locationSize;Ne++)p(k.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ne=0;Ne<k.locationSize;Ne++)S(k.location+Ne,ge/k.locationSize,R,me,Le*X,(ye+ge/k.locationSize*Ne)*X,se)}else{if(ce.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)u(k.location+Q,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<k.locationSize;Q++)p(k.location+Q);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Q=0;Q<k.locationSize;Q++)S(k.location+Q,ge/k.locationSize,R,me,ge*X,ge/k.locationSize*Q*X,se)}}else if(W!==void 0){const me=W[ie];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(k.location,me);break;case 3:i.vertexAttrib3fv(k.location,me);break;case 4:i.vertexAttrib4fv(k.location,me);break;default:i.vertexAttrib1fv(k.location,me)}}}}E()}function L(){B();for(const M in n){const P=n[M];for(const U in P){const O=P[U];for(const $ in O)d(O[$].object),delete O[$];delete P[U]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const O=P[U];for(const $ in O)d(O[$].object),delete O[$];delete P[U]}delete n[M.id]}function T(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const O=U[M.id];for(const $ in O)d(O[$].object),delete O[$];delete U[M.id]}}function B(){b(),o=!0,a!==r&&(a=r,l(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:B,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function vm(i,e,t){let n;function r(l){n=l}function a(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function s(l,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(l[m],d[m]);else{f.multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];t.update(m,n,1)}}function c(l,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function _m(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(C){const T=C===Xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==fi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==kn&&!T)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:u,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:w,maxSamples:L}}function xm(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new Tn,s=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!r||g===null||g.length===0||a&&!p)a?d(null):l();else{const E=a?0:n,S=E*4;let w=u.clippingState||null;c.value=w,w=d(g,f,S,m);for(let L=0;L!==S;++L)w[L]=t[L];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,E=f.matrixWorldInverse;s.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,w=m;S!==_;++S,w+=4)o.copy(h[S]).applyMatrix4(E,s),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Sm(i){let e=new WeakMap;function t(o,s){return s===qo?o.mapping=mr:s===$o&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===qo||s===$o)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ph(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Jc extends $c{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,Tl=[.125,.215,.35,.446,.526,.582],Pi=20,Ro=new Jc,Cl=new Ce;let Po=null,Do=0,Lo=0,Uo=!1;const Ti=(1+Math.sqrt(5))/2,ar=1/Ti,Rl=[new N(-Ti,ar,0),new N(Ti,ar,0),new N(-ar,0,Ti),new N(ar,0,Ti),new N(0,Ti,-ar),new N(0,Ti,ar),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Do,Lo),this._renderer.xr.enabled=Uo,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Xr,format:mn,colorSpace:gi,depthBuffer:!1},r=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(a)),this._blurMaterial=ym(a,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,r){const s=new fn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Cl),d.toneMapping=di,d.autoClear=!1;const m=new si({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new wt(new Cr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Cl),_=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(s.up.set(0,c[u],0),s.lookAt(l[u],0,0)):E===1?(s.up.set(0,0,c[u]),s.lookAt(0,l[u],0)):(s.up.set(0,c[u],0),s.lookAt(0,0,l[u]));const S=this._cubeSize;_a(r,E*S,u>2?S:0,S,S),d.setRenderTarget(r),_&&d.render(g,s),d.render(e,s)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===mr||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;_a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Rl[(r-a-1)%Rl.length];this._blur(e,a-1,a,o,s)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new wt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),_=a/g,p=isFinite(a)?1+Math.floor(d*_):Pi;p>Pi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const u=[];let E=0;for(let T=0;T<Pi;++T){const B=T/_,b=Math.exp(-B*B/2);u.push(b),T===0?E+=b:T<p&&(E+=2*b)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const w=this._sizeLods[r],L=3*w*(r>S-lr?r-S+lr:0),C=4*(this._cubeSize-w);_a(t,L,C,3*w,2*w),c.setRenderTarget(t),c.render(h,Ro)}}function Mm(i){const e=[],t=[],n=[];let r=i;const a=i-lr+1+Tl.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>i-lr?c=Tl[o-i+lr-1]:o===0&&(c=0),n.push(c);const l=1/(s-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,_=3,p=2,u=1,E=new Float32Array(_*g*m),S=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,B=C>2?0:-1,b=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];E.set(b,_*g*C),S.set(f,p*g*C);const M=[C,C,C,C,C,C];w.set(M,u*g*C)}const L=new Ot;L.setAttribute("position",new Ue(E,_)),L.setAttribute("uv",new Ue(S,p)),L.setAttribute("faceIndex",new Ue(w,u)),e.push(L),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dl(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ym(i,e,t){const n=new Float32Array(Pi),r=new N(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ll(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ul(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function us(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Em(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===qo||c===$o,d=c===mr||c===gr;if(l||d){let h=e.get(s);const f=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return t===null&&(t=new Pl(i)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const m=s.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Pl(i)),h=l?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let c=0;const l=6;for(let d=0;d<l;d++)s[d]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Hc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function wm(i,e,t,n){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let S=0,w=E.length;S<w;S+=3){const L=E[S+0],C=E[S+1],T=E[S+2];f.push(L,C,C,T,T,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,w=E.length/3-1;S<w;S+=3){const L=S+0,C=S+1,T=S+2;f.push(L,C,C,T,T,L)}}else return;const p=new(kc(f)?Yc:Xc)(f,1);p.version=_;const u=a.get(h);u&&e.remove(u),a.set(h,p)}function d(h){const f=a.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function Am(i,e,t){let n;function r(f){n=f}let a,o;function s(f){a=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,a,f*o),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,f*o,g),t.update(m,n,g))}function d(f,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(f[p]/o,m[p]);else{_.multiDrawElementsWEBGL(n,m,0,a,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,n,1)}}function h(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,_,0,g);let u=0;for(let E=0;E<g;E++)u+=m[E];for(let E=0;E<_.length;E++)t.update(u,n,_[E])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Tm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Cm(i,e,t){const n=new WeakMap,r=new Ct;function a(o,s,c){const l=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(s);if(f===void 0||f.count!==h){let M=function(){B.dispose(),n.delete(s),s.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,u=s.morphAttributes.position||[],E=s.morphAttributes.normal||[],S=s.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),p===!0&&(w=3);let L=s.attributes.position.count*w,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*C*4*h),B=new Vc(T,L,C,h);B.type=kn,B.needsUpdate=!0;const b=w*4;for(let P=0;P<h;P++){const U=u[P],O=E[P],$=S[P],K=L*C*4*P;for(let W=0;W<U.count;W++){const ie=W*b;g===!0&&(r.fromBufferAttribute(U,W),T[K+ie+0]=r.x,T[K+ie+1]=r.y,T[K+ie+2]=r.z,T[K+ie+3]=0),_===!0&&(r.fromBufferAttribute(O,W),T[K+ie+4]=r.x,T[K+ie+5]=r.y,T[K+ie+6]=r.z,T[K+ie+7]=0),p===!0&&(r.fromBufferAttribute($,W),T[K+ie+8]=r.x,T[K+ie+9]=r.y,T[K+ie+10]=r.z,T[K+ie+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:B,size:new He(L,C)},n.set(s,f),s.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=s.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Rm(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}class Qc extends Vt{constructor(e,t,n,r,a,o,s,c,l,d=ur){if(d!==ur&&d!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ur&&(n=vr),n===void 0&&d===xr&&(n=_r),super(null,r,a,o,s,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eu=new Vt,tu=new Qc(1,1);tu.compareFunction=zc;const nu=new Vc,iu=new ph,ru=new Zc,Fl=[],Il=[],Nl=new Float32Array(16),Ol=new Float32Array(9),Bl=new Float32Array(4);function Rr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Fl[r];if(a===void 0&&(a=new Float32Array(r),Fl[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qa(i,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),Dt(t,n)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),Dt(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),Dt(t,n)}}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?tu:eu;t.setTexture2D(e||a,r)}function Ym(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||iu,r)}function qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ru,r)}function $m(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nu,r)}function Zm(i){switch(i){case 5126:return Pm;case 35664:return Dm;case 35665:return Lm;case 35666:return Um;case 35674:return Fm;case 35675:return Im;case 35676:return Nm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}function Km(i,e){i.uniform1fv(this.addr,e)}function jm(i,e){const t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jm(i,e){const t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qm(i,e){const t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function eg(i,e){const t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tg(i,e){const t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ng(i,e){const t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ig(i,e){i.uniform1iv(this.addr,e)}function rg(i,e){i.uniform2iv(this.addr,e)}function ag(i,e){i.uniform3iv(this.addr,e)}function og(i,e){i.uniform4iv(this.addr,e)}function sg(i,e){i.uniform1uiv(this.addr,e)}function lg(i,e){i.uniform2uiv(this.addr,e)}function cg(i,e){i.uniform3uiv(this.addr,e)}function ug(i,e){i.uniform4uiv(this.addr,e)}function dg(i,e,t){const n=this.cache,r=e.length,a=qa(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||eu,a[o])}function hg(i,e,t){const n=this.cache,r=e.length,a=qa(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||iu,a[o])}function fg(i,e,t){const n=this.cache,r=e.length,a=qa(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ru,a[o])}function pg(i,e,t){const n=this.cache,r=e.length,a=qa(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nu,a[o])}function mg(i){switch(i){case 5126:return Km;case 35664:return jm;case 35665:return Jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return sg;case 36294:return lg;case 36295:return cg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zm(t.type)}}class vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mg(t.type)}}class _g{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function zl(i,e){i.seq.push(e),i.map[e.id]=e}function xg(i,e,t){const n=i.name,r=n.length;for(Fo.lastIndex=0;;){const a=Fo.exec(n),o=Fo.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){zl(t,l===void 0?new gg(s,i,e):new vg(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new _g(s),zl(t,h)),t=h}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);xg(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function kl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sg=37297;let Mg=0;function yg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Eg(i){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i);let n;switch(e===t?n="":e===Ia&&t===Fa?n="LinearDisplayP3ToLinearSRGB":e===Fa&&t===Ia&&(n="LinearSRGBToLinearDisplayP3"),i){case gi:case Ya:return[n,"LinearTransferOETF"];case ln:case ss:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yg(i.getShaderSource(e),o)}else return r}function bg(i,e){const t=Eg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wg(i,e){let t;switch(e){case gd:t="Linear";break;case vd:t="Reinhard";break;case _d:t="OptimizedCineon";break;case xd:t="ACESFilmic";break;case Md:t="AgX";break;case yd:t="Neutral";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function Tg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Or(i){return i!==""}function Gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace(Rg,Dg)}const Pg=new Map;function Dg(i,e){let t=Ye[e];if(t===void 0){const n=Pg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(i){return i.replace(Lg,Ug)}function Ug(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Xl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ig(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ng(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Og(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dc:e="ENVMAP_BLENDING_MULTIPLY";break;case pd:e="ENVMAP_BLENDING_MIX";break;case md:e="ENVMAP_BLENDING_ADD";break}return e}function Bg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zg(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Fg(t),l=Ig(t),d=Ng(t),h=Og(t),f=Bg(t),m=Ag(t),g=Tg(a),_=r.createProgram();let p,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),u.length>0&&(u+=`
`)):(p=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),u=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ye.tonemapping_pars_fragment:"",t.toneMapping!==di?wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=jo(o),o=Gl(o,t),o=Vl(o,t),s=jo(s),s=Gl(s,t),s=Vl(s,t),o=Wl(o),s=Wl(s),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+p+o,w=E+u+s,L=kl(r,r.VERTEX_SHADER,S),C=kl(r,r.FRAGMENT_SHADER,w);r.attachShader(_,L),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(L).trim(),$=r.getShaderInfoLog(C).trim();let K=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{const ie=Hl(r,L,"vertex"),k=Hl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+ie+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||$==="")&&(W=!1);W&&(P.diagnostics={runnable:K,programLog:U,vertexShader:{log:O,prefix:p},fragmentShader:{log:$,prefix:u}})}r.deleteShader(L),r.deleteShader(C),B=new Ca(r,_),b=Cg(r,_)}let B;this.getUniforms=function(){return B===void 0&&T(this),B};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Sg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let kg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gg(e),t.set(e,n)),n}}class Gg{constructor(e){this.id=kg++,this.code=e,this.usedTimes=0}}function Vg(i,e,t,n,r,a,o){const s=new cs,c=new Hg,l=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,M,P,U,O){const $=U.fog,K=O.geometry,W=b.isMeshStandardMaterial?U.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),k=ie&&ie.mapping===Xa?ie.image.height:null,ce=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ge=me!==void 0?me.length:0;let Ie=0;K.morphAttributes.position!==void 0&&(Ie=1),K.morphAttributes.normal!==void 0&&(Ie=2),K.morphAttributes.color!==void 0&&(Ie=3);let q,R,X,se;if(ce){const nt=Cn[ce];q=nt.vertexShader,R=nt.fragmentShader}else q=b.vertexShader,R=b.fragmentShader,c.update(b),X=c.getVertexShaderID(b),se=c.getFragmentShaderID(b);const Q=i.getRenderTarget(),Le=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,Ne=!!b.map,D=!!b.matcap,$e=!!ie,Ze=!!b.aoMap,ae=!!b.lightMap,j=!!b.bumpMap,xe=!!b.normalMap,Se=!!b.displacementMap,Ee=!!b.emissiveMap,Ke=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,F=b.clearcoat>0,ee=b.dispersion>0,te=b.iridescence>0,ne=b.sheen>0,we=b.transmission>0,ue=x&&!!b.anisotropyMap,he=F&&!!b.clearcoatMap,ze=F&&!!b.clearcoatNormalMap,de=F&&!!b.clearcoatRoughnessMap,Ae=te&&!!b.iridescenceMap,Je=te&&!!b.iridescenceThicknessMap,Oe=ne&&!!b.sheenColorMap,_e=ne&&!!b.sheenRoughnessMap,We=!!b.specularMap,Xe=!!b.specularColorMap,ft=!!b.specularIntensityMap,v=we&&!!b.transmissionMap,Z=we&&!!b.thicknessMap,H=!!b.gradientMap,J=!!b.alphaMap,le=b.alphaTest>0,Re=!!b.alphaHash,Ve=!!b.extensions;let pt=di;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(pt=i.toneMapping);const St={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:q,fragmentShader:R,defines:b.defines,customVertexShaderID:X,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:gi,alphaToCoverage:!!b.alphaToCoverage,map:Ne,matcap:D,envMap:$e,envMapMode:$e&&ie.mapping,envMapCubeUVHeight:k,aoMap:Ze,lightMap:ae,bumpMap:j,normalMap:xe,displacementMap:f&&Se,emissiveMap:Ee,normalMapObjectSpace:xe&&b.normalMapType===Od,normalMapTangentSpace:xe&&b.normalMapType===Nd,metalnessMap:Ke,roughnessMap:A,anisotropy:x,anisotropyMap:ue,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:ze,clearcoatRoughnessMap:de,dispersion:ee,iridescence:te,iridescenceMap:Ae,iridescenceThicknessMap:Je,sheen:ne,sheenColorMap:Oe,sheenRoughnessMap:_e,specularMap:We,specularColorMap:Xe,specularIntensityMap:ft,transmission:we,transmissionMap:v,thicknessMap:Z,gradientMap:H,opaque:b.transparent===!1&&b.blending===un&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:Re,combine:b.combine,mapUv:Ne&&_(b.map.channel),aoMapUv:Ze&&_(b.aoMap.channel),lightMapUv:ae&&_(b.lightMap.channel),bumpMapUv:j&&_(b.bumpMap.channel),normalMapUv:xe&&_(b.normalMap.channel),displacementMapUv:Se&&_(b.displacementMap.channel),emissiveMapUv:Ee&&_(b.emissiveMap.channel),metalnessMapUv:Ke&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:ue&&_(b.anisotropyMap.channel),clearcoatMapUv:he&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ze&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(b.sheenRoughnessMap.channel),specularMapUv:We&&_(b.specularMap.channel),specularColorMapUv:Xe&&_(b.specularColorMap.channel),specularIntensityMapUv:ft&&_(b.specularIntensityMap.channel),transmissionMapUv:v&&_(b.transmissionMap.channel),thicknessMapUv:Z&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(xe||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(Ne||J),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ne&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qt,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ve&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function u(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(E(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),b.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.doubleSided&&s.enable(10),M.flipSided&&s.enable(11),M.useDepthPacking&&s.enable(12),M.dithering&&s.enable(13),M.transmission&&s.enable(14),M.sheen&&s.enable(15),M.opaque&&s.enable(16),M.pointsUvs&&s.enable(17),M.decodeVideoTexture&&s.enable(18),M.alphaToCoverage&&s.enable(19),b.push(s.mask)}function w(b){const M=g[b.type];let P;if(M){const U=Cn[M];P=Ah.clone(U.uniforms)}else P=b.uniforms;return P}function L(b,M){let P;for(let U=0,O=d.length;U<O;U++){const $=d[U];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new zg(i,M,b,a),d.push(P)),P}function C(b){if(--b.usedTimes===0){const M=d.indexOf(b);d[M]=d[d.length-1],d.pop(),b.destroy()}}function T(b){c.remove(b)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:L,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:B}}function Wg(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ql(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,g,_,p){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function s(h,f,m,g,_,p){const u=o(h,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(h,f,m,g,_,p){const u=o(h,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||Xg),n.length>1&&n.sort(f||Yl),r.length>1&&r.sort(f||Yl)}function d(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:d,sort:l}}function Yg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new ql,i.set(n,[o])):r>=a.length?(o=new ql,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ce};break;case"SpotLight":t={position:new N,direction:new N,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function $g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zg=0;function Kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jg(i){const e=new qg,t=$g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,a=new vt,o=new vt;function s(l){let d=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,E=0,S=0,w=0,L=0,C=0,T=0;l.sort(Kg);for(let b=0,M=l.length;b<M;b++){const P=l[b],U=P.color,O=P.intensity,$=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*O,h+=U.g*O,f+=U.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);T++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(O),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const ie=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,ie.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=ie.matrix,P.castShadow){const k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=K,w++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const B=n.hash;(B.directionalLength!==m||B.pointLength!==g||B.spotLength!==_||B.rectAreaLength!==p||B.hemiLength!==u||B.numDirectionalShadows!==E||B.numPointShadows!==S||B.numSpotShadows!==w||B.numSpotMaps!==L||B.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,B.directionalLength=m,B.pointLength=g,B.spotLength=_,B.rectAreaLength=p,B.hemiLength=u,B.numDirectionalShadows=E,B.numPointShadows=S,B.numSpotShadows=w,B.numSpotMaps=L,B.numLightProbes=T,n.version=Zg++)}function c(l,d){let h=0,f=0,m=0,g=0,_=0;const p=d.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const S=l[u];if(S.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(S.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:s,setupView:c,state:n}}function $l(i){const e=new jg(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function s(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Jg(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new $l(i),e.set(r,[s])):a>=o.length?(s=new $l(i),o.push(s)):s=o[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}class Qg extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e0 extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i0(i,e,t){let n=new Kc;const r=new He,a=new He,o=new Ct,s=new Qg({depthPacking:Id}),c=new e0,l={},d=t.maxTextureSize,h={[hi]:tn,[tn]:hi,[Qt]:Qt},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let u=this.type;this.render=function(C,T,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ui),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=u!==zn&&this.type===zn,$=u===zn&&this.type!==zn;for(let K=0,W=C.length;K<W;K++){const ie=C[K],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ce=k.getFrameExtents();if(r.multiply(ce),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ce.x),r.x=a.x*ce.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ce.y),r.y=a.y*ce.y,k.mapSize.y=a.y)),k.map===null||O===!0||$===!0){const ge=this.type!==zn?{minFilter:en,magFilter:en}:{};k.map!==null&&k.map.dispose(),k.map=new Xn(r.x,r.y,ge),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const me=k.getViewportCount();for(let ge=0;ge<me;ge++){const Ie=k.getViewport(ge);o.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),U.viewport(o),k.updateMatrices(ie,ge),n=k.getFrustum(),w(T,B,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===zn&&E(k,B),k.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,P)};function E(C,T){const B=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,B,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,B,m,_,null)}function S(C,T,B,b){let M=null;const P=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=B.isPointLight===!0?c:s,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,O=T.uuid;let $=l[U];$===void 0&&($={},l[U]=$);let K=$[O];K===void 0&&(K=M.clone(),$[O]=K,T.addEventListener("dispose",L)),M=K}if(M.visible=T.visible,M.wireframe=T.wireframe,b===zn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=B}return M}function w(C,T,B,b,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const O=e.update(C),$=C.material;if(Array.isArray($)){const K=O.groups;for(let W=0,ie=K.length;W<ie;W++){const k=K[W],ce=$[k.materialIndex];if(ce&&ce.visible){const me=S(C,ce,b,M);C.onBeforeShadow(i,C,T,B,O,me,k),i.renderBufferDirect(B,null,O,me,C,k),C.onAfterShadow(i,C,T,B,O,me,k)}}}else if($.visible){const K=S(C,$,b,M);C.onBeforeShadow(i,C,T,B,O,K,null),i.renderBufferDirect(B,null,O,K,C,null),C.onAfterShadow(i,C,T,B,O,K,null)}}const U=C.children;for(let O=0,$=U.length;O<$;O++)w(U[O],T,B,b,M)}function L(C){C.target.removeEventListener("dispose",L);for(const B in l){const b=l[B],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function r0(i){function e(){let v=!1;const Z=new Ct;let H=null;const J=new Ct(0,0,0,0);return{setMask:function(le){H!==le&&!v&&(i.colorMask(le,le,le,le),H=le)},setLocked:function(le){v=le},setClear:function(le,Re,Ve,pt,St){St===!0&&(le*=pt,Re*=pt,Ve*=pt),Z.set(le,Re,Ve,pt),J.equals(Z)===!1&&(i.clearColor(le,Re,Ve,pt),J.copy(Z))},reset:function(){v=!1,H=null,J.set(-1,0,0,0)}}}function t(){let v=!1,Z=null,H=null,J=null;return{setTest:function(le){le?se(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(le){Z!==le&&!v&&(i.depthMask(le),Z=le)},setFunc:function(le){if(H!==le){switch(le){case sd:i.depthFunc(i.NEVER);break;case ld:i.depthFunc(i.ALWAYS);break;case cd:i.depthFunc(i.LESS);break;case Da:i.depthFunc(i.LEQUAL);break;case ud:i.depthFunc(i.EQUAL);break;case dd:i.depthFunc(i.GEQUAL);break;case hd:i.depthFunc(i.GREATER);break;case fd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=le}},setLocked:function(le){v=le},setClear:function(le){J!==le&&(i.clearDepth(le),J=le)},reset:function(){v=!1,Z=null,H=null,J=null}}}function n(){let v=!1,Z=null,H=null,J=null,le=null,Re=null,Ve=null,pt=null,St=null;return{setTest:function(nt){v||(nt?se(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(nt){Z!==nt&&!v&&(i.stencilMask(nt),Z=nt)},setFunc:function(nt,Mt,yt){(H!==nt||J!==Mt||le!==yt)&&(i.stencilFunc(nt,Mt,yt),H=nt,J=Mt,le=yt)},setOp:function(nt,Mt,yt){(Re!==nt||Ve!==Mt||pt!==yt)&&(i.stencilOp(nt,Mt,yt),Re=nt,Ve=Mt,pt=yt)},setLocked:function(nt){v=nt},setClear:function(nt){St!==nt&&(i.clearStencil(nt),St=nt)},reset:function(){v=!1,Z=null,H=null,J=null,le=null,Re=null,Ve=null,pt=null,St=null}}}const r=new e,a=new t,o=new n,s=new WeakMap,c=new WeakMap;let l={},d={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,u=null,E=null,S=null,w=null,L=null,C=new Ce(0,0,0),T=0,B=!1,b=null,M=null,P=null,U=null,O=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=W>=1):ie.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=W>=2);let k=null,ce={};const me=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Ie=new Ct().fromArray(me),q=new Ct().fromArray(ge);function R(v,Z,H,J){const le=new Uint8Array(4),Re=i.createTexture();i.bindTexture(v,Re),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<H;Ve++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(Z+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Re}const X={};X[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Da),j(!1),xe(Rs),se(i.CULL_FACE),Ze(ui);function se(v){l[v]!==!0&&(i.enable(v),l[v]=!0)}function Q(v){l[v]!==!1&&(i.disable(v),l[v]=!1)}function Le(v,Z){return d[v]!==Z?(i.bindFramebuffer(v,Z),d[v]=Z,v===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Z),v===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function ye(v,Z){let H=f,J=!1;if(v){H=h.get(Z),H===void 0&&(H=[],h.set(Z,H));const le=v.textures;if(H.length!==le.length||H[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Ve=le.length;Re<Ve;Re++)H[Re]=i.COLOR_ATTACHMENT0+Re;H.length=le.length,J=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,J=!0);J&&i.drawBuffers(H)}function Ne(v){return m!==v?(i.useProgram(v),m=v,!0):!1}const D={[ri]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};D[qu]=i.MIN,D[$u]=i.MAX;const $e={[Zu]:i.ZERO,[Wo]:i.ONE,[Ku]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[ed]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[Qu]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[rd]:i.ONE_MINUS_CONSTANT_COLOR,[ad]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(v,Z,H,J,le,Re,Ve,pt,St,nt){if(v===ui){g===!0&&(Q(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),v!==Pc){if(v!==_||nt!==B){if((p!==ri||S!==ri)&&(i.blendEquation(i.FUNC_ADD),p=ri,S=ri),nt)switch(v){case un:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pr:i.blendFunc(i.ONE,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ds:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ds:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}u=null,E=null,w=null,L=null,C.set(0,0,0),T=0,_=v,B=nt}return}le=le||Z,Re=Re||H,Ve=Ve||J,(Z!==p||le!==S)&&(i.blendEquationSeparate(D[Z],D[le]),p=Z,S=le),(H!==u||J!==E||Re!==w||Ve!==L)&&(i.blendFuncSeparate($e[H],$e[J],$e[Re],$e[Ve]),u=H,E=J,w=Re,L=Ve),(pt.equals(C)===!1||St!==T)&&(i.blendColor(pt.r,pt.g,pt.b,St),C.copy(pt),T=St),_=v,B=!1}function ae(v,Z){v.side===Qt?Q(i.CULL_FACE):se(i.CULL_FACE);let H=v.side===tn;Z&&(H=!H),j(H),v.blending===un&&v.transparent===!1?Ze(ui):Ze(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),a.setFunc(v.depthFunc),a.setTest(v.depthTest),a.setMask(v.depthWrite),r.setMask(v.colorWrite);const J=v.stencilWrite;o.setTest(J),J&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Ee(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(v){b!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),b=v)}function xe(v){v!==Gu?(se(i.CULL_FACE),v!==M&&(v===Rs?i.cullFace(i.BACK):v===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),M=v}function Se(v){v!==P&&(K&&i.lineWidth(v),P=v)}function Ee(v,Z,H){v?(se(i.POLYGON_OFFSET_FILL),(U!==Z||O!==H)&&(i.polygonOffset(Z,H),U=Z,O=H)):Q(i.POLYGON_OFFSET_FILL)}function Ke(v){v?se(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function A(v){v===void 0&&(v=i.TEXTURE0+$-1),k!==v&&(i.activeTexture(v),k=v)}function x(v,Z,H){H===void 0&&(k===null?H=i.TEXTURE0+$-1:H=k);let J=ce[H];J===void 0&&(J={type:void 0,texture:void 0},ce[H]=J),(J.type!==v||J.texture!==Z)&&(k!==H&&(i.activeTexture(H),k=H),i.bindTexture(v,Z||X[v]),J.type=v,J.texture=Z)}function F(){const v=ce[k];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Oe(v){Ie.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),Ie.copy(v))}function _e(v){q.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),q.copy(v))}function We(v,Z){let H=c.get(Z);H===void 0&&(H=new WeakMap,c.set(Z,H));let J=H.get(v);J===void 0&&(J=i.getUniformBlockIndex(Z,v.name),H.set(v,J))}function Xe(v,Z){const J=c.get(Z).get(v);s.get(Z)!==J&&(i.uniformBlockBinding(Z,J,v.__bindingPointIndex),s.set(Z,J))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},k=null,ce={},d={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,u=null,E=null,S=null,w=null,L=null,C=new Ce(0,0,0),T=0,B=!1,b=null,M=null,P=null,U=null,O=null,Ie.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Q,bindFramebuffer:Le,drawBuffers:ye,useProgram:Ne,setBlending:Ze,setMaterial:ae,setFlipSided:j,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ee,setScissorTest:Ke,activeTexture:A,bindTexture:x,unbindTexture:F,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:Ae,texImage3D:Je,updateUBOMapping:We,uniformBlockBinding:Xe,texStorage2D:ze,texStorage3D:de,texSubImage2D:ne,texSubImage3D:we,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:Oe,viewport:_e,reset:ft}}function a0(i,e,t,n,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):Oa("canvas")}function _(A,x,F){let ee=1;const te=Ke(A);if((te.width>F||te.height>F)&&(ee=F/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(ee*te.width),we=Math.floor(ee*te.height);h===void 0&&(h=g(ne,we));const ue=x?g(ne,we):h;return ue.width=ne,ue.height=we,ue.getContext("2d").drawImage(A,0,0,ne,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ne+"x"+we+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==en&&A.minFilter!==Tt}function u(A){i.generateMipmap(A)}function E(A,x,F,ee,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=x;if(x===i.RED&&(F===i.FLOAT&&(ne=i.R32F),F===i.HALF_FLOAT&&(ne=i.R16F),F===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.R8UI),F===i.UNSIGNED_SHORT&&(ne=i.R16UI),F===i.UNSIGNED_INT&&(ne=i.R32UI),F===i.BYTE&&(ne=i.R8I),F===i.SHORT&&(ne=i.R16I),F===i.INT&&(ne=i.R32I)),x===i.RG&&(F===i.FLOAT&&(ne=i.RG32F),F===i.HALF_FLOAT&&(ne=i.RG16F),F===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RG8UI),F===i.UNSIGNED_SHORT&&(ne=i.RG16UI),F===i.UNSIGNED_INT&&(ne=i.RG32UI),F===i.BYTE&&(ne=i.RG8I),F===i.SHORT&&(ne=i.RG16I),F===i.INT&&(ne=i.RG32I)),x===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),x===i.RGBA){const we=te?Ua:ot.getTransfer(ee);F===i.FLOAT&&(ne=i.RGBA32F),F===i.HALF_FLOAT&&(ne=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ne=we===ut?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(A,x){let F;return A?x===null||x===vr||x===_r?F=i.DEPTH24_STENCIL8:x===kn?F=i.DEPTH32F_STENCIL8:x===La&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vr||x===_r?F=i.DEPTH_COMPONENT24:x===kn?F=i.DEPTH_COMPONENT32F:x===La&&(F=i.DEPTH_COMPONENT16),F}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==Tt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function L(A){const x=A.target;x.removeEventListener("dispose",L),T(x),x.isVideoTexture&&d.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),b(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const F=A.source,ee=f.get(F);if(ee){const te=ee[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&B(A),Object.keys(ee).length===0&&f.delete(F)}n.remove(A)}function B(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const F=A.source,ee=f.get(F);delete ee[x.__cacheKey],o.memory.textures--}function b(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let te=0;te<x.__webglFramebuffer[ee].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[ee][te]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let ee=0,te=F.length;ee<te;ee++){const ne=n.get(F[ee]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(F[ee])}n.remove(A)}let M=0;function P(){M=0}function U(){const A=M;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),M+=1,A}function O(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const F=n.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,A,x);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function K(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){q(F,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function W(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){q(F,A,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function ie(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){R(F,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const k={[Zo]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},ce={[en]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},me={[Bd]:i.NEVER,[Wd]:i.ALWAYS,[zd]:i.LESS,[zc]:i.LEQUAL,[kd]:i.EQUAL,[Vd]:i.GEQUAL,[Hd]:i.GREATER,[Gd]:i.NOTEQUAL};function ge(A,x){if(x.type===kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tt||x.magFilter===ro||x.magFilter===jr||x.magFilter===Di||x.minFilter===Tt||x.minFilter===ro||x.minFilter===jr||x.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,k[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,k[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,k[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==jr&&x.minFilter!==Di||x.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ie(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L));const ee=x.source;let te=f.get(ee);te===void 0&&(te={},f.set(ee,te));const ne=O(x);if(ne!==A.__cacheKey){te[ne]===void 0&&(te[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[ne].usedTimes++;const we=te[A.__cacheKey];we!==void 0&&(te[A.__cacheKey].usedTimes--,we.usedTimes===0&&B(x)),A.__cacheKey=ne,A.__webglTexture=te[ne].texture}return F}function q(A,x,F){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);const te=Ie(A,x),ne=x.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+F);const we=n.get(ne);if(ne.version!==we.__version||te===!0){t.activeTexture(i.TEXTURE0+F);const ue=ot.getPrimaries(ot.workingColorSpace),he=x.colorSpace===ai?null:ot.getPrimaries(x.colorSpace),ze=x.colorSpace===ai||ue===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let de=_(x.image,!1,r.maxTextureSize);de=Ee(x,de);const Ae=a.convert(x.format,x.colorSpace),Je=a.convert(x.type);let Oe=E(x.internalFormat,Ae,Je,x.colorSpace,x.isVideoTexture);ge(ee,x);let _e;const We=x.mipmaps,Xe=x.isVideoTexture!==!0,ft=we.__version===void 0||te===!0,v=ne.dataReady,Z=w(x,de);if(x.isDepthTexture)Oe=S(x.format===xr,x.type),ft&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Oe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,Ae,Je,null));else if(x.isDataTexture)if(We.length>0){Xe&&ft&&t.texStorage2D(i.TEXTURE_2D,Z,Oe,We[0].width,We[0].height);for(let H=0,J=We.length;H<J;H++)_e=We[H],Xe?v&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,_e.width,_e.height,Ae,Je,_e.data):t.texImage2D(i.TEXTURE_2D,H,Oe,_e.width,_e.height,0,Ae,Je,_e.data);x.generateMipmaps=!1}else Xe?(ft&&t.texStorage2D(i.TEXTURE_2D,Z,Oe,de.width,de.height),v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ae,Je,de.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,Ae,Je,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,Oe,We[0].width,We[0].height,de.depth);for(let H=0,J=We.length;H<J;H++)if(_e=We[H],x.format!==mn)if(Ae!==null)if(Xe){if(v)if(x.layerUpdates.size>0){for(const le of x.layerUpdates){const Re=_e.width*_e.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,le,_e.width,_e.height,1,Ae,_e.data.slice(Re*le,Re*(le+1)),0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,de.depth,Ae,_e.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Oe,_e.width,_e.height,de.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?v&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,de.depth,Ae,Je,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Oe,_e.width,_e.height,de.depth,0,Ae,Je,_e.data)}else{Xe&&ft&&t.texStorage2D(i.TEXTURE_2D,Z,Oe,We[0].width,We[0].height);for(let H=0,J=We.length;H<J;H++)_e=We[H],x.format!==mn?Ae!==null?Xe?v&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,_e.width,_e.height,Ae,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Oe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?v&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,_e.width,_e.height,Ae,Je,_e.data):t.texImage2D(i.TEXTURE_2D,H,Oe,_e.width,_e.height,0,Ae,Je,_e.data)}else if(x.isDataArrayTexture)if(Xe){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,Oe,de.width,de.height,de.depth),v)if(x.layerUpdates.size>0){let H;switch(Je){case i.UNSIGNED_BYTE:switch(Ae){case i.ALPHA:H=1;break;case i.LUMINANCE:H=1;break;case i.LUMINANCE_ALPHA:H=2;break;case i.RGB:H=3;break;case i.RGBA:H=4;break;default:throw new Error(`Unknown texel size for format ${Ae}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:H=1;break;default:throw new Error(`Unknown texel size for type ${Je}.`)}const J=de.width*de.height*H;for(const le of x.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,Ae,Je,de.data.slice(J*le,J*(le+1)));x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,Je,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,Ae,Je,de.data);else if(x.isData3DTexture)Xe?(ft&&t.texStorage3D(i.TEXTURE_3D,Z,Oe,de.width,de.height,de.depth),v&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,Je,de.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,Ae,Je,de.data);else if(x.isFramebufferTexture){if(ft)if(Xe)t.texStorage2D(i.TEXTURE_2D,Z,Oe,de.width,de.height);else{let H=de.width,J=de.height;for(let le=0;le<Z;le++)t.texImage2D(i.TEXTURE_2D,le,Oe,H,J,0,Ae,Je,null),H>>=1,J>>=1}}else if(We.length>0){if(Xe&&ft){const H=Ke(We[0]);t.texStorage2D(i.TEXTURE_2D,Z,Oe,H.width,H.height)}for(let H=0,J=We.length;H<J;H++)_e=We[H],Xe?v&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,Ae,Je,_e):t.texImage2D(i.TEXTURE_2D,H,Oe,Ae,Je,_e);x.generateMipmaps=!1}else if(Xe){if(ft){const H=Ke(de);t.texStorage2D(i.TEXTURE_2D,Z,Oe,H.width,H.height)}v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Je,de)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Ae,Je,de);p(x)&&u(ee),we.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function R(A,x,F){if(x.image.length!==6)return;const ee=Ie(A,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const ne=n.get(te);if(te.version!==ne.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const we=ot.getPrimaries(ot.workingColorSpace),ue=x.colorSpace===ai?null:ot.getPrimaries(x.colorSpace),he=x.colorSpace===ai||we===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,Ae=[];for(let J=0;J<6;J++)!ze&&!de?Ae[J]=_(x.image[J],!0,r.maxCubemapSize):Ae[J]=de?x.image[J].image:x.image[J],Ae[J]=Ee(x,Ae[J]);const Je=Ae[0],Oe=a.convert(x.format,x.colorSpace),_e=a.convert(x.type),We=E(x.internalFormat,Oe,_e,x.colorSpace),Xe=x.isVideoTexture!==!0,ft=ne.__version===void 0||ee===!0,v=te.dataReady;let Z=w(x,Je);ge(i.TEXTURE_CUBE_MAP,x);let H;if(ze){Xe&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,We,Je.width,Je.height);for(let J=0;J<6;J++){H=Ae[J].mipmaps;for(let le=0;le<H.length;le++){const Re=H[le];x.format!==mn?Oe!==null?Xe?v&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Re.width,Re.height,Oe,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Re.width,Re.height,Oe,_e,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,Re.width,Re.height,0,Oe,_e,Re.data)}}}else{if(H=x.mipmaps,Xe&&ft){H.length>0&&Z++;const J=Ke(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,We,J.width,J.height)}for(let J=0;J<6;J++)if(de){Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae[J].width,Ae[J].height,Oe,_e,Ae[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Ae[J].width,Ae[J].height,0,Oe,_e,Ae[J].data);for(let le=0;le<H.length;le++){const Ve=H[le].image[J].image;Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ve.width,Ve.height,Oe,_e,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,Ve.width,Ve.height,0,Oe,_e,Ve.data)}}else{Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,_e,Ae[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Oe,_e,Ae[J]);for(let le=0;le<H.length;le++){const Re=H[le];Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Oe,_e,Re.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,Oe,_e,Re.image[J])}}}p(x)&&u(i.TEXTURE_CUBE_MAP),ne.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function X(A,x,F,ee,te,ne){const we=a.convert(F.format,F.colorSpace),ue=a.convert(F.type),he=E(F.internalFormat,we,ue,F.colorSpace);if(!n.get(x).__hasExternalTextures){const de=Math.max(1,x.width>>ne),Ae=Math.max(1,x.height>>ne);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,he,de,Ae,x.depth,0,we,ue,null):t.texImage2D(te,ne,he,de,Ae,0,we,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),xe(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,te,n.get(F).__webglTexture,0,j(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,te,n.get(F).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const ee=x.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,ne=S(x.stencilBuffer,te),we=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=j(x);xe(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ne,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,A)}else{const ee=x.textures;for(let te=0;te<ee.length;te++){const ne=ee[te],we=a.convert(ne.format,ne.colorSpace),ue=a.convert(ne.type),he=E(ne.internalFormat,we,ue,ne.colorSpace),ze=j(x);F&&xe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,he,x.width,x.height):xe(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const ee=n.get(x.depthTexture).__webglTexture,te=j(x);if(x.depthTexture.format===ur)xe(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===xr)xe(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(A){const x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Q(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=i.createRenderbuffer(),se(x.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),se(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(A,x,F){const ee=n.get(A);x!==void 0&&X(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Le(A)}function Ne(A){const x=A.texture,F=n.get(A),ee=n.get(x);A.addEventListener("dispose",C);const te=A.textures,ne=A.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,o.memory.textures++),ne){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let he=0;he<x.mipmaps.length;he++)F.__webglFramebuffer[ue][he]=i.createFramebuffer()}else F.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)F.__webglFramebuffer[ue]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(we)for(let ue=0,he=te.length;ue<he;ue++){const ze=n.get(te[ue]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&xe(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const he=te[ue];F.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const ze=a.convert(he.format,he.colorSpace),de=a.convert(he.type),Ae=E(he.internalFormat,ze,de,he.colorSpace,A.isXRRenderTarget===!0),Je=j(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),se(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)X(F.__webglFramebuffer[ue][he],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else X(F.__webglFramebuffer[ue],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(x)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ue=0,he=te.length;ue<he;ue++){const ze=te[ue],de=n.get(ze);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),ge(i.TEXTURE_2D,ze),X(F.__webglFramebuffer,A,ze,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),p(ze)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),ge(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)X(F.__webglFramebuffer[he],A,x,i.COLOR_ATTACHMENT0,ue,he);else X(F.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ue,0);p(x)&&u(ue),t.unbindTexture()}A.depthBuffer&&Le(A)}function D(A){const x=A.textures;for(let F=0,ee=x.length;F<ee;F++){const te=x[F];if(p(te)){const ne=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(te).__webglTexture;t.bindTexture(ne,we),u(ne),t.unbindTexture()}}}const $e=[],Ze=[];function ae(A){if(A.samples>0){if(xe(A)===!1){const x=A.textures,F=A.width,ee=A.height;let te=i.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(A),ue=x.length>1;if(ue)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let he=0;he<x.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const ze=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,te,i.NEAREST),c===!0&&($e.length=0,Ze.length=0,$e.push(i.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&($e.push(ne),Ze.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,we.__webglColorRenderbuffer[he]);const ze=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function j(A){return Math.min(r.maxSamples,A.samples)}function xe(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(A){const x=o.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function Ee(A,x){const F=A.colorSpace,ee=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==gi&&F!==ai&&(ot.getTransfer(F)===ut?(ee!==mn||te!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=ie,this.rebindTextures=ye,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=X,this.useMultisampledRTT=xe}function o0(i,e){function t(n,r=ai){let a;const o=ot.getTransfer(r);if(n===fi)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return i.BYTE;if(n===wd)return i.SHORT;if(n===La)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Xr)return i.HALF_FLOAT;if(n===Td)return i.ALPHA;if(n===Cd)return i.RGB;if(n===mn)return i.RGBA;if(n===Rd)return i.LUMINANCE;if(n===Pd)return i.LUMINANCE_ALPHA;if(n===ur)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===Dd)return i.RED;if(n===Nc)return i.RED_INTEGER;if(n===Ld)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===ao||n===oo||n===so||n===lo)if(o===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ao)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ao)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ls||n===Us||n===Fs||n===Is)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ls)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Us)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Is)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ns||n===Os||n===Bs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ns||n===Os)return o===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Bs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zs||n===ks||n===Hs||n===Gs||n===Vs||n===Ws||n===Xs||n===Ys||n===qs||n===$s||n===Zs||n===Ks||n===js||n===Js)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===zs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ks)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ws)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ys)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$s)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ks)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===js)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Js)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===Qs||n===el)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===co)return o===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ud||n===tl||n===nl||n===il)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===co)return a.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class s0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l0={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Vt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:c0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class h0 extends Bi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,d=null,h=null,f=null,m=null,g=null;const _=new d0,p=t.getContextAttributes();let u=null,E=null;const S=[],w=[],L=new He;let C=null;const T=new fn;T.layers.enable(1),T.viewport=new Ct;const B=new fn;B.layers.enable(2),B.viewport=new Ct;const b=[T,B],M=new s0;M.layers.enable(1),M.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let X=S[R];return X===void 0&&(X=new Io,S[R]=X),X.getTargetRaySpace()},this.getControllerGrip=function(R){let X=S[R];return X===void 0&&(X=new Io,S[R]=X),X.getGripSpace()},this.getHand=function(R){let X=S[R];return X===void 0&&(X=new Io,S[R]=X),X.getHandSpace()};function O(R){const X=w.indexOf(R.inputSource);if(X===-1)return;const se=S[X];se!==void 0&&(se.update(R.inputSource,R.frame,l||o),se.dispatchEvent({type:R.type,data:R.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",K);for(let R=0;R<S.length;R++){const X=w[R];X!==null&&(w[R]=null,S[R].disconnect(X))}P=null,U=null,_.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,E=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const X={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Xn(m.framebufferWidth,m.framebufferHeight,{format:mn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,se=null,Q=null;p.depth&&(Q=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=p.stencil?xr:ur,se=p.stencil?_r:vr);const Le={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Xn(f.textureWidth,f.textureHeight,{format:mn,type:fi,depthTexture:new Qc(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),q.setContext(r),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(R){for(let X=0;X<R.removed.length;X++){const se=R.removed[X],Q=w.indexOf(se);Q>=0&&(w[Q]=null,S[Q].disconnect(se))}for(let X=0;X<R.added.length;X++){const se=R.added[X];let Q=w.indexOf(se);if(Q===-1){for(let ye=0;ye<S.length;ye++)if(ye>=w.length){w.push(se),Q=ye;break}else if(w[ye]===null){w[ye]=se,Q=ye;break}if(Q===-1)break}const Le=S[Q];Le&&Le.connect(se)}}const W=new N,ie=new N;function k(R,X,se){W.setFromMatrixPosition(X.matrixWorld),ie.setFromMatrixPosition(se.matrixWorld);const Q=W.distanceTo(ie),Le=X.projectionMatrix.elements,ye=se.projectionMatrix.elements,Ne=Le[14]/(Le[10]-1),D=Le[14]/(Le[10]+1),$e=(Le[9]+1)/Le[5],Ze=(Le[9]-1)/Le[5],ae=(Le[8]-1)/Le[0],j=(ye[8]+1)/ye[0],xe=Ne*ae,Se=Ne*j,Ee=Q/(-ae+j),Ke=Ee*-ae;X.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ke),R.translateZ(Ee),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const A=Ne+Ee,x=D+Ee,F=xe-Ke,ee=Se+(Q-Ke),te=$e*D/x*A,ne=Ze*D/x*A;R.projectionMatrix.makePerspective(F,ee,te,ne,A,x),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function ce(R,X){X===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(X.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;_.texture!==null&&(R.near=_.depthNear,R.far=_.depthFar),M.near=B.near=T.near=R.near,M.far=B.far=T.far=R.far,(P!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far,T.near=P,T.far=U,B.near=P,B.far=U,T.updateProjectionMatrix(),B.updateProjectionMatrix(),R.updateProjectionMatrix());const X=R.parent,se=M.cameras;ce(M,X);for(let Q=0;Q<se.length;Q++)ce(se[Q],X);se.length===2?k(M,T,B):M.projectionMatrix.copy(T.projectionMatrix),me(R,M,X)};function me(R,X,se){se===null?R.matrix.copy(X.matrixWorld):(R.matrix.copy(se.matrixWorld),R.matrix.invert(),R.matrix.multiply(X.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(X.projectionMatrix),R.projectionMatrixInverse.copy(X.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Hr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(R){c=R,f!==null&&(f.fixedFoveation=R),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=R)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ge=null;function Ie(R,X){if(d=X.getViewerPose(l||o),g=X,d!==null){const se=d.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Q=!1;se.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let ye=0;ye<se.length;ye++){const Ne=se[ye];let D=null;if(m!==null)D=m.getViewport(Ne);else{const Ze=h.getViewSubImage(f,Ne);D=Ze.viewport,ye===0&&(e.setRenderTargetTextures(E,Ze.colorTexture,f.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(E))}let $e=b[ye];$e===void 0&&($e=new fn,$e.layers.enable(ye),$e.viewport=new Ct,b[ye]=$e),$e.matrix.fromArray(Ne.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ne.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(D.x,D.y,D.width,D.height),ye===0&&(M.matrix.copy($e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push($e)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ye=h.getDepthInformation(se[0]);ye&&ye.isValid&&ye.texture&&_.init(e,ye,r.renderState)}}for(let se=0;se<S.length;se++){const Q=w[se],Le=S[se];Q!==null&&Le!==void 0&&Le.update(Q,X,l||o)}ge&&ge(R,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const q=new jc;q.setAnimationLoop(Ie),this.setAnimationLoop=function(R){ge=R},this.dispose=function(){}}}const wi=new Yn,f0=new vt;function p0(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,qc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,E,S,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),h(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(a(p,u),g(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),_(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?c(p,u,E,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const E=e.get(u),S=E.envMap,w=E.envMapRotation;S&&(p.envMap.value=S,wi.copy(w),wi.x*=-1,wi.y*=-1,wi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),p.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(wi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,E,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=S*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const E=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function m0(i,e,t,n){let r={},a={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const w=S.program;n.uniformBlockBinding(E,w)}function l(E,S){let w=r[E.id];w===void 0&&(g(E),w=d(E),r[E.id]=w,E.addEventListener("dispose",p));const L=S.program;n.updateUBOMapping(E,L);const C=e.render.frame;a[E.id]!==C&&(f(E),a[E.id]=C)}function d(E){const S=h();E.__bindingPointIndex=S;const w=i.createBuffer(),L=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function h(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],w=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,T=w.length;C<T;C++){const B=Array.isArray(w[C])?w[C]:[w[C]];for(let b=0,M=B.length;b<M;b++){const P=B[b];if(m(P,C,b,L)===!0){const U=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let K=0;K<O.length;K++){const W=O[K],ie=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,U+$,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,$),$+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,w,L){const C=E.value,T=S+"_"+w;if(L[T]===void 0)return typeof C=="number"||typeof C=="boolean"?L[T]=C:L[T]=C.clone(),!0;{const B=L[T];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return L[T]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(E){const S=E.uniforms;let w=0;const L=16;for(let T=0,B=S.length;T<B;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,P=b.length;M<P;M++){const U=b[M],O=Array.isArray(U.value)?U.value:[U.value];for(let $=0,K=O.length;$<K;$++){const W=O[$],ie=_(W),k=w%L;k!==0&&L-k<ie.boundary&&(w+=L-k),U.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=ie.storage}}}const C=w%L;return C>0&&(w+=L-C),E.__size=w,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function u(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:c,update:l,dispose:u}}class g0{constructor(e={}){const{canvas:t=sh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let w=!1,L=0,C=0,T=null,B=-1,b=null;const M=new Ct,P=new Ct;let U=null;const O=new Ce(0);let $=0,K=t.width,W=t.height,ie=1,k=null,ce=null;const me=new Ct(0,0,K,W),ge=new Ct(0,0,K,W);let Ie=!1;const q=new Kc;let R=!1,X=!1;const se=new vt,Q=new N,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ne(){return T===null?ie:1}let D=n;function $e(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r165"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",J,!1),D===null){const I="webgl2";if(D=$e(I,y),D===null)throw $e(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ze,ae,j,xe,Se,Ee,Ke,A,x,F,ee,te,ne,we,ue,he,ze,de,Ae,Je,Oe,_e,We,Xe;function ft(){Ze=new bm(D),Ze.init(),_e=new o0(D,Ze),ae=new _m(D,Ze,e,_e),j=new r0(D),xe=new Tm(D),Se=new Wg,Ee=new a0(D,Ze,j,Se,ae,_e,xe),Ke=new Sm(S),A=new Em(S),x=new Uh(D),We=new gm(D,x),F=new wm(D,x,xe,We),ee=new Rm(D,F,x,xe),Ae=new Cm(D,ae,Ee),he=new xm(Se),te=new Vg(S,Ke,A,Ze,ae,We,he),ne=new p0(S,Se),we=new Yg,ue=new Jg(Ze),de=new mm(S,Ke,A,j,ee,f,c),ze=new i0(S,ee,ae),Xe=new m0(D,xe,ae,j),Je=new vm(D,Ze,xe),Oe=new Am(D,Ze,xe),xe.programs=te.programs,S.capabilities=ae,S.extensions=Ze,S.properties=Se,S.renderLists=we,S.shadowMap=ze,S.state=j,S.info=xe}ft();const v=new h0(S,D);this.xr=v,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(K,W,!1))},this.getSize=function(y){return y.set(K,W)},this.setSize=function(y,I,V=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,W=I,t.width=Math.floor(y*ie),t.height=Math.floor(I*ie),V===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(K*ie,W*ie).floor()},this.setDrawingBufferSize=function(y,I,V){K=y,W=I,ie=V,t.width=Math.floor(y*V),t.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,I,V,Y){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,I,V,Y),j.viewport(M.copy(me).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(ge)},this.setScissor=function(y,I,V,Y){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,I,V,Y),j.scissor(P.copy(ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(y){j.setScissorTest(Ie=y)},this.setOpaqueSort=function(y){k=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(y=!0,I=!0,V=!0){let Y=0;if(y){let z=!1;if(T!==null){const fe=T.texture.format;z=fe===Bc||fe===Oc||fe===Nc}if(z){const fe=T.texture.type,Me=fe===fi||fe===vr||fe===La||fe===_r||fe===Fc||fe===Ic,be=de.getClearColor(),Te=de.getClearAlpha(),Be=be.r,ke=be.g,Fe=be.b;Me?(m[0]=Be,m[1]=ke,m[2]=Fe,m[3]=Te,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Be,g[1]=ke,g[2]=Fe,g[3]=Te,D.clearBufferiv(D.COLOR,0,g))}else Y|=D.COLOR_BUFFER_BIT}I&&(Y|=D.DEPTH_BUFFER_BIT),V&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",J,!1),we.dispose(),ue.dispose(),Se.dispose(),Ke.dispose(),A.dispose(),ee.dispose(),We.dispose(),Xe.dispose(),te.dispose(),v.dispose(),v.removeEventListener("sessionstart",Mt),v.removeEventListener("sessionend",yt),nn.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=xe.autoReset,I=ze.enabled,V=ze.autoUpdate,Y=ze.needsUpdate,z=ze.type;ft(),xe.autoReset=y,ze.enabled=I,ze.autoUpdate=V,ze.needsUpdate=Y,ze.type=z}function J(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){const I=y.target;I.removeEventListener("dispose",le),Re(I)}function Re(y){Ve(y),Se.remove(y)}function Ve(y){const I=Se.get(y).programs;I!==void 0&&(I.forEach(function(V){te.releaseProgram(V)}),y.isShaderMaterial&&te.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,Y,z,fe){I===null&&(I=Le);const Me=z.isMesh&&z.matrixWorld.determinant()<0,be=Bu(y,I,V,Y,z);j.setMaterial(Y,Me);let Te=V.index,Be=1;if(Y.wireframe===!0){if(Te=F.getWireframeAttribute(V),Te===void 0)return;Be=2}const ke=V.drawRange,Fe=V.attributes.position;let it=ke.start*Be,mt=(ke.start+ke.count)*Be;fe!==null&&(it=Math.max(it,fe.start*Be),mt=Math.min(mt,(fe.start+fe.count)*Be)),Te!==null?(it=Math.max(it,0),mt=Math.min(mt,Te.count)):Fe!=null&&(it=Math.max(it,0),mt=Math.min(mt,Fe.count));const gt=mt-it;if(gt<0||gt===1/0)return;We.setup(z,Y,be,V,Te);let an,at=Je;if(Te!==null&&(an=x.get(Te),at=Oe,at.setIndex(an)),z.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*Ne()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(z.isLine){let De=Y.linewidth;De===void 0&&(De=1),j.setLineWidth(De*Ne()),z.isLineSegments?at.setMode(D.LINES):z.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else z.isPoints?at.setMode(D.POINTS):z.isSprite&&at.setMode(D.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)at.renderInstances(it,gt,z.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Wt=Math.min(V.instanceCount,De);at.renderInstances(it,gt,Wt)}else at.render(it,gt)};function pt(y,I,V){y.transparent===!0&&y.side===Qt&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,Zr(y,I,V),y.side=hi,y.needsUpdate=!0,Zr(y,I,V),y.side=Qt):Zr(y,I,V)}this.compile=function(y,I,V=null){V===null&&(V=y),p=ue.get(V),p.init(I),E.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),y!==V&&y.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return y.traverse(function(z){const fe=z.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const be=fe[Me];pt(be,V,z),Y.add(be)}else pt(fe,V,z),Y.add(fe)}),E.pop(),p=null,Y},this.compileAsync=function(y,I,V=null){const Y=this.compile(y,I,V);return new Promise(z=>{function fe(){if(Y.forEach(function(Me){Se.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){z(y);return}setTimeout(fe,10)}Ze.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let St=null;function nt(y){St&&St(y)}function Mt(){nn.stop()}function yt(){nn.start()}const nn=new jc;nn.setAnimationLoop(nt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(y){St=y,v.setAnimationLoop(y),y===null?nn.stop():nn.start()},v.addEventListener("sessionstart",Mt),v.addEventListener("sessionend",yt),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(I),I=v.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,I,T),p=ue.get(y,E.length),p.init(I),E.push(p),se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(se),X=this.localClippingEnabled,R=he.init(this.clippingPlanes,X),_=we.get(y,u.length),_.init(),u.push(_),v.enabled===!0&&v.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&rn(fe,I,-1/0,S.sortObjects)}rn(y,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(k,ce),ye=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,ye&&de.addToRenderList(_,y),this.info.render.frame++,R===!0&&he.beginShadows();const V=p.state.shadowsArray;ze.render(V,y,I),R===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,z=_.transmissive;if(p.setupLights(),I.isArrayCamera){const fe=I.cameras;if(z.length>0)for(let Me=0,be=fe.length;Me<be;Me++){const Te=fe[Me];vi(Y,z,y,Te)}ye&&de.render(y);for(let Me=0,be=fe.length;Me<be;Me++){const Te=fe[Me];Zn(_,y,Te,Te.viewport)}}else z.length>0&&vi(Y,z,y,I),ye&&de.render(y),Zn(_,y,I);T!==null&&(Ee.updateMultisampleRenderTarget(T),Ee.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(S,y,I),We.resetDefaultState(),B=-1,b=null,E.pop(),E.length>0?(p=E[E.length-1],R===!0&&he.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function rn(y,I,V,Y){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){Y&&Q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);const Me=ee.update(y),be=y.material;be.visible&&_.push(y,Me,be,V,Q.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const Me=ee.update(y),be=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Q.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Q.copy(Me.boundingSphere.center)),Q.applyMatrix4(y.matrixWorld).applyMatrix4(se)),Array.isArray(be)){const Te=Me.groups;for(let Be=0,ke=Te.length;Be<ke;Be++){const Fe=Te[Be],it=be[Fe.materialIndex];it&&it.visible&&_.push(y,Me,it,V,Q.z,Fe)}}else be.visible&&_.push(y,Me,be,V,Q.z,null)}}const fe=y.children;for(let Me=0,be=fe.length;Me<be;Me++)rn(fe[Me],I,V,Y)}function Zn(y,I,V,Y){const z=y.opaque,fe=y.transmissive,Me=y.transparent;p.setupLightsView(V),R===!0&&he.setGlobalState(S.clippingPlanes,V),Y&&j.viewport(M.copy(Y)),z.length>0&&_i(z,I,V),fe.length>0&&_i(fe,I,V),Me.length>0&&_i(Me,I,V),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function vi(y,I,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Xn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Xr:fi,minFilter:Di,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Y.id],Me=Y.viewport||M;fe.setSize(Me.z,Me.w);const be=S.getRenderTarget();S.setRenderTarget(fe),S.getClearColor(O),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),ye?de.render(V):S.clear();const Te=S.toneMapping;S.toneMapping=di;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),R===!0&&he.setGlobalState(S.clippingPlanes,Y),_i(y,V,Y),Ee.updateMultisampleRenderTarget(fe),Ee.updateRenderTargetMipmap(fe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Fe=0,it=I.length;Fe<it;Fe++){const mt=I[Fe],gt=mt.object,an=mt.geometry,at=mt.material,De=mt.group;if(at.side===Qt&&gt.layers.test(Y.layers)){const Wt=at.side;at.side=tn,at.needsUpdate=!0,ws(gt,V,Y,an,at,De),at.side=Wt,at.needsUpdate=!0,ke=!0}}ke===!0&&(Ee.updateMultisampleRenderTarget(fe),Ee.updateRenderTargetMipmap(fe))}S.setRenderTarget(be),S.setClearColor(O,$),Be!==void 0&&(Y.viewport=Be),S.toneMapping=Te}function _i(y,I,V){const Y=I.isScene===!0?I.overrideMaterial:null;for(let z=0,fe=y.length;z<fe;z++){const Me=y[z],be=Me.object,Te=Me.geometry,Be=Y===null?Me.material:Y,ke=Me.group;be.layers.test(V.layers)&&ws(be,I,V,Te,Be,ke)}}function ws(y,I,V,Y,z,fe){y.onBeforeRender(S,I,V,Y,z,fe),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(S,I,V,Y,y,fe),z.transparent===!0&&z.side===Qt&&z.forceSinglePass===!1?(z.side=tn,z.needsUpdate=!0,S.renderBufferDirect(V,I,Y,z,y,fe),z.side=hi,z.needsUpdate=!0,S.renderBufferDirect(V,I,Y,z,y,fe),z.side=Qt):S.renderBufferDirect(V,I,Y,z,y,fe),y.onAfterRender(S,I,V,Y,z,fe)}function Zr(y,I,V){I.isScene!==!0&&(I=Le);const Y=Se.get(y),z=p.state.lights,fe=p.state.shadowsArray,Me=z.state.version,be=te.getParameters(y,z.state,fe,I,V),Te=te.getProgramCacheKey(be);let Be=Y.programs;Y.environment=y.isMeshStandardMaterial?I.environment:null,Y.fog=I.fog,Y.envMap=(y.isMeshStandardMaterial?A:Ke).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",le),Be=new Map,Y.programs=Be);let ke=Be.get(Te);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===Me)return Ts(y,be),ke}else be.uniforms=te.getUniforms(y),y.onBuild(V,be,S),y.onBeforeCompile(be,S),ke=te.acquireProgram(be,Te),Be.set(Te,ke),Y.uniforms=be.uniforms;const Fe=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=he.uniform),Ts(y,be),Y.needsLights=ku(y),Y.lightsStateVersion=Me,Y.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function As(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Ca.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ts(y,I){const V=Se.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Bu(y,I,V,Y,z){I.isScene!==!0&&(I=Le),Ee.resetTextureUnits();const fe=I.fog,Me=Y.isMeshStandardMaterial?I.environment:null,be=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:gi,Te=(Y.isMeshStandardMaterial?A:Ke).get(Y.envMap||Me),Be=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color;let gt=di;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=S.toneMapping);const an=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=an!==void 0?an.length:0,De=Se.get(Y),Wt=p.state.lights;if(R===!0&&(X===!0||y!==b)){const dn=y===b&&Y.id===B;he.setState(Y,y,dn)}let st=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Wt.state.version||De.outputColorSpace!==be||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Te||Y.fog===!0&&De.fog!==fe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==ke||De.morphTargets!==Fe||De.morphNormals!==it||De.morphColors!==mt||De.toneMapping!==gt||De.morphTargetsCount!==at)&&(st=!0):(st=!0,De.__version=Y.version);let Un=De.currentProgram;st===!0&&(Un=Zr(Y,I,z));let Kr=!1,xi=!1,to=!1;const Lt=Un.getUniforms(),Kn=De.uniforms;if(j.useProgram(Un.program)&&(Kr=!0,xi=!0,to=!0),Y.id!==B&&(B=Y.id,xi=!0),Kr||b!==y){Lt.setValue(D,"projectionMatrix",y.projectionMatrix),Lt.setValue(D,"viewMatrix",y.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(D,Q.setFromMatrixPosition(y.matrixWorld)),ae.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,xi=!0,to=!0)}if(z.isSkinnedMesh){Lt.setOptional(D,z,"bindMatrix"),Lt.setOptional(D,z,"bindMatrixInverse");const dn=z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(D,"boneTexture",dn.boneTexture,Ee))}z.isBatchedMesh&&(Lt.setOptional(D,z,"batchingTexture"),Lt.setValue(D,"batchingTexture",z._matricesTexture,Ee),Lt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",z._colorsTexture,Ee));const no=V.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&Ae.update(z,V,Un),(xi||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,Lt.setValue(D,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Kn.envMap.value=Te,Kn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&I.environment!==null&&(Kn.envMapIntensity.value=I.environmentIntensity),xi&&(Lt.setValue(D,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&zu(Kn,to),fe&&Y.fog===!0&&ne.refreshFogUniforms(Kn,fe),ne.refreshMaterialUniforms(Kn,Y,ie,W,p.state.transmissionRenderTarget[y.id]),Ca.upload(D,As(De),Kn,Ee)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ca.upload(D,As(De),Kn,Ee),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(D,"center",z.center),Lt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Lt.setValue(D,"normalMatrix",z.normalMatrix),Lt.setValue(D,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const dn=Y.uniformsGroups;for(let io=0,Hu=dn.length;io<Hu;io++){const Cs=dn[io];Xe.update(Cs,Un),Xe.bind(Cs,Un)}}return Un}function zu(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function ku(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,I,V){Se.get(y.texture).__webglTexture=I,Se.get(y.depthTexture).__webglTexture=V;const Y=Se.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const V=Se.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,V=0){T=y,L=I,C=V;let Y=!0,z=null,fe=!1,Me=!1;if(y){const Te=Se.get(y);Te.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1):Te.__webglFramebuffer===void 0?Ee.setupRenderTarget(y):Te.__hasExternalTextures&&Ee.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);const Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const ke=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?z=ke[I][V]:z=ke[I],fe=!0):y.samples>0&&Ee.useMultisampledRTT(y)===!1?z=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[V]:z=ke,M.copy(y.viewport),P.copy(y.scissor),U=y.scissorTest}else M.copy(me).multiplyScalar(ie).floor(),P.copy(ge).multiplyScalar(ie).floor(),U=Ie;if(j.bindFramebuffer(D.FRAMEBUFFER,z)&&Y&&j.drawBuffers(y,z),j.viewport(M),j.scissor(P),j.setScissorTest(U),fe){const Te=Se.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,V)}else if(Me){const Te=Se.get(y.texture),Be=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,Be)}B=-1},this.readRenderTargetPixels=function(y,I,V,Y,z,fe,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){j.bindFramebuffer(D.FRAMEBUFFER,be);try{const Te=y.texture,Be=Te.format,ke=Te.type;if(!ae.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-Y&&V>=0&&V<=y.height-z&&D.readPixels(I,V,Y,z,_e.convert(Be),_e.convert(ke),fe)}finally{const Te=T!==null?Se.get(T).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,Y,z,fe,Me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){j.bindFramebuffer(D.FRAMEBUFFER,be);try{const Te=y.texture,Be=Te.format,ke=Te.type;if(!ae.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-Y&&V>=0&&V<=y.height-z){const Fe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Fe),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(I,V,Y,z,_e.convert(Be),_e.convert(ke),0),D.flush();const it=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await lh(D,it,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Fe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe)}finally{D.deleteBuffer(Fe),D.deleteSync(it)}return fe}}finally{const Te=T!==null?Se.get(T).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(y,I=null,V=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-V),z=Math.floor(y.image.width*Y),fe=Math.floor(y.image.height*Y),Me=I!==null?I.x:0,be=I!==null?I.y:0;Ee.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Me,be,z,fe),j.unbindTexture()},this.copyTextureToTexture=function(y,I,V=null,Y=null,z=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],I=arguments[2],z=arguments[3]||0,V=null);let fe,Me,be,Te,Be,ke;V!==null?(fe=V.max.x-V.min.x,Me=V.max.y-V.min.y,be=V.min.x,Te=V.min.y):(fe=y.image.width,Me=y.image.height,be=0,Te=0),Y!==null?(Be=Y.x,ke=Y.y):(Be=0,ke=0);const Fe=_e.convert(I.format),it=_e.convert(I.type);Ee.setTexture2D(I,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const mt=D.getParameter(D.UNPACK_ROW_LENGTH),gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),at=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES),Wt=y.isCompressedTexture?y.mipmaps[z]:y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Be,ke,fe,Me,Fe,it,Wt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Be,ke,Wt.width,Wt.height,Fe,Wt.data):D.texSubImage2D(D.TEXTURE_2D,z,Be,ke,Fe,it,Wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),z===0&&I.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(y,I,V=null,Y=null,z=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],I=arguments[3],z=arguments[4]||0);let fe,Me,be,Te,Be,ke,Fe,it,mt;const gt=y.isCompressedTexture?y.mipmaps[z]:y.image;V!==null?(fe=V.max.x-V.min.x,Me=V.max.y-V.min.y,be=V.max.z-V.min.z,Te=V.min.x,Be=V.min.y,ke=V.min.z):(fe=gt.width,Me=gt.height,be=gt.depth,Te=0,Be=0,ke=0),Y!==null?(Fe=Y.x,it=Y.y,mt=Y.z):(Fe=0,it=0,mt=0);const an=_e.convert(I.format),at=_e.convert(I.type);let De;if(I.isData3DTexture)Ee.setTexture3D(I,0),De=D.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ee.setTexture2DArray(I,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Wt=D.getParameter(D.UNPACK_ROW_LENGTH),st=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=D.getParameter(D.UNPACK_SKIP_PIXELS),Kr=D.getParameter(D.UNPACK_SKIP_ROWS),xi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke),y.isDataTexture||y.isData3DTexture?D.texSubImage3D(De,z,Fe,it,mt,fe,Me,be,an,at,gt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(De,z,Fe,it,mt,fe,Me,be,an,gt.data):D.texSubImage3D(De,z,Fe,it,mt,fe,Me,be,an,at,gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xi),z===0&&I.generateMipmaps&&D.generateMipmap(De),j.unbindTexture()},this.initRenderTarget=function(y){Se.get(y).__webglFramebuffer===void 0&&Ee.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ee.setTextureCube(y,0):y.isData3DTexture?Ee.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ee.setTexture2DArray(y,0):Ee.setTexture2D(y,0),j.unbindTexture()},this.resetState=function(){L=0,C=0,T=null,j.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ss?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ya?"display-p3":"srgb"}}class ds{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new ds(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jo extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class v0 extends Vt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=en,d=en,h,f){super(null,o,s,c,l,d,r,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai extends Ue{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class _0 extends Tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ba=new N,za=new N,Zl=new vt,Ir=new qr,xa=new Yr,No=new N,Kl=new N;class x0 extends $t{constructor(e=new Ot,t=new _0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ba.fromBufferAttribute(t,r-1),za.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ba.distanceTo(za);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),xa.radius+=a,e.ray.intersectsSphere(xa)===!1)return;Zl.copy(r).invert(),Ir.copy(e.ray).applyMatrix4(Zl);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){const u=d.getX(_),E=d.getX(_+1),S=Sa(this,e,Ir,c,u,E);S&&t.push(S)}if(this.isLineLoop){const _=d.getX(g-1),p=d.getX(m),u=Sa(this,e,Ir,c,_,p);u&&t.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){const u=Sa(this,e,Ir,c,_,_+1);u&&t.push(u)}if(this.isLineLoop){const _=Sa(this,e,Ir,c,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Sa(i,e,t,n,r,a){const o=i.geometry.attributes.position;if(Ba.fromBufferAttribute(o,r),za.fromBufferAttribute(o,a),t.distanceSqToSegment(Ba,za,No,Kl)>n)return;No.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(No);if(!(c<e.near||c>e.far))return{distance:c,point:Kl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const jl=new N,Jl=new N;class au extends x0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)jl.fromBufferAttribute(t,r),Jl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+jl.distanceTo(Jl);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class S0 extends Tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ql=new vt,Qo=new qr,Ma=new Yr,ya=new N;class hs extends $t{constructor(e=new Ot,t=new S0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=a,e.ray.intersectsSphere(Ma)===!1)return;Ql.copy(r).invert(),Qo.copy(e.ray).applyMatrix4(Ql);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=l.getX(g);ya.fromBufferAttribute(h,p),ec(ya,p,c,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,_=m;g<_;g++)ya.fromBufferAttribute(h,g),ec(ya,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function ec(i,e,t,n,r,a,o){const s=Qo.distanceSqToPoint(i);if(s<t){const c=new N;Qo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:o})}}class ou extends Vt{constructor(e,t,n,r,a,o,s,c,l){super(e,t,n,r,a,o,s,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends Ot{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+s,Math.PI);let l=0;const d=[],h=new N,f=new N,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const E=[],S=u/n;let w=0;u===0&&o===0?w=.5/t:u===n&&c===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){const C=L/t;h.x=-e*Math.cos(r+C*a)*Math.sin(o+S*s),h.y=e*Math.cos(o+S*s),h.z=e*Math.sin(r+C*a)*Math.sin(o+S*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(C+w,1-S),E.push(l++)}d.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){const S=d[u][E+1],w=d[u][E],L=d[u+1][E],C=d[u+1][E+1];(u!==0||o>0)&&m.push(S,w,C),(u!==n-1||c<Math.PI)&&m.push(w,L,C)}this.setIndex(m),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class M0 extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class y0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tc(){return(typeof performance>"u"?Date:performance).now()}const nc=new vt;class E0{constructor(e,t,n=0,r=1/0){this.ray=new qr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nc),this}intersectObject(e,t=!0,n=[]){return es(e,this,n,t),n.sort(ic),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)es(e[r],this,n,t);return n.sort(ic),n}}function ic(i,e){return i.distance-e.distance}function es(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let o=0,s=a.length;o<s;o++)es(a[o],e,t,!0)}}class rc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"165"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="165");const ac={type:"change"},Oo={type:"start"},oc={type:"end"},Ea=new qr,sc=new Tn,b0=Math.cos(70*pi.DEG2RAD);class w0 extends Bi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",he),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ac),n.update(),a=r.NONE},this.update=(function(){const v=new N,Z=new Fi().setFromUnitVectors(e.up,new N(0,1,0)),H=Z.clone().invert(),J=new N,le=new Fi,Re=new N,Ve=2*Math.PI;return function(St=null){const nt=n.object.position;v.copy(nt).sub(n.target),v.applyQuaternion(Z),s.setFromVector3(v),n.autoRotate&&a===r.NONE&&U(M(St)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Mt=n.minAzimuthAngle,yt=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(yt)&&(Mt<-Math.PI?Mt+=Ve:Mt>Math.PI&&(Mt-=Ve),yt<-Math.PI?yt+=Ve:yt>Math.PI&&(yt-=Ve),Mt<=yt?s.theta=Math.max(Mt,Math.min(yt,s.theta)):s.theta=s.theta>(Mt+yt)/2?Math.max(Mt,s.theta):Math.min(yt,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let nn=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)s.radius=me(s.radius);else{const rn=s.radius;s.radius=me(s.radius*l),nn=rn!=s.radius}if(v.setFromSpherical(s),v.applyQuaternion(H),nt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&C){let rn=null;if(n.object.isPerspectiveCamera){const Zn=v.length();rn=me(Zn*l);const vi=Zn-rn;n.object.position.addScaledVector(w,vi),n.object.updateMatrixWorld(),nn=!!vi}else if(n.object.isOrthographicCamera){const Zn=new N(L.x,L.y,0);Zn.unproject(n.object);const vi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),nn=vi!==n.object.zoom;const _i=new N(L.x,L.y,0);_i.unproject(n.object),n.object.position.sub(_i).add(Zn),n.object.updateMatrixWorld(),rn=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;rn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(rn).add(n.object.position):(Ea.origin.copy(n.object.position),Ea.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ea.direction))<b0?e.lookAt(n.target):(sc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ea.intersectPlane(sc,n.target))))}else if(n.object.isOrthographicCamera){const rn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),rn!==n.object.zoom&&(n.object.updateProjectionMatrix(),nn=!0)}return l=1,C=!1,nn||J.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o||Re.distanceToSquared(n.target)>o?(n.dispatchEvent(ac),J.copy(n.object.position),le.copy(n.object.quaternion),Re.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ae),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",we,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",he),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new rc,c=new rc;let l=1;const d=new N,h=new He,f=new He,m=new He,g=new He,_=new He,p=new He,u=new He,E=new He,S=new He,w=new N,L=new He;let C=!1;const T=[],B={};let b=!1;function M(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function P(v){const Z=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*Z)}function U(v){c.theta-=v}function O(v){c.phi-=v}const $=(function(){const v=new N;return function(H,J){v.setFromMatrixColumn(J,0),v.multiplyScalar(-H),d.add(v)}})(),K=(function(){const v=new N;return function(H,J){n.screenSpacePanning===!0?v.setFromMatrixColumn(J,1):(v.setFromMatrixColumn(J,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(H),d.add(v)}})(),W=(function(){const v=new N;return function(H,J){const le=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;v.copy(Re).sub(n.target);let Ve=v.length();Ve*=Math.tan(n.object.fov/2*Math.PI/180),$(2*H*Ve/le.clientHeight,n.object.matrix),K(2*J*Ve/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(H*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),K(J*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ie(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(v,Z){if(!n.zoomToCursor)return;C=!0;const H=n.domElement.getBoundingClientRect(),J=v-H.left,le=Z-H.top,Re=H.width,Ve=H.height;L.x=J/Re*2-1,L.y=-(le/Ve)*2+1,w.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function me(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function ge(v){h.set(v.clientX,v.clientY)}function Ie(v){ce(v.clientX,v.clientX),u.set(v.clientX,v.clientY)}function q(v){g.set(v.clientX,v.clientY)}function R(v){f.set(v.clientX,v.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;U(2*Math.PI*m.x/Z.clientHeight),O(2*Math.PI*m.y/Z.clientHeight),h.copy(f),n.update()}function X(v){E.set(v.clientX,v.clientY),S.subVectors(E,u),S.y>0?ie(P(S.y)):S.y<0&&k(P(S.y)),u.copy(E),n.update()}function se(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_),n.update()}function Q(v){ce(v.clientX,v.clientY),v.deltaY<0?k(P(v.deltaY)):v.deltaY>0&&ie(P(v.deltaY)),n.update()}function Le(v){let Z=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),Z=!0;break}Z&&(v.preventDefault(),n.update())}function ye(v){if(T.length===1)h.set(v.pageX,v.pageY);else{const Z=Xe(v),H=.5*(v.pageX+Z.x),J=.5*(v.pageY+Z.y);h.set(H,J)}}function Ne(v){if(T.length===1)g.set(v.pageX,v.pageY);else{const Z=Xe(v),H=.5*(v.pageX+Z.x),J=.5*(v.pageY+Z.y);g.set(H,J)}}function D(v){const Z=Xe(v),H=v.pageX-Z.x,J=v.pageY-Z.y,le=Math.sqrt(H*H+J*J);u.set(0,le)}function $e(v){n.enableZoom&&D(v),n.enablePan&&Ne(v)}function Ze(v){n.enableZoom&&D(v),n.enableRotate&&ye(v)}function ae(v){if(T.length==1)f.set(v.pageX,v.pageY);else{const H=Xe(v),J=.5*(v.pageX+H.x),le=.5*(v.pageY+H.y);f.set(J,le)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;U(2*Math.PI*m.x/Z.clientHeight),O(2*Math.PI*m.y/Z.clientHeight),h.copy(f)}function j(v){if(T.length===1)_.set(v.pageX,v.pageY);else{const Z=Xe(v),H=.5*(v.pageX+Z.x),J=.5*(v.pageY+Z.y);_.set(H,J)}p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_)}function xe(v){const Z=Xe(v),H=v.pageX-Z.x,J=v.pageY-Z.y,le=Math.sqrt(H*H+J*J);E.set(0,le),S.set(0,Math.pow(E.y/u.y,n.zoomSpeed)),ie(S.y),u.copy(E);const Re=(v.pageX+Z.x)*.5,Ve=(v.pageY+Z.y)*.5;ce(Re,Ve)}function Se(v){n.enableZoom&&xe(v),n.enablePan&&j(v)}function Ee(v){n.enableZoom&&xe(v),n.enableRotate&&ae(v)}function Ke(v){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",x)),!_e(v)&&(Je(v),v.pointerType==="touch"?ze(v):F(v)))}function A(v){n.enabled!==!1&&(v.pointerType==="touch"?de(v):ee(v))}function x(v){switch(Oe(v),T.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(oc),a=r.NONE;break;case 1:const Z=T[0],H=B[Z];ze({pointerId:Z,pageX:H.x,pageY:H.y});break}}function F(v){let Z;switch(v.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Hi.DOLLY:if(n.enableZoom===!1)return;Ie(v),a=r.DOLLY;break;case Hi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;q(v),a=r.PAN}else{if(n.enableRotate===!1)return;ge(v),a=r.ROTATE}break;case Hi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;ge(v),a=r.ROTATE}else{if(n.enablePan===!1)return;q(v),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Oo)}function ee(v){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;R(v);break;case r.DOLLY:if(n.enableZoom===!1)return;X(v);break;case r.PAN:if(n.enablePan===!1)return;se(v);break}}function te(v){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(v.preventDefault(),n.dispatchEvent(Oo),Q(ne(v)),n.dispatchEvent(oc))}function ne(v){const Z=v.deltaMode,H={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(Z){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return v.ctrlKey&&!b&&(H.deltaY*=10),H}function we(v){v.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(v){v.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function he(v){n.enabled===!1||n.enablePan===!1||Le(v)}function ze(v){switch(We(v),T.length){case 1:switch(n.touches.ONE){case Gi.ROTATE:if(n.enableRotate===!1)return;ye(v),a=r.TOUCH_ROTATE;break;case Gi.PAN:if(n.enablePan===!1)return;Ne(v),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$e(v),a=r.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(v),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Oo)}function de(v){switch(We(v),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ae(v),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;j(v),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(v),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(v),n.update();break;default:a=r.NONE}}function Ae(v){n.enabled!==!1&&v.preventDefault()}function Je(v){T.push(v.pointerId)}function Oe(v){delete B[v.pointerId];for(let Z=0;Z<T.length;Z++)if(T[Z]==v.pointerId){T.splice(Z,1);return}}function _e(v){for(let Z=0;Z<T.length;Z++)if(T[Z]==v.pointerId)return!0;return!1}function We(v){let Z=B[v.pointerId];Z===void 0&&(Z=new He,B[v.pointerId]=Z),Z.set(v.pageX,v.pageY)}function Xe(v){const Z=v.pointerId===T[0]?T[1]:T[0];return B[Z]}n.domElement.addEventListener("contextmenu",Ae),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",te,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",we,{passive:!0,capture:!0}),this.update()}}function A0(){const i=navigator.userAgent||"";let e="";try{e=document.referrer?new URL(document.referrer).hostname:""}catch{e=""}const t=/Twitter(?:Android| for iPhone)?|com\.twitter|X\.com/i.test(i),n=/(^|\.)(?:x\.com|twitter\.com|t\.co)$/i.test(e);return t||n}const su=A0(),T0=new URLSearchParams(window.location.search).get("lang");var wc;const C0=T0||(su?"en":((wc=navigator.languages)==null?void 0:wc[0])||navigator.language||"en"),Gr=/^zh(?:-|$)/i.test(C0)?"zh-CN":"en",lc={"zh-CN":{documentTitle:"Rainform · 数据成雨",description:"Rainform「数据成雨」将 24 小时逐时降雨数据转化为可交互的实时粒子雨景。拖动降雨曲线，观察雨幕随数据重塑。",socialDescription:"Rainform「数据成雨」：拖动 24 小时降雨曲线，实时重塑由 Three.js 与 WebGL 驱动的粒子雨幕。",socialImageAlt:"Rainform 数据成雨生成的液态金属粒子雨幕",dashboardAria:"Rainform 数据成雨交互式粒子雨幕",sceneAria:"可交互的珍珠雨幕数据图",canvasAria:"可交互的珍珠雨幕降雨强度图",toolbarAria:"图表工具",editorToggle:"编辑降雨数据",soundEnable:"开启雨声",soundDisable:"关闭雨声",soundUnavailable:"当前浏览器不支持雨声音频",editorTitle:"编辑降雨数据",editorDescription:"拖动折线节点即可实时预览，松手后自动保存；也可以展开数字输入进行精确编辑。",editorCloseAria:"关闭降雨数据编辑器",close:"关闭",curveTitle:"逐时降雨曲线",liveSave:"实时保存",chartAria:"可拖拽降雨折线图",chartSvgAria:"00:00 至 24:00 降雨量折线，可上下拖动各小时节点",chartHint:"上下拖动节点调整雨量 · 方向键微调 · Shift + 方向键快速调整",preciseTitle:"精确输入 25 个时间点",preciseUnit:"单位：mm/h",inputGridAria:"00:00 至 24:00 的逐时降雨量",restoreDefault:"恢复默认",applyPrecise:"应用精确数据",axisTitle:"降雨强度",axisSubtitle:"每小时降水",axisUnit:"毫米/小时",rotateTitle:"请旋转至横屏",rotateDescription:"旋转手机以完整体验 Rainform 数据成雨",rotateSoundSuggestion:"建议开启声音",rotateDesktopSuggestion:"电脑端体验更佳",rotateBrowserSuggestion:"如果当前页面无法旋转，请轻点“⋮”并选择“在浏览器中打开”",rainfallInputAria:({time:i})=>`${i} 降雨量，毫米每小时`,chartPointAria:({time:i})=>`${i} 降雨量`,rainfallValueText:({value:i})=>`${i} 毫米每小时`,savedHour:({time:i})=>`已保存 ${i} 的降雨量。`,savedValue:({time:i,value:e})=>`已保存 ${i} · ${e} mm/h`,editorReady:"拖动节点会实时更新雨幕，松手后自动保存。",emptyRainfall:"请输入降雨量",invalidRainfall:"请输入大于或等于 0 的有限数字",invalidCount:({count:i})=>`有 ${i} 个时间点需要修正，已定位到第一处。`,applying:"正在重建降雨效果…",applied:({count:i,maximum:e})=>`已应用并保存 ${i} 个时间点，当前最大值 ${e} mm/h。`,applyFailed:"应用降雨数据失败",restored:"已恢复并应用内置默认降雨数据。",dataLengthError:({count:i})=>`降雨数据必须包含 ${i} 个时间点`,dataValueError:"降雨量必须是大于或等于 0 的有限数字",webglTitle:"无法显示实时雨景",webglUnavailable:"此设备或浏览器无法创建 WebGL2 图形环境。请升级浏览器，或确认硬件加速已开启。",webglInterrupted:"图形环境暂时中断，正在等待浏览器恢复。"},en:{documentTitle:"Rainform · Data into Rain",description:"Rainform turns 24 hours of hourly rainfall data into an interactive real-time particle landscape. Drag the rainfall curve to reshape the rain curtain.",socialDescription:"Rainform turns a 24-hour rainfall curve into a real-time particle landscape powered by Three.js and WebGL.",socialImageAlt:"Rainform liquid-metal particle rain generated from 24 hours of rainfall data",dashboardAria:"Rainform interactive rainfall particle landscape",sceneAria:"Interactive particle-based rainfall chart",canvasAria:"Interactive particle-based rainfall intensity chart",toolbarAria:"Chart tools",editorToggle:"Edit rainfall data",soundEnable:"Turn rain sound on",soundDisable:"Turn rain sound off",soundUnavailable:"Rain audio is not supported by this browser",editorTitle:"Edit rainfall data",editorDescription:"Drag a point for a live preview; changes save when released. Expand the fields below for precise input.",editorCloseAria:"Close rainfall data editor",close:"Close",curveTitle:"Hourly rainfall curve",liveSave:"Live save",chartAria:"Draggable rainfall line chart",chartSvgAria:"Rainfall from 00:00 to 24:00; drag each hourly point vertically to adjust it",chartHint:"Drag points vertically · Arrow keys for fine control · Shift + arrow keys for larger steps",preciseTitle:"Enter all 25 data points",preciseUnit:"Unit: mm/h",inputGridAria:"Hourly rainfall from 00:00 to 24:00",restoreDefault:"Restore defaults",applyPrecise:"Apply precise data",axisTitle:"Rainfall intensity",axisSubtitle:"Hourly rainfall",axisUnit:"mm/h",rotateTitle:"Rotate to landscape",rotateDescription:"Turn your phone sideways for the complete Rainform experience",rotateSoundSuggestion:"Sound on recommended",rotateDesktopSuggestion:"Best experienced on desktop",rotateBrowserSuggestion:"If this page cannot rotate, tap “⋮” and choose “Open in Browser”",rainfallInputAria:({time:i})=>`${i} rainfall, millimeters per hour`,chartPointAria:({time:i})=>`${i} rainfall`,rainfallValueText:({value:i})=>`${i} millimeters per hour`,savedHour:({time:i})=>`Saved rainfall at ${i}.`,savedValue:({time:i,value:e})=>`Saved ${i} · ${e} mm/h`,editorReady:"Dragging a point updates the rain live; releasing it saves the change.",emptyRainfall:"Enter a rainfall value",invalidRainfall:"Enter a finite number greater than or equal to 0",invalidCount:({count:i})=>`${i} data point${i===1?"":"s"} need correction. The first has been selected.`,applying:"Rebuilding the rainfall effect…",applied:({count:i,maximum:e})=>`Applied and saved ${i} data points. Current maximum: ${e} mm/h.`,applyFailed:"Failed to apply rainfall data",restored:"Restored and applied the built-in rainfall data.",dataLengthError:({count:i})=>`Rainfall data must contain ${i} data points`,dataValueError:"Rainfall must be a finite number greater than or equal to 0",webglTitle:"Unable to display the live rain scene",webglUnavailable:"This device or browser could not create a WebGL2 graphics context. Update the browser or make sure hardware acceleration is enabled.",webglInterrupted:"The graphics context was interrupted. Waiting for the browser to restore it."}};function je(i,e={}){const t=lc[Gr][i]??lc.en[i]??i;return typeof t=="function"?t(e):t}function R0(){var i,e,t,n,r,a,o;document.documentElement.lang=Gr,document.title=je("documentTitle"),(i=document.querySelector('meta[name="description"]'))==null||i.setAttribute("content",je("description")),(e=document.querySelector('meta[property="og:locale"]'))==null||e.setAttribute("content",Gr==="zh-CN"?"zh_CN":"en_US"),(t=document.querySelector('meta[property="og:title"]'))==null||t.setAttribute("content",je("documentTitle")),(n=document.querySelector('meta[property="og:description"]'))==null||n.setAttribute("content",je("socialDescription")),(r=document.querySelector('meta[property="og:image:alt"]'))==null||r.setAttribute("content",je("socialImageAlt")),(a=document.querySelector('meta[name="twitter:title"]'))==null||a.setAttribute("content",je("documentTitle")),(o=document.querySelector('meta[name="twitter:description"]'))==null||o.setAttribute("content",je("socialDescription")),document.querySelectorAll("[data-i18n]").forEach(s=>{s.textContent=je(s.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria-label]").forEach(s=>{s.setAttribute("aria-label",je(s.dataset.i18nAriaLabel))}),document.querySelectorAll("[data-i18n-title]").forEach(s=>{s.setAttribute("title",je(s.dataset.i18nTitle))})}R0();const re=document.querySelector("#scene-root"),zi=document.querySelector(".rainfall-dashboard"),P0=document.querySelector("#scene-toolbar"),lu=document.querySelector("#selection-readout"),D0=lu.querySelector(".readout-time"),L0=lu.querySelector(".readout-value"),Nr=document.querySelector("#rainfall-editor-toggle"),En=document.querySelector("#rain-sound-toggle"),jt=document.querySelector("#rainfall-editor"),cc=document.querySelector("#rainfall-data-form"),uc=document.querySelector("#rainfall-input-grid"),ii=document.querySelector("#rainfall-editor-status"),bn=document.querySelector("#rainfall-editor-errors"),wn=document.querySelector("#rainfall-line-chart"),dc=document.querySelector("#rainfall-chart-time"),hc=document.querySelector("#rainfall-chart-value"),fc=document.querySelector("#rainfall-precise-editor");re.dataset.locale=Gr;re.dataset.launchContext=su?"x-embedded":"standard";function cu(i){let e=re.querySelector(".webgl-fallback");if(!e){e=document.createElement("section"),e.className="webgl-fallback",e.setAttribute("role","status"),e.setAttribute("aria-live","polite");const t=document.createElement("strong"),n=document.createElement("span");t.textContent=je("webglTitle"),e.append(t,n),re.appendChild(e)}e.querySelector("span").textContent=i,e.hidden=!1}function U0(){const i=re.querySelector(".webgl-fallback");i&&(i.hidden=!0)}const oi=Object.freeze([0.1,0.2,0.1,0,0.3,0.5,0.8,0.6,0.4,0.2,0.1,0,0.1,0.3,0.5,0.7,0.9,0.6,0.4,0.2,0.1,0,0.1,0.2,0.1]);let xt=[...oi],Zt=Math.max(...xt),Ii=0.1,gn=[],ps=Ii,cn=0;const ts=0.1,ka=5,et=-.14,ns=1831565813,Dn=795749149,pc=1403592059,mc=835170137,F0=2051879369,I0=1284468263,$a=!1,_t={BASE:0,AMBIENT:1,DOWNPOUR:2},mi={width:22.5,depth:10.4,frontZ:4.9},kr={center:.2,thickness:.85,jitter:.22},qt=window.__rainAudioBoot,N0=Math.min(window.innerWidth,window.innerHeight),O0=Math.max(window.innerWidth,window.innerHeight),B0=window.matchMedia("(pointer: coarse)").matches||N0<=500&&O0<=1e3;var Ac;const Pe={enabled:((Ac=qt==null?void 0:qt.context)==null?void 0:Ac.state)==="running"||B0,started:!1,context:(qt==null?void 0:qt.context)??null,gain:(qt==null?void 0:qt.gain)??null,buffer:(qt==null?void 0:qt.buffer)??null,preloadPromise:null,source:null,intentToken:0,sourceToken:0,contextObserved:!1},gc=1,z0=4.8,k0=1.8;function H0(){if(Zt<=0)return 0;const i=xt.reduce((n,r)=>n+r,0)/xt.length,e=Ge(i/ka,0,1),t=Ge(Zt/ka,0,1);return Ge(e*.76+t*.24,0,1)}function Mr(){const i=H0();re.dataset.rainSoundStrength=i.toFixed(3);const e=i>0?.18+Math.pow(i,.62)*.4:0;return Ge(e*z0,0,k0)}function uu(){if(!Pe.context){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t;try{t=new e({latencyHint:"interactive"})}catch{t=new e}const n=t.createGain();n.gain.value=0,n.connect(t.destination),Pe.context=t,Pe.gain=n}const{context:i}=Pe;return Pe.contextObserved||(Pe.contextObserved=!0,re.dataset.rainSoundEngine="web-audio-buffer-loop",re.dataset.rainSoundContext=i.state,re.dataset.rainSoundBaseLatency=Number.isFinite(i.baseLatency)?i.baseLatency.toFixed(4):"unknown",i.addEventListener("statechange",()=>{re.dataset.rainSoundContext=i.state,i.state==="running"&&Pe.enabled&&Pe.source&&(re.dataset.rainSoundAutoplay="playing")})),i}function Gn(i){const{context:e,gain:t}=Pe;if(!e||!t)return;const n=e.currentTime;t.gain.cancelScheduledValues(n),t.gain.value=i,t.gain.setValueAtTime(i,n),re.dataset.rainSoundGain=i.toFixed(3)}function G0(){const i=Pe.enabled?Mr():0;Gn(i)}function Za(){if(!En)return;const i=je(Pe.enabled?"soundDisable":"soundEnable");En.setAttribute("aria-pressed",String(Pe.enabled)),En.setAttribute("aria-label",i),En.setAttribute("title",i),re.dataset.rainSound=Pe.enabled?"on":"off"}function du(){const i=uu();return i?Pe.buffer?Promise.resolve(vc(Pe.buffer)):(Pe.preloadPromise||(Pe.preloadPromise=fetch("").then(e=>{if(!e.ok)throw new Error(`Rain audio request failed: ${e.status}`);return e.arrayBuffer()}).then(e=>i.decodeAudioData(e)).then(vc).catch(e=>{throw Pe.preloadPromise=null,e})),Pe.preloadPromise):Promise.reject(new Error("Web Audio is not supported"))}function vc(i){return Pe.buffer=i,re.dataset.rainSoundDuration=i.duration.toFixed(3),re.dataset.rainSoundLoop="seamless-buffer",re.dataset.rainSoundLoaded="true",hu(i),i}function hu(i=Pe.buffer){if(Pe.source||!i||!Pe.context||!Pe.gain)return Pe.source;const e=Pe.context.createBufferSource(),t=++Pe.sourceToken;e.buffer=i,e.loop=!0,e.playbackRate.value=gc,e.connect(Pe.gain),e.onended=()=>{t===Pe.sourceToken&&(Pe.source=null)},e.start(),Pe.source=e,Pe.started=!0,re.dataset.rainSoundStarted="true",re.dataset.rainSoundPlaybackRate=gc.toFixed(1);const n=Pe.enabled&&Pe.context.state==="running";return Gn(n?Mr():0),re.dataset.rainSoundAutoplay=n?"playing":"waiting-for-gesture",e}function V0(){const i=Pe.source;i&&(Pe.source=null,++Pe.sourceToken,i.onended=null,i.stop())}function fu(i){const e=uu();if(!e){Pe.enabled=!1,Za();return}const t=e.state==="running"?Promise.resolve():e.resume(),n=du();Gn(Mr()),Promise.all([t,n]).then(([,r])=>{i!==Pe.intentToken||!Pe.enabled||(hu(r),Gn(Mr()),re.dataset.rainSoundAutoplay="playing")}).catch(()=>{i===Pe.intentToken&&(Gn(0),re.dataset.rainSoundAutoplay="waiting-for-gesture")})}function W0(i){const e=++Pe.intentToken;Pe.enabled=i,Za(),i?fu(e):Gn(0)}function X0(){Pe.enabled&&fu(Pe.intentToken)}function pu(){En&&W0(!Pe.enabled)}En==null||En.addEventListener("pointerdown",i=>{!i.isPrimary||i.button!==0||pu()});En==null||En.addEventListener("click",i=>{i.detail===0&&pu()});const mu=i=>{i.target instanceof Element&&i.target.closest("#rain-sound-toggle")||X0()};document.addEventListener("pointerdown",mu,{capture:!0,passive:!0});document.addEventListener("keydown",mu);document.addEventListener("visibilitychange",()=>{const{context:i}=Pe;i&&(document.hidden?i.suspend().catch(()=>{}):Pe.enabled&&Pe.started&&i.resume().then(()=>{Pe.enabled&&Gn(Mr())}).catch(()=>{}))});window.addEventListener("pagehide",()=>{Gn(0),V0()},{once:!0});re.dataset.rainSoundStarted="false";re.dataset.rainSoundLoaded="false";re.dataset.rainSoundProfile="procedurally-generated-rain-loop";Za();re.dataset.rainSoundAutoplay="waiting-for-gesture";du().catch(()=>{});var Tc;(Tc=qt==null?void 0:qt.autoplayPromise)==null||Tc.then(i=>{var t;const e=((t=navigator.userActivation)==null?void 0:t.hasBeenActive)===!0;!i||e||Pe.intentToken!==0||Pe.enabled||(Pe.enabled=!0,Za(),Gn(Mr()),re.dataset.rainSoundAutoplay="playing")});const Pr={worldHeight:6.6,plotWidth:17,z:kr.center+kr.thickness+.32,dragThreshold:5};Nu();const Ci={resX:768,resZ:384,xMin:-22.5*.55,xMax:mi.width*.55,zMin:-10.4*.6,zMax:mi.frontZ*1.5},It={fog:0,pearlBright:new Ce(13818078),pearlMid:new Ce(8688290),pearlDark:new Ce(4345436),waterBright:new Ce(10662076),waterMid:new Ce(5924984),waterDark:new Ce(2633792)},oe={readout:{offsetX:0,offsetY:0},camera:{frameTargetYOffset:1.15,desktop:{pos:[-.27,3.6,16.6],target:[-.27,2.45,.26],fov:35},tablet:{pos:[-.27,4.5,20.4],target:[-.27,3.35,.2],fov:37},mobile:{pos:[-.27,4.9,24.2],target:[-.27,3.75,.16],fov:40}},mist:{color:11253439,opacity:.28,height:3.5,reflectionOpacity:0},pearls:{maxPointSize:1.9,minPointSize:25.3,alpha:3},rain:{baseWeight:.62,exponent:.05},metalRain:{darkColor:0,midColor:12766171,brightColor:16448511,tintColor:37375,pearlBandFrequency:5.5,pearlBandSpeed:-2.55,pearlSpecularPower:30,pearlFresnelStrength:1.56,threadBandDensity:.081,threadBandSpeed:-.9,threadMirrorStrength:.93,bodyBandDensity:5.4,bodyBandSpeed:-1.1,bodyMirrorStrength:.78,filamentBandDensity:2.35,filamentBandSpeed:.84,filamentMirrorStrength:.58,highlightMirrorStrength:.9},floorGlow:{base:-.77,baseByStrength:.48,lowerCurtain:.13,lowerCurtainByStrength:-.89,downpour:-1.43,downpourByStrength:.67,ambient:-.06},glint:{opacity:3,alphaMax:2.13,maxSize:62},foam:{opacity:2.67,maxSize:73.6},spray:{opacity:2.33,maxSize:86.3},water:{deepColor:0,surfaceColor:2830912,roughness:1,specularStrength:2.5,rippleHighlight:3,surfaceOpacity:5,wavePrimary:0,waveSecondary:0,reflStrength:.5,reflFade:2.15,rearFadeNearZ:-.7,rearFadeFarZ:-4.2},waterfallBody:{deepColor:1711651,midColor:13423835,brightColor:658447,broadSway:0,fineSway:0,streakFrequency:38.1,fineStreakFrequency:499.6,streakSharpness:.05,fineStreakSharpness:40,fineStreakWeight:-2,baseMass:0,riseMass:.64,cloudLow:.68,cloudHigh:1.05,gapDarkness:.05,streakBrightness:1.4,bottomFeather:.2,opacity:3},waterfallFilaments:{edgeWidth:3,highlightEdgeWidth:1.75,opacity:0,highlightOpacity:.28,bottomMistOpacity:5},ripple:{gain:0,damping:.9999,dropRain:1.51,dropClick:.95,displace:.012},orbit:{minDistance:9,maxDistance:30,azimuthDeg:60,minPolarDeg:52,maxPolarDeg:93,damping:.08}};JSON.parse(JSON.stringify(oe));function Y0(i){if(typeof i=="number"&&Number.isFinite(i))return Math.max(0,Math.min(16777215,Math.round(i)));const e=String(i??"").trim().replace(/^#/,"");return/^[0-9a-f]{6}$/i.test(e)?parseInt(e,16):0}function bt(i){return`#${(Number(i)>>>0).toString(16).padStart(6,"0").slice(-6)}`}function Kt(i){const e=Number(i)>>>0;return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function lt(i,e,t){return new Ce(i).lerp(new Ce(e),Ge(t,0,1)).getHex()}function q0(i){const e=Y0(i);if(e===0)return{base:e,backgroundTop:0,backgroundMid:0,backgroundBottom:0,fog:0,shadow:0,panel:527380,panelTop:1843760,panelBottom:395536,accent:37375,textStrong:16448511,textMid:12766171,textSoft:9412024,axisLine:15067632,axisTick:12766171,axisStrong:16777215,axisTime:14476011,axisValue:16054010,axisUnit:12108239,metalDark:0,metalMid:12766171,metalBright:16448511,metalTint:37375,waterDeep:0,waterSurface:2830912,mist:11253439,waterfallDeep:1711651,waterfallMid:13423835,waterfallBright:658447};const t=new Ce(e),r=t.r*.2126+t.g*.7152+t.b*.0722>.42?0:16777215,a=lt(e,0,.7);return{base:e,backgroundTop:lt(e,r,.035),backgroundMid:e,backgroundBottom:lt(e,0,.24),fog:lt(e,0,.18),shadow:0,panel:a,panelTop:lt(a,16777215,.09),panelBottom:lt(a,0,.38),accent:lt(e,r,.56),textStrong:lt(e,16777215,.95),textMid:lt(e,16777215,.76),textSoft:lt(e,16777215,.58),axisLine:lt(e,r,.9),axisTick:lt(e,r,.72),axisStrong:lt(e,r,.98),axisTime:lt(e,r,.84),axisValue:lt(e,r,.94),axisUnit:lt(e,r,.66),metalDark:lt(e,r,.08),metalMid:lt(e,r,.64),metalBright:lt(e,r,.96),metalTint:lt(e,r,.34),waterDeep:lt(e,r,.035),waterSurface:lt(e,r,.24),mist:lt(e,r,.62),waterfallDeep:lt(e,r,.12),waterfallMid:lt(e,r,.68),waterfallBright:lt(e,r,.92)}}function $0(){return 0}function Z0(i){const e=document.documentElement.style,t=i.base===0?.72:.9,n=i.base===0?.8:.94;e.setProperty("--background-top",bt(i.backgroundTop)),e.setProperty("--background-mid",bt(i.backgroundMid)),e.setProperty("--background-bottom",bt(i.backgroundBottom)),e.setProperty("--model-metal-dark",bt(i.metalDark)),e.setProperty("--model-metal-mid",bt(i.metalMid)),e.setProperty("--model-metal-bright",bt(i.metalBright)),e.setProperty("--model-metal-tint",bt(i.metalTint)),e.setProperty("--theme-highlight-rgb",Kt(i.textMid)),e.setProperty("--theme-shadow-rgb",Kt(i.shadow)),e.setProperty("--theme-panel-rgb",Kt(i.panel)),e.setProperty("--panel-surface-top",`rgba(${Kt(i.panelTop)}, ${t})`),e.setProperty("--panel-surface-bottom",`rgba(${Kt(i.panelBottom)}, ${n})`),e.setProperty("--panel-border",`rgba(${Kt(i.textStrong)}, 0.17)`),e.setProperty("--panel-divider",`rgba(${Kt(i.textStrong)}, 0.1)`),e.setProperty("--panel-card-border",`rgba(${Kt(i.textStrong)}, 0.13)`),e.setProperty("--panel-control-bg",`rgba(${Kt(i.textStrong)}, 0.055)`),e.setProperty("--panel-control-hover",`rgba(${Kt(i.textStrong)}, 0.1)`),e.setProperty("--panel-text-main",`rgba(${Kt(i.textStrong)}, 0.94)`),e.setProperty("--panel-text-soft",`rgba(${Kt(i.textMid)}, 0.58)`),e.setProperty("--panel-accent",`rgba(${Kt(i.accent)}, 0.78)`),e.setProperty("--panel-accent-soft",`rgba(${Kt(i.accent)}, 0.14)`)}function K0(i){It.fog=i.fog,It.pearlBright.setHex(i.metalBright),It.pearlMid.setHex(i.metalMid),It.pearlDark.setHex(i.metalDark),It.waterBright.setHex(i.mist),It.waterMid.setHex(i.waterSurface),It.waterDark.setHex(i.waterDeep)}let gu=$0(),At=q0(gu);Z0(At);K0(At);function vu(){const i=Number(oe.readout.offsetX)||0,e=Number(oe.readout.offsetY)||0;tt!=null&&tt.readout&&tt.readout.mesh.position.set(tt.readout.anchorX+i,tt.readout.anchorY+e,tt.readout.anchorZ),re.dataset.readoutMode="world-space-rotating",re.dataset.readoutOffsetX=String(i),re.dataset.readoutOffsetY=String(e),delete re.dataset.readoutBottom,delete re.dataset.readoutRight,delete re.dataset.readoutTop}const ms=window.matchMedia("(pointer: coarse)").matches,Ni=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Vn(){const i=Math.min(window.innerWidth,window.innerHeight),e=Math.max(window.innerWidth,window.innerHeight);return window.innerWidth>window.innerHeight&&i<=500&&e<=1e3}function _u(){const i=Vn()?2:ms?1.65:1.75;return Math.min(window.devicePixelRatio||1,i)}let li=_u();const pn=ms?{chains:2e3,ambientChains:800,downpourChains:1400,waterfallFilaments:1900,waterGlints:0,rippleEventsPerSecond:28}:{chains:2e3,ambientChains:800,downpourChains:1400,waterfallFilaments:1900,waterGlints:0,rippleEventsPerSecond:60},Mn={showAxes:!0,showWater:!0,showMist:!0,showRainLines:!0,showPearls:!0,showWaterGlints:!0,showImpacts:$a,showPeakWaterfall:!1};Mn.showImpacts=Mn.showImpacts&&$a;const pe={pointerActive:!1,pointerDown:!1,pointerMoved:!1,pointerHour:18,pointerWorld:new N,pointerNdc:new He,pointerClient:{x:0,y:0},downClient:{x:0,y:0},downView:{x:0,y:0},activePointerId:null,selectedHour:18,selectedActive:!1,burst:0,lastHoverRippleAt:-1,view:{targetX:0,targetY:0},readoutKey:""};let Qe;try{Qe=new g0({antialias:!0,alpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),re.dataset.webglStatus="ready"}catch(i){throw cu(je("webglUnavailable")),re.dataset.webglStatus="unavailable",i}Qe.setPixelRatio(li);Qe.setSize(window.innerWidth,window.innerHeight);re.dataset.rendererPixelRatio=li.toFixed(2);Qe.outputColorSpace=ln;Qe.domElement.setAttribute("aria-label",je("canvasAria"));re.appendChild(Qe.domElement);Qe.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),re.dataset.webglStatus="lost",cu(je("webglInterrupted"))});Qe.domElement.addEventListener("webglcontextrestored",()=>{re.dataset.webglStatus="ready",U0()});const Oi=new Jo;Oi.fog=new ds(It.fog,ms?.019:.022);const Jt=new fn(35,window.innerWidth/window.innerHeight,.1,110),ba=new N,An=new N;new N;const _c=.04;let cr=null,ht=null;eo();ht=new w0(Jt,Qe.domElement);ht.enableDamping=!0;ht.dampingFactor=oe.orbit.damping;ht.enablePan=!1;ht.enableZoom=!0;ht.rotateSpeed=.55;ht.zoomSpeed=.8;ht.minDistance=oe.orbit.minDistance;ht.maxDistance=oe.orbit.maxDistance;ht.minPolarAngle=pi.degToRad(oe.orbit.minPolarDeg);ht.maxPolarAngle=pi.degToRad(oe.orbit.maxPolarDeg);ht.minAzimuthAngle=-pi.degToRad(oe.orbit.azimuthDeg);ht.maxAzimuthAngle=pi.degToRad(oe.orbit.azimuthDeg);ht.target.copy(An);ht.update();const Bo=new E0,j0=new Tn(new N(0,1,0),-et),J0=new Tn(new N(0,0,1),-1.37),or=new N,is=new y0,yr=new Ct(0,1,0,1),Er=new N(.002,0,.002),br=new He,Ha={value:0},Vr=new Pn;Vr.name="pearl-rainfall-visualization";Oi.add(Vr);let tt=wu();cr=tt.fitBounds.clone();eo();vu();gs(tt);Ou();const qn=sv(),xu=lv();let Wn=Cu();qn.material.uniforms.uRainLut.value=Wn.lut;qn.material.uniforms.uLutBounds.value.set(Wn.lutXMin,Wn.lutSpan);const hr=Zt<=0,Su=gn.length>0,xc=hr?0:Iu(Zt);let rt=Tu(hr?0:Math.max(1,Math.round(pn.chains*xc)),hr?0:Math.max(1,Math.round(pn.ambientChains*Math.pow(xc,1.08))),hr||!Su?0:pn.downpourChains),Ht=Ru(hr||!Su?0:pn.waterfallFilaments,rt.data),ci=Pu(hr?0:pn.waterGlints),dt=Du(0,0,pn.rippleEventsPerSecond);const Wr=gv(Qe);Vr.add(tt.group,xu,qn,Wn.mesh,rt.lines,rt.points,Ht.group,ci.points,dt.foam,dt.droplets,dt.crowns);;yu();Ni&&(vs(rt,0,0),_s(ci,0,0));Eu();$r();Qe.domElement.addEventListener("pointerdown",wv,{passive:!0});Qe.domElement.addEventListener("pointermove",Av,{passive:!0});Qe.domElement.addEventListener("pointerup",Tv,{passive:!0});Qe.domElement.addEventListener("pointercancel",Cv,{passive:!0});Qe.domElement.addEventListener("pointerleave",Rv,{passive:!0});Qe.domElement.addEventListener("dblclick",Dv);document.addEventListener("pointermove",i=>{i.target!==Qe.domElement&&Ja()},{passive:!0});P0.addEventListener("pointerenter",Ja);jt.addEventListener("pointerenter",Ja);window.addEventListener("resize",bs);window.addEventListener("orientationchange",bs);var Cc;(Cc=window.visualViewport)==null||Cc.addEventListener("resize",bs);window.addEventListener("blur",Pv);Bv();re.dataset.releaseChannel="public";Mu();function Mu(){const i=Math.min(is.getDelta(),.04),e=is.elapsedTime;pe.burst=Math.max(0,pe.burst-i*1.1),Wn.material.uniforms.uTime.value=Ni?6.2:e,Ni||(fv(dt,e,i),vs(rt,e,i),_s(ci,e,i)),pe.pointerActive&&e-pe.lastHoverRippleAt>.18&&(pe.lastHoverRippleAt=e,xs(Wr,pe.pointerWorld.x,pe.pointerWorld.z,.34+fr(pe.pointerHour)*.28,!1)),vv(Wr,Qe),_v(e),Lv(),av(tt),$r(),Qe.render(Oi,Jt),requestAnimationFrame(Mu)}function yu(){tt.group.visible=Mn.showAxes,qn.visible=Mn.showWater,xu.visible=Mn.showWater,Wn.mesh.visible=Mn.showMist,rt.lines.visible=Mn.showRainLines,rt.points.visible=Mn.showPearls,ci.points.visible=Mn.showWaterGlints;const i=$a;dt.foam.visible=i,dt.droplets.visible=i,dt.crowns.visible=i,Ht.group.visible=Mn.showPeakWaterfall,re.dataset.axisVisibility="visible"}function Eu(){var e;re.dataset.rainMaterial="procedural-liquid-metal",re.dataset.rainEdgeMode=Vn()?"mobile-crisp":"authored",re.dataset.rainfallMax=String(Number(Zt.toFixed(3))),re.dataset.axisMax=String(Number(Ii.toFixed(3))),re.dataset.rainfallValues=xt.join(","),re.dataset.rainfallPointCount=String(xt.length);const i=xt.map((t,n)=>t===0?n:null).filter(t=>t!==null);re.dataset.zeroRainfallCount=String(i.length),re.dataset.zeroRainfallHours=i.join(","),re.dataset.zeroRainSuppression="anchor-feathered",re.dataset.rainfallResponse="continuous-raw-hourly-v2",re.dataset.rainfallDry=String(Zt<=0),re.dataset.chainCount=String(rt.data.count),re.dataset.zeroSuppressedChainCount=String(((e=rt.data.presence)==null?void 0:e.reduce((t,n)=>t+(n<=.08?1:0),0))??0),re.dataset.baseChainCount=String(rt.data.baseCount),re.dataset.ambientChainCount=String(rt.data.ambientCount),re.dataset.downpourChainCount=String(rt.data.downpourCount),re.dataset.pearlCount=String(rt.data.pearlCount),re.dataset.streakCount=String(rt.data.downpourCount),re.dataset.waterfallBodyCount=String(Ht.bodyCount),re.dataset.waterfallPeakCount=String(Ht.peakCount),re.dataset.waterfallFilamentCapacity=String(Ht.filamentCapacity),re.dataset.activeWaterfallFilaments=String(Ht.visibleFilamentCount),re.dataset.bridgeFilamentCount=String(Ht.bridgeFilamentCount),re.dataset.coreFilamentCount=String(Ht.coreFilamentCount),re.dataset.lowerFilamentCount=String(Ht.lowerFilamentCount),re.dataset.wideFilamentCount=String(Ht.wideFilamentCount),re.dataset.foregroundFilamentCount=String(Ht.foregroundFilamentCount),re.dataset.highlightFilamentCount=String(Ht.highlightFilamentCount),re.dataset.waterfallRibbonSegments=String(Ht.ribbonSegments),re.dataset.activeBridgeTrails=String(rt.data.activeBridgeTrailCount),re.dataset.waterfallPlotClip="off",re.dataset.baselineImpactCount=String(dt.data.staticSeedCount),re.dataset.splashImpactsEnabled=String($a),re.dataset.activeStormParticles=String(dt.data.activeCount),re.dataset.activeFoamParticles=String(dt.data.activeFoamCount),re.dataset.activeSprayDroplets=String(dt.data.activeDropletCount),re.dataset.activeCrownLines=String(dt.data.activeCrownCount),re.dataset.peakImpactCount=String(dt.data.totalPeakCollisions),re.dataset.stormEmissionRate=dt.data.currentEmissionRate.toFixed(1),re.dataset.activeRipples="0",re.dataset.rainPlotClip="off",re.dataset.rainCeilingValue=String(Number(ps.toFixed(3))),re.dataset.rainCeilingWorldY=cn.toFixed(3),re.dataset.ambientCurtainMode="data-driven-ceiling",re.dataset.axisMode="3d-reference-labels",re.dataset.axisVisibility=tt.group.visible?"visible":"hidden",re.dataset.timeTickCount=String(tt.timeTickCount),re.dataset.valueTickCount=String(tt.valueTickCount),re.dataset.axisLabelCount=String(tt.labelCount)}function zo(i){if(!Array.isArray(i)||i.length!==oi.length)throw new TypeError(je("dataLengthError",{count:oi.length}));xt=i.map(t=>{const n=Number(t);if(!Number.isFinite(n)||n<0)throw new TypeError(je("dataValueError"));return Ri(n)}),Nu(),Q0(),G0(),pe.readoutKey="",$r(!0)}function Q0(){const i=Zt<=0,e=gn.length>0,t=i?0:Iu(Zt),n=wu(),r=Cu(),a=Tu(i?0:Math.max(1,Math.round(pn.chains*t)),i?0:Math.max(1,Math.round(pn.ambientChains*Math.pow(t,1.08))),i||!e?0:pn.downpourChains),o=Ru(i||!e?0:pn.waterfallFilaments,a.data),s=Pu(i?0:pn.waterGlints),c=Du(0,0,pn.rippleEventsPerSecond),l=[tt.group,Wn.mesh,rt.lines,rt.points,Ht.group,ci.points,dt.foam,dt.droplets,dt.crowns];qn.material.uniforms.uRainLut.value=r.lut,qn.material.uniforms.uLutBounds.value.set(r.lutXMin,r.lutSpan),Vr.remove(...l),l.forEach(ev),tt=n,cr=tt.fitBounds.clone(),vu(),gs(tt),Wn=r,rt=a,Ht=o,ci=s,dt=c,Vr.add(tt.group,Wn.mesh,rt.lines,rt.points,Ht.group,ci.points,dt.foam,dt.droplets,dt.crowns),tv(Wr),yu(),Ni&&(vs(rt,0,0),_s(ci,0,0)),Eu()}function ev(i){var r;if(!i)return;const e=new Set,t=new Set,n=new Set;i.traverse(a=>{a.geometry&&e.add(a.geometry),(Array.isArray(a.material)?a.material:[a.material]).filter(Boolean).forEach(s=>t.add(s))});for(const a of t){for(const o of Object.values(a))o!=null&&o.isTexture&&n.add(o);for(const o of Object.values(a.uniforms||{}))(r=o==null?void 0:o.value)!=null&&r.isTexture&&n.add(o.value)}n.forEach(a=>a.dispose()),e.forEach(a=>a.dispose()),t.forEach(a=>a.dispose())}function tv(i){const e=Qe.getRenderTarget(),t=Qe.autoClear;Qe.autoClear=!0,Qe.setRenderTarget(i.rtA),Qe.clear(),Qe.setRenderTarget(i.rtB),Qe.clear(),Qe.setRenderTarget(e),Qe.autoClear=t,i.dropCount=0,i.dropGeometry.setDrawRange(0,0),i.texture=i.rtA.texture,qn.material.uniforms.uHeightField.value=i.texture,re.dataset.activeRipples="0"}function bu(i,e){const t=Ge(Math.round(e),0,24),n=Ms(e).toFixed(1),r=`${t}-${n}-${gu}`;if(i.key===r)return;const{canvas:a,context:o,texture:s}=i;o.clearRect(0,0,a.width,a.height),o.textAlign="left",o.textBaseline="middle";const c=a.width-12,l=je("axisUnit");o.font='450 32px Inter, "PingFang SC", "Microsoft YaHei", sans-serif';const d=o.measureText(l).width,h=18,f=8,m=48,g=26,_=218,p=h+f+m,u=16;let E=116;o.font=`350 ${E}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`;let S=o.measureText(n).width;const w=c-d-u-p;S>w&&(E=Math.max(72,E*w/S),o.font=`350 ${E}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`,S=o.measureText(n).width);const L=p,C=Math.min(c-d,L+S+u);o.globalAlpha=.92,o.fillStyle=bt(At.axisTick),o.fillRect(h,g,f,_-g),o.globalAlpha=1,o.fillStyle=bt(At.axisTime),o.font='550 42px Inter, "PingFang SC", "Microsoft YaHei", sans-serif',o.fillText(`${String(t).padStart(2,"0")}:00`,L,48),o.fillStyle=bt(At.axisStrong),o.font=`350 ${E}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`,o.fillText(n,L,158),o.fillStyle=bt(At.axisTick),o.font='450 32px Inter, "PingFang SC", "Microsoft YaHei", sans-serif',o.fillText(l,C,166),s.needsUpdate=!0,i.key=r}function nv(i,e,t,n){const r=document.createElement("canvas");r.width=480,r.height=260;const a=r.getContext("2d"),o=new ou(r);o.colorSpace=ln,o.minFilter=Tt,o.magFilter=Tt,o.generateMipmaps=!1,o.anisotropy=Math.min(4,Qe.capabilities.getMaxAnisotropy());const s=new si({map:o,transparent:!0,opacity:n,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,side:Qt}),c=.98,l=c*r.width/r.height,d=new Ln(l,c);d.translate(-l*.5,0,0);const h=new wt(d,s);h.name="axis-dynamic-readout",h.position.set(i,e,t),h.renderOrder=9.6,h.visible=!1;const f={mesh:h,material:s,canvas:r,context:a,texture:o,anchorX:i,anchorY:e,anchorZ:t,key:""};return bu(f,pe.selectedHour),f}function wu(){const i=new Pn;i.name="rainfall-3d-axes";const e=.85,t=new si({color:At.axisLine,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),n=new si({color:At.axisTick,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),r=new si({color:At.axisStrong,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),a=new si({color:At.axisStrong,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),o=Ft(0),s=Ft(24),c=et-.18,l=cn,d=Pr.z,h=l+1.42,f=[o,c,d,s,c,d,o,c,d,o,l,d],m=[],g=new Pn;g.name="axis-labels";const _=[];for(let U=0;U<=24;U+=2){const O=Ft(U);m.push(O,c,d);const $=wa(`${String(U).padStart(2,"0")}:00`,{height:.2,fontSize:54,fontWeight:400,mobileScale:1.55,color:bt(At.axisTime)});$.sprite.position.set(O,c-.27,d+.04),g.add($.sprite),_.push({material:$.material,baseOpacity:$.opacity})}const p=[],u=Mv(),E=o-.72;for(const U of u){const O=rv(U);U>0&&p.push(o-.08,O,d,o+.08,O,d);const $=wa(as(U),{height:.27,fontSize:64,fontWeight:350,mobileOffsetX:-.32,anchorX:0,color:bt(At.axisValue)});$.sprite.position.set(E,O+.02,d+.04),g.add($.sprite),_.push({material:$.material,baseOpacity:$.opacity});const K=wa(je("axisUnit"),{height:.14,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,anchorX:0,color:bt(At.axisUnit)});K.sprite.position.set(E,O-.22,d+.04),g.add(K.sprite),_.push({material:K.material,baseOpacity:K.opacity})}const S=E,w=Gr==="zh-CN"?[{text:je("axisTitle"),y:h-.22,height:.44,fontSize:76,fontWeight:550,mobileOffsetX:-.32,color:bt(At.axisStrong)},{text:je("axisSubtitle"),y:h-.57,height:.22,fontSize:52,fontWeight:450,mobileScale:1.55,mobileOffsetX:-.32,color:bt(At.axisTime)},{text:je("axisUnit"),y:h-.82,height:.15,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,color:bt(At.axisUnit)}]:[{text:je("axisTitle"),y:h-.22,height:.4,fontSize:76,fontWeight:550,mobileOffsetX:-.32,color:bt(At.axisStrong)},{text:je("axisSubtitle"),y:h-.57,height:.19,fontSize:46,fontWeight:450,mobileScale:1.55,mobileOffsetX:-.32,color:bt(At.axisTime)},{text:je("axisUnit"),y:h-.82,height:.15,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,color:bt(At.axisUnit)}];for(const U of w){const O=wa(U.text,{height:U.height,fontSize:U.fontSize,fontWeight:U.fontWeight,mobileScale:U.mobileScale,mobileOffsetX:U.mobileOffsetX,anchorX:0,color:U.color});O.sprite.position.set(S,U.y,d+.04),O.material.opacity=e,g.add(O.sprite),_.push({material:O.material,baseOpacity:e})}const L=nv(s,h-.49,d+.05,e);L.mesh.position.x+=Number(oe.readout.offsetX)||0,L.mesh.position.y+=Number(oe.readout.offsetY)||0,_.push({material:L.material,baseOpacity:e});const C=Aa("axis-lines",f,t,.009,9),T=iv("time-ticks",m,n,.011,9.1),B=Aa("value-ticks",p,n,.008,9.1),b=Aa("selected-time-marker",[0,c,d+.012,0,c+.48,d+.012],r,.01,9.3),M=Aa("hover-time-marker",[0,c,d+.018,0,c+.34,d+.018],a,.008,9.4);b.visible=!1,M.visible=!1,i.add(C,T,B,g,L.mesh,b,M),i.updateMatrixWorld(!0);const P=new Ar().setFromObject(i,!0);return{group:i,fitBounds:P,labelGroup:g,readout:L,selectedMarker:b,hoverMarker:M,opacityEntries:[{material:t,baseOpacity:e},{material:n,baseOpacity:e},{material:r,baseOpacity:e},{material:a,baseOpacity:e},..._],opacity:1,dragging:!1,fadeStartedAt:-1,timeTickCount:13,valueTickCount:p.length/6,labelCount:13+u.length*2+w.length+1}}function iv(i,e,t,n,r){const a=new Pn;a.name=i;const o=new fs(n,16,10);for(let s=0;s<e.length;s+=3){const c=new wt(o,t);c.position.set(e[s],e[s+1],e[s+2]),c.renderOrder=r,a.add(c)}return a}function wa(i,{height:e,fontSize:t,fontWeight:n=300,mobileScale:r=1.28,mobileOffsetX:a=0,anchorX:o=.5,color:s="#ffffff"}){const c=document.createElement("canvas"),l=c.getContext("2d"),d=3,h=t*d,f=`${n} ${h}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`;l.font=f;const m=Math.ceil(l.measureText(i).width+24*d),g=Math.ceil(h*1.45);c.width=m,c.height=g,l.clearRect(0,0,m,g),l.font=f,l.fillStyle=s,l.textAlign="center",l.textBaseline="middle",l.fillText(i,m*.5,g*.5);const _=new ou(c);_.colorSpace=ln,_.minFilter=Tt,_.magFilter=Tt,_.generateMipmaps=!1,_.anisotropy=Math.min(4,Qe.capabilities.getMaxAnisotropy());const p=new si({map:_,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,side:Qt}),u=e*m/g,E=new Ln(u,e);E.translate((.5-o)*u,0,0);const S=new wt(E,p);return S.renderOrder=9.5,S.userData.mobileScale=r,S.userData.mobileOffsetX=a,{sprite:S,material:p,opacity:1}}function gs(i){var t;const e=Vn();for(const n of((t=i==null?void 0:i.labelGroup)==null?void 0:t.children)||[]){const r=e?n.userData.mobileScale||1.28:1;Number.isFinite(n.userData.basePositionX)||(n.userData.basePositionX=n.position.x),n.scale.setScalar(r),n.position.x=n.userData.basePositionX+(e&&n.userData.mobileOffsetX||0)}re.dataset.axisLabelScale=e?"1.28-1.90":"1.00"}function Aa(i,e,t,n,r){const a=new Pn;a.name=i;const o=new N(1,0,0);for(let s=0;s<e.length;s+=6){const c=new N(e[s],e[s+1],e[s+2]),l=new N(e[s+3],e[s+4],e[s+5]),d=l.clone().sub(c),h=d.length(),f=new Cr(h,n,n),m=new wt(f,t);m.position.copy(c).add(l).multiplyScalar(.5),m.quaternion.setFromUnitVectors(o,d.normalize()),m.renderOrder=r,a.add(m)}return a}function rv(i){return et+Ge(i/Ii,0,1)*Pr.worldHeight}function Au(i,e){i.opacity=e;for(const t of i.opacityEntries)t.material.opacity=t.baseOpacity*e}function av(i){i.selectedMarker.visible=!1,i.hoverMarker.position.x=Ft(pe.pointerHour),i.hoverMarker.visible=pe.pointerActive,i.readout.mesh.visible=pe.pointerActive,pe.pointerActive&&bu(i.readout,pe.pointerHour),re.dataset.readoutVisibility=pe.pointerActive?"visible":"hidden",re.dataset.cursorLineVisibility=pe.pointerActive?"visible":"hidden"}function ov(){tt.dragging||(tt.dragging=!0,tt.fadeStartedAt=-1,tt.group.visible=!1,Au(tt,0),re.dataset.axisVisibility="hidden")}function Ka(i=!1){!tt.dragging&&!i||(tt.dragging=!1,tt.group.visible=Mn.showAxes,tt.fadeStartedAt=-1,Au(tt,1),re.dataset.axisVisibility="visible")}function Tu(i,e=0,t=0){const n=i+e+t,r={count:n,baseCount:i,ambientCount:e,downpourCount:t,role:new Uint8Array(n),style:new Uint8Array(n),resetSeed:new Uint32Array(n),seedIndex:new Uint32Array(n),hour:new Float32Array(n),strength:new Float32Array(n),presence:new Float32Array(n),stormWeight:new Float32Array(n),waterfallTop:new Float32Array(n),waterfallBlendTop:new Float32Array(n),waterfallFeather:new Float32Array(n),baseX:new Float32Array(n),z:new Float32Array(n),pathX:new Float32Array(n),pathZ:new Float32Array(n),top:new Float32Array(n),length:new Float32Array(n),headY:new Float32Array(n),speed:new Float32Array(n),near:new Float32Array(n),curtainLayer:new Uint8Array(n),driftX:new Float32Array(n),driftZ:new Float32Array(n),phase:new Float32Array(n),windSpeed:new Float32Array(n),alpha:new Float32Array(n),pearlStart:new Uint32Array(n),strandPearlCount:new Uint8Array(n),lineStart:new Uint32Array(n),lineCount:new Uint8Array(n),respawnCycle:new Uint32Array(n)},a=Ui(ns),o=Ss(oe.rain.baseWeight,oe.rain.exponent,a,!0),s=Ui(pc),c=()=>G(.04,23.96,s),l=Ui(mc),d=Uu(l);let h=0,f=0;for(let ae=0;ae<i;ae+=1){const j=o(),xe=fr(j),Se=yc(xe),Ee=Li(j),Ke=rs(j),A=Ho(a),x=ct(.88,1.12,$n(j*1.55,Dn^1374857533)),F=G(-.32-xe*.34,.38+xe*.68,a),ee=Math.min(cn,et+Ge(.95+Math.pow(Ke,.92)*5.8*x+F,.76,8.8)),te=a(),ne=te<.5?0:te<.85?1:2,we=Math.max(.8,ee-et),ue=G(.78,1.14,a)+xe*G(.62,1.08,a)+A*G(.12,.32,a),he=ne===1?Math.max(.42,Math.min(ue*G(.64,.9,a),we*G(.24,.42,a))):ue,ze=Math.round(ct(20,34,Math.pow(xe,.55))+A*G(0,4,a)+(ne===1?1:0));r.hour[ae]=j,ko(r,ae,j),r.role[ae]=_t.BASE,r.resetSeed[ae]=ns,r.seedIndex[ae]=ae,r.strength[ae]=xe,r.presence[ae]=Ee,r.near[ae]=A,r.top[ae]=ee,r.length[ae]=he,r.curtainLayer[ae]=ne,r.pearlStart[ae]=h,r.strandPearlCount[ae]=Ge(ze,16,40),r.lineStart[ae]=f,r.lineCount[ae]=r.strandPearlCount[ae]-1,r.speed[ae]=G(1.5,2.45,a)+xe*G(1.15,2.55,a)+A*.42,r.driftX[ae]=G(.004,.014,a)+A*G(.003,.009,a),r.driftZ[ae]=G(.003,.01,a)+A*G(.002,.006,a),r.phase[ae]=a()*Math.PI*2,r.windSpeed[ae]=G(.22,.58,a),r.alpha[ae]=G(.54,.96,a)*(.22+Se*1.18)*(.76+A*.72)*(ne===1?1.12:1)*Ee,Ra(r,ae,!0),h+=r.strandPearlCount[ae],f+=r.lineCount[ae]}for(let ae=0;ae<e;ae+=1){const j=i+ae,xe=c(),Se=fr(xe),Ee=yc(Se),Ke=Li(xe),A=Ho(s),x=Math.round(G(28,38,s));r.hour[j]=xe,ko(r,j,xe),r.role[j]=_t.AMBIENT,r.resetSeed[j]=pc,r.seedIndex[j]=ae,r.strength[j]=Se,r.presence[j]=Ke,r.near[j]=A,r.top[j]=cn,r.length[j]=cn-et+G(.12,.3,s),r.curtainLayer[j]=2,r.pearlStart[j]=h,r.strandPearlCount[j]=x,r.lineStart[j]=f,r.lineCount[j]=x-1,r.speed[j]=0,r.driftX[j]=G(.002,.008,s),r.driftZ[j]=G(.002,.006,s),r.phase[j]=s()*Math.PI*2,r.windSpeed[j]=G(.18,.46,s),r.alpha[j]=G(.08,.2,s)*(.08+Ee*.92)*Ke,Ra(r,j,!0),h+=x,f+=x-1}for(let ae=0;ae<t;ae+=1){const j=i+e+ae,xe=d(),Se=fr(xe),Ee=Li(xe),Ke=rs(xe),A=Ho(l),x=ct(.9,1.12,$n(xe*1.55,Dn^1374857533)),F=Ge(.95+Math.pow(Ke,.92)*5.8*x+G(-.22,.62,l),1.2,8.8),ee=l()<.45,te=l()<.7?G(.08,.38,l):G(.38,.58,l),ne=ee?F+G(-.12,.48,l):Math.max(.82,F*te+G(-.08,.24,l)),we=l(),ue=we<.7?0:we<.94?1:2,he=Math.round(ue===0?G(13,19,l):ue===1?G(15,21,l):G(16,22,l)),ze=ee?G(.82,1.5,l)+Se*G(.52,1.02,l):Math.min(G(.38,1.04,l),ne*G(.48,.86,l));r.hour[j]=xe,ko(r,j,xe),r.role[j]=_t.DOWNPOUR,r.style[j]=ue,r.resetSeed[j]=mc,r.seedIndex[j]=ae,r.strength[j]=Se,r.presence[j]=Ee,r.near[j]=A,r.top[j]=Math.min(cn,et+ne),r.length[j]=Math.max(.34,ze),r.curtainLayer[j]=0,r.pearlStart[j]=h,r.strandPearlCount[j]=he,r.lineStart[j]=f,r.lineCount[j]=he-1,r.speed[j]=G(2.65,4.35,l)+Se*.72,r.driftX[j]=0,r.driftZ[j]=0,r.phase[j]=l()*Math.PI*2,r.windSpeed[j]=0,r.alpha[j]=G(ue===0?.26:.32,ue===2?.62:.52,l)*(.88+Se*.34)*Ee,Ra(r,j,!0),h+=he,f+=he-1}for(let ae=0;ae<n;ae+=1)r.waterfallBlendTop[ae]=r.waterfallTop[ae]+Math.sin(r.phase[ae]*2.17+r.hour[ae]*.41)*.2;const m=new Float32Array(h*3),g=new Float32Array(h*3),_=new Float32Array(h),p=new Float32Array(h),u=new Float32Array(h),E=new Float32Array(h),S=new Float32Array(h),w=new Float32Array(h),L=new Float32Array(h),C=new Float32Array(h),T=new Float32Array(h),B=new Float32Array(h),b=new Float32Array(h),M=new Uint16Array(h),P=new Float32Array(h),U=new Float32Array(h),O=new Float32Array(h),$=new Float32Array(h),K=new Float32Array(h),W=new Float32Array(h),ie=new Float32Array(f*2*3),k=new Float32Array(f*2*3),ce=new Float32Array(f*2),me=new Float32Array(f*2),ge=new Float32Array(f),Ie=new Uint32Array(f),q=new Uint32Array(f),R=new Uint16Array(f),X=new Float32Array(f*2);for(let ae=0;ae<i;ae+=1){const j=r.pearlStart[ae],xe=r.strandPearlCount[ae],Se=r.strength[ae],Ee=r.near[ae],Ke=G(1.15,1.7,a)+Ee*G(.3,.82,a)+Se*G(.1,.4,a);for(let A=0;A<xe;A+=1){const x=j+A,F=x*3,ee=xe<=1?0:A/(xe-1),te=a();M[x]=ae,P[x]=ee,U[x]=G(-.006,.006,a),O[x]=a()*Math.PI*2,E[x]=1,w[x]=a(),L[x]=.3,C[x]=G(.35,.55,a),T[x]=G(.18,.4,a),u[x]=Ke*G(.92,1.08,a),B[x]=G(1.04,1.26,a);let ne;te<.14?(b[x]=G(.18,.32,a),ne=G(.95,1.22,a)):te<.46?(b[x]=G(.06,.16,a),ne=G(.56,.86,a)):(b[x]=G(.02,.08,a),ne=G(.26,.52,a)),p[x]=Ge(ne*(.68+Ee*.5+Se*.4),0,1.1),_[x]=p[x],Ec(g,F,Se,G(.72,1.12,a)*(.82+Ee*.3)*(.78+ne*.36),a)}for(let A=0;A<xe-1;A+=1){const x=r.lineStart[ae]+A,F=x*6;Ie[x]=j+A,q[x]=j+A+1,R[x]=ae,ge[x]=G(.009,.026,a)*(.54+Se*.44)*(.6+Ee*.42),Ec(k,F,Se,G(.2,.36,a)*(.78+Ee*.24),a),k[F+3]=k[F]*1.12,k[F+4]=k[F+1]*1.12,k[F+5]=k[F+2]*1.12}}for(let ae=0;ae<e;ae+=1){const j=i+ae,xe=r.pearlStart[j],Se=r.strandPearlCount[j],Ee=r.strength[j],Ke=r.near[j],A=G(.58,1.02,s)+Ke*G(.08,.28,s);for(let x=0;x<Se;x+=1){const F=xe+x,ee=F*3,te=Se<=1?0:x/(Se-1);M[F]=j,P[F]=te,U[F]=G(-.004,.004,s),O[F]=s()*Math.PI*2,p[F]=G(.22,.5,s)*(.88+Ke*.22),_[F]=p[F],E[F]=1,w[F]=s(),L[F]=G(.72,.84,s),C[F]=G(.58,.78,s),T[F]=G(.55,.75,s),u[F]=A*G(.54,.88,s),B[F]=G(1.35,2,s),b[F]=G(.04,.14,s),Ta(g,ee,Ee,G(.34,.62,s),_t.AMBIENT,0,s)}for(let x=0;x<Se-1;x+=1){const F=r.lineStart[j]+x,ee=F*6;Ie[F]=xe+x,q[F]=xe+x+1,R[F]=j,ge[F]=G(.003,.009,s)*(.72+Ee*.24),Ta(k,ee,Ee,G(.1,.2,s),_t.AMBIENT,0,s),k[ee+3]=k[ee]*1.08,k[ee+4]=k[ee+1]*1.08,k[ee+5]=k[ee+2]*1.08}}for(let ae=0;ae<t;ae+=1){const j=i+e+ae,xe=r.pearlStart[j],Se=r.strandPearlCount[j],Ee=r.strength[j],Ke=r.near[j],A=r.style[j],x=A===0?G(.35,.5,l):A===1?G(.5,.7,l):G(.75,.95,l),F=(G(1.05,1.72,l)+Ke*G(.28,.82,l)+Ee*G(.1,.38,l))*x;for(let ee=0;ee<Se;ee+=1){const te=xe+ee,ne=te*3,we=Se<=1?0:ee/(Se-1),ue=l();M[te]=j,P[te]=we,U[te]=G(-.004,.004,l),O[te]=l()*Math.PI*2,p[te]=G(.2,A===2?.64:.5,l)*(.88+Ke*.24+Ee*.2),_[te]=p[te],E[te]=1,w[te]=l(),L[te]=G(.34,.48,l),C[te]=G(.48,.7,l),T[te]=G(.32,.58,l),u[te]=F*(ue<.7?G(.68,.94,l):G(.88,1.14,l)),B[te]=A===0?G(1.28,1.82,l):G(1.05,1.48,l),b[te]=A===2?G(.3,.52,l):G(.08,.24,l),Ta(g,ne,Ee,G(.38,A===2?.86:.68,l),_t.DOWNPOUR,A,l)}for(let ee=0;ee<Se-1;ee+=1){const te=r.lineStart[j]+ee,ne=te*6;Ie[te]=xe+ee,q[te]=xe+ee+1,R[te]=j,ge[te]=G(.008,A===2?.025:.021,l)*(.78+Ee*.34)*(.82+Ke*.22),Ta(k,ne,Ee,G(.2,A===2?.42:.34,l),_t.DOWNPOUR,A,l),k[ne+3]=k[ne]*1.1,k[ne+4]=k[ne+1]*1.1,k[ne+5]=k[ne+2]*1.1}}let se=0;for(let ae=0;ae<h;ae+=1){const j=M[ae];$[ae]=r.stormWeight[j],K[ae]=r.waterfallBlendTop[j],W[ae]=r.waterfallFeather[j],$[ae]>.08&&w[ae]>.55&&(se+=1)}for(let ae=0;ae<f;ae+=1){const j=r.stormWeight[R[ae]],xe=Math.sin((R[ae]+1)*12.9898)*43758.5453,Se=(xe-Math.floor(xe))*Math.PI*2;X[ae*2]=j,X[ae*2+1]=j,ce[ae*2]=Se,ce[ae*2+1]=Se}const Q=new Ot;Q.setAttribute("position",new Ue(m,3).setUsage(Nt)),Q.setAttribute("aColor",new Ue(g,3)),Q.setAttribute("aAlpha",new Ue(_,1).setUsage(Nt)),Q.setAttribute("aSize",new Ue(u,1)),Q.setAttribute("aUpperScale",new Ue(E,1).setUsage(Nt)),Q.setAttribute("aUpperProgress",new Ue(S,1).setUsage(Nt)),Q.setAttribute("aAspect",new Ue(B,1)),Q.setAttribute("aHighlight",new Ue(b,1)),Q.setAttribute("aStorm",new Ue($,1)),Q.setAttribute("aWaterfallTop",new Ue(K,1)),Q.setAttribute("aWaterfallFeather",new Ue(W,1)),Q.setAttribute("aMorphSeed",new Ue(w,1));const Le=new Rt({uniforms:{uTime:{value:0},uPixelRatio:{value:li},uFogDensity:{value:Oi.fog.density},uMetalDark:{value:new Ce(oe.metalRain.darkColor)},uMetalMid:{value:new Ce(oe.metalRain.midColor)},uMetalBright:{value:new Ce(oe.metalRain.brightColor)},uMetalTint:{value:new Ce(oe.metalRain.tintColor)},uPearlBandFrequency:{value:oe.metalRain.pearlBandFrequency},uPearlBandSpeed:{value:oe.metalRain.pearlBandSpeed},uPearlSpecularPower:{value:oe.metalRain.pearlSpecularPower},uPearlFresnelStrength:{value:oe.metalRain.pearlFresnelStrength},uViewport:{value:br},uPlotBounds:{value:yr},uPlotFeather:{value:Er},uPlotClip:Ha,uMobileCrisp:{value:Vn()?1:0},uMinPointSize:{value:oe.pearls.minPointSize},uMaxPointSize:{value:oe.pearls.maxPointSize}},vertexShader:`
      uniform float uPixelRatio;
      uniform float uBeadScale;
      uniform float uMobileCrisp;
      uniform float uMinPointSize;
      uniform float uMaxPointSize;
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aSize;
      attribute float aUpperScale;
      attribute float aUpperProgress;
      attribute float aAspect;
      attribute float aHighlight;
      attribute float aStorm;
      attribute float aWaterfallTop;
      attribute float aWaterfallFeather;
      attribute float aMorphSeed;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHighlight;
      varying float vUpperProgress;
      varying float vTrailScale;
      varying float vFogDepth;
      varying float vStorm;
      varying float vWaterfall;

      void main() {
        float waterfallTransition = aStorm * (
          1.0 - smoothstep(
            aWaterfallTop - aWaterfallFeather,
            aWaterfallTop + aWaterfallFeather,
            position.y
          )
        );
        float massEntry = smoothstep(0.22, 0.92, waterfallTransition);
        float morphEligibility = mix(
          smoothstep(0.55, 0.82, aMorphSeed),
          0.62 + smoothstep(0.12, 0.98, aMorphSeed) * 0.38,
          massEntry
        );
        float trailEntry = smoothstep(0.04, 0.5, waterfallTransition);
        float lowerTrailRetention = 1.0 - smoothstep(0.96, 1.0, waterfallTransition) * 0.08;
        float trailScale = morphEligibility * trailEntry * lowerTrailRetention;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float depthScale = clamp(20.0 / max(5.2, -mvPosition.z), 0.82, 2.42);
        vColor = aColor;
        vAlpha = aAlpha;
        vAspect = aAspect
          * (1.0 + trailScale * mix(0.9, 2.2, massEntry))
          * mix(1.0, 0.72, massEntry);
        vHighlight = aHighlight;
        vUpperProgress = aUpperProgress;
        vTrailScale = trailScale;
        vFogDepth = -mvPosition.z;
        vStorm = aStorm;
        vWaterfall = waterfallTransition;
        gl_PointSize = mix(1.0, 0.5, uMobileCrisp) * uBeadScale * clamp(
          aSize * aUpperScale * (1.0 + trailScale * mix(0.7, 1.75, massEntry)) * uPixelRatio * depthScale,
          uMinPointSize * uPixelRatio,
          uMaxPointSize * uPixelRatio
        );
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uFogDensity;
      uniform vec3 uMetalDark;
      uniform vec3 uMetalMid;
      uniform vec3 uMetalBright;
      uniform vec3 uMetalTint;
      uniform float uPearlBandFrequency;
      uniform float uPearlBandSpeed;
      uniform float uPearlSpecularPower;
      uniform float uPearlFresnelStrength;
      uniform float uMobileCrisp;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      uniform float uBeadAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHighlight;
      varying float vUpperProgress;
      varying float vTrailScale;
      varying float vFogDepth;
      varying float vStorm;
      varying float vWaterfall;

      void main() {
        vec2 point = gl_PointCoord - vec2(0.5);
        vec2 pearlPoint = vec2(point.x * vAspect, point.y);
        float distanceToEdge = length(pearlPoint);
        float waterfallMass = smoothstep(0.28, 1.0, vWaterfall);
        float edge = mix(
          1.0 - smoothstep(0.46, 0.5, distanceToEdge),
          1.0 - smoothstep(0.28, 0.58, distanceToEdge),
          waterfallMass
        );
        float crispEdge = 1.0 - smoothstep(0.44, 0.5, distanceToEdge);
        edge = mix(edge, crispEdge, uMobileCrisp);
        float sheetEdge = 1.0 - smoothstep(
          0.42,
          0.62,
          length(vec2(point.x * 0.94, point.y * 0.62))
        );
        edge = max(edge, sheetEdge * waterfallMass * mix(0.32, 0.08, uMobileCrisp));
        if (edge < 0.01) discard;

        float body = exp(-dot(pearlPoint, pearlPoint) * mix(4.6, 2.6, waterfallMass));
        float verticalSheet = exp(-(point.x * point.x * mix(18.0, 5.8, waterfallMass) + point.y * point.y * mix(6.0, 1.36, waterfallMass)))
          * waterfallMass;
        float lowerGlow = smoothstep(-0.34, 0.42, point.y) * mix(0.12, 0.28, waterfallMass);
        // Soft satin pearl sheen instead of a tight gem specular.
        vec2 sheenPoint = pearlPoint - vec2(-0.12, 0.18);
        float highlight = exp(-dot(sheenPoint, sheenPoint) * 40.0)
          * vHighlight
          * mix(1.0, 0.4, vUpperProgress);
        // Cool rim light on the lower/shadow side gives pearls roundness + weight.
        float opticalDetail = mix(1.0, 0.15, uMobileCrisp);
        float rimLight = smoothstep(0.32, 0.5, distanceToEdge)
          * smoothstep(0.05, -0.4, point.y) * vHighlight * 0.28 * opticalDetail;
        float rim = smoothstep(0.36, 0.5, distanceToEdge) * 0.08 * opticalDetail;
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);
        float plotMask = horizontalMask * lowerMask;

        // Reconstruct a soft sphere normal from the point sprite. Alternating
        // dark and bright reflection bands make the pearl read as mercury
        // without converting every drop to a costly lit mesh.
        vec2 metalPoint = clamp(pearlPoint / 0.5, vec2(-1.0), vec2(1.0));
        float metalZ = sqrt(max(0.0, 1.0 - dot(metalPoint, metalPoint)));
        vec3 metalNormal = normalize(vec3(metalPoint, metalZ));
        vec3 keyDirection = normalize(vec3(-0.42, 0.62, 1.0));
        float metalSpecular = pow(
          max(0.0, dot(metalNormal, keyDirection)),
          max(0.01, uPearlSpecularPower)
        );
        float metalFresnel = pow(1.0 - clamp(metalNormal.z, 0.0, 1.0), 2.4);
        float reflectionWave = 0.5 + 0.5 * sin(
          metalNormal.y * uPearlBandFrequency
          + metalNormal.x * 2.4
          - uTime * uPearlBandSpeed
          + vStorm * 2.2
        );
        float mirrorBand = smoothstep(0.34, 0.86, reflectionWave);
        float shadowBand = smoothstep(0.68, 0.98, 1.0 - reflectionWave);
        vec3 color = mix(uMetalDark, uMetalMid, mirrorBand * 0.82 + body * 0.12);
        color = mix(color, uMetalBright, clamp(
          metalSpecular * 1.2 + metalFresnel * uPearlFresnelStrength,
          0.0,
          1.0
        ));
        float tintStrength = (verticalSheet * 0.2 + lowerGlow * 0.08)
          * mix(1.0, 0.62, uMobileCrisp);
        color = mix(color, uMetalTint, tintStrength);
        color = mix(color, uMetalDark, shadowBand * 0.56 + rim * 0.16);
        color += uMetalBright * (highlight * 0.18 + rimLight * 0.2);
        color *= mix(1.0, 0.78, vUpperProgress);
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.48);
        float alpha = uBeadAlpha * edge * vAlpha * plotMask
          * mix(1.0, 0.45, uMobileCrisp)
          * (0.78 + highlight * 0.05 * opticalDetail + rimLight * 0.18 + verticalSheet * mix(0.16, 0.04, uMobileCrisp))
          * (1.0 - fogFactor * 0.38);
        if (alpha < 0.001) discard;
        gl_FragColor = vec4(color, min(0.94, alpha));
      }
    `,transparent:!0,depthWrite:!1,blending:un}),ye=new Ot;ye.setAttribute("position",new Ue(ie,3).setUsage(Nt)),ye.setAttribute("aColor",new Ue(k,3)),ye.setAttribute("aAlpha",new Ue(me,1).setUsage(Nt)),ye.setAttribute("aStorm",new Ue(X,1)),ye.setAttribute("aBandPhase",new Ue(ce,1));const Ne=new Rt({uniforms:{uTime:{value:0},uFogDensity:{value:Oi.fog.density},uMetalDark:{value:new Ce(oe.metalRain.darkColor)},uMetalMid:{value:new Ce(oe.metalRain.midColor)},uMetalBright:{value:new Ce(oe.metalRain.brightColor)},uThreadBandDensity:{value:oe.metalRain.threadBandDensity},uThreadBandSpeed:{value:oe.metalRain.threadBandSpeed},uThreadMirrorStrength:{value:oe.metalRain.threadMirrorStrength},uViewport:{value:br},uPlotBounds:{value:yr},uPlotFeather:{value:Er},uPlotClip:Ha,uMobileCrisp:{value:Vn()?1:0}},vertexShader:`
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aStorm;
      attribute float aBandPhase;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;
      varying float vStorm;
      varying float vBandPhase;

      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vColor = aColor;
        vAlpha = aAlpha;
        vFogDepth = -mvPosition.z;
        vStorm = aStorm;
        vBandPhase = aBandPhase;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uFogDensity;
      uniform vec3 uMetalDark;
      uniform vec3 uMetalMid;
      uniform vec3 uMetalBright;
      uniform float uThreadBandDensity;
      uniform float uThreadBandSpeed;
      uniform float uThreadMirrorStrength;
      uniform float uMobileCrisp;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;
      varying float vStorm;
      varying float vBandPhase;

      void main() {
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);
        float alpha = vAlpha * horizontalMask * lowerMask
          * mix(1.0, 5.0, uMobileCrisp)
          * (1.0 - fogFactor * 0.42);
        if (alpha < 0.0005) discard;
        float reflectionWave = 0.5 + 0.5 * sin(
          gl_FragCoord.y * uThreadBandDensity
          + gl_FragCoord.x * uThreadBandDensity * 0.1777778
          + vBandPhase
          - uTime * uThreadBandSpeed
          + vStorm * 2.6
        );
        float mirrorBand = smoothstep(0.42, 0.86, reflectionWave);
        float darkBand = smoothstep(0.7, 0.98, 1.0 - reflectionWave);
        vec3 color = mix(uMetalDark, uMetalMid, mirrorBand);
        color = mix(
          color,
          uMetalBright,
          mirrorBand * mirrorBand * (uThreadMirrorStrength + vStorm * 0.26)
        );
        color = mix(color, uMetalDark, darkBand * 0.58);
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.55);
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:un}),D=new hs(Q,Le);D.renderOrder=3,Le.uniforms.uBeadScale={value:1},Le.uniforms.uBeadAlpha={value:oe.pearls.alpha};const $e=new au(ye,Ne);$e.renderOrder=2;const Ze={...r,pearlCount:h,lineTotal:f,pearlPositions:m,pearlAlphas:_,pearlBaseAlpha:p,pearlUpperScales:E,pearlUpperProgress:S,pearlUpperSeed:w,pearlTopRetention:L,pearlTopSize:C,pearlTopAlpha:T,pearlChain:M,pearlFraction:P,pearlOffsetY:U,pearlShimmer:O,linePositions:ie,lineAlphas:me,lineBaseAlpha:ge,linePearlA:Ie,linePearlB:q,lineChain:R,activeBridgeTrailCount:se};return{points:D,lines:$e,data:Ze}}function vs(i,e,t){const n=i.data;i.points.material.uniforms.uTime.value=e,i.lines.material.uniforms.uTime.value=e;for(let r=0;r<n.count;r+=1){const a=n.role[r]===_t.AMBIENT,o=n.headY[r]-n.length[r];a?n.headY[r]=cn-.03:n.headY[r]-=n.speed[r]*t*.58*(.92+pe.burst*.08);const s=n.headY[r]-n.length[r],c=n.phase[r],l=Math.sin(e*n.windSpeed[r]+c),d=Math.cos(e*n.windSpeed[r]*.72+c*.7),h=n.baseX[r]+l*n.driftX[r],f=n.z[r]+d*n.driftZ[r];if(n.pathX[r]=h,n.pathZ[r]=f,!a&&n.presence[r]>.08&&o>=et&&s<et){const m=pv(dt,h,f,n.hour[r],n.strength[r],n.near[r],n.role[r]);mv(dt,Wr,h,f,n.strength[r],m,n.role[r])}!a&&s<et&&Ra(n,r,!1)}for(let r=0;r<n.pearlCount;r+=1){const a=n.pearlChain[r],o=n.pearlFraction[r],s=r*3,c=n.headY[a]-o*n.length[a]+n.pearlOffsetY[r],l=Math.min(c,cn),d=1-kt(cn-.055,cn,c),h=Math.max(.8,n.top[a]-et),f=(l-et)/h,m=1-Ge(f,0,1),g=n.pathX[a],_=n.pathZ[a],p=os(n.hour[a],n.baseX[a],n.z[a]),u=.9+Math.sin(e*4.2+n.pearlShimmer[r])*.12,E=kt(.55,1,f),S=ct(1,n.pearlTopRetention[r],Math.pow(E,1.15)),w=E<=0?1:1-kt(S-.06,S+.06,n.pearlUpperSeed[r]),L=ct(1,n.pearlTopSize[r],Math.pow(E,1.05)),C=ct(1,n.pearlTopAlpha[r],Math.pow(E,1.1))*w,T=n.role[a],B=n.stormWeight[a],b=n.waterfallBlendTop[a],M=n.waterfallFeather[a],P=B*(1-kt(b-M,b+M,l)),U=Ge((n.pearlUpperSeed[r]-.55)/.27,0,1),O=T===_t.DOWNPOUR?ct(.5,.82,U):ct(.4,.68,U),$=ct(1,O,P),K=ct(1,T===_t.DOWNPOUR?ct(.96,1.62,U):ct(.78,1.36,U),kt(.22,1,P)),W=ct(1,T===_t.DOWNPOUR?ct(.76,.98,U):ct(.62,.86,U),kt(.48,1,P)),ie=T===_t.DOWNPOUR?kt(et+.015,et+.1,l):kt(et+.02,et+.12,l),k=n.curtainLayer[a]===1?1:0,ce=T===_t.BASE?1+kt(.02,.5,m)*(oe.floorGlow.base+n.strength[a]*oe.floorGlow.baseByStrength)*(1-B)+k*(oe.floorGlow.lowerCurtain+n.strength[a]*oe.floorGlow.lowerCurtainByStrength)*(1-B):T===_t.DOWNPOUR?1+kt(.02,.54,m)*(oe.floorGlow.downpour+n.strength[a]*oe.floorGlow.downpourByStrength)*(1-B):1+kt(.02,.5,m)*oe.floorGlow.ambient;n.pearlPositions[s]=g,n.pearlPositions[s+1]=l,n.pearlPositions[s+2]=_,n.pearlUpperScales[r]=L*K,n.pearlUpperProgress[r]=E,n.pearlAlphas[r]=Ge(n.pearlBaseAlpha[r]*n.alpha[a]*u*d*C*ie*ce*$*W*(1+p*.56+pe.burst*Wa(n.hour[a],pe.selectedHour)*.38),0,.96)}for(let r=0;r<n.lineTotal;r+=1){const a=n.linePearlA[r]*3,o=n.linePearlB[r]*3,s=r*6,c=r*2,l=n.lineChain[r],d=n.role[l],h=(n.pearlPositions[a+1]+n.pearlPositions[o+1])*.5,f=n.stormWeight[l],m=n.waterfallBlendTop[l],g=n.waterfallFeather[l],_=f*(1-kt(m-g,m+g,h)),p=1+4*_*(1-_)*.88,u=ct(1,d===_t.DOWNPOUR?.12:.2,_)*p,E=os(n.hour[l],n.baseX[l],n.z[l]),S=Ge((n.pearlAlphas[n.linePearlA[r]]+n.pearlAlphas[n.linePearlB[r]])*.86,0,1),w=d===_t.DOWNPOUR?2.45:d===_t.AMBIENT?1.2:1,L=n.lineBaseAlpha[r]*S*(.76+E*.52)*w*u;n.linePositions[s]=n.pearlPositions[a],n.linePositions[s+1]=Math.max(et+.006,n.pearlPositions[a+1]),n.linePositions[s+2]=n.pearlPositions[a+2],n.linePositions[s+3]=n.pearlPositions[o],n.linePositions[s+4]=Math.max(et+.006,n.pearlPositions[o+1]),n.linePositions[s+5]=n.pearlPositions[o+2],n.lineAlphas[c]=L*.58,n.lineAlphas[c+1]=L}i.points.geometry.attributes.position.needsUpdate=!0,i.points.geometry.attributes.aAlpha.needsUpdate=!0,i.points.geometry.attributes.aUpperScale.needsUpdate=!0,i.points.geometry.attributes.aUpperProgress.needsUpdate=!0,i.lines.geometry.attributes.position.needsUpdate=!0,i.lines.geometry.attributes.aAlpha.needsUpdate=!0}function sv(){const i=new Ln(mi.width*1.16,mi.depth*2.3,150,92);i.rotateX(-Math.PI/2),i.translate(0,et,1.25);const e=new Rt({uniforms:{uTime:{value:0},uSunDirection:{value:new Ce(0.3,0.8,0.4)},uSunColor:{value:new Ce(1,1,1)},uSunIntensity:{value:1},uSunElevation:{value:0.5},uColorDeep:{value:new Ce(oe.water.deepColor)},uColorSurface:{value:new Ce(oe.water.surfaceColor)},uRoughness:{value:oe.water.roughness},uSpecularStrength:{value:oe.water.specularStrength},uRippleHighlight:{value:oe.water.rippleHighlight},uSurfaceOpacity:{value:oe.water.surfaceOpacity},uHeightField:{value:null},uFieldBounds:{value:new Ct(Ci.xMin,Ci.xMax,Ci.zMin,Ci.zMax)},uFieldTexel:{value:new He(1/Ci.resX,1/Ci.resZ)},uRippleGain:{value:oe.ripple.gain},uRippleDisplace:{value:oe.ripple.displace},uWavePrimary:{value:oe.water.wavePrimary},uWaveSecondary:{value:oe.water.waveSecondary},uRainLut:{value:null},uLutBounds:{value:new He(Ft(0),Ft(24)-Ft(0))},uReflStrength:{value:oe.water.reflStrength},uReflFade:{value:oe.water.reflFade},uRearFadeNearZ:{value:oe.water.rearFadeNearZ},uRearFadeFarZ:{value:oe.water.rearFadeFarZ}},vertexShader:`
      uniform float uTime;
      uniform sampler2D uHeightField;
      uniform vec4 uFieldBounds;
      uniform float uRippleDisplace;
      uniform float uWavePrimary;
      uniform float uWaveSecondary;
      varying vec2 vUv;
      varying vec3 vWorld;

      void main() {
        vec3 transformed = position;
        float wave = sin(uTime * 1.2 + position.x * 0.55 + position.z * 0.34) * uWavePrimary;
        wave += sin(-uTime * 0.86 + position.x * 0.18 - position.z * 0.9) * uWaveSecondary;
        // GPU 高度场驱动真实顶点起伏 — 雨滴落点在水面上顶出凹坑并向外扩散
        vec2 fUv = vec2(
          (position.x - uFieldBounds.x) / (uFieldBounds.y - uFieldBounds.x),
          (position.z - uFieldBounds.z) / (uFieldBounds.w - uFieldBounds.z)
        );
        if (fUv.x > 0.0 && fUv.x < 1.0 && fUv.y > 0.0 && fUv.y < 1.0) {
          wave += texture2D(uHeightField, fUv).r * uRippleDisplace;
        }
        transformed.y += wave;
        vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
        vWorld = worldPosition.xyz;
        vUv = uv;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uSunDirection;
      uniform vec3 uSunColor;
      uniform float uSunIntensity;
      uniform float uSunElevation;
      uniform vec3 uColorDeep;
      uniform vec3 uColorSurface;
      uniform float uRoughness;
      uniform float uSpecularStrength;
      uniform float uRippleHighlight;
      uniform float uSurfaceOpacity;
      uniform sampler2D uHeightField;
      uniform vec4 uFieldBounds;
      uniform vec2 uFieldTexel;
      uniform float uRippleGain;
      uniform sampler2D uRainLut;
      uniform vec2 uLutBounds;
      uniform float uReflStrength;
      uniform float uReflFade;
      uniform float uRearFadeNearZ;
      uniform float uRearFadeFarZ;
      varying vec2 vUv;
      varying vec3 vWorld;

      void main() {
        // Sample GPU height field neighbours → per-pixel surface normal
        vec2 fUv = vec2(
          (vWorld.x - uFieldBounds.x) / (uFieldBounds.y - uFieldBounds.x),
          (vWorld.z - uFieldBounds.z) / (uFieldBounds.w - uFieldBounds.z)
        );
        float hC = 0.0, hL = 0.0, hR = 0.0, hT = 0.0, hB = 0.0;
        if (fUv.x > 0.01 && fUv.x < 0.99 && fUv.y > 0.01 && fUv.y < 0.99) {
          hC = texture2D(uHeightField, fUv).r;
          hL = texture2D(uHeightField, fUv - vec2(uFieldTexel.x, 0.0)).r;
          hR = texture2D(uHeightField, fUv + vec2(uFieldTexel.x, 0.0)).r;
          hT = texture2D(uHeightField, fUv + vec2(0.0, uFieldTexel.y)).r;
          hB = texture2D(uHeightField, fUv - vec2(0.0, uFieldTexel.y)).r;
        }

        // Surface normal from finite-difference height gradients.
        // Fixed scale: gradient of ~0.08 → ~15° tilt — subtle but visible.
        // uRippleGain only controls reflected light energy, not geometry height.
        float nScale = 3.5;
        vec3 normal = normalize(vec3((hL - hR) * nScale, 1.0, (hB - hT) * nScale));

        // Physical water lighting: Fresnel + specular + diffuse
        vec3 viewDir   = normalize(cameraPosition - vWorld);
        vec3 lightDir  = normalize(uSunDirection);
        float diffuse  = max(dot(normal, lightDir), 0.0) * uSunIntensity;
        float fresnel  = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.5);
        vec3 reflDir   = reflect(-lightDir, normal);
        float specularPower = mix(150.0, 28.0, uRoughness);
        float specular = pow(max(dot(reflDir, viewDir), 0.0), specularPower) * uSunIntensity;

        // Use local slope + curvature instead of broad height values. This keeps
        // highlights on the moving ripple rings rather than whitening the whole
        // surface into a frosted sheet.
        float neighbourAverage = (hL + hR + hT + hB) * 0.25;
        float rippleSlope = length(vec2(hL - hR, hB - hT));
        float rippleCurvature = abs(hC - neighbourAverage);
        float rippleSignal = (rippleSlope * 1.7 + rippleCurvature * 2.8) * uRippleGain;
        float rippleEnergy = smoothstep(0.08, 0.68, rippleSignal);
        float rippleHighlight = pow(rippleEnergy, 1.65);
        float rippleGlow = rippleHighlight * (0.42 + diffuse * 0.48);

        // Keep the base water dark and mirror-like; reserve the pale blue-white
        // energy for narrow specular and ripple highlights.
        vec3 edgeColor = vec3(0.58, 0.69, 0.82);
        vec3 rippleColor = vec3(0.72, 0.84, 0.96);
        float surfaceFill = mix(0.12, 0.34, uRoughness);
        float fresnelFill = mix(0.42, 0.24, uRoughness);
        float diffuseFill = mix(0.025, 0.2, uRoughness);
        vec3 color = mix(
          uColorDeep,
          uColorSurface,
          surfaceFill + fresnel * fresnelFill + diffuse * diffuseFill
        );
        color += mix(edgeColor, uSunColor, 0.6) * specular * uSpecularStrength;
        color += rippleColor * rippleGlow * uRippleHighlight;
        color += uSunColor * diffuse * 0.12;

        // Rain-column reflection: rain above mirrors into the dark water surface
        float dz        = vWorld.z - 1.15;
        float depthFade = smoothstep(-0.7, 0.0, dz) * (1.0 - smoothstep(0.2, uReflFade, dz));
        float wobX      = vWorld.x + (hL - hR) * 1.15;
        float lutX      = clamp((wobX - uLutBounds.x) / uLutBounds.y, 0.0, 1.0);
        float colRain   = pow(texture2D(uRainLut, vec2(lutX, 0.5)).r, 1.3);
        float hMask     = smoothstep(-0.01, 0.05, lutX) * (1.0 - smoothstep(0.95, 1.01, lutX));
        // Gentle shimmer driven by height field, not synthetic sine stripes
        float shimmer = 0.7 + 0.3 * sin(uTime * 0.9 + wobX * 1.4 + dz * 2.2 + hC * 4.0);
        // Grey-blue reflection matches pearl colour → bridges rain-to-water
        float rippleReflection = 1.0 + rippleHighlight * 0.62;
        color += vec3(0.56, 0.66, 0.78)
          * colRain * depthFade * hMask * shimmer * uReflStrength * rippleReflection;

        // Broad waterline seam: soft grey-blue glow where rain meets water
        float seam = colRain * exp(-pow(dz * 1.4, 2.0)) * 0.5 * hMask;
        color += vec3(0.44, 0.54, 0.66) * seam;

        // Clamp the physical surface opacity first, then apply the rear mask.
        // This matters when surfaceOpacity > 1: otherwise the clamp keeps most
        // of the fade fully opaque and produces a sudden edge near the back.
        float frontFade = smoothstep(0.0, 0.14, vUv.y);
        float rearFade = smoothstep(
          min(uRearFadeFarZ, uRearFadeNearZ),
          max(uRearFadeFarZ, uRearFadeNearZ),
          vWorld.z
        );
        float surfaceAlpha = min(
          0.88,
          uSurfaceOpacity + fresnel * 0.18 + rippleGlow * 0.3
        );
        // Feather both physical side edges so rotating the scene never reveals
        // the water plane as a hard rectangular wall.
        float sideFade = smoothstep(0.0, 0.16, vUv.x)
          * smoothstep(0.0, 0.16, 1.0 - vUv.x);
        float alpha = surfaceAlpha * frontFade * rearFade * sideFade;
        if (alpha < 0.002) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:un}),t=new wt(i,e);return t.renderOrder=0,t}function lv(){const i=new Ln(mi.width*1.16,mi.depth*2.3);i.rotateX(-Math.PI/2),i.translate(0,et-.28,1.25);const e=new Rt({uniforms:{uColor:{value:new Ce(oe.water.deepColor)},uRearFadeNearZ:{value:oe.water.rearFadeNearZ},uRearFadeFarZ:{value:oe.water.rearFadeFarZ}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vUv = uv;
        vWorld = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uRearFadeNearZ;
      uniform float uRearFadeFarZ;
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        float frontFade = smoothstep(0.0, 0.12, vUv.y);
        float rearFade = smoothstep(
          min(uRearFadeFarZ, uRearFadeNearZ),
          max(uRearFadeFarZ, uRearFadeNearZ),
          vWorld.z
        );
        float sideFade = smoothstep(0.0, 0.18, vUv.x)
          * smoothstep(0.0, 0.18, 1.0 - vUv.x);
        float alpha = 0.75 * frontFade * rearFade * sideFade;
        if (alpha < 0.002) discard;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,side:Qt,toneMapped:!1}),t=new wt(i,e);return t.renderOrder=-1,t}function Cu(){const e=Ft(0),t=Ft(24),n=t-e,r=new Float32Array(256),a=new Float32Array(256);for(let f=0;f<=24;f+=.04){const m=Ge((Ft(f)-e)/n,0,1),g=fr(f),_=m*255,p=7,u=Math.max(0,Math.floor(_-p)),E=Math.min(255,Math.ceil(_+p));for(let S=u;S<=E;S+=1){const w=(S-_)/p,L=Math.exp(-w*w*1.3);r[S]+=g*L,a[S]+=L}}const o=new Float32Array(256*4);for(let f=0;f<256;f+=1){const m=f/255*24,g=Li(m),_=(a[f]>0?Math.pow(r[f]/a[f],1.12):0)*g;o[f*4]=_,o[f*4+1]=_,o[f*4+2]=_,o[f*4+3]=1}const s=new v0(o,256,1,mn,kn);s.minFilter=Tt,s.magFilter=Tt,s.wrapS=yn,s.wrapT=yn,s.needsUpdate=!0;const c=oe.mist.height,l=new Ln(n*1.01,c,1,1);l.translate((e+t)*.5,et+c*.5-.42,1.15);const d=new Rt({uniforms:{uTime:{value:0},uLut:{value:s},uColor:{value:new Ce(oe.mist.color)},uOpacity:{value:oe.mist.opacity},uReflOpacity:{value:oe.mist.reflectionOpacity},uViewport:{value:br},uPlotBounds:{value:yr},uPlotFeather:{value:Er}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform sampler2D uLut;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uReflOpacity;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(41.21, 289.7))) * 43758.5453);
      }

      void main() {
        float intensity = texture2D(uLut, vec2(vUv.x, 0.5)).r;
        // Vertical profile: a bright core right at the waterline that fades up
        // into a low haze, and fades OUT below the waterline so the band never
        // shows as a panel beneath the axis.
        float core = exp(-pow((vUv.y - 0.14) * 6.4, 2.0));
        float haze = exp(-pow((vUv.y - 0.2) * 2.4, 2.0)) * 0.5;
        float lowerCut = smoothstep(0.05, 0.14, vUv.y);
        float yb = (core + haze) * lowerCut;
        // Gentle breathing + fine grain so the band reads as drifting vapour.
        float drift = 0.88 + 0.12 * sin(uTime * 0.5 + vUv.x * 7.3);
        float grain = 0.9 + 0.1 * hash(floor(vUv * vec2(120.0, 92.0)) + floor(uTime * 1.3));
        intensity *= drift * grain;

        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));

        // Reflection of the rain in the water just below the waterline — a dim,
        // vertically-streaked glow that fades down with depth.
        float reflBand = smoothstep(0.0, 0.11, vUv.y) * (1.0 - smoothstep(0.1, 0.135, vUv.y));
        float reflStreak = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(vUv.x * 240.0 + hash(vec2(floor(vUv.x * 60.0), 1.0)) * 7.0), 1.8);
        float reflWobble = 0.85 + 0.15 * sin(uTime * 1.2 + vUv.x * 30.0);
        float refl = reflBand * reflStreak * reflWobble;

        float sideFade = smoothstep(0.0, 0.08, vUv.x)
          * smoothstep(0.0, 0.08, 1.0 - vUv.x);
        float a = intensity * (yb + refl * uReflOpacity) * uOpacity * horizontalMask * sideFade;
        if (a < 0.002) discard;
        vec3 color = uColor * (0.7 + intensity * 0.6);
        gl_FragColor = vec4(color, a);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:pr}),h=new wt(l,d);return h.name="rain-mist-band",h.renderOrder=1.7,h.frustumCulled=!1,{mesh:h,material:d,lut:s,lutXMin:e,lutSpan:n}}function Ru(i,e){const t=new Pn;t.name="peak-waterfall-system";const n=cv(),r=uv(),a=new wt(n,r);a.name="peak-waterfall-density-body",a.renderOrder=1.5,a.frustumCulled=!1;const o=dv(i,e),s=Sc(!1),c=new wt(o.geometry,s);c.name="peak-waterfall-filaments",c.renderOrder=2.45,c.frustumCulled=!1;const l=Sc(!0),d=new wt(o.highlightGeometry,l);return d.name="peak-waterfall-filament-highlights",d.renderOrder=2.75,d.frustumCulled=!1,t.add(a,c,d),{group:t,materials:[r,s,l],bodyCount:gn.length,peakCount:gn.length,filamentCapacity:i,visibleFilamentCount:i,bridgeFilamentCount:o.bridgeCount,coreFilamentCount:o.coreCount,lowerFilamentCount:o.lowerCount,wideFilamentCount:o.wideCount,foregroundFilamentCount:o.foregroundCount,highlightFilamentCount:o.highlightCount,ribbonSegments:o.ribbonSegments}}function cv(){const n=2387*gn.length,r=new Float32Array(n*3),a=new Float32Array(n*2),o=new Float32Array(n),s=new Float32Array(n),c=new Uint16Array(gn.length*76*30*6);let l=0,d=0;for(let f=0;f<gn.length;f+=1){const[m,g]=gn[f],_=l;for(let p=0;p<=76;p+=1){const u=p/76,E=ct(m,g,u),S=ys(E),w=ki(E),L=et,C=.18+($n(E*2.1,Dn^1910834091)-.5)*.16;for(let T=0;T<=30;T+=1){const B=T/30,b=l*3,M=l*2;r[b]=Ft(E),r[b+1]=ct(L,S,B),r[b+2]=C+($n(E*3.2+B*1.7,Dn^1335520561)-.5)*.08,a[M]=u,a[M+1]=B,o[l]=w,s[l]=f*17.3+u*4.7,l+=1}}for(let p=0;p<76;p+=1)for(let u=0;u<30;u+=1){const S=_+p*31+u,w=S+31;c[d++]=S,c[d++]=w,c[d++]=S+1,c[d++]=w,c[d++]=w+1,c[d++]=S+1}}const h=new Ot;return h.setAttribute("position",new Ue(r,3)),h.setAttribute("aLocal",new Ue(a,2)),h.setAttribute("aStorm",new Ue(o,1)),h.setAttribute("aSeed",new Ue(s,1)),h.setIndex(new Ue(c,1)),n>0&&h.computeBoundingSphere(),h}function uv(){return new Rt({uniforms:{uTime:{value:0},uMotion:{value:Ni?0:1},uDeep:{value:new Ce(oe.metalRain.darkColor)},uMid:{value:new Ce(oe.metalRain.midColor)},uBright:{value:new Ce(oe.metalRain.brightColor)},uBodyBandDensity:{value:oe.metalRain.bodyBandDensity},uBodyBandSpeed:{value:oe.metalRain.bodyBandSpeed},uBodyMirrorStrength:{value:oe.metalRain.bodyMirrorStrength},uBroadSway:{value:oe.waterfallBody.broadSway},uFineSway:{value:oe.waterfallBody.fineSway},uStreakFrequency:{value:oe.waterfallBody.streakFrequency},uFineStreakFrequency:{value:oe.waterfallBody.fineStreakFrequency},uStreakSharpness:{value:oe.waterfallBody.streakSharpness},uFineStreakSharpness:{value:oe.waterfallBody.fineStreakSharpness},uFineStreakWeight:{value:oe.waterfallBody.fineStreakWeight},uBaseMass:{value:oe.waterfallBody.baseMass},uRiseMass:{value:oe.waterfallBody.riseMass},uCloudLow:{value:oe.waterfallBody.cloudLow},uCloudHigh:{value:oe.waterfallBody.cloudHigh},uGapDarkness:{value:oe.waterfallBody.gapDarkness},uStreakBrightness:{value:oe.waterfallBody.streakBrightness},uBottomFeather:{value:oe.waterfallBody.bottomFeather},uOpacity:{value:oe.waterfallBody.opacity},uViewport:{value:br},uPlotBounds:{value:yr},uPlotFeather:{value:Er},uPlotClip:Ha},vertexShader:`
      uniform float uTime;
      uniform float uMotion;
      uniform float uBroadSway;
      uniform float uFineSway;
      attribute vec2 aLocal;
      attribute float aStorm;
      attribute float aSeed;
      varying vec2 vLocal;
      varying float vStorm;
      varying float vSeed;
      varying vec3 vWorld;

      void main() {
        float time = uTime * uMotion;
        vec3 transformed = position;
        float sway = sin(position.y * 2.8 - time * 1.9 + aSeed * 1.7) * uBroadSway;
        sway += sin(position.y * 7.1 - time * 4.2 - position.x) * uFineSway;
        transformed.x += sway * aStorm * (0.45 + aLocal.y * 0.55);
        vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
        vLocal = aLocal;
        vStorm = aStorm;
        vSeed = aSeed;
        vWorld = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime;
      uniform float uMotion;
      uniform vec3 uDeep;
      uniform vec3 uMid;
      uniform vec3 uBright;
      uniform float uBodyBandDensity;
      uniform float uBodyBandSpeed;
      uniform float uBodyMirrorStrength;
      uniform float uStreakFrequency;
      uniform float uFineStreakFrequency;
      uniform float uStreakSharpness;
      uniform float uFineStreakSharpness;
      uniform float uFineStreakWeight;
      uniform float uBaseMass;
      uniform float uRiseMass;
      uniform float uCloudLow;
      uniform float uCloudHigh;
      uniform float uGapDarkness;
      uniform float uStreakBrightness;
      uniform float uBottomFeather;
      uniform float uOpacity;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      varying vec2 vLocal;
      varying float vStorm;
      varying float vSeed;
      varying vec3 vWorld;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n = i.x + i.y * 57.0;
        return mix(mix(hash(n), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
      }
      float fbm(vec2 p) {
        float value = noise(p) * 0.55;
        p = p * 2.03 + vec2(7.1, 13.7);
        value += noise(p) * 0.29;
        p = p * 2.07 + vec2(17.3, 5.9);
        value += noise(p) * 0.16;
        return value;
      }

      void main() {
        float time = uTime * uMotion;

        // Soft horizontal sheet edges.
        float edgeWarp = noise(vec2(vLocal.y * 6.0 - time * 0.6, vSeed));
        float edge = smoothstep(0.02 + edgeWarp * 0.04, 0.17, vLocal.x)
          * (1.0 - smoothstep(0.83, 0.98 - edgeWarp * 0.04, vLocal.x));

        // Vertical volume profile: a heavy bright mass at the base that billows
        // up and fades — the "reverse waterfall". Top feathers into the pearls.
        float baseMass = exp(-pow((vLocal.y - 0.04) * 2.6, 2.0));
        float rise = 1.0 - smoothstep(0.0, 0.8, vLocal.y);
        float topFade = 1.0 - smoothstep(0.6, 1.0, vLocal.y);

        // Soft organic billow (low frequency, slow) — this carries the volume
        // and light/dark, instead of hard procedural stripes.
        float billow = fbm(vec2(vWorld.x * 0.85 + vSeed * 0.3, vLocal.y * 1.7 - time * 0.5));
        float billow2 = fbm(vec2(vWorld.x * 1.7 - vSeed * 0.6, vLocal.y * 3.1 - time * 0.95));
        float cloud = smoothstep(0.22, 0.86, billow * 0.7 + billow2 * 0.42);

        // Vertical water-flow streaks give the bloom real texture (de-blur):
        // bright water columns separated by darker gaps, flowing downward.
        float warp = fbm(vec2(vWorld.x * 0.9 + vSeed, vLocal.y * 1.2 - time * 0.4));
        // 🎛️ 瀑布纹理对应 TUNING.waterfallBody：密度越大越细密，锐度越大越分明。
        float streaks = pow(
          0.5 + 0.5 * sin(vWorld.x * uStreakFrequency + warp * 5.0 + vSeed * 3.0),
          uStreakSharpness
        );
        float fineStreaks = pow(
          0.5 + 0.5 * sin(vWorld.x * uFineStreakFrequency + warp * 7.0),
          uFineStreakSharpness
        ) * uFineStreakWeight;
        float flow = clamp(streaks + fineStreaks, 0.0, 1.0);
        float advect = noise(vec2(vWorld.x * 8.0 + vSeed, vLocal.y * 6.0 + time * 2.0));
        flow *= (0.5 + advect * 0.75);

        // 🎛️ 瀑布密度对应 TUNING.waterfallBody：底部质量、云团对比、缝隙黑度、雨丝亮度。
        float volume = (baseMass * uBaseMass + rise * uRiseMass)
          * mix(uCloudLow, uCloudHigh, cloud)
          * mix(uGapDarkness, uStreakBrightness, flow);

        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);

        // Feather the bottom edge to black so the noisy geometry base never reads
        // as a lit "wave" silhouette near the waterline — it dissolves into the dark.
        // 🎛️ 瀑布底边对应 TUNING.waterfallBody.bottomFeather。
        float bottomFeather = smoothstep(0.0, max(0.0001, uBottomFeather), vLocal.y);
        float intensity = volume * edge * topFade * vStorm * horizontalMask * lowerMask * bottomFeather;
        if (intensity < 0.002) discard;

        // Moving black/silver reflection bands turn the procedural volume into
        // a mercury sheet. Normal alpha blending is used below so the dark
        // chrome cavities remain visible instead of disappearing additively.
        float reflectionSweep = 0.5 + 0.5 * sin(
          vWorld.x * uBodyBandDensity
          + warp * 5.4
          - vLocal.y * 2.1
          - time * uBodyBandSpeed
        );
        float mirrorBand = smoothstep(0.46, 0.9, reflectionSweep + flow * 0.18);
        float cavityBand = smoothstep(0.6, 0.96, 1.0 - reflectionSweep + (1.0 - cloud) * 0.14);
        vec3 color = mix(uDeep, uMid, clamp(cloud * 0.5 + volume * 0.16, 0.0, 1.0));
        color = mix(color, uBright, clamp(
          mirrorBand * uBodyMirrorStrength + flow * 0.3 + baseMass * 0.08,
          0.0,
          1.0
        ));
        color = mix(color, uDeep, cavityBand * 0.72);
        float metalAlpha = clamp(1.0 - exp(-intensity * uOpacity * 0.72), 0.0, 0.92);
        gl_FragColor = vec4(color, metalAlpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Qt,blending:un})}function dv(i,e){const t=new M0,n=14,r=(n+1)*2,a=new Float32Array(r*3),o=new Float32Array(r*2),s=new Uint16Array(n*6);let c=0,l=0;for(let U=0;U<=n;U+=1){const O=U/n;for(let $=0;$<2;$+=1){const K=c*3,W=c*2;a[K]=$===0?-.5:.5,a[K+1]=O,a[K+2]=0,o[W]=$,o[W+1]=O,c+=1}}for(let U=0;U<n;U+=1){const O=U*2,$=O+1,K=O+2,W=O+3;s[l++]=O,s[l++]=$,s[l++]=K,s[l++]=K,s[l++]=$,s[l++]=W}t.setAttribute("position",new Ue(a,3)),t.setAttribute("uv",new Ue(o,2)),t.setIndex(new Ue(s,1));const d=new Float32Array(i*3),h=new Float32Array(i*2),f=new Float32Array(i*4),m=new Float32Array(i*2),g=new Float32Array(i),_=new Float32Array(i*3),p=new Float32Array(i),u=Ui(Dn^1850919347),E=Uu(u),S=Math.round(i*.06),w=S,L=e.downpourCount>0?Math.round(i*.24):0,C=Math.round(i*.6);let T=0,B=0,b=0,M=0;for(let U=0;U<i;U+=1){const O=U<w,$=!O&&U<w+L,K=!O&&!$&&U<w+L+C,W=!O&&!$&&!K;p[U]=$?0:K?1:W?2:3;let ie=18,k=0;const ce=U*3,me=U*2,ge=U*4,Ie=U*2,q=U*3;if($){const R=e.baseCount+e.ambientCount+Math.floor(u()*e.downpourCount);ie=e.hour[R],k=e.stormWeight[R];const X=e.waterfallTop[R],se=Math.max(et,X-G(1.15,1.95,u)),Q=e.near[R];d[ce]=e.baseX[R]+G(-.018,.018,u),d[ce+1]=se,d[ce+2]=e.z[R],h[me]=G(.008,.028,u)*(.84+Q*.26),h[me+1]=G(1.35,2.35,u),f[ge]=Ge(e.speed[R],2.8,6.4),f[ge+1]=G(.006,.025,u),f[ge+2]=e.phase[R],f[ge+3]=G(.26,.56,u),m[Ie]=G(6.5,13,u),m[Ie+1]=G(.34,.58,u),_[q]=e.windSpeed[R],_[q+1]=e.driftX[R],_[q+2]=e.driftZ[R],T+=1}else{for(let D=0;D<14&&(ie=E(),k=ki(ie),!(k>.08&&u()<Math.pow(k,.58)));D+=1);const R=u(),X=K&&u()<.34,se=Math.max(et,et+(O?G(-.02,.16,u):W?G(-.08,.18,u):X?G(.18,.72,u):G(-.12,.2,u))),Q=Math.max(.55,ys(ie)-se),Le=O?G(.018,.044,u):W?G(.036,.082,u):u()<.82?G(.007,.022,u):G(.022,.042,u),ye=u(),Ne=W?G(2.6,4.2,u):ye<.28?G(3,4,u):ye<.68?G(4,5.4,u):G(5.4,7,u);d[ce]=Ft(ie)+G(-.08,.08,u),d[ce+1]=se,d[ce+2]=Va(O?G(.7,1,u):R,u),h[me]=Le,h[me+1]=Q*(K?X?G(.34,.66,u):G(.72,1.1,u):W?G(.5,.92,u):G(.68,1.02,u)),f[ge]=Ne,f[ge+1]=G(.006,W?.045:.034,u)*(.78+R*.36),f[ge+2]=u()*Math.PI*2,f[ge+3]=O?G(.54,.92,u):K?G(.48,.9,u)*(.82+R*.26):W?G(.34,.64,u):G(.3,.56,u),m[Ie]=K?G(4,9.4,u):W?G(2.6,6.8,u):G(4.8,10,u),m[Ie+1]=K?G(.22,.46,u):W?G(.18,.42,u):G(.28,.52,u),_[q]=G(.12,.42,u),_[q+1]=G(.0015,W?.007:.0055,u),_[q+2]=G(.0015,W?.006:.0045,u),O?M+=1:K?B+=1:W&&(b+=1)}g[U]=k}t.setAttribute("aAnchor",new Ai(d,3)),t.setAttribute("aDimensions",new Ai(h,2)),t.setAttribute("aFlow",new Ai(f,4)),t.setAttribute("aBreaks",new Ai(m,2)),t.setAttribute("aStorm",new Ai(g,1)),t.setAttribute("aDrift",new Ai(_,3)),t.setAttribute("aFilamentClass",new Ai(p,1)),t.instanceCount=i;const P=t.clone();return P.instanceCount=S,{geometry:t,highlightGeometry:P,highlightCount:S,bridgeCount:T,coreCount:B,lowerCount:b,wideCount:b,foregroundCount:M,ribbonSegments:n}}function Sc(i){return new Rt({uniforms:{uTime:{value:0},uMotion:{value:Ni?0:1},uDeep:{value:new Ce(oe.metalRain.darkColor)},uMid:{value:new Ce(oe.metalRain.midColor)},uBright:{value:new Ce(oe.metalRain.brightColor)},uFilamentBandDensity:{value:oe.metalRain.filamentBandDensity},uFilamentBandSpeed:{value:oe.metalRain.filamentBandSpeed},uFilamentMirrorStrength:{value:i?oe.metalRain.highlightMirrorStrength:oe.metalRain.filamentMirrorStrength},uEdgeWidth:{value:i?oe.waterfallFilaments.highlightEdgeWidth:oe.waterfallFilaments.edgeWidth},uOpacity:{value:i?oe.waterfallFilaments.highlightOpacity:oe.waterfallFilaments.opacity},uBottomMistOpacity:{value:oe.waterfallFilaments.bottomMistOpacity},uViewport:{value:br},uPlotBounds:{value:yr},uPlotFeather:{value:Er},uPlotClip:Ha},vertexShader:`
      uniform float uTime;
      uniform float uMotion;
      attribute vec3 aAnchor;
      attribute vec2 aDimensions;
      attribute vec4 aFlow;
      attribute vec2 aBreaks;
      attribute float aStorm;
      attribute vec3 aDrift;
      attribute float aFilamentClass;
      varying vec2 vUv;
      varying vec4 vFlow;
      varying vec2 vBreaks;
      varying float vStorm;
      varying float vFogDepth;
      varying float vFilamentClass;
      varying float vTurbulence;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n = i.x + i.y * 57.0;
        return mix(mix(hash(n), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
      }
      float fbm(vec2 p) {
        float value = noise(p) * 0.55;
        p = p * 2.03 + vec2(7.1, 11.3);
        value += noise(p) * 0.29;
        p = p * 2.11 + vec2(13.9, 5.7);
        value += noise(p) * 0.16;
        return value;
      }

      void main() {
        float time = uTime * uMotion;
        float localY = position.y;
        float bridgeClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 0.0));
        float coreClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 1.0));
        float wideClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 2.0));
        float foregroundClass = 1.0 - smoothstep(0.05, 0.95, abs(aFilamentClass - 3.0));
        vec3 center = aAnchor;
        center.x += sin(time * aDrift.x + aFlow.z) * aDrift.y;
        center.z += cos(time * aDrift.x * 0.72 + aFlow.z * 0.7) * aDrift.z;
        center.y += localY * aDimensions.y;
        float fallTime = time * (0.22 + aFlow.x * 0.075);
        float localWarp = fbm(vec2(localY * 3.2 + aFlow.z * 0.43, fallTime * 0.55 + aAnchor.x * 0.18));
        float curl = fbm(vec2(
          localY * (6.0 + wideClass * 1.2) + localWarp * 1.1,
          aFlow.z * 0.77 - fallTime * 0.9
        )) * 2.0 - 1.0;
        float branch = sin(localY * (12.0 + wideClass * 2.0) + aFlow.z + fallTime * 1.45) * 0.45;
        branch += sin(localY * 31.0 - aFlow.z * 1.9 - fallTime * 2.15) * 0.16;
        branch += curl * (0.18 + foregroundClass * 0.08);
        float bendEnvelope = smoothstep(0.02, 0.22, localY)
          * (0.16 + localY * 0.48)
          * (1.0 - bridgeClass * 0.18);
        center.x += branch * aFlow.y * bendEnvelope * (0.42 + wideClass * 0.18 + foregroundClass * 0.12);
        center.z += curl * aFlow.y * (0.045 + wideClass * 0.04) * smoothstep(0.08, 0.74, localY);
        vec4 mvPosition = modelViewMatrix * vec4(center, 1.0);
        float pinch = fbm(vec2(localY * 9.0 + aFlow.z, fallTime * 0.92));
        float widthPulse = 0.7
          + pinch * 0.28
          + sin(localY * 18.0 + aFlow.z * 1.7) * 0.07;
        widthPulse *= mix(0.94, 1.18, wideClass);
        widthPulse *= mix(1.0, 1.08, foregroundClass);
        mvPosition.x += position.x * aDimensions.x * widthPulse;
        vUv = uv;
        vFlow = aFlow;
        vBreaks = aBreaks;
        vStorm = aStorm;
        vFogDepth = -mvPosition.z;
        vFilamentClass = aFilamentClass;
        vTurbulence = clamp(localWarp * 0.5 + abs(curl) * 0.26 + pinch * 0.24, 0.0, 1.08);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime;
      uniform float uMotion;
      uniform vec3 uDeep;
      uniform vec3 uMid;
      uniform vec3 uBright;
      uniform float uFilamentBandDensity;
      uniform float uFilamentBandSpeed;
      uniform float uFilamentMirrorStrength;
      uniform float uEdgeWidth;
      uniform float uOpacity;
      uniform float uBottomMistOpacity;
      uniform vec2 uViewport;
      uniform vec4 uPlotBounds;
      uniform vec3 uPlotFeather;
      uniform float uPlotClip;
      varying vec2 vUv;
      varying vec4 vFlow;
      varying vec2 vBreaks;
      varying float vStorm;
      varying float vFogDepth;
      varying float vFilamentClass;
      varying float vTurbulence;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float n = i.x + i.y * 57.0;
        return mix(mix(hash(n), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
      }

      void main() {
        float time = uTime * uMotion;
        float centerDistance = abs(vUv.x - 0.5) * 2.0;
        float bridgeClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 0.0));
        float coreClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 1.0));
        float wideClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 2.0));
        float foregroundClass = 1.0 - smoothstep(0.05, 0.95, abs(vFilamentClass - 3.0));
        float raggedEdge = noise(vec2(vFlow.z * 4.1 + vUv.y * 8.2, time * 0.22 + vUv.x * 2.3));
        // 🎛️ 瀑布雨丝宽度对应 TUNING.waterfallFilaments。
        float edgeWidth = uEdgeWidth
          + wideClass * 0.1
          + foregroundClass * 0.05;
        float core = 1.0 - smoothstep(${i?"0.04":"0.08"}, edgeWidth, centerDistance + (raggedEdge - 0.5) * 0.18);
        float endVariation = noise(vec2(vFlow.z, vBreaks.x));
        float bottomFade = smoothstep(0.0, 0.04 + endVariation * 0.075, vUv.y);
        float topFade = 1.0 - smoothstep(0.8 + endVariation * 0.12, 1.0, vUv.y);
        float advectedY = vUv.y * vBreaks.x + time * vFlow.x;
        ${i?`
        float fastPulse = 0.5 + 0.5 * sin(advectedY * 2.95 + vFlow.z * 6.1);
        float secondaryPulse = 0.5 + 0.5 * sin(advectedY * 1.22 - vFlow.z * 3.7);
        float streamNoise = fastPulse * 0.68 + noise(vec2(vFlow.z * 9.0 + vUv.x * 2.0, advectedY * 0.5)) * 0.32;
        float continuity = smoothstep(0.44, 0.82, fastPulse + secondaryPulse * 0.16 + vTurbulence * 0.1);
        `:`
        float domainWarp = noise(vec2(vFlow.z * 2.3, advectedY * 0.26));
        float streamNoise = noise(vec2(vFlow.z * 7.1 + domainWarp * 1.2 + vUv.x * 1.2, advectedY));
        float fineBreak = 0.5 + 0.5 * sin(advectedY * 2.65 + vFlow.z * 5.7 + domainWarp * 2.2);
        float secondaryBreak = noise(vec2(vFlow.z * 13.0 - vUv.x * 1.4, advectedY * 0.62 + domainWarp));
        float continuity = smoothstep(
          vBreaks.y - 0.18,
          vBreaks.y + 0.18,
          streamNoise * 0.52 + fineBreak * 0.3 + secondaryBreak * 0.18 + vTurbulence * 0.08
        );
        `}
        continuity = mix(continuity, 0.58 + continuity * 0.42, coreClass);
        continuity = mix(continuity, 0.38 + continuity * 0.62, wideClass);
        float verticalInk = smoothstep(
          0.46,
          0.92,
          noise(vec2(vFlow.z * 21.0 + vUv.x * 1.2, advectedY * 0.2))
        );
        float darkCut = smoothstep(
          0.5,
          0.9,
          noise(vec2(vFlow.z * 5.8 - vUv.x * 1.1, advectedY * 0.13 + 8.0))
        );
        float columnVoid = smoothstep(
          0.5,
          0.88,
          noise(vec2(vFlow.z * 3.6 + vUv.x * 0.7, floor(vUv.y * 7.0) * 0.37 + time * 0.08))
        );
        float columnFlicker = 0.72 + noise(vec2(vFlow.z * 11.0, vUv.y * 3.0 - time * 0.3)) * 0.48;
        float bottomMist = (1.0 - smoothstep(0.0, 0.22, vUv.y))
          * smoothstep(0.18, 0.72, streamNoise + vTurbulence * 0.2)
          * ${i?"0.0":"1.0"};
        float filament = core * bottomFade * topFade * continuity;
        float fogFactor = 1.0 - exp(-0.00046 * vFogDepth * vFogDepth);
        vec2 screenUv = vec2(
          gl_FragCoord.x / uViewport.x,
          1.0 - gl_FragCoord.y / uViewport.y
        );
        float horizontalMask = smoothstep(
          uPlotBounds.x,
          uPlotBounds.x + uPlotFeather.x,
          screenUv.x
        ) * (1.0 - smoothstep(
          uPlotBounds.y - uPlotFeather.x,
          uPlotBounds.y,
          screenUv.x
        ));
        horizontalMask = mix(1.0, horizontalMask, uPlotClip);
        float lowerMask = 1.0 - smoothstep(
          uPlotBounds.w - uPlotFeather.z,
          uPlotBounds.w,
          screenUv.y
        );
        lowerMask = mix(1.0, lowerMask, uPlotClip);
        float classOpacity = 0.66
          + bridgeClass * 0.0
          + coreClass * 0.78
          + wideClass * 0.34
          + foregroundClass * 0.22;
        // 🎛️ 瀑布雨丝透明度对应 TUNING.waterfallFilaments。
        float alpha = (filament + bottomMist * uBottomMistOpacity)
          * vFlow.w
          * vStorm
          * classOpacity
          * uOpacity
          * (1.0 - fogFactor * 0.44) * horizontalMask * lowerMask;
        alpha *= columnFlicker;
        alpha *= mix(1.0, 0.6, darkCut * (1.0 - foregroundClass * 0.35));
        alpha *= mix(1.0, 0.56, columnVoid * (1.0 - bottomMist * 0.45) * (1.0 - foregroundClass * 0.35));
        float mercuryWave = 0.5 + 0.5 * sin(
          advectedY * uFilamentBandDensity
          + vFlow.z * 5.8
          + centerDistance * 2.6
          - time * uFilamentBandSpeed
        );
        float mercuryMirror = smoothstep(0.46, 0.88, mercuryWave + streamNoise * 0.18);
        vec3 color = mix(uDeep, uMid, 0.28 + streamNoise * 0.32 + bottomMist * 0.12);
        color = mix(color, uBright, clamp(
          mercuryMirror * uFilamentMirrorStrength
          + ${i?"0.28":"core * 0.12 + verticalInk * 0.16"},
          0.0,
          1.0
        ));
        color = mix(color, uDeep, (darkCut * 0.48 + columnVoid * 0.28) * (1.0 - foregroundClass * 0.35));
        if (alpha < 0.001) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Qt,blending:i?pr:un})}function Pu(i){const e=new Float32Array(i*3),t=new Float32Array(i*3),n=new Float32Array(i*3),r=new Float32Array(i),a=new Float32Array(i),o=new Float32Array(i),s=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=Ui(F0),_=Ss(.36,1.02,g);for(let u=0;u<i;u+=1){const E=_(),S=fr(E),w=Li(E),L=u*3,C=.34+S*.52,T=Ft(E)+G(-C,C,g),B=g()<.62?G(.35,mi.frontZ*1.72,g):Va(.54,g);e[L]=T,e[L+1]=et+G(.018,.06,g),e[L+2]=B,t.set(e.subarray(L,L+3),L),c[u]=E,l[u]=S,d[u]=w,h[u]=ki(E),f[u]=g()*Math.PI*2,m[u]=G(.018,.052,g),a[u]=G(.08,.32,g)*(.32+Math.pow(S,.7)*1.25)*w,r[u]=a[u]*(.1+h[u]*.7),o[u]=G(.7,2.6,g)*(.74+S*.3),s[u]=g()<.42?G(2.4,5.4,g):G(1.18,2.3,g),Ev(n,L,S,G(.36,.86,g),g)}return{points:Lu({positions:e,colors:n,alphas:r,sizes:o,aspects:s,horizontal:1,opacity:oe.glint.opacity,maxSize:oe.glint.maxSize,renderOrder:5}),data:{positions:e,original:t,alphas:r,baseAlpha:a,hour:c,strength:l,presence:d,storm:h,shimmer:f,speed:m,count:i}}}function _s(i,e,t){const n=i.data;for(let r=0;r<n.count;r+=1){const a=r*3,o=os(n.hour[r],n.positions[a],n.positions[a+2]);n.positions[a]=n.original[a]+Math.sin(e*.34+n.shimmer[r])*.018,n.positions[a+2]+=n.speed[r]*t,n.positions[a+2]>mi.frontZ*1.74&&(n.positions[a+2]=G(-10.4*.55,-10.4*.16)),n.positions[a+1]=et+.026+Math.sin(e*1.35+n.shimmer[r])*.006;const s=.78+Math.sin(e*2.1+n.shimmer[r])*.18;n.alphas[r]=Ge(n.baseAlpha[r]*(.1+n.storm[r]*.7)*s*(1+o*.52+pe.burst*Wa(n.hour[r],pe.selectedHour)*.18),0,oe.glint.alphaMax)}i.points.geometry.attributes.position.needsUpdate=!0,i.points.geometry.attributes.aAlpha.needsUpdate=!0}function Du(i,e,t){const n=Math.floor(i*.55),r=Math.floor(i*.35),a=0,o=Mc(n,{horizontal:1,opacity:oe.foam.opacity,maxSize:oe.foam.maxSize,renderOrder:5,blending:pr}),s=Mc(r,{horizontal:0,opacity:oe.spray.opacity,maxSize:oe.spray.maxSize,renderOrder:6,blending:un}),c=hv(a);return{foam:o.points,droplets:s.points,crowns:c.lines,data:{count:i,foam:o,droplets:s,crowns:c,eventRate:e,rippleRate:t,emissionCredit:e*.2,rippleCredit:t*.2,random:Ui(I0),totalPeakCollisions:0,emittedEvents:0,windowEmitted:0,windowStartedAt:0,currentEmissionRate:0,activeCount:0,activeFoamCount:0,activeDropletCount:0,activeCrownCount:0,staticSeedCount:0}}}function Mc(i,{horizontal:e,opacity:t,maxSize:n,renderOrder:r,blending:a}){const o=new Float32Array(i*3),s=new Float32Array(i*3),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=new Uint8Array(i),_=new Float32Array(i),p=new Float32Array(i),u=new Float32Array(i),E=new Float32Array(i),S=new Float32Array(i),w=new Float32Array(i),L=new Float32Array(i),C=new Float32Array(i),T=new Float32Array(i),B=new Float32Array(i),b=new Float32Array(i),M=new Float32Array(i);for(let U=0;U<i;U+=1)o[U*3+1]=-100;return{points:Lu({positions:o,colors:s,alphas:c,sizes:d,aspects:f,horizontal:e,opacity:t,maxSize:n,renderOrder:r,dynamicColor:!0,dynamicShape:!0,blending:a}),count:i,cursor:0,positions:o,colors:s,alphas:c,baseAlpha:l,sizes:d,baseSizes:h,aspects:f,baseAspects:m,active:g,startedAt:_,lifetime:p,originX:u,originZ:E,velocityX:S,velocityY:w,velocityZ:L,gravity:C,phase:T,hour:B,strength:b,near:M}}function hv(i){const e=new Float32Array(i*6),t=new Float32Array(i*6),n=new Float32Array(i*2),r=new Float32Array(i),a=new Uint8Array(i),o=new Uint8Array(i),s=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=new Float32Array(i),_=new Float32Array(i),p=new Float32Array(i);for(let w=0;w<i;w+=1)e[w*6+1]=-100,e[w*6+4]=-100;const u=new Ot;u.setAttribute("position",new Ue(e,3).setUsage(Nt)),u.setAttribute("aColor",new Ue(t,3).setUsage(Nt)),u.setAttribute("aAlpha",new Ue(n,1).setUsage(Nt));const E=new Rt({uniforms:{uFogDensity:{value:Oi.fog.density}},vertexShader:`
      attribute vec3 aColor;
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;

      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vColor = aColor;
        vAlpha = aAlpha;
        vFogDepth = -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uFogDensity;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vFogDepth;

      void main() {
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        gl_FragColor = vec4(vColor, vAlpha * (1.0 - fogFactor * 0.3));
      }
    `,transparent:!0,depthWrite:!1,blending:pr}),S=new au(u,E);return S.renderOrder=8,{lines:S,count:i,cursor:0,positions:e,colors:t,alphas:n,baseAlpha:r,active:a,kind:o,startedAt:s,lifetime:c,originX:l,originZ:d,angle:h,radius:f,height:m,phase:g,hour:_,strength:p}}function fv(i,e,t){const n=i.data;n.emissionCredit=Math.min(n.eventRate*.34,n.emissionCredit+n.eventRate*t),n.rippleCredit=Math.min(n.rippleRate*.55,n.rippleCredit+n.rippleRate*t);const r=e-n.windowStartedAt;r>=.5&&(n.currentEmissionRate=n.windowEmitted/Math.max(.001,r),n.windowEmitted=0,n.windowStartedAt=e)}function pv(i,e,t,n,r,a,o,s){i.data;const c=ki(n);return Ge(r,0,1)<=0?0:c}function mv(i,e,t,n,r,a,o,s){const c=i.data;if(c.rippleCredit<1)return;const l=o===_t.DOWNPOUR?1:o===_t.BASE?.48:.28,d=(.012+a*.14)*l;c.random()>d||(c.rippleCredit-=1,xs(e,t,n,.13+r*.25+a*.24,!1))}function Lu({positions:i,colors:e,alphas:t,sizes:n,aspects:r,orientations:a=null,horizontal:o,opacity:s,maxSize:c,renderOrder:l,dynamicColor:d=!1,dynamicShape:h=!1,blending:f=un}){const m=i.length/3,g=a??new Float32Array(m).fill(o),_=new Ot;_.setAttribute("position",new Ue(i,3).setUsage(Nt)),_.setAttribute("aColor",d?new Ue(e,3).setUsage(Nt):new Ue(e,3)),_.setAttribute("aAlpha",new Ue(t,1).setUsage(Nt)),_.setAttribute("aSize",h?new Ue(n,1).setUsage(Nt):new Ue(n,1)),_.setAttribute("aAspect",h?new Ue(r,1).setUsage(Nt):new Ue(r,1)),_.setAttribute("aHorizontal",h?new Ue(g,1).setUsage(Nt):new Ue(g,1));const p=new Rt({uniforms:{uPixelRatio:{value:li},uFogDensity:{value:Oi.fog.density},uOpacity:{value:s},uMaxSize:{value:c}},vertexShader:`
      uniform float uPixelRatio;
      uniform float uMaxSize;
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aSize;
      attribute float aAspect;
      attribute float aHorizontal;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHorizontal;
      varying float vFogDepth;

      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float depthScale = clamp(19.0 / max(5.4, -mvPosition.z), 0.76, 1.98);
        vColor = aColor;
        vAlpha = aAlpha;
        vAspect = aAspect;
        vHorizontal = aHorizontal;
        vFogDepth = -mvPosition.z;
        gl_PointSize = clamp(aSize * uPixelRatio * depthScale, 0.72 * uPixelRatio, uMaxSize * uPixelRatio);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uFogDensity;
      uniform float uOpacity;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vAspect;
      varying float vHorizontal;
      varying float vFogDepth;

      void main() {
        vec2 point = gl_PointCoord - vec2(0.5);
        vec2 verticalShape = vec2(point.x * vAspect, point.y);
        vec2 horizontalShape = vec2(point.x / max(1.0, vAspect), point.y);
        vec2 shape = mix(verticalShape, horizontalShape, vHorizontal);
        float distanceToEdge = length(shape);
        float edge = 1.0 - smoothstep(0.38, 0.5, distanceToEdge);
        if (edge < 0.01) discard;

        float core = exp(-dot(shape, shape) * 6.8);
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        vec3 color = vColor * (0.82 + core * 0.48);
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.62);
        gl_FragColor = vec4(color, min(0.74, edge * vAlpha * uOpacity * (1.0 - fogFactor * 0.44)));
      }
    `,transparent:!0,depthWrite:!1,blending:f}),u=new hs(_,p);return u.renderOrder=l,u}function gv(i){const{resX:e,resZ:t,xMin:n,xMax:r,zMin:a,zMax:o}=Ci,s=160,c={type:Xr,format:mn,minFilter:Tt,magFilter:Tt,depthBuffer:!1,stencilBuffer:!1,wrapS:yn,wrapT:yn};let l=new Xn(e,t,c),d=new Xn(e,t,c);const h=new Jc(-1,1,1,-1,0,1),f=i.getRenderTarget();i.setRenderTarget(l),i.clear(),i.setRenderTarget(d),i.clear(),i.setRenderTarget(f);const m=new Rt({uniforms:{uField:{value:null},uTexel:{value:new He(1/e,1/t)},uDamping:{value:oe.ripple.damping}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uField;
      uniform vec2 uTexel;
      uniform float uDamping;
      varying vec2 vUv;
      void main() {
        vec4 info = texture2D(uField, vUv);
        float l = texture2D(uField, vec2(vUv.x - uTexel.x, vUv.y)).r;
        float r = texture2D(uField, vec2(vUv.x + uTexel.x, vUv.y)).r;
        float t = texture2D(uField, vec2(vUv.x, vUv.y + uTexel.y)).r;
        float b = texture2D(uField, vec2(vUv.x, vUv.y - uTexel.y)).r;
        float average = (l + r + t + b) * 0.25;
        info.g += (average - info.r) * 2.0;
        info.g *= uDamping;
        info.r += info.g;
        float edge = smoothstep(0.0, 0.05, vUv.x)
          * smoothstep(0.0, 0.05, vUv.y)
          * smoothstep(0.0, 0.05, 1.0 - vUv.x)
          * smoothstep(0.0, 0.05, 1.0 - vUv.y);
        info.rg *= edge;
        gl_FragColor = info;
      }
    `,depthTest:!1,depthWrite:!1}),g=new Jo;g.add(new wt(new Ln(2,2),m));const _=new Float32Array(s*3),p=new Float32Array(s),u=new Ot;u.setAttribute("position",new Ue(_,3).setUsage(Nt)),u.setAttribute("aAmp",new Ue(p,1).setUsage(Nt)),u.setDrawRange(0,0);const E=new Rt({uniforms:{uDropPx:{value:Math.max(5,e/210)}},vertexShader:`
      attribute float aAmp;
      uniform float uDropPx;
      varying float vAmp;
      void main() {
        vAmp = aAmp;
        gl_Position = vec4(position.xy, 0.0, 1.0);
        gl_PointSize = uDropPx;
      }
    `,fragmentShader:`
      varying float vAmp;
      void main() {
        vec2 c = (gl_PointCoord - 0.5) * 2.0;
        float d = length(c);
        if (d > 1.0) discard;
        float shape = exp(-d * d * 8.5);
        gl_FragColor = vec4(-shape * vAmp, 0.0, 0.0, 1.0);
      }
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:Pc,blendEquation:ri,blendSrc:Wo,blendDst:Wo}),S=new Jo;return S.add(new hs(u,E)),{rtA:l,rtB:d,simCamera:h,simMaterial:m,simScene:g,dropScene:S,dropGeometry:u,dropMaterial:E,dropPositions:_,dropAmps:p,dropCount:0,maxDrops:s,fieldBounds:{xMin:n,xMax:r,zMin:a,zMax:o},texture:l.texture}}function xs(i,e,t,n,r,a){if(i.dropCount>=i.maxDrops)return;const o=i.fieldBounds,s=(Ge(e,o.xMin,o.xMax)-o.xMin)/(o.xMax-o.xMin),c=(Ge(t,o.zMin,o.zMax)-o.zMin)/(o.zMax-o.zMin),l=i.dropCount;i.dropPositions[l*3]=s*2-1,i.dropPositions[l*3+1]=c*2-1,i.dropPositions[l*3+2]=0,i.dropAmps[l]=(r?oe.ripple.dropClick:oe.ripple.dropRain)*(.6+n),i.dropCount+=1}function vv(i,e,t){const n=e.getRenderTarget(),r=e.autoClear;i.dropCount>0&&(i.dropGeometry.setDrawRange(0,i.dropCount),i.dropGeometry.attributes.position.needsUpdate=!0,i.dropGeometry.attributes.aAmp.needsUpdate=!0,e.autoClear=!1,e.setRenderTarget(i.rtA),e.render(i.dropScene,i.simCamera),e.autoClear=r),i.simMaterial.uniforms.uField.value=i.rtA.texture,e.setRenderTarget(i.rtB),e.render(i.simScene,i.simCamera);const a=i.rtA;i.rtA=i.rtB,i.rtB=a,i.texture=i.rtA.texture,e.setRenderTarget(n),e.autoClear=r,qn.material.uniforms.uHeightField.value=i.texture,re.dataset.activeRipples=String(i.dropCount),i.dropCount=0}function _v(i){qn.material.uniforms.uTime.value=Ni?0:i;var d=new Date();var h=d.getHours()+d.getMinutes()/60+d.getSeconds()/3600;var t=(h-6)/12;var ang=t*Math.PI;var elev=Math.sin(ang);var azim=Math.cos(ang);var dirX=azim*0.5;var dirY=Math.max(0.01,elev);var dirZ=0.3;qn.material.uniforms.uSunDirection.value.set(dirX,dirY,dirZ);qn.material.uniforms.uSunElevation.value=Math.max(0,elev);qn.material.uniforms.uSunIntensity.value=Math.max(0,elev);var sc;if(h<6||h>=19){sc=[0,0,0]}else if(h<8){sc=[1,0.6,0.3]}else if(h<11){sc=[1,0.95,0.85]}else if(h<14){sc=[1,1,1]}else if(h<17){sc=[1,0.92,0.8]}else{sc=[1,0.5,0.2]};qn.material.uniforms.uSunColor.value.setRGB(sc[0],sc[1],sc[2])}function Ra(i,e,t){var h,f;t||(i.respawnCycle[e]+=1);const n=((h=i.resetSeed)==null?void 0:h[e])||ns,r=((f=i.seedIndex)==null?void 0:f[e])??e,a=Ov(n,r,i.respawnCycle[e]),o=i.strength[e],s=i.near[e],c=i.curtainLayer[e],l=Math.max(.8,i.top[e]-et),d=ct(.18,.68,Math.pow(o,.82));if(i.baseX[e]=Ge(Ft(i.hour[e])+G(-d,d,a),Ft(0)+.12,Ft(24)-.12),i.z[e]=Va(s,a),i.role[e]===_t.AMBIENT){i.headY[e]=cn-.03;return}if(c===1){const m=et+l*G(.3,.44,a);i.headY[e]=G(et+i.length[e]*.72,m+i.length[e]*.4,a);return}if(c===0){i.headY[e]=G(et+i.length[e]*.78,i.top[e]+i.length[e]*.44,a);return}i.headY[e]=t?G(i.top[e]*.72,i.top[e]+i.length[e],a):i.top[e]+i.length[e]+G(.04,1.1,a)}function Uu(i=Math.random){if(!gn.length)return Ss(0,1,i,!0);const e=gn.map(([o,s])=>xv(o,s,i)),t=gn.map(([o,s])=>{let l=0;for(let d=0;d<24;d+=1){const h=ct(o,s,(d+.5)/24);l+=.02+ki(h)*(.7+Ga(h))}return l*Math.max(.1,s-o)}),n=t.reduce((o,s)=>o+s,0);if(!Number.isFinite(n)||n<=0)return()=>G(.04,23.96,i);const r=[];let a=0;for(const o of t)a+=o/n,r.push(a);return()=>{const o=i(),s=Math.max(0,r.findIndex(c=>o<=c));return e[s]()}}function xv(i,e,t){const r=(e-i)/64,a=Array.from({length:64},(l,d)=>{const h=i+(d+.5)*r,f=Ga(h);return .001+Math.pow(Math.max(.001,f-.2),1.42)*Fu(h)}),o=a.reduce((l,d)=>l+d,0);if(!Number.isFinite(o)||o<=0)return()=>G(.04,23.96,t);const s=[];let c=0;for(const l of a)c+=l/o,s.push(c);return()=>{const l=t(),d=Math.max(0,s.findIndex(h=>l<=h));return Ge(i+(d+t())*r,i,e)}}function Ss(i,e,t=Math.random,n=!1,r=2.35,a=!1){const o=n?96:24,s=24/o,c=Array.from({length:o},(f,m)=>{const g=(m+.5)*s,_=Ga(g),p=Li(g),u=n?Fu(g):1,E=a?Sv(g):1,S=.55+Math.max(0,e)*.35,w=Math.pow(_,S),L=i*Math.pow(_,.85);return p*(L+w*r*u)*E}),l=c.reduce((f,m)=>f+m,0);if(!Number.isFinite(l)||l<=0)return()=>G(.04,23.96,t);const d=[];let h=0;for(const f of c)h+=f/l,d.push(h);return()=>{const f=t(),g=Math.max(0,d.findIndex(E=>f<=E))*s;if(n)return Ge(g+t()*s,.04,23.96);const _=Ga(g),p=ct(.54,.95,Math.pow(_,.62)),u=((t()+t()+t())/3-.5)*2;return Ge(g+.5+u*p,.04,23.96)}}function Sv(i){const t=i>=12?2.3:1.45,n=Math.abs(i/12-1);return Ge(t*Math.pow(n,t-1),.42,2.3)}function Fu(i){const e=$n(i*.62,Dn),t=$n(i*2.45,Dn^2135587861);return .68+e*.38+t*.34}function Ms(i){const e=Ge(i,0,24),t=Math.floor(e),n=Math.min(t+1,xt.length-1),r=e-t;return ct(xt[t],xt[n],r)}function Li(i){const e=Ge(i,0,24),t=Math.floor(e),n=Math.min(t+1,xt.length-1),r=e-t,a=xt[t]>0,o=xt[n]>0;if(!a&&!o)return 0;const s=.68;let c=1;return a||(c*=kt(0,s,r)),o||(c*=1-kt(1-s,1,r)),Ge(c,0,1)}function ja(i){return Ms(i)*Li(i)}function Ga(i){return Zt<=0?0:Ge(ja(i)/Zt,0,1)}function fr(i){return Ge(ja(i)/ka,0,2)}function yc(i){const e=Math.pow(Ge(i,0,1),.58),t=Ge(i-1,0,1)*.2;return e+t}function Iu(i){const e=Ge(i/ka,0,1);return e<=0?0:.05+Math.pow(e,.62)*.95}function rs(i){return Ge(ja(i)/Math.max(.001,ps),0,1)}function Nu(){Zt=xt.reduce((e,t)=>Math.max(e,t),0),Ii=Zt>0?Zt:ts,ps=Ii,cn=et+Pr.worldHeight,gn=yv()}function Pa(i){if(!Number.isFinite(i)||i<=0)return ts;const t=10**Math.floor(Math.log10(i)),n=i/t,a=(n<=1?1:n<=2?2:n<=5?5:10)*t;return Number.isFinite(a)?a:i}function Mv(){return[0,Ii*.5,Ii]}function as(i){return Math.abs(i)>=1e6?i.toExponential(1):Math.abs(i)>=1e3?i.toLocaleString("zh-CN",{maximumFractionDigits:1}):Number.isInteger(i)?String(i):String(Number(i.toFixed(1)))}function yv(){if(Zt<=0)return[];const i=.25,e=[];let t=null;for(let r=0;r<=24+i*.5;r+=i){const a=Math.min(24,r),o=ki(a)>.08;if(o&&t==null&&(t=Math.max(0,a-i)),(!o||a===24)&&t!=null){const s=o&&a===24?24:Math.min(24,a+i);e.push([t,s]),t=null}}const n=[];for(const r of e){const a=n[n.length-1];a&&r[0]-a[1]<=.5?a[1]=r[1]:n.push([...r])}return n.filter(([r,a])=>a-r>=.5)}function ki(i){return kt(5.8,7.8,ja(i))}function ys(i){const e=rs(i),t=ct(.91,1.09,$n(i*1.55,Dn^1374857533)),n=Ge(.95+Math.pow(e,.92)*5.8*t,1.2,8.8),r=ct(.92,1.08,$n(i*3.4,Dn^382051033));return et+n*.54*r}function ko(i,e,t){i.stormWeight[e]=ki(t),i.waterfallTop[e]=ys(t),i.waterfallFeather[e]=ct(1.35,2.05,$n(t*2.7+e*.013,Dn^1982518513))}function Ho(i=Math.random){const e=i();return e<.38?G(.72,1,i):e<.68?G(.38,.72,i):G(0,.38,i)}function Va(i,e=Math.random){const t=(i-.5)*2;return kr.center+t*kr.thickness+G(-.22,kr.jitter,e)}function os(i,e,t){const n=pe.selectedActive?Wa(i,pe.selectedHour)*.44:0;if(!pe.pointerActive)return n;const r=Wa(i,pe.pointerHour),a=1-Ge(Math.hypot(e-pe.pointerWorld.x,(t-pe.pointerWorld.z)*.7)/3.2,0,1);return Math.max(n,r*a*.92)}function Wa(i,e){const t=Math.abs(i-e);return Math.max(0,1-t/2.25)}function Ec(i,e,t,n,r=Math.random){const a=t>.62&&r()<.46?It.pearlBright:r()<.68?It.pearlMid:It.pearlDark,o=n*(.76+t*.28);i[e]=a.r*o,i[e+1]=a.g*o,i[e+2]=a.b*o}function Ta(i,e,t,n,r,a,o=Math.random){const s=r===_t.AMBIENT?.01:a===2?.72:.018,c=o(),l=c<s?It.pearlBright:c<s+.68?It.pearlMid:It.pearlDark,d=n*(.76+t*.28);i[e]=l.r*d,i[e+1]=l.g*d,i[e+2]=l.b*d}function Ev(i,e,t,n,r=Math.random){const a=t>.58&&r()<.34?It.waterBright:r()<.7?It.waterMid:It.waterDark,o=n*(.74+t*.24);i[e]=a.r*o,i[e+1]=a.g*o,i[e+2]=a.b*o}function Ft(i){return(i/24-.5)*Pr.plotWidth}function bv(i){return Ge((i/Pr.plotWidth+.5)*24,0,24)}function wv(i){var e,t;pe.pointerDown=!0,pe.pointerMoved=!1,pe.activePointerId=i.pointerId,(t=(e=Qe.domElement).setPointerCapture)==null||t.call(e,i.pointerId),pe.downClient.x=i.clientX,pe.downClient.y=i.clientY,pe.downView.x=pe.view.targetX,pe.downView.y=pe.view.targetY,Es(i)}function Av(i){if(Es(i),pe.pointerDown){const e=i.clientX-pe.downClient.x,t=i.clientY-pe.downClient.y;Math.hypot(e,t)>Pr.dragThreshold&&(pe.pointerMoved=!0,zi.classList.add("is-dragged"),ov())}}function Tv(i){Es(i),pe.pointerMoved||(pe.selectedHour=Ge(Math.round(pe.pointerHour),0,24),pe.selectedActive=!0,pe.burst=1.55,xs(Wr,pe.pointerWorld.x,pe.pointerWorld.z,.82,!0,is.elapsedTime)),Qa(i.pointerId),pe.pointerDown=!1,pe.pointerMoved=!1,Ka(),$r(!0)}function Cv(i){Qa(i.pointerId),pe.pointerDown=!1,pe.pointerMoved=!1,pe.pointerActive=!1,zi.classList.remove("is-pointer-active"),Ka()}function Ja(){pe.pointerActive=!1,zi.classList.remove("is-pointer-active")}function Rv(){Ja()}function Pv(){Qa(),pe.pointerDown=!1,pe.pointerMoved=!1,pe.pointerActive=!1,zi.classList.remove("is-pointer-active"),Ka()}function Qa(i=pe.activePointerId){var e,t;i!=null&&((t=(e=Qe.domElement).hasPointerCapture)!=null&&t.call(e,i)&&Qe.domElement.releasePointerCapture(i),pe.activePointerId=null)}function Es(i){const e=Qe.domElement.getBoundingClientRect(),t=(i.clientX-e.left)/e.width,n=(i.clientY-e.top)/e.height;pe.pointerClient.x=i.clientX,pe.pointerClient.y=i.clientY,pe.pointerNdc.set(t*2-1,-(n*2-1)),Bo.setFromCamera(pe.pointerNdc,Jt),Bo.ray.intersectPlane(j0,pe.pointerWorld);const r=Bo.ray.intersectPlane(J0,or),a=Ft(0),o=Ft(24),s=et-.18,c=cn,l=!!r&&or.x>=a&&or.x<=o&&or.y>=s&&or.y<=c;r&&(pe.pointerHour=bv(or.x)),pe.pointerActive=l,zi.classList.toggle("is-pointer-active",l)}function Dv(){Qa(),pe.pointerDown=!1,pe.pointerMoved=!1,eo(),pe.selectedHour=18,pe.selectedActive=!0,pe.burst=.7,zi.classList.remove("is-dragged"),Ka(!0),$r(!0)}function Lv(i){ht&&ht.update()}function Uv(){return window.innerWidth<760?"mobile":window.innerWidth<1100||window.innerWidth/window.innerHeight<1.72?"tablet":"desktop"}function Fv(i,e,t,n,r,a){if(!i||i.isEmpty()||!Number.isFinite(r)||r<=0)return null;const o=1-Ge(a,0,.2)*2,s=Math.tan(pi.degToRad(n*.5)),c=s*r;if(s<=0||c<=0||o<=0)return null;const l=t.clone().cross(Jt.up);l.lengthSq()<1e-8&&l.set(1,0,0),l.normalize();const d=l.clone().cross(t).normalize(),h=[];let f=0;for(const m of[i.min.x,i.max.x])for(const g of[i.min.y,i.max.y])for(const _ of[i.min.z,i.max.z]){const p=new N(m,g,_).sub(e),u=p.dot(l),E=p.dot(d),S=p.dot(t);h.push({horizontal:u,vertical:E,depthOffset:S}),f=Math.max(f,Math.abs(u)/(c*o)-S,Math.abs(E)/(s*o)-S,Jt.near+.05-S)}return{requiredDistance:f,samples:h,tanHorizontal:c,tanVertical:s,viewportLimit:o}}function Iv(i,e){if(!i)return{horizontal:0,vertical:0};let t=0,n=0;for(const r of i.samples){const a=Math.max(Jt.near,e+r.depthOffset);t=Math.max(t,Math.abs(r.horizontal)/(a*i.tanHorizontal)),n=Math.max(n,Math.abs(r.vertical)/(a*i.tanVertical))}return{horizontal:t,vertical:n}}function Nv(i){ht&&(ht.minDistance=oe.orbit.minDistance,ht.maxDistance=Math.max(oe.orbit.maxDistance,i*1.25))}function eo(){const i=oe.camera[Uv()],e=new N(i.pos[0],i.pos[1],i.pos[2]);An.set(i.target[0],i.target[1]+oe.camera.frameTargetYOffset,i.target[2]),Jt.fov=i.fov;const t=An.clone().sub(e),n=t.length();n<=1e-6?t.set(0,0,-1):t.multiplyScalar(1/n),cr&&Vn()&&(An.x=0,An.y=(cr.min.y+cr.max.y)*.5);const r=Fv(cr,An,t,Jt.fov,Jt.aspect,_c),a=r&&Vn()?r.requiredDistance:Math.max(n,(r==null?void 0:r.requiredDistance)||0);ba.copy(An).addScaledVector(t,-a),Jt.position.copy(ba),Jt.lookAt(An),Jt.updateProjectionMatrix(),ht&&(Nv(a),ht.target.copy(An),Jt.position.copy(ba),ht.update());const o=Iv(r,a);re.dataset.cameraFitMode=r?"curated-axis-bounds":"preset-fallback",re.dataset.cameraFitMargin=_c.toFixed(3),re.dataset.cameraFitDistance=a.toFixed(3),re.dataset.cameraFitRequiredDistance=r?r.requiredDistance.toFixed(3):"unavailable",re.dataset.cameraFitHorizontalUsage=o.horizontal.toFixed(3),re.dataset.cameraFitVerticalUsage=o.vertical.toFixed(3),re.dataset.cameraFitPresetFloor=Vn()?"disabled":"preserved";const s=An.clone().sub(ba),c=Math.hypot(s.x,s.z);re.dataset.initialCameraPitchDeg=pi.radToDeg(Math.atan2(s.y,c)).toFixed(3),re.dataset.initialCameraYawDeg=pi.radToDeg(Math.atan2(s.x,-s.z)).toFixed(3),re.dataset.initialCameraView="front-facing"}function $r(i=!1){const e=pe.pointerActive?pe.pointerHour:pe.selectedHour;zi.classList.toggle("is-selected",pe.selectedActive);const t=Ge(Math.round(e),0,24),n=Ms(e),r=`${t}-${n.toFixed(1)}-${pe.pointerActive}-${i}`;(r!==pe.readoutKey||i)&&(D0.textContent=`${String(t).padStart(2,"0")}:00`,L0.textContent=n.toFixed(1),pe.readoutKey=r)}let Go=0;function Vo(){var e,t,n,r;li=_u(),Qe.setPixelRatio(li),Qe.setSize(window.innerWidth,window.innerHeight),re.dataset.rendererPixelRatio=li.toFixed(2);const i=Vn()?1:0;(t=(e=rt==null?void 0:rt.points)==null?void 0:e.material)!=null&&t.uniforms&&(rt.points.material.uniforms.uPixelRatio.value=li,rt.points.material.uniforms.uMobileCrisp.value=i),(r=(n=rt==null?void 0:rt.lines)==null?void 0:n.material)!=null&&r.uniforms&&(rt.lines.material.uniforms.uMobileCrisp.value=i),re.dataset.rainEdgeMode=i?"mobile-crisp":"authored",Jt.aspect=window.innerWidth/window.innerHeight,eo(),gs(tt),Ou()}function bs(){const i=++Go;Vo(),requestAnimationFrame(()=>{i===Go&&Vo()}),window.setTimeout(()=>{i===Go&&Vo()},240)}function Ou(){yr.set(0,1,0,1),Er.set(.002,0,.002),Qe.getDrawingBufferSize(br)}function Ui(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ov(i,e,t){const n=i^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507);return Ui(n>>>0)}function $n(i,e){const t=Math.floor(i),n=kt(0,1,i-t);return ct(bc(t,e),bc(t+1,e),n)}function bc(i,e){let t=Math.imul(i^e,73244475);return t=Math.imul(t^t>>>16,73244475),((t^t>>>16)>>>0)/4294967295}function G(i,e,t=Math.random){return i+t()*(e-i)}function ct(i,e,t){return i+(e-i)*t}function Ge(i,e,t){return Math.min(t,Math.max(e,i))}function kt(i,e,t){const n=Ge((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Ri(i){const e=i*10;return Number.isFinite(e)?Math.round(e)/10:i}function Bv(){if(!Nr||!jt||!cc||!uc||!wn)return;const i=jt.querySelector("#rainfall-editor-close"),e=jt.querySelector("#rainfall-restore"),t=jt.querySelector("#rainfall-apply"),n=[],r=[],a="http://www.w3.org/2000/svg",o={width:720,height:280,left:42,right:18,top:24,bottom:258},s=o.width-o.left-o.right,c=o.bottom-o.top;let l=[...xt],d=Pa(Math.max(0.1,...l)*1.25),h=18,f=null,m=null,g=null,_=null;const p=(q,R={})=>{const X=document.createElementNS(a,q);for(const[se,Q]of Object.entries(R))X.setAttribute(se,String(Q));return X},u=p("defs"),E=p("linearGradient",{id:"rainfall-chart-area-gradient",x1:0,y1:0,x2:0,y2:1});E.append(p("stop",{offset:"0%","stop-color":"#c2cbdb","stop-opacity":.28}),p("stop",{offset:"100%","stop-color":"#687a96","stop-opacity":.015})),u.appendChild(E);const S=p("g",{"aria-hidden":"true"}),w=p("path",{class:"rainfall-chart-area"}),L=p("polyline",{class:"rainfall-chart-line"}),C=p("g");wn.append(u,S,w,L,C);for(let q=0;q<oi.length;q+=1){const R=p("g",{class:"rainfall-chart-point","data-hour":q,tabindex:0,role:"slider","aria-orientation":"vertical","aria-valuemin":0});R.append(p("circle",{class:"rainfall-chart-handle-halo",r:13}),p("circle",{class:"rainfall-chart-handle",r:4.2}),p("circle",{class:"rainfall-chart-hit",r:14})),C.appendChild(R),r.push(R)}for(let q=0;q<oi.length;q+=1){const R=document.createElement("label");R.className="rainfall-hour-field",R.htmlFor=`rainfall-hour-${q}`;const X=document.createElement("span");X.className="rainfall-hour-label",X.textContent=`${String(q).padStart(2,"0")}:00`;const se=document.createElement("span");se.className="rainfall-input-shell";const Q=document.createElement("input");Q.id=`rainfall-hour-${q}`,Q.className="rainfall-hour-input",Q.type="number",Q.name="rainfall-hour",Q.dataset.hour=String(q),Q.min="0",Q.step="0.1",Q.inputMode="decimal",Q.required=!0,Q.setAttribute("aria-label",je("rainfallInputAria",{time:`${String(q).padStart(2,"0")}:00`}));const Le=document.createElement("span");Le.className="rainfall-input-unit",Le.setAttribute("aria-hidden","true"),Le.textContent="mm/h";const ye=document.createElement("span");ye.id=`rainfall-hour-${q}-error`,ye.className="rainfall-field-error",ye.hidden=!0,Q.setAttribute("aria-describedby",ye.id),Q.addEventListener("input",()=>{Q.removeAttribute("aria-invalid"),ye.hidden=!0,ye.textContent="",bn.hidden=!0,bn.textContent="",ii.textContent="";const Ne=Number(Q.value);Q.value.trim()!==""&&Number.isFinite(Ne)&&Ne>=0&&(l[q]=Ri(Ne),l[q]>d&&(d=Pa(l[q]*1.2)),h=q,U(),K())}),Q.addEventListener("change",()=>{const Ne=Number(Q.value);Q.value.trim()===""||!Number.isFinite(Ne)||Ne<0||(l[q]=Ri(Ne),W(!0,je("savedHour",{time:`${String(q).padStart(2,"0")}:00`})))}),se.append(Q,Le),R.append(X,se,ye),uc.appendChild(R),n.push(Q)}const T=q=>Number(q).toFixed(1),B=(q,R)=>q.length===R.length&&q.every((X,se)=>X===R[se]);function b(q=h){h=Ge(Math.round(q),0,l.length-1),dc&&(dc.textContent=`${String(h).padStart(2,"0")}:00`),hc&&(hc.textContent=T(l[h]))}function M(q,R){const X=o.left+q/(l.length-1)*s,se=o.bottom-Ge(R/Math.max(.1,d),0,1)*c;return{x:X,y:se}}function P(){S.replaceChildren();for(const q of[0,.5,1]){const R=o.bottom-q*c;S.appendChild(p("line",{class:"rainfall-chart-grid-line",x1:o.left,x2:o.width-o.right,y1:R,y2:R}));const X=p("text",{class:"rainfall-chart-grid-label",x:o.left-9,y:R+6,"text-anchor":"end"});X.textContent=as(d*q),S.appendChild(X)}for(const q of[0,6,12,18,24]){const R=o.left+q/24*s;S.appendChild(p("line",{class:"rainfall-chart-grid-line",x1:R,x2:R,y1:o.top,y2:o.bottom}))}}function U(){P();const q=l.map((R,X)=>M(X,R));L.setAttribute("points",q.map(R=>`${R.x},${R.y}`).join(" ")),w.setAttribute("d",`M ${q[0].x} ${o.bottom} L ${q.map(R=>`${R.x} ${R.y}`).join(" L ")} L ${q.at(-1).x} ${o.bottom} Z`),r.forEach((R,X)=>{const se=q[X];R.setAttribute("transform",`translate(${se.x} ${se.y})`),R.classList.toggle("is-active",X===h),R.setAttribute("aria-label",je("chartPointAria",{time:`${String(X).padStart(2,"0")}:00`})),R.setAttribute("aria-valuemax",String(d)),R.setAttribute("aria-valuenow",String(l[X])),R.setAttribute("aria-valuetext",je("rainfallValueText",{value:T(l[X])}))}),b()}function O(q=l){const R=q.reduce((X,se)=>Math.max(X,se),0);d=Pa(Math.max(0.1,R)*1.25)}function $(){const q=l.map(R=>Ri(Number(R)));B(q,xt)||zo(q)}function K(){g===null&&(g=window.setTimeout(()=>{g=null,$()},90))}function W(q=!0,R=""){g!==null&&(window.clearTimeout(g),g=null),$(),ce(xt,!1),R&&(ii.textContent=R)}function ie(q,R,{live:X=!0}={}){const se=Ri(Ge(Number(R),0,d));l[q]=se,h=q,n[q].value=T(se),U(),X&&K()}function k(q){const R=wn.getBoundingClientRect(),X=(q.clientY-R.top)/Math.max(1,R.height)*o.height,se=(o.bottom-X)/c;return Ri(Ge(se,0,1)*d)}function ce(q,R=!0){R&&(l=[...q]),n.forEach((X,se)=>{X.value=T(q[se]),X.removeAttribute("aria-invalid");const Q=document.getElementById(`${X.id}-error`);Q&&(Q.hidden=!0,Q.textContent="")}),bn.hidden=!0,bn.textContent="",R&&(O(q),U())}function me(q){if(jt.classList.toggle("is-open",q),jt.setAttribute("aria-hidden",String(!q)),Nr.setAttribute("aria-expanded",String(q)),q)_=document.activeElement,jt.removeAttribute("inert"),ce(xt),ii.textContent=je("editorReady"),requestAnimationFrame(()=>i==null?void 0:i.focus());else{g!==null&&W(!0),jt.setAttribute("inert",""),ii.textContent="";const R=_ instanceof HTMLElement?_:Nr;requestAnimationFrame(()=>R.focus())}}function ge(){const q=[],R=[];return n.forEach(X=>{const se=X.value.trim(),Q=Number(se),Le=se===""||!Number.isFinite(Q)||Q<0,ye=document.getElementById(`${X.id}-error`);Le?(R.push(X),X.setAttribute("aria-invalid","true"),ye&&(ye.hidden=!1,ye.textContent=je(se===""?"emptyRainfall":"invalidRainfall"))):(X.removeAttribute("aria-invalid"),ye&&(ye.hidden=!0,ye.textContent=""),q.push(Ri(Q)))}),R.length?(fc&&(fc.open=!0),bn.hidden=!1,bn.textContent=je("invalidCount",{count:R.length}),R[0].focus(),null):(bn.hidden=!0,bn.textContent="",q)}Nr.addEventListener("click",()=>me(!0)),i==null||i.addEventListener("click",()=>me(!1)),document.addEventListener("pointerdown",q=>{if(jt.getAttribute("aria-hidden")!=="false")return;const R=q.target;R instanceof Node&&(jt.contains(R)||Nr.contains(R)||me(!1))},!0),jt.addEventListener("keydown",q=>{if(q.key==="Escape"){q.preventDefault(),me(!1);return}}),wn.addEventListener("pointerdown",q=>{const R=q.target instanceof Element?q.target.closest(".rainfall-chart-point"):null;R instanceof SVGElement&&(q.preventDefault(),f=Number(R.dataset.hour),m=q.pointerId,wn.setPointerCapture(q.pointerId),ie(f,k(q)))}),wn.addEventListener("pointermove",q=>{f===null||q.pointerId!==m||(q.preventDefault(),ie(f,k(q)))});const Ie=q=>{if(f===null||q.pointerId!==m)return;const R=f;f=null,m=null,W(!0,je("savedValue",{time:`${String(R).padStart(2,"0")}:00`,value:T(l[R])})),U()};wn.addEventListener("pointerup",Ie),wn.addEventListener("pointercancel",Ie),wn.addEventListener("focusin",q=>{const R=q.target instanceof Element?q.target.closest(".rainfall-chart-point"):null;R instanceof SVGElement&&(h=Number(R.dataset.hour),U())}),wn.addEventListener("keydown",q=>{const R=q.target instanceof Element?q.target.closest(".rainfall-chart-point"):null;if(!(R instanceof SVGElement))return;const X=Number(R.dataset.hour),se=q.shiftKey?1:.1;let Q=null;q.key==="ArrowUp"&&(Q=l[X]+se),q.key==="ArrowDown"&&(Q=l[X]-se),q.key==="Home"&&(Q=0),q.key==="End"&&(Q=d),Q!==null&&(q.preventDefault(),ie(X,Q,{live:!1}),W(!0,je("savedValue",{time:`${String(X).padStart(2,"0")}:00`,value:T(l[X])})))}),cc.addEventListener("submit",q=>{q.preventDefault();const R=ge();if(R){t.disabled=!0,jt.dataset.applying="true",ii.textContent=je("applying");try{l=[...R],zo(R),ce(xt),ii.textContent=je("applied",{count:oi.length,maximum:as(Zt)})}catch(X){bn.hidden=!1,bn.textContent=X instanceof Error?X.message:je("applyFailed"),ii.textContent=""}finally{t.disabled=!1,jt.dataset.applying="false"}}}),e==null||e.addEventListener("click",()=>{g!==null&&(window.clearTimeout(g),g=null),l=[...oi],zo(oi),ce(xt),ii.textContent=je("restored")}),ce(xt),re.dataset.rainfallEditorReady="true",re.dataset.rainfallEditorMode="live-draggable-line-chart",window.__rainformZo=zo,window.__rainformGe=ge,window.__rainformCe=ce,window.__rainformNu=Nu}
