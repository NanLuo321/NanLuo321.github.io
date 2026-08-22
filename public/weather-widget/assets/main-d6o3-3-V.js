/*! Rainform (c) 2026 afterimage - PolyForm Noncommercial 1.0.0 - https://rainform.pages.dev/ *//**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wi={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ed=0,Is=1,td=2,Wc=1,nd=2,Hn=3,pi=0,Zt=1,en=2,hi=0,un=1,mi=2,Ns=3,Os=4,Xc=5,si=100,id=101,rd=102,ad=103,od=104,sd=200,jo=201,ld=202,cd=203,Zo=204,Ko=205,ud=206,dd=207,hd=208,fd=209,pd=210,md=211,gd=212,vd=213,_d=214,xd=0,Sd=1,Md=2,Ua=3,yd=4,wd=5,Ed=6,bd=7,Yc=0,Ad=1,Td=2,fi=0,Cd=1,Rd=2,Pd=3,Dd=4,Ld=5,Fd=6,Ud=7,qc=300,gr=301,vr=302,Jo=303,Qo=304,$a=306,es=1e3,wn=1001,ts=1002,tn=1003,Id=1004,Qr=1005,Rt=1006,so=1007,Fi=1008,gi=1009,Nd=1010,Od=1011,Ia=1012,$c=1013,_r=1014,Gn=1015,qr=1016,jc=1017,Zc=1018,xr=1020,Bd=35902,zd=1021,kd=1022,mn=1023,Hd=1024,Gd=1025,hr=1026,Sr=1027,Vd=1028,Kc=1029,Wd=1030,Jc=1031,Qc=1033,lo=33776,co=33777,uo=33778,ho=33779,Bs=35840,zs=35841,ks=35842,Hs=35843,Gs=36196,Vs=37492,Ws=37496,Xs=37808,Ys=37809,qs=37810,$s=37811,js=37812,Zs=37813,Ks=37814,Js=37815,Qs=37816,el=37817,tl=37818,nl=37819,il=37820,rl=37821,fo=36492,al=36494,ol=36495,Xd=36283,sl=36284,ll=36285,cl=36286,Yd=3200,qd=3201,$d=0,jd=1,li="",cn="srgb",_i="srgb-linear",fs="display-p3",ja="display-p3-linear",Na="linear",ut="srgb",Oa="rec709",Ba="p3",Yi=7680,ul=519,Zd=512,Kd=513,Jd=514,eu=515,Qd=516,eh=517,th=518,nh=519,dl=35044,Ot=35048,hl="300 es",Vn=2e3,za=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fl=1234567;const Hr=Math.PI/180,Wr=180/Math.PI;function Cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function ps(i,e){return(i%e+e)%e}function ih(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function rh(i,e,t){return i!==e?(t-i)/(e-i):0}function Gr(i,e,t){return(1-t)*i+t*e}function ah(i,e,t,n){return Gr(i,e,1-Math.exp(-t*n))}function oh(i,e=1){return e-Math.abs(ps(i,e*2)-e)}function sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ch(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uh(i,e){return i+Math.random()*(e-i)}function dh(i){return i*(.5-Math.random())}function hh(i){i!==void 0&&(fl=i);let e=fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fh(i){return i*Hr}function ph(i){return i*Wr}function mh(i){return(i&i-1)===0&&i!==0}function gh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _h(i,e,t,n,r){const a=Math.cos,o=Math.sin,s=a(t/2),c=o(t/2),l=a((e+n)/2),d=o((e+n)/2),h=a((e-n)/2),f=o((e-n)/2),m=a((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(s*d,c*h,c*f,s*l);break;case"YZY":i.set(c*f,s*d,c*h,s*l);break;case"ZXZ":i.set(c*h,c*f,s*d,s*l);break;case"XZX":i.set(s*d,c*g,c*m,s*l);break;case"YXY":i.set(c*m,s*d,c*g,s*l);break;case"ZYZ":i.set(c*g,c*m,s*d,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qn={DEG2RAD:Hr,RAD2DEG:Wr,generateUUID:Cr,clamp:Vt,euclideanModulo:ps,mapLinear:ih,inverseLerp:rh,lerp:Gr,damp:ah,pingpong:oh,smoothstep:sh,smootherstep:lh,randInt:ch,randFloat:uh,randFloatSpread:dh,seededRandom:hh,degToRad:fh,radToDeg:ph,isPowerOfTwo:mh,ceilPowerOfTwo:gh,floorPowerOfTwo:vh,setQuaternionFromProperEuler:_h,normalize:Yt,denormalize:cr};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,r,a,o,s,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l)}set(e,t,n,r,a,o,s,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=r[0],p=r[3],u=r[6],w=r[1],S=r[4],b=r[7],L=r[2],C=r[5],T=r[8];return a[0]=o*_+s*w+c*L,a[3]=o*p+s*S+c*C,a[6]=o*u+s*b+c*T,a[1]=l*_+d*w+h*L,a[4]=l*p+d*S+h*C,a[7]=l*u+d*b+h*T,a[2]=f*_+m*w+g*L,a[5]=f*p+m*S+g*C,a[8]=f*u+m*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*s*l-n*a*d+n*s*c+r*a*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=d*o-s*l,f=s*c-d*a,m=l*a-o*c,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-d*n)*_,e[2]=(s*n-r*o)*_,e[3]=f*_,e[4]=(d*t-r*c)*_,e[5]=(r*a-s*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new qe;function tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){const i=ka("canvas");return i.style.display="block",i}const pl={};function nu(i){i in pl||(pl[i]=!0,console.warn(i))}function Sh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ml=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gl=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[_i]:{transfer:Na,primaries:Oa,toReference:i=>i,fromReference:i=>i},[cn]:{transfer:ut,primaries:Oa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ja]:{transfer:Na,primaries:Ba,toReference:i=>i.applyMatrix3(gl),fromReference:i=>i.applyMatrix3(ml)},[fs]:{transfer:ut,primaries:Ba,toReference:i=>i.convertSRGBToLinear().applyMatrix3(gl),fromReference:i=>i.applyMatrix3(ml).convertLinearToSRGB()}},Mh=new Set([_i,ja]),ot={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ea[e].toReference,r=ea[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ea[i].primaries},getTransfer:function(i){return i===li?Na:ea[i].transfer}};function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class yh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=ka("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=fr(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wh=0;class iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(go(r[o].image)):a.push(go(r[o]))}else a=go(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Wt extends Hi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=wn,r=wn,a=Rt,o=Fi,s=mn,c=gi,l=Wt.DEFAULT_ANISOTROPY,d=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Cr(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=qc;Wt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,b=(m+1)/2,L=(u+1)/2,C=(d+f)/4,T=(h+_)/4,B=(g+p)/4;return S>b&&S>L?S<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(S),r=C/n,a=T/n):b>L?b<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),n=C/r,a=B/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=T/a,r=B/a),this.set(n,r,a,t),this}let w=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(h-_)/w,this.z=(f-d)/w,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ru extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],l=n[r+1],d=n[r+2],h=n[r+3];const f=a[o+0],m=a[o+1],g=a[o+2],_=a[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==m||d!==g){let p=1-s;const u=c*f+l*m+d*g+h*_,w=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,u*w);p=Math.sin(p*C)/L,s=Math.sin(s*C)/L}const b=s*w;if(c=c*p+f*b,l=l*p+m*b,d=d*p+g*b,h=h*p+_*b,p===1-s){const L=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=L,l*=L,d*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],c=n[r+1],l=n[r+2],d=n[r+3],h=a[o],f=a[o+1],m=a[o+2],g=a[o+3];return e[t]=s*g+d*h+c*m-l*f,e[t+1]=c*g+d*f+l*h-s*m,e[t+2]=l*g+d*m+s*f-c*h,e[t+3]=d*g-s*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),d=s(r/2),h=s(a/2),f=c(n/2),m=c(r/2),g=c(a/2);switch(o){case"XYZ":this._x=f*d*h+l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h+f*m*g;break;case"YZX":this._x=f*d*h+l*m*g,this._y=l*m*h+f*d*g,this._z=l*d*g-f*m*h,this._w=l*d*h-f*m*g;break;case"XZY":this._x=f*d*h-l*m*g,this._y=l*m*h-f*d*g,this._z=l*d*g+f*m*h,this._w=l*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(a-l)*m,this._z=(o-r)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(a-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(o-r)/m,this._x=(a+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*s+r*l-a*c,this._y=r*d+o*c+a*s-n*l,this._z=a*d+o*l+n*c-r*s,this._w=o*d-n*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,s),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*n),d=2*(s*t-a*r),h=2*(a*n-o*t);return this.x=t+c*l+o*h-s*d,this.y=n+c*d+s*l-a*h,this.z=r+c*h+a*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new F,vl=new Oi;class Rr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(a,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),na.subVectors(this.max,Ur),$i.subVectors(e.a,Ur),ji.subVectors(e.b,Ur),Zi.subVectors(e.c,Ur),ei.subVectors(ji,$i),ti.subVectors(Zi,ji),yi.subVectors($i,Zi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-yi.z,yi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!_o(t,$i,ji,Zi,na)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,$i,ji,Zi,na))?!1:(ia.crossVectors(ei,ti),t=[ia.x,ia.y,ia.z],_o(t,$i,ji,Zi,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new F,new F,new F,new F,new F,new F,new F,new F],xn=new F,ta=new Rr,$i=new F,ji=new F,Zi=new F,ei=new F,ti=new F,yi=new F,Ur=new F,na=new F,ia=new F,wi=new F;function _o(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){wi.fromArray(i,a);const s=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),d=n.dot(wi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>s)return!1}return!0}const Th=new Rr,Ir=new F,xo=new F;class $r{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(xo)),this.expandByPoint(Ir.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new F,So=new F,ra=new F,ni=new F,Mo=new F,aa=new F,yo=new F;class jr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){So.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(So);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ra),s=ni.dot(this.direction),c=-ni.dot(ra),l=ni.lengthSq(),d=Math.abs(1-o*o);let h,f,m,g;if(d>0)if(h=o*c-s,f=o*s-c,g=a*d,h>=0)if(f>=-g)if(f<=g){const _=1/d;h*=_,f*=_,m=h*(h+o*f+2*s)+f*(o*h+f+2*c)+l}else f=a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f=-a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(So).addScaledVector(ra,f),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),r=On.dot(On)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,r,a){Mo.subVectors(t,e),aa.subVectors(n,e),yo.crossVectors(Mo,aa);let o=this.direction.dot(yo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ni.subVectors(this.origin,e);const c=s*this.direction.dot(aa.crossVectors(ni,aa));if(c<0)return null;const l=s*this.direction.dot(Mo.cross(ni));if(l<0||c+l>o)return null;const d=-s*ni.dot(yo);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,r,a,o,s,c,l,d,h,f,m,g,_,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l,d,h,f,m,g,_,p)}set(e,t,n,r,a,o,s,c,l,d,h,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=a,u[5]=o,u[9]=s,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),a=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*d,m=o*h,g=s*d,_=s*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-s*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,m=c*h,g=l*d,_=l*h;t[0]=f+_*s,t[4]=g*s-m,t[8]=o*l,t[1]=o*h,t[5]=o*d,t[9]=-s,t[2]=m*s-g,t[6]=_+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,m=c*h,g=l*d,_=l*h;t[0]=f-_*s,t[4]=-o*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*d,t[9]=_-f*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,m=o*h,g=s*d,_=s*h;t[0]=c*d,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=s*c,_=s*l;t[0]=c*d,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*d,t[9]=-s*d,t[2]=-l*d,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,m=o*l,g=s*c,_=s*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+_,t[5]=o*d,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*d,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ch,e,Rh)}lookAt(e,t,n){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ii.crossVectors(n,sn),ii.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ii.crossVectors(n,sn)),ii.normalize(),oa.crossVectors(sn,ii),r[0]=ii.x,r[4]=oa.x,r[8]=sn.x,r[1]=ii.y,r[5]=oa.y,r[9]=sn.y,r[2]=ii.z,r[6]=oa.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],w=n[3],S=n[7],b=n[11],L=n[15],C=r[0],T=r[4],B=r[8],E=r[12],M=r[1],P=r[5],U=r[9],O=r[13],$=r[2],Z=r[6],W=r[10],ie=r[14],k=r[3],ce=r[7],me=r[11],ge=r[15];return a[0]=o*C+s*M+c*$+l*k,a[4]=o*T+s*P+c*Z+l*ce,a[8]=o*B+s*U+c*W+l*me,a[12]=o*E+s*O+c*ie+l*ge,a[1]=d*C+h*M+f*$+m*k,a[5]=d*T+h*P+f*Z+m*ce,a[9]=d*B+h*U+f*W+m*me,a[13]=d*E+h*O+f*ie+m*ge,a[2]=g*C+_*M+p*$+u*k,a[6]=g*T+_*P+p*Z+u*ce,a[10]=g*B+_*U+p*W+u*me,a[14]=g*E+_*O+p*ie+u*ge,a[3]=w*C+S*M+b*$+L*k,a[7]=w*T+S*P+b*Z+L*ce,a[11]=w*B+S*U+b*W+L*me,a[15]=w*E+S*O+b*ie+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+a*c*h-r*l*h-a*s*f+n*l*f+r*s*m-n*c*m)+_*(+t*c*m-t*l*f+a*o*f-r*o*m+r*l*d-a*c*d)+p*(+t*l*h-t*s*m-a*o*h+n*o*m+a*s*d-n*l*d)+u*(-r*s*d-t*c*h+t*s*f+r*o*h-n*o*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],w=h*p*l-_*f*l+_*c*m-s*p*m-h*c*u+s*f*u,S=g*f*l-d*p*l-g*c*m+o*p*m+d*c*u-o*f*u,b=d*_*l-g*h*l+g*s*m-o*_*m-d*s*u+o*h*u,L=g*h*c-d*_*c-g*s*f+o*_*f+d*s*p-o*h*p,C=t*w+n*S+r*b+a*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=w*T,e[1]=(_*f*a-h*p*a-_*r*m+n*p*m+h*r*u-n*f*u)*T,e[2]=(s*p*a-_*c*a+_*r*l-n*p*l-s*r*u+n*c*u)*T,e[3]=(h*c*a-s*f*a-h*r*l+n*f*l+s*r*m-n*c*m)*T,e[4]=S*T,e[5]=(d*p*a-g*f*a+g*r*m-t*p*m-d*r*u+t*f*u)*T,e[6]=(g*c*a-o*p*a-g*r*l+t*p*l+o*r*u-t*c*u)*T,e[7]=(o*f*a-d*c*a+d*r*l-t*f*l-o*r*m+t*c*m)*T,e[8]=b*T,e[9]=(g*h*a-d*_*a-g*n*m+t*_*m+d*n*u-t*h*u)*T,e[10]=(o*_*a-g*s*a+g*n*l-t*_*l-o*n*u+t*s*u)*T,e[11]=(d*s*a-o*h*a-d*n*l+t*h*l+o*n*m-t*s*m)*T,e[12]=L*T,e[13]=(d*_*r-g*h*r+g*n*f-t*_*f-d*n*p+t*h*p)*T,e[14]=(g*s*r-o*_*r-g*n*c+t*_*c+o*n*p-t*s*p)*T,e[15]=(o*h*r-d*s*r+d*n*c-t*h*c-o*n*f+t*s*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,l=a*o,d=a*s;return this.set(l*o+n,l*s-r*c,l*c+r*s,0,l*s+r*c,d*s+n,d*c-r*o,0,l*c-r*s,d*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,d=o+o,h=s+s,f=a*l,m=a*d,g=a*h,_=o*d,p=o*h,u=s*h,w=c*l,S=c*d,b=c*h,L=n.x,C=n.y,T=n.z;return r[0]=(1-(_+u))*L,r[1]=(m+b)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(f+u))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(g+S)*T,r[9]=(p-w)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),s=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const l=1/a,d=1/o,h=1/s;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=Vn){const c=this.elements,l=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(s===Vn)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===za)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=Vn){const c=this.elements,l=1/(t-e),d=1/(n-r),h=1/(o-a),f=(t+e)*l,m=(n+r)*d;let g,_;if(s===Vn)g=(o+a)*h,_=-2*h;else if(s===za)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new F,Sn=new ht,Ch=new F(0,0,0),Rh=new F(1,1,1),ii=new F,oa=new F,sn=new F,_l=new ht,xl=new Oi;class jn{constructor(e=0,t=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class ms{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ph=0;const Sl=new F,Ji=new Oi,Bn=new ht,sa=new F,Nr=new F,Dh=new F,Lh=new Oi,Ml=new F(1,0,0),yl=new F(0,1,0),wl=new F(0,0,1),El={type:"added"},Fh={type:"removed"},Qi={type:"childadded",child:null},wo={type:"childremoved",child:null};class Ut extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new F,t=new jn,n=new Oi,r=new F(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Nr,sa,this.up):Bn.lookAt(sa,Nr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(El),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fh),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(El),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new F(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new F,zn=new F,Eo=new F,kn=new F,er=new F,tr=new F,bl=new F,bo=new F,Ao=new F,To=new F;class Ln{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mn.subVectors(e,t),r.cross(Mn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Mn.subVectors(r,t),zn.subVectors(n,t),Eo.subVectors(e,t);const o=Mn.dot(Mn),s=Mn.dot(zn),c=Mn.dot(Eo),l=zn.dot(zn),d=zn.dot(Eo),h=o*l-s*s;if(h===0)return a.set(0,0,0),null;const f=1/h,m=(l*c-s*d)*f,g=(o*d-s*c)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(s,kn.z),c)}static isFrontFacing(e,t,n,r){return Mn.subVectors(n,t),zn.subVectors(e,t),Mn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Mn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;er.subVectors(r,n),tr.subVectors(a,n),bo.subVectors(e,n);const c=er.dot(bo),l=tr.dot(bo);if(c<=0&&l<=0)return t.copy(n);Ao.subVectors(e,r);const d=er.dot(Ao),h=tr.dot(Ao);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(er,o);To.subVectors(e,a);const m=er.dot(To),g=tr.dot(To);if(g>=0&&m<=g)return t.copy(a);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(n).addScaledVector(tr,s);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return bl.subVectors(a,r),s=(h-d)/(h-d+(m-g)),t.copy(r).addScaledVector(bl,s);const u=1/(p+_+f);return o=_*u,s=f*u,t.copy(n).addScaledVector(er,o).addScaledVector(tr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},la={h:0,s:0,l:0};function Co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=ps(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Co(o,a,e+1/3),this.g=Co(o,a,e),this.b=Co(o,a,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=cn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ot.fromWorkingColorSpace(kt.copy(this),e),Math.round(Vt(kt.r*255,0,255))*65536+Math.round(Vt(kt.g*255,0,255))*256+Math.round(Vt(kt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,a=kt.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let c,l;const d=(s+o)/2;if(s===o)c=0,l=0;else{const h=o-s;switch(l=d<=.5?h/(o+s):h/(2-o-s),o){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=cn){ot.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(la);const n=Gr(ri.h,la.h,t),r=Gr(ri.s,la.s,t),a=Gr(ri.l,la.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ee;Ee.NAMES=au;let Uh=0;class Pr extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=un,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Ko,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==un&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class En extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new F,ca=new Oe;class Fe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),a=Yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}}class ou extends Fe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class su extends Fe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends Fe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ih=0;const hn=new ht,Ro=new Ut,nr=new F,ln=new Rr,Or=new Rr,Ft=new F;class Bt extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?su:ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new qe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Or.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(ln.min,Or.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,Or.max),ln.expandByPoint(Ft)):(ln.expandByPoint(Or.min),ln.expandByPoint(Or.max))}ln.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Ft.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let l=0,d=s.count;l<d;l++)Ft.fromBufferAttribute(s,l),c&&(nr.fromBufferAttribute(e,l),Ft.add(nr)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],c=[];for(let B=0;B<n.count;B++)s[B]=new F,c[B]=new F;const l=new F,d=new F,h=new F,f=new Oe,m=new Oe,g=new Oe,_=new F,p=new F;function u(B,E,M){l.fromBufferAttribute(n,B),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(a,B),m.fromBufferAttribute(a,E),g.fromBufferAttribute(a,M),d.sub(l),h.sub(l),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(P),s[B].add(_),s[E].add(_),s[M].add(_),c[B].add(p),c[E].add(p),c[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let B=0,E=w.length;B<E;++B){const M=w[B],P=M.start,U=M.count;for(let O=P,$=P+U;O<$;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new F,b=new F,L=new F,C=new F;function T(B){L.fromBufferAttribute(r,B),C.copy(L);const E=s[B];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),b.crossVectors(C,E);const P=b.dot(c[B])<0?-1:1;o.setXYZW(B,S.x,S.y,S.z,P)}for(let B=0,E=w.length;B<E;++B){const M=w[B],P=M.start,U=M.count;for(let O=P,$=P+U;O<$;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new F,a=new F,o=new F,s=new F,c=new F,l=new F,d=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),s.add(d),c.add(d),l.add(d),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(s,c){const l=s.array,d=s.itemSize,h=s.normalized,f=new l.constructor(c.length*d);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){s.isInterleavedBufferAttribute?m=c[_]*s.data.stride+s.offset:m=c[_]*d;for(let u=0;u<d;u++)f[g++]=l[m++]}return new Fe(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,n);t.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let d=0,h=l.length;d<h;d++){const f=l[d],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const a=e.morphAttributes;for(const l in a){const d=[],h=a[l];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new ht,Ei=new jr,ua=new $r,Tl=new F,ir=new F,rr=new F,ar=new F,Po=new F,da=new F,ha=new Oe,fa=new Oe,pa=new Oe,Cl=new F,Rl=new F,Pl=new F,ma=new F,ga=new F;class dt extends Ut{constructor(e=new Bt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){da.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=s[c],h=a[c];d!==0&&(Po.fromBufferAttribute(h,e),o?da.addScaledVector(Po,d):da.addScaledVector(Po.sub(t),d))}t.add(da)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(a),Ei.copy(e.ray).recast(e.near),!(ua.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(ua,Tl)===null||Ei.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(Al.copy(a).invert(),Ei.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,L=S;b<L;b+=3){const C=s.getX(b),T=s.getX(b+1),B=s.getX(b+2);r=va(this,u,e,n,l,d,h,C,T,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const w=s.getX(p),S=s.getX(p+1),b=s.getX(p+2);r=va(this,o,e,n,l,d,h,w,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=w,L=S;b<L;b+=3){const C=b,T=b+1,B=b+2;r=va(this,u,e,n,l,d,h,C,T,B),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const w=p,S=p+1,b=p+2;r=va(this,o,e,n,l,d,h,w,S,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Nh(i,e,t,n,r,a,o,s){let c;if(e.side===Zt?c=n.intersectTriangle(o,a,r,!0,s):c=n.intersectTriangle(r,a,o,e.side===pi,s),c===null)return null;ga.copy(s),ga.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:i}}function va(i,e,t,n,r,a,o,s,c,l){i.getVertexPosition(s,ir),i.getVertexPosition(c,rr),i.getVertexPosition(l,ar);const d=Nh(i,e,t,n,ir,rr,ar,ma);if(d){r&&(ha.fromBufferAttribute(r,s),fa.fromBufferAttribute(r,c),pa.fromBufferAttribute(r,l),d.uv=Ln.getInterpolation(ma,ir,rr,ar,ha,fa,pa,new Oe)),a&&(ha.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,c),pa.fromBufferAttribute(a,l),d.uv1=Ln.getInterpolation(ma,ir,rr,ar,ha,fa,pa,new Oe)),o&&(Cl.fromBufferAttribute(o,s),Rl.fromBufferAttribute(o,c),Pl.fromBufferAttribute(o,l),d.normal=Ln.getInterpolation(ma,ir,rr,ar,Cl,Rl,Pl,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:l,normal:new F,materialIndex:0};Ln.getNormal(ir,rr,ar,h.normal),d.face=h}return d}class Dr extends Bt{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(h,2));function g(_,p,u,w,S,b,L,C,T,B,E){const M=b/T,P=L/B,U=b/2,O=L/2,$=C/2,Z=T+1,W=B+1;let ie=0,k=0;const ce=new F;for(let me=0;me<W;me++){const ge=me*P-O;for(let Ie=0;Ie<Z;Ie++){const q=Ie*M-U;ce[_]=q*w,ce[p]=ge*S,ce[u]=$,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[p]=0,ce[u]=C>0?1:-1,d.push(ce.x,ce.y,ce.z),h.push(Ie/T),h.push(1-me/B),ie+=1}}for(let me=0;me<B;me++)for(let ge=0;ge<T;ge++){const Ie=f+ge+Z*me,q=f+ge+Z*(me+1),R=f+(ge+1)+Z*(me+1),X=f+(ge+1)+Z*me;c.push(Ie,q,X),c.push(q,R,X),k+=6}s.addGroup(m,k,E),m+=k,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const r in n)e[r]=n[r]}return e}function Oh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Bh={clone:Mr,merge:qt};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cu extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new F,Dl=new Oe,Ll=new Oe;class fn extends cu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Dl,Ll),t.subVectors(Ll,Dl)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=-90,sr=1;class Hh extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(or,sr,e,t);r.layers=this.layers,this.add(r);const a=new fn(or,sr,e,t);a.layers=this.layers,this.add(a);const o=new fn(or,sr,e,t);o.layers=this.layers,this.add(o);const s=new fn(or,sr,e,t);s.layers=this.layers,this.add(s);const c=new fn(or,sr,e,t);c.layers=this.layers,this.add(c);const l=new fn(or,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uu extends Wt{constructor(e,t,n,r,a,o,s,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,r,a,o,s,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gh extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dr(5,5,5),a=new Tt({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:hi});a.uniforms.tEquirect.value=t;const o=new dt(r,a),s=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Rt),new Hh(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Do=new F,Vh=new F,Wh=new qe;class Pn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Do.subVectors(n,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Do),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wh.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new $r,_a=new F;class gs{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,a=new Pn,o=new Pn){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],d=r[5],h=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],w=r[13],S=r[14],b=r[15];if(n[0].setComponents(c-a,f-l,p-m,b-u).normalize(),n[1].setComponents(c+a,f+l,p+m,b+u).normalize(),n[2].setComponents(c+o,f+d,p+g,b+w).normalize(),n[3].setComponents(c-o,f-d,p-g,b-w).normalize(),n[4].setComponents(c-s,f-h,p-_,b-S).normalize(),t===Vn)n[5].setComponents(c+s,f+h,p+_,b+S).normalize();else if(t===za)n[5].setComponents(s,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Xh(i){const e=new WeakMap;function t(s,c){const l=s.array,d=s.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),s.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:h}}function n(s,c,l){const d=c.array,h=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,s),h.count===-1&&f.length===0&&i.bufferSubData(l,0,d),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(i.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:r,remove:a,update:o}}class Un extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,d=c+1,h=e/s,f=t/c,m=[],g=[],_=[],p=[];for(let u=0;u<d;u++){const w=u*f-o;for(let S=0;S<l;S++){const b=S*h-a;g.push(b,-w,0),_.push(0,0,1),p.push(S/s),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<s;w++){const S=w+l*u,b=w+l*(u+1),L=w+1+l*(u+1),C=w+1+l*u;m.push(S,b,C),m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`
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
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Xf=`struct PhysicalMaterial {
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
}`,Yf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,np=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
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
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Qp=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,tm=`#define DISTANCE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,fm=`#define NORMAL
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
}`,pm=`#define PHONG
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
}`,mm=`#define PHONG
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
}`,gm=`#define STANDARD
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
}`,vm=`#define STANDARD
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
}`,_m=`#define TOON
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
}`,xm=`#define TOON
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
}`,Sm=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Yh,alphahash_pars_fragment:qh,alphamap_fragment:$h,alphamap_pars_fragment:jh,alphatest_fragment:Zh,alphatest_pars_fragment:Kh,aomap_fragment:Jh,aomap_pars_fragment:Qh,batching_pars_vertex:ef,batching_vertex:tf,begin_vertex:nf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:sf,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:hf,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:vf,defaultnormal_vertex:_f,displacementmap_pars_vertex:xf,displacementmap_vertex:Sf,emissivemap_fragment:Mf,emissivemap_pars_fragment:yf,colorspace_fragment:wf,colorspace_pars_fragment:Ef,envmap_fragment:bf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Tf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:zf,envmap_vertex:Rf,fog_vertex:Pf,fog_pars_vertex:Df,fog_fragment:Lf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:If,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:kf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:Yf,lights_fragment_maps:qf,lights_fragment_end:$f,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:Jf,map_fragment:Qf,map_pars_fragment:ep,map_particle_fragment:tp,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:sp,morphtarget_pars_vertex:lp,morphtarget_vertex:cp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:hp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:vp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:xp,opaque_fragment:Sp,packing:Mp,premultiplied_alpha_fragment:yp,project_vertex:wp,dithering_fragment:Ep,dithering_pars_fragment:bp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Pp,shadowmask_pars_fragment:Dp,skinbase_vertex:Lp,skinning_pars_vertex:Fp,skinning_vertex:Up,skinnormal_vertex:Ip,specularmap_fragment:Np,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:zp,transmission_fragment:kp,transmission_pars_fragment:Hp,uv_pars_fragment:Gp,uv_pars_vertex:Vp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:Yp,background_frag:qp,backgroundCube_vert:$p,backgroundCube_frag:jp,cube_vert:Zp,cube_frag:Kp,depth_vert:Jp,depth_frag:Qp,distanceRGBA_vert:em,distanceRGBA_frag:tm,equirect_vert:nm,equirect_frag:im,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:sm,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:hm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:vm,meshtoon_vert:_m,meshtoon_frag:xm,points_vert:Sm,points_frag:Mm,shadow_vert:ym,shadow_frag:wm,sprite_vert:Em,sprite_frag:bm},ve={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Dn={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Dn.physical={uniforms:qt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const xa={r:0,b:0,g:0},Ai=new jn,Am=new ht;function Tm(i,e,t,n,r,a,o){const s=new Ee(0);let c=a===!0?0:1,l,d,h=null,f=0,m=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function _(w){let S=!1;const b=g(w);b===null?u(s,c):b&&b.isColor&&(u(b,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,S){const b=g(S);b&&(b.isCubeTexture||b.mapping===$a)?(d===void 0&&(d=new dt(new Dr(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Mr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ai.copy(S.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Ai)),d.material.toneMapped=ot.getTransfer(b.colorSpace)!==ut,(h!==b||f!==b.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,m=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new dt(new Un(2,2),new Tt({name:"BackgroundMaterial",uniforms:Mr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(b.colorSpace)!==ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,m=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,S){w.getRGB(xa,lu(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,S,o)}return{getClearColor:function(){return s},setClearColor:function(w,S=1){s.set(w),c=S,u(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(s,c)},render:_,addToRenderList:p}}function Cm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,o=!1;function s(M,P,U,O,$){let Z=!1;const W=h(O,U,P);a!==W&&(a=W,l(a.object)),Z=m(M,O,U,$),Z&&g(M,O,U,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(M,P,U,O),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,P,U){const O=U.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let Z=$[P.id];Z===void 0&&(Z={},$[P.id]=Z);let W=Z[O];return W===void 0&&(W=f(c()),Z[O]=W),W}function f(M){const P=[],U=[],O=[];for(let $=0;$<t;$++)P[$]=0,U[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,P,U,O){const $=a.attributes,Z=P.attributes;let W=0;const ie=U.getAttributes();for(const k in ie)if(ie[k].location>=0){const me=$[k];let ge=Z[k];if(ge===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;W++}return a.attributesNum!==W||a.index!==O}function g(M,P,U,O){const $={},Z=P.attributes;let W=0;const ie=U.getAttributes();for(const k in ie)if(ie[k].location>=0){let me=Z[k];me===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),$[k]=ge,W++}a.attributes=$,a.attributesNum=W,a.index=O}function _(){const M=a.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function p(M){u(M,0)}function u(M,P){const U=a.newAttributes,O=a.enabledAttributes,$=a.attributeDivisors;U[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),$[M]!==P&&(i.vertexAttribDivisor(M,P),$[M]=P)}function w(){const M=a.newAttributes,P=a.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==M[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function S(M,P,U,O,$,Z,W){W===!0?i.vertexAttribIPointer(M,P,U,$,Z):i.vertexAttribPointer(M,P,U,O,$,Z)}function b(M,P,U,O){_();const $=O.attributes,Z=U.getAttributes(),W=P.defaultAttributeValues;for(const ie in Z){const k=Z[ie];if(k.location>=0){let ce=$[ie];if(ce===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const me=ce.normalized,ge=ce.itemSize,Ie=e.get(ce);if(Ie===void 0)continue;const q=Ie.buffer,R=Ie.type,X=Ie.bytesPerElement,se=R===i.INT||R===i.UNSIGNED_INT||ce.gpuType===$c;if(ce.isInterleavedBufferAttribute){const Q=ce.data,Le=Q.stride,ye=ce.offset;if(Q.isInstancedInterleavedBuffer){for(let Ne=0;Ne<k.locationSize;Ne++)u(k.location+Ne,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ne=0;Ne<k.locationSize;Ne++)p(k.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ne=0;Ne<k.locationSize;Ne++)S(k.location+Ne,ge/k.locationSize,R,me,Le*X,(ye+ge/k.locationSize*Ne)*X,se)}else{if(ce.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)u(k.location+Q,ce.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<k.locationSize;Q++)p(k.location+Q);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Q=0;Q<k.locationSize;Q++)S(k.location+Q,ge/k.locationSize,R,me,ge*X,ge/k.locationSize*Q*X,se)}}else if(W!==void 0){const me=W[ie];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(k.location,me);break;case 3:i.vertexAttrib3fv(k.location,me);break;case 4:i.vertexAttrib4fv(k.location,me);break;default:i.vertexAttrib1fv(k.location,me)}}}}w()}function L(){B();for(const M in n){const P=n[M];for(const U in P){const O=P[U];for(const $ in O)d(O[$].object),delete O[$];delete P[U]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const O=P[U];for(const $ in O)d(O[$].object),delete O[$];delete P[U]}delete n[M.id]}function T(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const O=U[M.id];for(const $ in O)d(O[$].object),delete O[$];delete U[M.id]}}function B(){E(),o=!0,a!==r&&(a=r,l(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:B,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function Rm(i,e,t){let n;function r(l){n=l}function a(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function s(l,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(l[m],d[m]);else{f.multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];t.update(m,n,1)}}function c(l,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Pm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(C){const T=C===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gn&&!T)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:u,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:b,maxSamples:L}}function Dm(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new Pn,s=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!r||g===null||g.length===0||a&&!p)a?d(null):l();else{const w=a?0:n,S=w*4;let b=u.clippingState||null;c.value=b,b=d(g,f,S,m);for(let L=0;L!==S;++L)b[L]=t[L];u.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,w=f.matrixWorldInverse;s.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,b=m;S!==_;++S,b+=4)o.copy(h[S]).applyMatrix4(w,s),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Lm(i){let e=new WeakMap;function t(o,s){return s===Jo?o.mapping=gr:s===Qo&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===Jo||s===Qo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class vs extends cu{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,Fl=[.125,.215,.35,.446,.526,.582],Li=20,Lo=new vs,Ul=new Ee;let Fo=null,Uo=0,Io=0,No=!1;const Ri=(1+Math.sqrt(5))/2,lr=1/Ri,Il=[new F(-Ri,lr,0),new F(Ri,lr,0),new F(-lr,0,Ri),new F(lr,0,Ri),new F(0,Ri,-lr),new F(0,Ri,lr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fo=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Uo,Io),this._renderer.xr.enabled=No,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:qr,format:mn,colorSpace:_i,depthBuffer:!1},r=Ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(a)),this._blurMaterial=Um(a,e,t)}return r}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,r){const s=new fn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Ul),d.toneMapping=fi,d.autoClear=!1;const m=new En({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new dt(new Dr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ul),_=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(s.up.set(0,c[u],0),s.lookAt(l[u],0,0)):w===1?(s.up.set(0,0,c[u]),s.lookAt(0,l[u],0)):(s.up.set(0,c[u],0),s.lookAt(0,0,l[u]));const S=this._cubeSize;Sa(r,w*S,u>2?S:0,S,S),d.setRenderTarget(r),_&&d.render(g,s),d.render(e,s)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gr||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;Sa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Il[(r-a-1)%Il.length];this._blur(e,a-1,a,o,s)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new dt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Li-1),_=a/g,p=isFinite(a)?1+Math.floor(d*_):Li;p>Li&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const u=[];let w=0;for(let T=0;T<Li;++T){const B=T/_,E=Math.exp(-B*B/2);u.push(E),T===0?w+=E:T<p&&(w+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const b=this._sizeLods[r],L=3*b*(r>S-ur?r-S+ur:0),C=4*(this._cubeSize-b);Sa(t,L,C,3*b,2*b),c.setRenderTarget(t),c.render(h,Lo)}}function Fm(i){const e=[],t=[],n=[];let r=i;const a=i-ur+1+Fl.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>i-ur?c=Fl[o-i+ur-1]:o===0&&(c=0),n.push(c);const l=1/(s-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,_=3,p=2,u=1,w=new Float32Array(_*g*m),S=new Float32Array(p*g*m),b=new Float32Array(u*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,B=C>2?0:-1,E=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];w.set(E,_*g*C),S.set(f,p*g*C);const M=[C,C,C,C,C,C];b.set(M,u*g*C)}const L=new Bt;L.setAttribute("position",new Fe(w,_)),L.setAttribute("uv",new Fe(S,p)),L.setAttribute("faceIndex",new Fe(b,u)),e.push(L),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ol(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Um(i,e,t){const n=new Float32Array(Li),r=new F(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_s(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bl(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function zl(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function _s(){return`

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
	`}function Im(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===Jo||c===Qo,d=c===gr||c===vr;if(l||d){let h=e.get(s);const f=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return t===null&&(t=new Nl(i)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const m=s.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Nl(i)),h=l?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",a),h.texture):null}}}return s}function r(s){let c=0;const l=6;for(let d=0;d<l;d++)s[d]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&nu("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Om(i,e,t,n){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let S=0,b=w.length;S<b;S+=3){const L=w[S+0],C=w[S+1],T=w[S+2];f.push(L,C,C,T,T,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let S=0,b=w.length/3-1;S<b;S+=3){const L=S+0,C=S+1,T=S+2;f.push(L,C,C,T,T,L)}}else return;const p=new(tu(f)?su:ou)(f,1);p.version=_;const u=a.get(h);u&&e.remove(u),a.set(h,p)}function d(h){const f=a.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function Bm(i,e,t){let n;function r(f){n=f}let a,o;function s(f){a=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,a,f*o),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,f*o,g),t.update(m,n,g))}function d(f,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(f[p]/o,m[p]);else{_.multiDrawElementsWEBGL(n,m,0,a,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,n,1)}}function h(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,_,0,g);let u=0;for(let w=0;w<g;w++)u+=m[w];for(let w=0;w<_.length;w++)t.update(u,n,_[w])}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function zm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function km(i,e,t){const n=new WeakMap,r=new At;function a(o,s,c){const l=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(s);if(f===void 0||f.count!==h){let M=function(){B.dispose(),n.delete(s),s.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,u=s.morphAttributes.position||[],w=s.morphAttributes.normal||[],S=s.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let L=s.attributes.position.count*b,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*C*4*h),B=new ru(T,L,C,h);B.type=Gn,B.needsUpdate=!0;const E=b*4;for(let P=0;P<h;P++){const U=u[P],O=w[P],$=S[P],Z=L*C*4*P;for(let W=0;W<U.count;W++){const ie=W*E;g===!0&&(r.fromBufferAttribute(U,W),T[Z+ie+0]=r.x,T[Z+ie+1]=r.y,T[Z+ie+2]=r.z,T[Z+ie+3]=0),_===!0&&(r.fromBufferAttribute(O,W),T[Z+ie+4]=r.x,T[Z+ie+5]=r.y,T[Z+ie+6]=r.z,T[Z+ie+7]=0),p===!0&&(r.fromBufferAttribute($,W),T[Z+ie+8]=r.x,T[Z+ie+9]=r.y,T[Z+ie+10]=r.z,T[Z+ie+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:B,size:new Oe(L,C)},n.set(s,f),s.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=s.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Hm(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}class hu extends Wt{constructor(e,t,n,r,a,o,s,c,l,d=hr){if(d!==hr&&d!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===hr&&(n=_r),n===void 0&&d===Sr&&(n=xr),super(null,r,a,o,s,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fu=new Wt,pu=new hu(1,1);pu.compareFunction=eu;const mu=new ru,gu=new Ah,vu=new uu,kl=[],Hl=[],Gl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function Lr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=kl[r];if(a===void 0&&(a=new Float32Array(r),kl[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Za(i,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),Dt(t,n)}}function qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),Dt(t,n)}}function $m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Gl.set(n),i.uniformMatrix4fv(this.addr,!1,Gl),Dt(t,n)}}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function ig(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?pu:fu;t.setTexture2D(e||a,r)}function rg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||gu,r)}function ag(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||vu,r)}function og(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mu,r)}function sg(i){switch(i){case 5126:return Gm;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return Ym;case 35675:return qm;case 35676:return $m;case 5124:case 35670:return jm;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function lg(i,e){i.uniform1fv(this.addr,e)}function cg(i,e){const t=Lr(e,this.size,2);i.uniform2fv(this.addr,t)}function ug(i,e){const t=Lr(e,this.size,3);i.uniform3fv(this.addr,t)}function dg(i,e){const t=Lr(e,this.size,4);i.uniform4fv(this.addr,t)}function hg(i,e){const t=Lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fg(i,e){const t=Lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pg(i,e){const t=Lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function vg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function xg(i,e){i.uniform1uiv(this.addr,e)}function Sg(i,e){i.uniform2uiv(this.addr,e)}function Mg(i,e){i.uniform3uiv(this.addr,e)}function yg(i,e){i.uniform4uiv(this.addr,e)}function wg(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||fu,a[o])}function Eg(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gu,a[o])}function bg(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vu,a[o])}function Ag(i,e,t){const n=this.cache,r=e.length,a=Za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mu,a[o])}function Tg(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return dg;case 35674:return hg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return Sg;case 36295:return Mg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}}class Pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Xl(i,e){i.seq.push(e),i.map[e.id]=e}function Dg(i,e,t){const n=i.name,r=n.length;for(Oo.lastIndex=0;;){const a=Oo.exec(n),o=Oo.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){Xl(t,l===void 0?new Cg(s,i,e):new Rg(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new Pg(s),Xl(t,h)),t=h}}}class Da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Dg(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Yl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lg=37297;let Fg=0;function Ug(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Ig(i){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i);let n;switch(e===t?n="":e===Ba&&t===Oa?n="LinearDisplayP3ToLinearSRGB":e===Oa&&t===Ba&&(n="LinearSRGBToLinearDisplayP3"),i){case _i:case ja:return[n,"LinearTransferOETF"];case cn:case fs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ug(i.getShaderSource(e),o)}else return r}function Ng(i,e){const t=Ig(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Og(i,e){let t;switch(e){case Cd:t="Linear";break;case Rd:t="Reinhard";break;case Pd:t="OptimizedCineon";break;case Dd:t="ACESFilmic";break;case Fd:t="AgX";break;case Ud:t="Neutral";break;case Ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function zg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function kr(i){return i!==""}function $l(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(i){return i.replace(Hg,Vg)}const Gg=new Map;function Vg(i,e){let t=Ye[e];if(t===void 0){const n=Gg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ns(t)}const Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace(Wg,Xg)}function Xg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Kl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Yg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function qg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gr:case vr:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $g(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function jg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ad:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function Zg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kg(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Yg(t),l=qg(t),d=$g(t),h=jg(t),f=Zg(t),m=Bg(t),g=zg(a),_=r.createProgram();let p,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),u.length>0&&(u+=`
`)):(p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),u=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==fi?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=ns(o),o=$l(o,t),o=jl(o,t),s=ns(s),s=$l(s,t),s=jl(s,t),o=Zl(o),s=Zl(s),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=w+p+o,b=w+u+s,L=Yl(r,r.VERTEX_SHADER,S),C=Yl(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(L).trim(),$=r.getShaderInfoLog(C).trim();let Z=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{const ie=ql(r,L,"vertex"),k=ql(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+ie+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||$==="")&&(W=!1);W&&(P.diagnostics={runnable:Z,programLog:U,vertexShader:{log:O,prefix:p},fragmentShader:{log:$,prefix:u}})}r.deleteShader(L),r.deleteShader(C),B=new Da(r,_),E=kg(r,_)}let B;this.getUniforms=function(){return B===void 0&&T(this),B};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Lg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Jg=0;class Qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new e0(e),t.set(e,n)),n}}class e0{constructor(e){this.id=Jg++,this.code=e,this.usedTimes=0}}function t0(i,e,t,n,r,a,o){const s=new ms,c=new Qg,l=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,M,P,U,O){const $=U.fog,Z=O.geometry,W=E.isMeshStandardMaterial?U.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),k=ie&&ie.mapping===$a?ie.image.height:null,ce=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=me!==void 0?me.length:0;let Ie=0;Z.morphAttributes.position!==void 0&&(Ie=1),Z.morphAttributes.normal!==void 0&&(Ie=2),Z.morphAttributes.color!==void 0&&(Ie=3);let q,R,X,se;if(ce){const nt=Dn[ce];q=nt.vertexShader,R=nt.fragmentShader}else q=E.vertexShader,R=E.fragmentShader,c.update(E),X=c.getVertexShaderID(E),se=c.getFragmentShaderID(E);const Q=i.getRenderTarget(),Le=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,Ne=!!E.map,D=!!E.matcap,$e=!!ie,je=!!E.aoMap,ae=!!E.lightMap,K=!!E.bumpMap,xe=!!E.normalMap,Se=!!E.displacementMap,we=!!E.emissiveMap,Ze=!!E.metalnessMap,A=!!E.roughnessMap,x=E.anisotropy>0,I=E.clearcoat>0,ee=E.dispersion>0,te=E.iridescence>0,ne=E.sheen>0,Ae=E.transmission>0,ue=x&&!!E.anisotropyMap,he=I&&!!E.clearcoatMap,ke=I&&!!E.clearcoatNormalMap,de=I&&!!E.clearcoatRoughnessMap,Te=te&&!!E.iridescenceMap,Je=te&&!!E.iridescenceThicknessMap,Be=ne&&!!E.sheenColorMap,_e=ne&&!!E.sheenRoughnessMap,We=!!E.specularMap,Xe=!!E.specularColorMap,mt=!!E.specularIntensityMap,v=Ae&&!!E.transmissionMap,j=Ae&&!!E.thicknessMap,H=!!E.gradientMap,J=!!E.alphaMap,le=E.alphaTest>0,Re=!!E.alphaHash,Ve=!!E.extensions;let gt=fi;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Mt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:R,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:_i,alphaToCoverage:!!E.alphaToCoverage,map:Ne,matcap:D,envMap:$e,envMapMode:$e&&ie.mapping,envMapCubeUVHeight:k,aoMap:je,lightMap:ae,bumpMap:K,normalMap:xe,displacementMap:f&&Se,emissiveMap:we,normalMapObjectSpace:xe&&E.normalMapType===jd,normalMapTangentSpace:xe&&E.normalMapType===$d,metalnessMap:Ze,roughnessMap:A,anisotropy:x,anisotropyMap:ue,clearcoat:I,clearcoatMap:he,clearcoatNormalMap:ke,clearcoatRoughnessMap:de,dispersion:ee,iridescence:te,iridescenceMap:Te,iridescenceThicknessMap:Je,sheen:ne,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:We,specularColorMap:Xe,specularIntensityMap:mt,transmission:Ae,transmissionMap:v,thicknessMap:j,gradientMap:H,opaque:E.transparent===!1&&E.blending===un&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:Re,combine:E.combine,mapUv:Ne&&_(E.map.channel),aoMapUv:je&&_(E.aoMap.channel),lightMapUv:ae&&_(E.lightMap.channel),bumpMapUv:K&&_(E.bumpMap.channel),normalMapUv:xe&&_(E.normalMap.channel),displacementMapUv:Se&&_(E.displacementMap.channel),emissiveMapUv:we&&_(E.emissiveMap.channel),metalnessMapUv:Ze&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:he&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(E.sheenRoughnessMap.channel),specularMapUv:We&&_(E.specularMap.channel),specularColorMapUv:Xe&&_(E.specularColorMap.channel),specularIntensityMapUv:mt&&_(E.specularIntensityMap.channel),transmissionMapUv:v&&_(E.transmissionMap.channel),thicknessMapUv:j&&_(E.thicknessMap.channel),alphaMapUv:J&&_(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(xe||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Ne||J),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ne&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===en,flipSided:E.side===Zt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ve&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(w(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),E.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.doubleSided&&s.enable(10),M.flipSided&&s.enable(11),M.useDepthPacking&&s.enable(12),M.dithering&&s.enable(13),M.transmission&&s.enable(14),M.sheen&&s.enable(15),M.opaque&&s.enable(16),M.pointsUvs&&s.enable(17),M.decodeVideoTexture&&s.enable(18),M.alphaToCoverage&&s.enable(19),E.push(s.mask)}function b(E){const M=g[E.type];let P;if(M){const U=Dn[M];P=Bh.clone(U.uniforms)}else P=E.uniforms;return P}function L(E,M){let P;for(let U=0,O=d.length;U<O;U++){const $=d[U];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Kg(i,M,E,a),d.push(P)),P}function C(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function T(E){c.remove(E)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:L,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:B}}function n0(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function i0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ql(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,g,_,p){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function s(h,f,m,g,_,p){const u=o(h,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(h,f,m,g,_,p){const u=o(h,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||i0),n.length>1&&n.sort(f||Jl),r.length>1&&r.sort(f||Jl)}function d(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:d,sort:l}}function r0(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Ql,i.set(n,[o])):r>=a.length?(o=new Ql,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function a0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ee};break;case"SpotLight":t={position:new F,direction:new F,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function o0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let s0=0;function l0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c0(i){const e=new a0,t=o0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,a=new ht,o=new ht;function s(l){let d=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,w=0,S=0,b=0,L=0,C=0,T=0;l.sort(l0);for(let E=0,M=l.length;E<M;E++){const P=l[E],U=P.color,O=P.intensity,$=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*O,h+=U.g*O,f+=U.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);T++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(O),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const ie=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,ie.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=ie.matrix,P.castShadow){const k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=Z,b++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const ie=P.shadow,k=t.get(P);k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const B=n.hash;(B.directionalLength!==m||B.pointLength!==g||B.spotLength!==_||B.rectAreaLength!==p||B.hemiLength!==u||B.numDirectionalShadows!==w||B.numPointShadows!==S||B.numSpotShadows!==b||B.numSpotMaps!==L||B.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,B.directionalLength=m,B.pointLength=g,B.spotLength=_,B.rectAreaLength=p,B.hemiLength=u,B.numDirectionalShadows=w,B.numPointShadows=S,B.numSpotShadows=b,B.numSpotMaps=L,B.numLightProbes=T,n.version=s0++)}function c(l,d){let h=0,f=0,m=0,g=0,_=0;const p=d.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const S=l[u];if(S.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(S.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:s,setupView:c,state:n}}function ec(i){const e=new c0(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function s(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function u0(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new ec(i),e.set(r,[s])):a>=o.length?(s=new ec(i),o.push(s)):s=o[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}class d0 extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h0 extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
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
}`;function m0(i,e,t){let n=new gs;const r=new Oe,a=new Oe,o=new At,s=new d0({depthPacking:qd}),c=new h0,l={},d=t.maxTextureSize,h={[pi]:Zt,[Zt]:pi,[en]:en},f=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:f0,fragmentShader:p0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let u=this.type;this.render=function(C,T,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(hi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=u!==Hn&&this.type===Hn,$=u===Hn&&this.type!==Hn;for(let Z=0,W=C.length;Z<W;Z++){const ie=C[Z],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ce=k.getFrameExtents();if(r.multiply(ce),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ce.x),r.x=a.x*ce.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ce.y),r.y=a.y*ce.y,k.mapSize.y=a.y)),k.map===null||O===!0||$===!0){const ge=this.type!==Hn?{minFilter:tn,magFilter:tn}:{};k.map!==null&&k.map.dispose(),k.map=new $n(r.x,r.y,ge),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const me=k.getViewportCount();for(let ge=0;ge<me;ge++){const Ie=k.getViewport(ge);o.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),U.viewport(o),k.updateMatrices(ie,ge),n=k.getFrustum(),b(T,B,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===Hn&&w(k,B),k.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(E,M,P)};function w(C,T){const B=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,B,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,B,m,_,null)}function S(C,T,B,E){let M=null;const P=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=B.isPointLight===!0?c:s,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,O=T.uuid;let $=l[U];$===void 0&&($={},l[U]=$);let Z=$[O];Z===void 0&&(Z=M.clone(),$[O]=Z,T.addEventListener("dispose",L)),M=Z}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Hn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=B}return M}function b(C,T,B,E,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Hn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const O=e.update(C),$=C.material;if(Array.isArray($)){const Z=O.groups;for(let W=0,ie=Z.length;W<ie;W++){const k=Z[W],ce=$[k.materialIndex];if(ce&&ce.visible){const me=S(C,ce,E,M);C.onBeforeShadow(i,C,T,B,O,me,k),i.renderBufferDirect(B,null,O,me,C,k),C.onAfterShadow(i,C,T,B,O,me,k)}}}else if($.visible){const Z=S(C,$,E,M);C.onBeforeShadow(i,C,T,B,O,Z,null),i.renderBufferDirect(B,null,O,Z,C,null),C.onAfterShadow(i,C,T,B,O,Z,null)}}const U=C.children;for(let O=0,$=U.length;O<$;O++)b(U[O],T,B,E,M)}function L(C){C.target.removeEventListener("dispose",L);for(const B in l){const E=l[B],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function g0(i){function e(){let v=!1;const j=new At;let H=null;const J=new At(0,0,0,0);return{setMask:function(le){H!==le&&!v&&(i.colorMask(le,le,le,le),H=le)},setLocked:function(le){v=le},setClear:function(le,Re,Ve,gt,Mt){Mt===!0&&(le*=gt,Re*=gt,Ve*=gt),j.set(le,Re,Ve,gt),J.equals(j)===!1&&(i.clearColor(le,Re,Ve,gt),J.copy(j))},reset:function(){v=!1,H=null,J.set(-1,0,0,0)}}}function t(){let v=!1,j=null,H=null,J=null;return{setTest:function(le){le?se(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(le){j!==le&&!v&&(i.depthMask(le),j=le)},setFunc:function(le){if(H!==le){switch(le){case xd:i.depthFunc(i.NEVER);break;case Sd:i.depthFunc(i.ALWAYS);break;case Md:i.depthFunc(i.LESS);break;case Ua:i.depthFunc(i.LEQUAL);break;case yd:i.depthFunc(i.EQUAL);break;case wd:i.depthFunc(i.GEQUAL);break;case Ed:i.depthFunc(i.GREATER);break;case bd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=le}},setLocked:function(le){v=le},setClear:function(le){J!==le&&(i.clearDepth(le),J=le)},reset:function(){v=!1,j=null,H=null,J=null}}}function n(){let v=!1,j=null,H=null,J=null,le=null,Re=null,Ve=null,gt=null,Mt=null;return{setTest:function(nt){v||(nt?se(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(nt){j!==nt&&!v&&(i.stencilMask(nt),j=nt)},setFunc:function(nt,yt,wt){(H!==nt||J!==yt||le!==wt)&&(i.stencilFunc(nt,yt,wt),H=nt,J=yt,le=wt)},setOp:function(nt,yt,wt){(Re!==nt||Ve!==yt||gt!==wt)&&(i.stencilOp(nt,yt,wt),Re=nt,Ve=yt,gt=wt)},setLocked:function(nt){v=nt},setClear:function(nt){Mt!==nt&&(i.clearStencil(nt),Mt=nt)},reset:function(){v=!1,j=null,H=null,J=null,le=null,Re=null,Ve=null,gt=null,Mt=null}}}const r=new e,a=new t,o=new n,s=new WeakMap,c=new WeakMap;let l={},d={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,u=null,w=null,S=null,b=null,L=null,C=new Ee(0,0,0),T=0,B=!1,E=null,M=null,P=null,U=null,O=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Z=W>=1):ie.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Z=W>=2);let k=null,ce={};const me=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Ie=new At().fromArray(me),q=new At().fromArray(ge);function R(v,j,H,J){const le=new Uint8Array(4),Re=i.createTexture();i.bindTexture(v,Re),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<H;Ve++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(j+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Re}const X={};X[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Ua),K(!1),xe(Is),se(i.CULL_FACE),je(hi);function se(v){l[v]!==!0&&(i.enable(v),l[v]=!0)}function Q(v){l[v]!==!1&&(i.disable(v),l[v]=!1)}function Le(v,j){return d[v]!==j?(i.bindFramebuffer(v,j),d[v]=j,v===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=j),v===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=j),!0):!1}function ye(v,j){let H=f,J=!1;if(v){H=h.get(j),H===void 0&&(H=[],h.set(j,H));const le=v.textures;if(H.length!==le.length||H[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Ve=le.length;Re<Ve;Re++)H[Re]=i.COLOR_ATTACHMENT0+Re;H.length=le.length,J=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,J=!0);J&&i.drawBuffers(H)}function Ne(v){return m!==v?(i.useProgram(v),m=v,!0):!1}const D={[si]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};D[ad]=i.MIN,D[od]=i.MAX;const $e={[sd]:i.ZERO,[jo]:i.ONE,[ld]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[hd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function je(v,j,H,J,le,Re,Ve,gt,Mt,nt){if(v===hi){g===!0&&(Q(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),v!==Xc){if(v!==_||nt!==B){if((p!==si||S!==si)&&(i.blendEquation(i.FUNC_ADD),p=si,S=si),nt)switch(v){case un:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.ONE,i.ONE);break;case Ns:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Os:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ns:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Os:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}u=null,w=null,b=null,L=null,C.set(0,0,0),T=0,_=v,B=nt}return}le=le||j,Re=Re||H,Ve=Ve||J,(j!==p||le!==S)&&(i.blendEquationSeparate(D[j],D[le]),p=j,S=le),(H!==u||J!==w||Re!==b||Ve!==L)&&(i.blendFuncSeparate($e[H],$e[J],$e[Re],$e[Ve]),u=H,w=J,b=Re,L=Ve),(gt.equals(C)===!1||Mt!==T)&&(i.blendColor(gt.r,gt.g,gt.b,Mt),C.copy(gt),T=Mt),_=v,B=!1}function ae(v,j){v.side===en?Q(i.CULL_FACE):se(i.CULL_FACE);let H=v.side===Zt;j&&(H=!H),K(H),v.blending===un&&v.transparent===!1?je(hi):je(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),a.setFunc(v.depthFunc),a.setTest(v.depthTest),a.setMask(v.depthWrite),r.setMask(v.colorWrite);const J=v.stencilWrite;o.setTest(J),J&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),we(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(v){E!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),E=v)}function xe(v){v!==ed?(se(i.CULL_FACE),v!==M&&(v===Is?i.cullFace(i.BACK):v===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),M=v}function Se(v){v!==P&&(Z&&i.lineWidth(v),P=v)}function we(v,j,H){v?(se(i.POLYGON_OFFSET_FILL),(U!==j||O!==H)&&(i.polygonOffset(j,H),U=j,O=H)):Q(i.POLYGON_OFFSET_FILL)}function Ze(v){v?se(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function A(v){v===void 0&&(v=i.TEXTURE0+$-1),k!==v&&(i.activeTexture(v),k=v)}function x(v,j,H){H===void 0&&(k===null?H=i.TEXTURE0+$-1:H=k);let J=ce[H];J===void 0&&(J={type:void 0,texture:void 0},ce[H]=J),(J.type!==v||J.texture!==j)&&(k!==H&&(i.activeTexture(H),k=H),i.bindTexture(v,j||X[v]),J.type=v,J.texture=j)}function I(){const v=ce[k];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Be(v){Ie.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),Ie.copy(v))}function _e(v){q.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),q.copy(v))}function We(v,j){let H=c.get(j);H===void 0&&(H=new WeakMap,c.set(j,H));let J=H.get(v);J===void 0&&(J=i.getUniformBlockIndex(j,v.name),H.set(v,J))}function Xe(v,j){const J=c.get(j).get(v);s.get(j)!==J&&(i.uniformBlockBinding(j,J,v.__bindingPointIndex),s.set(j,J))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},k=null,ce={},d={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,u=null,w=null,S=null,b=null,L=null,C=new Ee(0,0,0),T=0,B=!1,E=null,M=null,P=null,U=null,O=null,Ie.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Q,bindFramebuffer:Le,drawBuffers:ye,useProgram:Ne,setBlending:je,setMaterial:ae,setFlipSided:K,setCullFace:xe,setLineWidth:Se,setPolygonOffset:we,setScissorTest:Ze,activeTexture:A,bindTexture:x,unbindTexture:I,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:Te,texImage3D:Je,updateUBOMapping:We,uniformBlockBinding:Xe,texStorage2D:ke,texStorage3D:de,texSubImage2D:ne,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:Be,viewport:_e,reset:mt}}function v0(i,e,t,n,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):ka("canvas")}function _(A,x,I){let ee=1;const te=Ze(A);if((te.width>I||te.height>I)&&(ee=I/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(ee*te.width),Ae=Math.floor(ee*te.height);h===void 0&&(h=g(ne,Ae));const ue=x?g(ne,Ae):h;return ue.width=ne,ue.height=Ae,ue.getContext("2d").drawImage(A,0,0,ne,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ne+"x"+Ae+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==tn&&A.minFilter!==Rt}function u(A){i.generateMipmap(A)}function w(A,x,I,ee,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=x;if(x===i.RED&&(I===i.FLOAT&&(ne=i.R32F),I===i.HALF_FLOAT&&(ne=i.R16F),I===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(ne=i.R8UI),I===i.UNSIGNED_SHORT&&(ne=i.R16UI),I===i.UNSIGNED_INT&&(ne=i.R32UI),I===i.BYTE&&(ne=i.R8I),I===i.SHORT&&(ne=i.R16I),I===i.INT&&(ne=i.R32I)),x===i.RG&&(I===i.FLOAT&&(ne=i.RG32F),I===i.HALF_FLOAT&&(ne=i.RG16F),I===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(ne=i.RG8UI),I===i.UNSIGNED_SHORT&&(ne=i.RG16UI),I===i.UNSIGNED_INT&&(ne=i.RG32UI),I===i.BYTE&&(ne=i.RG8I),I===i.SHORT&&(ne=i.RG16I),I===i.INT&&(ne=i.RG32I)),x===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),x===i.RGBA){const Ae=te?Na:ot.getTransfer(ee);I===i.FLOAT&&(ne=i.RGBA32F),I===i.HALF_FLOAT&&(ne=i.RGBA16F),I===i.UNSIGNED_BYTE&&(ne=Ae===ut?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(A,x){let I;return A?x===null||x===_r||x===xr?I=i.DEPTH24_STENCIL8:x===Gn?I=i.DEPTH32F_STENCIL8:x===Ia&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_r||x===xr?I=i.DEPTH_COMPONENT24:x===Gn?I=i.DEPTH_COMPONENT32F:x===Ia&&(I=i.DEPTH_COMPONENT16),I}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function L(A){const x=A.target;x.removeEventListener("dispose",L),T(x),x.isVideoTexture&&d.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),E(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const I=A.source,ee=f.get(I);if(ee){const te=ee[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&B(A),Object.keys(ee).length===0&&f.delete(I)}n.remove(A)}function B(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const I=A.source,ee=f.get(I);delete ee[x.__cacheKey],o.memory.textures--}function E(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let te=0;te<x.__webglFramebuffer[ee].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[ee][te]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=A.textures;for(let ee=0,te=I.length;ee<te;ee++){const ne=n.get(I[ee]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(I[ee])}n.remove(A)}let M=0;function P(){M=0}function U(){const A=M;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),M+=1,A}function O(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const I=n.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(I,A,x);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function Z(A,x){const I=n.get(A);if(A.version>0&&I.__version!==A.version){q(I,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function W(A,x){const I=n.get(A);if(A.version>0&&I.__version!==A.version){q(I,A,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function ie(A,x){const I=n.get(A);if(A.version>0&&I.__version!==A.version){R(I,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}const k={[es]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[ts]:i.MIRRORED_REPEAT},ce={[tn]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},me={[Zd]:i.NEVER,[nh]:i.ALWAYS,[Kd]:i.LESS,[eu]:i.LEQUAL,[Jd]:i.EQUAL,[th]:i.GEQUAL,[Qd]:i.GREATER,[eh]:i.NOTEQUAL};function ge(A,x){if(x.type===Gn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===so||x.magFilter===Qr||x.magFilter===Fi||x.minFilter===Rt||x.minFilter===so||x.minFilter===Qr||x.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,k[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,k[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,k[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==Qr&&x.minFilter!==Fi||x.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ie(A,x){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L));const ee=x.source;let te=f.get(ee);te===void 0&&(te={},f.set(ee,te));const ne=O(x);if(ne!==A.__cacheKey){te[ne]===void 0&&(te[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),te[ne].usedTimes++;const Ae=te[A.__cacheKey];Ae!==void 0&&(te[A.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(x)),A.__cacheKey=ne,A.__webglTexture=te[ne].texture}return I}function q(A,x,I){let ee=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=i.TEXTURE_3D);const te=Ie(A,x),ne=x.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+I);const Ae=n.get(ne);if(ne.version!==Ae.__version||te===!0){t.activeTexture(i.TEXTURE0+I);const ue=ot.getPrimaries(ot.workingColorSpace),he=x.colorSpace===li?null:ot.getPrimaries(x.colorSpace),ke=x.colorSpace===li||ue===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let de=_(x.image,!1,r.maxTextureSize);de=we(x,de);const Te=a.convert(x.format,x.colorSpace),Je=a.convert(x.type);let Be=w(x.internalFormat,Te,Je,x.colorSpace,x.isVideoTexture);ge(ee,x);let _e;const We=x.mipmaps,Xe=x.isVideoTexture!==!0,mt=Ae.__version===void 0||te===!0,v=ne.dataReady,j=b(x,de);if(x.isDepthTexture)Be=S(x.format===Sr,x.type),mt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Be,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Be,de.width,de.height,0,Te,Je,null));else if(x.isDataTexture)if(We.length>0){Xe&&mt&&t.texStorage2D(i.TEXTURE_2D,j,Be,We[0].width,We[0].height);for(let H=0,J=We.length;H<J;H++)_e=We[H],Xe?v&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,_e.width,_e.height,Te,Je,_e.data):t.texImage2D(i.TEXTURE_2D,H,Be,_e.width,_e.height,0,Te,Je,_e.data);x.generateMipmaps=!1}else Xe?(mt&&t.texStorage2D(i.TEXTURE_2D,j,Be,de.width,de.height),v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Te,Je,de.data)):t.texImage2D(i.TEXTURE_2D,0,Be,de.width,de.height,0,Te,Je,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,Be,We[0].width,We[0].height,de.depth);for(let H=0,J=We.length;H<J;H++)if(_e=We[H],x.format!==mn)if(Te!==null)if(Xe){if(v)if(x.layerUpdates.size>0){for(const le of x.layerUpdates){const Re=_e.width*_e.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,le,_e.width,_e.height,1,Te,_e.data.slice(Re*le,Re*(le+1)),0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,de.depth,Te,_e.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Be,_e.width,_e.height,de.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?v&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,de.depth,Te,Je,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Be,_e.width,_e.height,de.depth,0,Te,Je,_e.data)}else{Xe&&mt&&t.texStorage2D(i.TEXTURE_2D,j,Be,We[0].width,We[0].height);for(let H=0,J=We.length;H<J;H++)_e=We[H],x.format!==mn?Te!==null?Xe?v&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?v&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,_e.width,_e.height,Te,Je,_e.data):t.texImage2D(i.TEXTURE_2D,H,Be,_e.width,_e.height,0,Te,Je,_e.data)}else if(x.isDataArrayTexture)if(Xe){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,Be,de.width,de.height,de.depth),v)if(x.layerUpdates.size>0){let H;switch(Je){case i.UNSIGNED_BYTE:switch(Te){case i.ALPHA:H=1;break;case i.LUMINANCE:H=1;break;case i.LUMINANCE_ALPHA:H=2;break;case i.RGB:H=3;break;case i.RGBA:H=4;break;default:throw new Error(`Unknown texel size for format ${Te}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:H=1;break;default:throw new Error(`Unknown texel size for type ${Je}.`)}const J=de.width*de.height*H;for(const le of x.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,Te,Je,de.data.slice(J*le,J*(le+1)));x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Te,Je,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,de.width,de.height,de.depth,0,Te,Je,de.data);else if(x.isData3DTexture)Xe?(mt&&t.texStorage3D(i.TEXTURE_3D,j,Be,de.width,de.height,de.depth),v&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Te,Je,de.data)):t.texImage3D(i.TEXTURE_3D,0,Be,de.width,de.height,de.depth,0,Te,Je,de.data);else if(x.isFramebufferTexture){if(mt)if(Xe)t.texStorage2D(i.TEXTURE_2D,j,Be,de.width,de.height);else{let H=de.width,J=de.height;for(let le=0;le<j;le++)t.texImage2D(i.TEXTURE_2D,le,Be,H,J,0,Te,Je,null),H>>=1,J>>=1}}else if(We.length>0){if(Xe&&mt){const H=Ze(We[0]);t.texStorage2D(i.TEXTURE_2D,j,Be,H.width,H.height)}for(let H=0,J=We.length;H<J;H++)_e=We[H],Xe?v&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,Te,Je,_e):t.texImage2D(i.TEXTURE_2D,H,Be,Te,Je,_e);x.generateMipmaps=!1}else if(Xe){if(mt){const H=Ze(de);t.texStorage2D(i.TEXTURE_2D,j,Be,H.width,H.height)}v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Je,de)}else t.texImage2D(i.TEXTURE_2D,0,Be,Te,Je,de);p(x)&&u(ee),Ae.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function R(A,x,I){if(x.image.length!==6)return;const ee=Ie(A,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+I);const ne=n.get(te);if(te.version!==ne.__version||ee===!0){t.activeTexture(i.TEXTURE0+I);const Ae=ot.getPrimaries(ot.workingColorSpace),ue=x.colorSpace===li?null:ot.getPrimaries(x.colorSpace),he=x.colorSpace===li||Ae===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ke=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let J=0;J<6;J++)!ke&&!de?Te[J]=_(x.image[J],!0,r.maxCubemapSize):Te[J]=de?x.image[J].image:x.image[J],Te[J]=we(x,Te[J]);const Je=Te[0],Be=a.convert(x.format,x.colorSpace),_e=a.convert(x.type),We=w(x.internalFormat,Be,_e,x.colorSpace),Xe=x.isVideoTexture!==!0,mt=ne.__version===void 0||ee===!0,v=te.dataReady;let j=b(x,Je);ge(i.TEXTURE_CUBE_MAP,x);let H;if(ke){Xe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,j,We,Je.width,Je.height);for(let J=0;J<6;J++){H=Te[J].mipmaps;for(let le=0;le<H.length;le++){const Re=H[le];x.format!==mn?Be!==null?Xe?v&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Re.width,Re.height,Be,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,Re.width,Re.height,Be,_e,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,We,Re.width,Re.height,0,Be,_e,Re.data)}}}else{if(H=x.mipmaps,Xe&&mt){H.length>0&&j++;const J=Ze(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,j,We,J.width,J.height)}for(let J=0;J<6;J++)if(de){Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te[J].width,Te[J].height,Be,_e,Te[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Te[J].width,Te[J].height,0,Be,_e,Te[J].data);for(let le=0;le<H.length;le++){const Ve=H[le].image[J].image;Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ve.width,Ve.height,Be,_e,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,Ve.width,Ve.height,0,Be,_e,Ve.data)}}else{Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Be,_e,Te[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,Be,_e,Te[J]);for(let le=0;le<H.length;le++){const Re=H[le];Xe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Be,_e,Re.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,We,Be,_e,Re.image[J])}}}p(x)&&u(i.TEXTURE_CUBE_MAP),ne.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function X(A,x,I,ee,te,ne){const Ae=a.convert(I.format,I.colorSpace),ue=a.convert(I.type),he=w(I.internalFormat,Ae,ue,I.colorSpace);if(!n.get(x).__hasExternalTextures){const de=Math.max(1,x.width>>ne),Te=Math.max(1,x.height>>ne);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,he,de,Te,x.depth,0,Ae,ue,null):t.texImage2D(te,ne,he,de,Te,0,Ae,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),xe(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,te,n.get(I).__webglTexture,0,K(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,te,n.get(I).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const ee=x.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,ne=S(x.stencilBuffer,te),Ae=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=K(x);xe(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ne,x.width,x.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,A)}else{const ee=x.textures;for(let te=0;te<ee.length;te++){const ne=ee[te],Ae=a.convert(ne.format,ne.colorSpace),ue=a.convert(ne.type),he=w(ne.internalFormat,Ae,ue,ne.colorSpace),ke=K(x);I&&xe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,he,x.width,x.height):xe(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const ee=n.get(x.depthTexture).__webglTexture,te=K(x);if(x.depthTexture.format===hr)xe(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Sr)xe(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(A){const x=n.get(A),I=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Q(x.__webglFramebuffer,A)}else if(I){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]=i.createRenderbuffer(),se(x.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),se(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(A,x,I){const ee=n.get(A);x!==void 0&&X(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Le(A)}function Ne(A){const x=A.texture,I=n.get(A),ee=n.get(x);A.addEventListener("dispose",C);const te=A.textures,ne=A.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=x.version,o.memory.textures++),ne){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let he=0;he<x.mipmaps.length;he++)I.__webglFramebuffer[ue][he]=i.createFramebuffer()}else I.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)I.__webglFramebuffer[ue]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ue=0,he=te.length;ue<he;ue++){const ke=n.get(te[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&xe(A)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const he=te[ue];I.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const ke=a.convert(he.format,he.colorSpace),de=a.convert(he.type),Te=w(he.internalFormat,ke,de,he.colorSpace,A.isXRRenderTarget===!0),Je=K(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),se(I.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)X(I.__webglFramebuffer[ue][he],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else X(I.__webglFramebuffer[ue],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(x)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,he=te.length;ue<he;ue++){const ke=te[ue],de=n.get(ke);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),ge(i.TEXTURE_2D,ke),X(I.__webglFramebuffer,A,ke,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),p(ke)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),ge(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)X(I.__webglFramebuffer[he],A,x,i.COLOR_ATTACHMENT0,ue,he);else X(I.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ue,0);p(x)&&u(ue),t.unbindTexture()}A.depthBuffer&&Le(A)}function D(A){const x=A.textures;for(let I=0,ee=x.length;I<ee;I++){const te=x[I];if(p(te)){const ne=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(te).__webglTexture;t.bindTexture(ne,Ae),u(ne),t.unbindTexture()}}}const $e=[],je=[];function ae(A){if(A.samples>0){if(xe(A)===!1){const x=A.textures,I=A.width,ee=A.height;let te=i.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(A),ue=x.length>1;if(ue)for(let he=0;he<x.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let he=0;he<x.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[he]);const ke=n.get(x[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,I,ee,0,0,I,ee,te,i.NEAREST),c===!0&&($e.length=0,je.length=0,$e.push(i.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&($e.push(ne),je.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let he=0;he<x.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[he]);const ke=n.get(x[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function K(A){return Math.min(r.maxSamples,A.samples)}function xe(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(A){const x=o.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function we(A,x){const I=A.colorSpace,ee=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||I!==_i&&I!==li&&(ot.getTransfer(I)===ut?(ee!==mn||te!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function Ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=ie,this.rebindTextures=ye,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=X,this.useMultisampledRTT=xe}function _0(i,e){function t(n,r=li){let a;const o=ot.getTransfer(r);if(n===gi)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.BYTE;if(n===Od)return i.SHORT;if(n===Ia)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===_r)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===zd)return i.ALPHA;if(n===kd)return i.RGB;if(n===mn)return i.RGBA;if(n===Hd)return i.LUMINANCE;if(n===Gd)return i.LUMINANCE_ALPHA;if(n===hr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===Vd)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===Wd)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===lo||n===co||n===uo||n===ho)if(o===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bs||n===zs||n===ks||n===Hs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Bs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ks)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gs||n===Vs||n===Ws)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Gs||n===Vs)return o===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ws)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xs||n===Ys||n===qs||n===$s||n===js||n===Zs||n===Ks||n===Js||n===Qs||n===el||n===tl||n===nl||n===il||n===rl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Xs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ys)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$s)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===js)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ks)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Js)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qs)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===el)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===al||n===ol)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===fo)return o===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xd||n===sl||n===ll||n===cl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===fo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class x0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S0={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(S0)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const M0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Wt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tt({vertexShader:M0,fragmentShader:y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class E0 extends Hi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,d=null,h=null,f=null,m=null,g=null;const _=new w0,p=t.getContextAttributes();let u=null,w=null;const S=[],b=[],L=new Oe;let C=null;const T=new fn;T.layers.enable(1),T.viewport=new At;const B=new fn;B.layers.enable(2),B.viewport=new At;const E=[T,B],M=new x0;M.layers.enable(1),M.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let X=S[R];return X===void 0&&(X=new Bo,S[R]=X),X.getTargetRaySpace()},this.getControllerGrip=function(R){let X=S[R];return X===void 0&&(X=new Bo,S[R]=X),X.getGripSpace()},this.getHand=function(R){let X=S[R];return X===void 0&&(X=new Bo,S[R]=X),X.getHandSpace()};function O(R){const X=b.indexOf(R.inputSource);if(X===-1)return;const se=S[X];se!==void 0&&(se.update(R.inputSource,R.frame,l||o),se.dispatchEvent({type:R.type,data:R.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let R=0;R<S.length;R++){const X=b[R];X!==null&&(b[R]=null,S[R].disconnect(X))}P=null,U=null,_.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,w=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const X={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new $n(m.framebufferWidth,m.framebufferHeight,{format:mn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,se=null,Q=null;p.depth&&(Q=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=p.stencil?Sr:hr,se=p.stencil?xr:_r);const Le={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new $n(f.textureWidth,f.textureHeight,{format:mn,type:gi,depthTexture:new hu(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),q.setContext(r),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(R){for(let X=0;X<R.removed.length;X++){const se=R.removed[X],Q=b.indexOf(se);Q>=0&&(b[Q]=null,S[Q].disconnect(se))}for(let X=0;X<R.added.length;X++){const se=R.added[X];let Q=b.indexOf(se);if(Q===-1){for(let ye=0;ye<S.length;ye++)if(ye>=b.length){b.push(se),Q=ye;break}else if(b[ye]===null){b[ye]=se,Q=ye;break}if(Q===-1)break}const Le=S[Q];Le&&Le.connect(se)}}const W=new F,ie=new F;function k(R,X,se){W.setFromMatrixPosition(X.matrixWorld),ie.setFromMatrixPosition(se.matrixWorld);const Q=W.distanceTo(ie),Le=X.projectionMatrix.elements,ye=se.projectionMatrix.elements,Ne=Le[14]/(Le[10]-1),D=Le[14]/(Le[10]+1),$e=(Le[9]+1)/Le[5],je=(Le[9]-1)/Le[5],ae=(Le[8]-1)/Le[0],K=(ye[8]+1)/ye[0],xe=Ne*ae,Se=Ne*K,we=Q/(-ae+K),Ze=we*-ae;X.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ze),R.translateZ(we),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const A=Ne+we,x=D+we,I=xe-Ze,ee=Se+(Q-Ze),te=$e*D/x*A,ne=je*D/x*A;R.projectionMatrix.makePerspective(I,ee,te,ne,A,x),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function ce(R,X){X===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(X.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;_.texture!==null&&(R.near=_.depthNear,R.far=_.depthFar),M.near=B.near=T.near=R.near,M.far=B.far=T.far=R.far,(P!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far,T.near=P,T.far=U,B.near=P,B.far=U,T.updateProjectionMatrix(),B.updateProjectionMatrix(),R.updateProjectionMatrix());const X=R.parent,se=M.cameras;ce(M,X);for(let Q=0;Q<se.length;Q++)ce(se[Q],X);se.length===2?k(M,T,B):M.projectionMatrix.copy(T.projectionMatrix),me(R,M,X)};function me(R,X,se){se===null?R.matrix.copy(X.matrixWorld):(R.matrix.copy(se.matrixWorld),R.matrix.invert(),R.matrix.multiply(X.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(X.projectionMatrix),R.projectionMatrixInverse.copy(X.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Wr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(R){c=R,f!==null&&(f.fixedFoveation=R),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=R)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ge=null;function Ie(R,X){if(d=X.getViewerPose(l||o),g=X,d!==null){const se=d.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Q=!1;se.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let ye=0;ye<se.length;ye++){const Ne=se[ye];let D=null;if(m!==null)D=m.getViewport(Ne);else{const je=h.getViewSubImage(f,Ne);D=je.viewport,ye===0&&(e.setRenderTargetTextures(w,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(w))}let $e=E[ye];$e===void 0&&($e=new fn,$e.layers.enable(ye),$e.viewport=new At,E[ye]=$e),$e.matrix.fromArray(Ne.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ne.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(D.x,D.y,D.width,D.height),ye===0&&(M.matrix.copy($e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push($e)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ye=h.getDepthInformation(se[0]);ye&&ye.isValid&&ye.texture&&_.init(e,ye,r.renderState)}}for(let se=0;se<S.length;se++){const Q=b[se],Le=S[se];Q!==null&&Le!==void 0&&Le.update(Q,X,l||o)}ge&&ge(R,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const q=new du;q.setAnimationLoop(Ie),this.setAnimationLoop=function(R){ge=R},this.dispose=function(){}}}const Ti=new jn,b0=new ht;function A0(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,lu(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,w,S,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),h(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u)):u.isMeshStandardMaterial?(a(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(a(p,u),g(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),_(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?c(p,u,w,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Zt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Zt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const w=e.get(u),S=w.envMap,b=w.envMapRotation;S&&(p.envMap.value=S,Ti.copy(b),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Ti)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,w,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=S*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Zt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const w=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function T0(i,e,t,n){let r={},a={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const b=S.program;n.uniformBlockBinding(w,b)}function l(w,S){let b=r[w.id];b===void 0&&(g(w),b=d(w),r[w.id]=b,w.addEventListener("dispose",p));const L=S.program;n.updateUBOMapping(w,L);const C=e.render.frame;a[w.id]!==C&&(f(w),a[w.id]=C)}function d(w){const S=h();w.__bindingPointIndex=S;const b=i.createBuffer(),L=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function h(){for(let w=0;w<s;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],b=w.uniforms,L=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,T=b.length;C<T;C++){const B=Array.isArray(b[C])?b[C]:[b[C]];for(let E=0,M=B.length;E<M;E++){const P=B[E];if(m(P,C,E,L)===!0){const U=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Z=0;Z<O.length;Z++){const W=O[Z],ie=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,U+$,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,$),$+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,b,L){const C=w.value,T=S+"_"+b;if(L[T]===void 0)return typeof C=="number"||typeof C=="boolean"?L[T]=C:L[T]=C.clone(),!0;{const B=L[T];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return L[T]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(w){const S=w.uniforms;let b=0;const L=16;for(let T=0,B=S.length;T<B;T++){const E=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,P=E.length;M<P;M++){const U=E[M],O=Array.isArray(U.value)?U.value:[U.value];for(let $=0,Z=O.length;$<Z;$++){const W=O[$],ie=_(W),k=b%L;k!==0&&L-k<ie.boundary&&(b+=L-k),U.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=ie.storage}}}const C=b%L;return C>0&&(b+=L-C),w.__size=b,w.__cache={},this}function _(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){const S=w.target;S.removeEventListener("dispose",p);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function u(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},a={}}return{bind:c,update:l,dispose:u}}class C0{constructor(e={}){const{canvas:t=xh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=fi,this.toneMappingExposure=1;const S=this;let b=!1,L=0,C=0,T=null,B=-1,E=null;const M=new At,P=new At;let U=null;const O=new Ee(0);let $=0,Z=t.width,W=t.height,ie=1,k=null,ce=null;const me=new At(0,0,Z,W),ge=new At(0,0,Z,W);let Ie=!1;const q=new gs;let R=!1,X=!1;const se=new ht,Q=new F,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ne(){return T===null?ie:1}let D=n;function $e(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r165"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",J,!1),D===null){const N="webgl2";if(D=$e(N,y),D===null)throw $e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let je,ae,K,xe,Se,we,Ze,A,x,I,ee,te,ne,Ae,ue,he,ke,de,Te,Je,Be,_e,We,Xe;function mt(){je=new Nm(D),je.init(),_e=new _0(D,je),ae=new Pm(D,je,e,_e),K=new g0(D),xe=new zm(D),Se=new n0,we=new v0(D,je,K,Se,ae,_e,xe),Ze=new Lm(S),A=new Im(S),x=new Xh(D),We=new Cm(D,x),I=new Om(D,x,xe,We),ee=new Hm(D,I,x,xe),Te=new km(D,ae,we),he=new Dm(Se),te=new t0(S,Ze,A,je,ae,We,he),ne=new A0(S,Se),Ae=new r0,ue=new u0(je),de=new Tm(S,Ze,A,K,ee,f,c),ke=new m0(S,ee,ae),Xe=new T0(D,xe,ae,K),Je=new Rm(D,je,xe),Be=new Bm(D,je,xe),xe.programs=te.programs,S.capabilities=ae,S.extensions=je,S.properties=Se,S.renderLists=Ae,S.shadowMap=ke,S.state=K,S.info=xe}mt();const v=new E0(S,D);this.xr=v,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(Z,W,!1))},this.getSize=function(y){return y.set(Z,W)},this.setSize=function(y,N,V=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,W=N,t.width=Math.floor(y*ie),t.height=Math.floor(N*ie),V===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Z*ie,W*ie).floor()},this.setDrawingBufferSize=function(y,N,V){Z=y,W=N,ie=V,t.width=Math.floor(y*V),t.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,N,V,Y){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,N,V,Y),K.viewport(M.copy(me).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(ge)},this.setScissor=function(y,N,V,Y){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,N,V,Y),K.scissor(P.copy(ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(y){K.setScissorTest(Ie=y)},this.setOpaqueSort=function(y){k=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(y=!0,N=!0,V=!0){let Y=0;if(y){let z=!1;if(T!==null){const fe=T.texture.format;z=fe===Qc||fe===Jc||fe===Kc}if(z){const fe=T.texture.type,Me=fe===gi||fe===_r||fe===Ia||fe===xr||fe===jc||fe===Zc,be=de.getClearColor(),Ce=de.getClearAlpha(),ze=be.r,He=be.g,Ue=be.b;Me?(m[0]=ze,m[1]=He,m[2]=Ue,m[3]=Ce,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=ze,g[1]=He,g[2]=Ue,g[3]=Ce,D.clearBufferiv(D.COLOR,0,g))}else Y|=D.COLOR_BUFFER_BIT}N&&(Y|=D.DEPTH_BUFFER_BIT),V&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Ae.dispose(),ue.dispose(),Se.dispose(),Ze.dispose(),A.dispose(),ee.dispose(),We.dispose(),Xe.dispose(),te.dispose(),v.dispose(),v.removeEventListener("sessionstart",yt),v.removeEventListener("sessionend",wt),rn.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=xe.autoReset,N=ke.enabled,V=ke.autoUpdate,Y=ke.needsUpdate,z=ke.type;mt(),xe.autoReset=y,ke.enabled=N,ke.autoUpdate=V,ke.needsUpdate=Y,ke.type=z}function J(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){const N=y.target;N.removeEventListener("dispose",le),Re(N)}function Re(y){Ve(y),Se.remove(y)}function Ve(y){const N=Se.get(y).programs;N!==void 0&&(N.forEach(function(V){te.releaseProgram(V)}),y.isShaderMaterial&&te.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,Y,z,fe){N===null&&(N=Le);const Me=z.isMesh&&z.matrixWorld.determinant()<0,be=Zu(y,N,V,Y,z);K.setMaterial(Y,Me);let Ce=V.index,ze=1;if(Y.wireframe===!0){if(Ce=I.getWireframeAttribute(V),Ce===void 0)return;ze=2}const He=V.drawRange,Ue=V.attributes.position;let it=He.start*ze,vt=(He.start+He.count)*ze;fe!==null&&(it=Math.max(it,fe.start*ze),vt=Math.min(vt,(fe.start+fe.count)*ze)),Ce!==null?(it=Math.max(it,0),vt=Math.min(vt,Ce.count)):Ue!=null&&(it=Math.max(it,0),vt=Math.min(vt,Ue.count));const _t=vt-it;if(_t<0||_t===1/0)return;We.setup(z,Y,be,V,Ce);let on,at=Je;if(Ce!==null&&(on=x.get(Ce),at=Be,at.setIndex(on)),z.isMesh)Y.wireframe===!0?(K.setLineWidth(Y.wireframeLinewidth*Ne()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(z.isLine){let De=Y.linewidth;De===void 0&&(De=1),K.setLineWidth(De*Ne()),z.isLineSegments?at.setMode(D.LINES):z.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else z.isPoints?at.setMode(D.POINTS):z.isSprite&&at.setMode(D.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)at.renderInstances(it,_t,z.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xt=Math.min(V.instanceCount,De);at.renderInstances(it,_t,Xt)}else at.render(it,_t)};function gt(y,N,V){y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=Zt,y.needsUpdate=!0,Kr(y,N,V),y.side=pi,y.needsUpdate=!0,Kr(y,N,V),y.side=en):Kr(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),p=ue.get(V),p.init(N),w.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),y!==V&&y.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return y.traverse(function(z){const fe=z.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const be=fe[Me];gt(be,V,z),Y.add(be)}else gt(fe,V,z),Y.add(fe)}),w.pop(),p=null,Y},this.compileAsync=function(y,N,V=null){const Y=this.compile(y,N,V);return new Promise(z=>{function fe(){if(Y.forEach(function(Me){Se.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){z(y);return}setTimeout(fe,10)}je.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Mt=null;function nt(y){Mt&&Mt(y)}function yt(){rn.stop()}function wt(){rn.start()}const rn=new du;rn.setAnimationLoop(nt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(y){Mt=y,v.setAnimationLoop(y),y===null?rn.stop():rn.start()},v.addEventListener("sessionstart",yt),v.addEventListener("sessionend",wt),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(N),N=v.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,T),p=ue.get(y,w.length),p.init(N),w.push(p),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(se),X=this.localClippingEnabled,R=he.init(this.clippingPlanes,X),_=Ae.get(y,u.length),_.init(),u.push(_),v.enabled===!0&&v.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&an(fe,N,-1/0,S.sortObjects)}an(y,N,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(k,ce),ye=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,ye&&de.addToRenderList(_,y),this.info.render.frame++,R===!0&&he.beginShadows();const V=p.state.shadowsArray;ke.render(V,y,N),R===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,z=_.transmissive;if(p.setupLights(),N.isArrayCamera){const fe=N.cameras;if(z.length>0)for(let Me=0,be=fe.length;Me<be;Me++){const Ce=fe[Me];xi(Y,z,y,Ce)}ye&&de.render(y);for(let Me=0,be=fe.length;Me<be;Me++){const Ce=fe[Me];Jn(_,y,Ce,Ce.viewport)}}else z.length>0&&xi(Y,z,y,N),ye&&de.render(y),Jn(_,y,N);T!==null&&(we.updateMultisampleRenderTarget(T),we.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(S,y,N),We.resetDefaultState(),B=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],R===!0&&he.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function an(y,N,V,Y){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){Y&&Q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);const Me=ee.update(y),be=y.material;be.visible&&_.push(y,Me,be,V,Q.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const Me=ee.update(y),be=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Q.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Q.copy(Me.boundingSphere.center)),Q.applyMatrix4(y.matrixWorld).applyMatrix4(se)),Array.isArray(be)){const Ce=Me.groups;for(let ze=0,He=Ce.length;ze<He;ze++){const Ue=Ce[ze],it=be[Ue.materialIndex];it&&it.visible&&_.push(y,Me,it,V,Q.z,Ue)}}else be.visible&&_.push(y,Me,be,V,Q.z,null)}}const fe=y.children;for(let Me=0,be=fe.length;Me<be;Me++)an(fe[Me],N,V,Y)}function Jn(y,N,V,Y){const z=y.opaque,fe=y.transmissive,Me=y.transparent;p.setupLightsView(V),R===!0&&he.setGlobalState(S.clippingPlanes,V),Y&&K.viewport(M.copy(Y)),z.length>0&&Si(z,N,V),fe.length>0&&Si(fe,N,V),Me.length>0&&Si(Me,N,V),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function xi(y,N,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new $n(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?qr:gi,minFilter:Fi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Y.id],Me=Y.viewport||M;fe.setSize(Me.z,Me.w);const be=S.getRenderTarget();S.setRenderTarget(fe),S.getClearColor(O),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),ye?de.render(V):S.clear();const Ce=S.toneMapping;S.toneMapping=fi;const ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),R===!0&&he.setGlobalState(S.clippingPlanes,Y),Si(y,V,Y),we.updateMultisampleRenderTarget(fe),we.updateRenderTargetMipmap(fe),je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ue=0,it=N.length;Ue<it;Ue++){const vt=N[Ue],_t=vt.object,on=vt.geometry,at=vt.material,De=vt.group;if(at.side===en&&_t.layers.test(Y.layers)){const Xt=at.side;at.side=Zt,at.needsUpdate=!0,Ds(_t,V,Y,on,at,De),at.side=Xt,at.needsUpdate=!0,He=!0}}He===!0&&(we.updateMultisampleRenderTarget(fe),we.updateRenderTargetMipmap(fe))}S.setRenderTarget(be),S.setClearColor(O,$),ze!==void 0&&(Y.viewport=ze),S.toneMapping=Ce}function Si(y,N,V){const Y=N.isScene===!0?N.overrideMaterial:null;for(let z=0,fe=y.length;z<fe;z++){const Me=y[z],be=Me.object,Ce=Me.geometry,ze=Y===null?Me.material:Y,He=Me.group;be.layers.test(V.layers)&&Ds(be,N,V,Ce,ze,He)}}function Ds(y,N,V,Y,z,fe){y.onBeforeRender(S,N,V,Y,z,fe),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(S,N,V,Y,y,fe),z.transparent===!0&&z.side===en&&z.forceSinglePass===!1?(z.side=Zt,z.needsUpdate=!0,S.renderBufferDirect(V,N,Y,z,y,fe),z.side=pi,z.needsUpdate=!0,S.renderBufferDirect(V,N,Y,z,y,fe),z.side=en):S.renderBufferDirect(V,N,Y,z,y,fe),y.onAfterRender(S,N,V,Y,z,fe)}function Kr(y,N,V){N.isScene!==!0&&(N=Le);const Y=Se.get(y),z=p.state.lights,fe=p.state.shadowsArray,Me=z.state.version,be=te.getParameters(y,z.state,fe,N,V),Ce=te.getProgramCacheKey(be);let ze=Y.programs;Y.environment=y.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(y.isMeshStandardMaterial?A:Ze).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",le),ze=new Map,Y.programs=ze);let He=ze.get(Ce);if(He!==void 0){if(Y.currentProgram===He&&Y.lightsStateVersion===Me)return Fs(y,be),He}else be.uniforms=te.getUniforms(y),y.onBuild(V,be,S),y.onBeforeCompile(be,S),He=te.acquireProgram(be,Ce),ze.set(Ce,He),Y.uniforms=be.uniforms;const Ue=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=he.uniform),Fs(y,be),Y.needsLights=Ju(y),Y.lightsStateVersion=Me,Y.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=He,Y.uniformsList=null,He}function Ls(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Da.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Fs(y,N){const V=Se.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Zu(y,N,V,Y,z){N.isScene!==!0&&(N=Le),we.resetTextureUnits();const fe=N.fog,Me=Y.isMeshStandardMaterial?N.environment:null,be=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:_i,Ce=(Y.isMeshStandardMaterial?A:Ze).get(Y.envMap||Me),ze=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,vt=!!V.morphAttributes.color;let _t=fi;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=S.toneMapping);const on=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=on!==void 0?on.length:0,De=Se.get(Y),Xt=p.state.lights;if(R===!0&&(X===!0||y!==E)){const dn=y===E&&Y.id===B;he.setState(Y,y,dn)}let st=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Xt.state.version||De.outputColorSpace!==be||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Ce||Y.fog===!0&&De.fog!==fe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==he.numPlanes||De.numIntersection!==he.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==He||De.morphTargets!==Ue||De.morphNormals!==it||De.morphColors!==vt||De.toneMapping!==_t||De.morphTargetsCount!==at)&&(st=!0):(st=!0,De.__version=Y.version);let In=De.currentProgram;st===!0&&(In=Kr(Y,N,z));let Jr=!1,Mi=!1,ro=!1;const Lt=In.getUniforms(),Qn=De.uniforms;if(K.useProgram(In.program)&&(Jr=!0,Mi=!0,ro=!0),Y.id!==B&&(B=Y.id,Mi=!0),Jr||E!==y){Lt.setValue(D,"projectionMatrix",y.projectionMatrix),Lt.setValue(D,"viewMatrix",y.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(D,Q.setFromMatrixPosition(y.matrixWorld)),ae.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Mi=!0,ro=!0)}if(z.isSkinnedMesh){Lt.setOptional(D,z,"bindMatrix"),Lt.setOptional(D,z,"bindMatrixInverse");const dn=z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(D,"boneTexture",dn.boneTexture,we))}z.isBatchedMesh&&(Lt.setOptional(D,z,"batchingTexture"),Lt.setValue(D,"batchingTexture",z._matricesTexture,we),Lt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",z._colorsTexture,we));const ao=V.morphAttributes;if((ao.position!==void 0||ao.normal!==void 0||ao.color!==void 0)&&Te.update(z,V,In),(Mi||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,Lt.setValue(D,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qn.envMap.value=Ce,Qn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(Qn.envMapIntensity.value=N.environmentIntensity),Mi&&(Lt.setValue(D,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&Ku(Qn,ro),fe&&Y.fog===!0&&ne.refreshFogUniforms(Qn,fe),ne.refreshMaterialUniforms(Qn,Y,ie,W,p.state.transmissionRenderTarget[y.id]),Da.upload(D,Ls(De),Qn,we)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Da.upload(D,Ls(De),Qn,we),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(D,"center",z.center),Lt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Lt.setValue(D,"normalMatrix",z.normalMatrix),Lt.setValue(D,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const dn=Y.uniformsGroups;for(let oo=0,Qu=dn.length;oo<Qu;oo++){const Us=dn[oo];Xe.update(Us,In),Xe.bind(Us,In)}}return In}function Ku(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Ju(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,N,V){Se.get(y.texture).__webglTexture=N,Se.get(y.depthTexture).__webglTexture=V;const Y=Se.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){const V=Se.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,V=0){T=y,L=N,C=V;let Y=!0,z=null,fe=!1,Me=!1;if(y){const Ce=Se.get(y);Ce.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1):Ce.__webglFramebuffer===void 0?we.setupRenderTarget(y):Ce.__hasExternalTextures&&we.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);const ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const He=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[N])?z=He[N][V]:z=He[N],fe=!0):y.samples>0&&we.useMultisampledRTT(y)===!1?z=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[V]:z=He,M.copy(y.viewport),P.copy(y.scissor),U=y.scissorTest}else M.copy(me).multiplyScalar(ie).floor(),P.copy(ge).multiplyScalar(ie).floor(),U=Ie;if(K.bindFramebuffer(D.FRAMEBUFFER,z)&&Y&&K.drawBuffers(y,z),K.viewport(M),K.scissor(P),K.setScissorTest(U),fe){const Ce=Se.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,V)}else if(Me){const Ce=Se.get(y.texture),ze=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.__webglTexture,V||0,ze)}B=-1},this.readRenderTargetPixels=function(y,N,V,Y,z,fe,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){K.bindFramebuffer(D.FRAMEBUFFER,be);try{const Ce=y.texture,ze=Ce.format,He=Ce.type;if(!ae.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-Y&&V>=0&&V<=y.height-z&&D.readPixels(N,V,Y,z,_e.convert(ze),_e.convert(He),fe)}finally{const Ce=T!==null?Se.get(T).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,Y,z,fe,Me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){K.bindFramebuffer(D.FRAMEBUFFER,be);try{const Ce=y.texture,ze=Ce.format,He=Ce.type;if(!ae.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-Y&&V>=0&&V<=y.height-z){const Ue=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(N,V,Y,z,_e.convert(ze),_e.convert(He),0),D.flush();const it=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Sh(D,it,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe)}finally{D.deleteBuffer(Ue),D.deleteSync(it)}return fe}}finally{const Ce=T!==null?Se.get(T).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(y,N=null,V=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-V),z=Math.floor(y.image.width*Y),fe=Math.floor(y.image.height*Y),Me=N!==null?N.x:0,be=N!==null?N.y:0;we.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Me,be,z,fe),K.unbindTexture()},this.copyTextureToTexture=function(y,N,V=null,Y=null,z=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],N=arguments[2],z=arguments[3]||0,V=null);let fe,Me,be,Ce,ze,He;V!==null?(fe=V.max.x-V.min.x,Me=V.max.y-V.min.y,be=V.min.x,Ce=V.min.y):(fe=y.image.width,Me=y.image.height,be=0,Ce=0),Y!==null?(ze=Y.x,He=Y.y):(ze=0,He=0);const Ue=_e.convert(N.format),it=_e.convert(N.type);we.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const vt=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),at=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES),Xt=y.isCompressedTexture?y.mipmaps[z]:y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,ze,He,fe,Me,Ue,it,Xt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,ze,He,Xt.width,Xt.height,Ue,Xt.data):D.texSubImage2D(D.TEXTURE_2D,z,ze,He,Ue,it,Xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),z===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(y,N,V=null,Y=null,z=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],N=arguments[3],z=arguments[4]||0);let fe,Me,be,Ce,ze,He,Ue,it,vt;const _t=y.isCompressedTexture?y.mipmaps[z]:y.image;V!==null?(fe=V.max.x-V.min.x,Me=V.max.y-V.min.y,be=V.max.z-V.min.z,Ce=V.min.x,ze=V.min.y,He=V.min.z):(fe=_t.width,Me=_t.height,be=_t.depth,Ce=0,ze=0,He=0),Y!==null?(Ue=Y.x,it=Y.y,vt=Y.z):(Ue=0,it=0,vt=0);const on=_e.convert(N.format),at=_e.convert(N.type);let De;if(N.isData3DTexture)we.setTexture3D(N,0),De=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)we.setTexture2DArray(N,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Xt=D.getParameter(D.UNPACK_ROW_LENGTH),st=D.getParameter(D.UNPACK_IMAGE_HEIGHT),In=D.getParameter(D.UNPACK_SKIP_PIXELS),Jr=D.getParameter(D.UNPACK_SKIP_ROWS),Mi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He),y.isDataTexture||y.isData3DTexture?D.texSubImage3D(De,z,Ue,it,vt,fe,Me,be,on,at,_t.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(De,z,Ue,it,vt,fe,Me,be,on,_t.data):D.texSubImage3D(De,z,Ue,it,vt,fe,Me,be,on,at,_t),D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),D.pixelStorei(D.UNPACK_SKIP_PIXELS,In),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mi),z===0&&N.generateMipmaps&&D.generateMipmap(De),K.unbindTexture()},this.initRenderTarget=function(y){Se.get(y).__webglFramebuffer===void 0&&we.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?we.setTextureCube(y,0):y.isData3DTexture?we.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?we.setTexture2DArray(y,0):we.setTexture2D(y,0),K.unbindTexture()},this.resetState=function(){L=0,C=0,T=null,K.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fs?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===ja?"display-p3":"srgb"}}class xs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new xs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class is extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R0 extends Wt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=tn,d=tn,h,f){super(null,o,s,c,l,d,r,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci extends Fe{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class P0 extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new F,Ga=new F,tc=new ht,Br=new jr,Ma=new $r,zo=new F,nc=new F;class D0 extends Ut{constructor(e=new Bt,t=new P0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ha.fromBufferAttribute(t,r-1),Ga.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ha.distanceTo(Ga);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=a,e.ray.intersectsSphere(Ma)===!1)return;tc.copy(r).invert(),Br.copy(e.ray).applyMatrix4(tc);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){const u=d.getX(_),w=d.getX(_+1),S=ya(this,e,Br,c,u,w);S&&t.push(S)}if(this.isLineLoop){const _=d.getX(g-1),p=d.getX(m),u=ya(this,e,Br,c,_,p);u&&t.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){const u=ya(this,e,Br,c,_,_+1);u&&t.push(u)}if(this.isLineLoop){const _=ya(this,e,Br,c,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function ya(i,e,t,n,r,a){const o=i.geometry.attributes.position;if(Ha.fromBufferAttribute(o,r),Ga.fromBufferAttribute(o,a),t.distanceSqToSegment(Ha,Ga,zo,nc)>n)return;zo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zo);if(!(c<e.near||c>e.far))return{distance:c,point:nc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const ic=new F,rc=new F;class _u extends D0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)ic.fromBufferAttribute(t,r),rc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ic.distanceTo(rc);e.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L0 extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ac=new ht,rs=new jr,wa=new $r,Ea=new F;class Ss extends Ut{constructor(e=new Bt,t=new L0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),wa.radius+=a,e.ray.intersectsSphere(wa)===!1)return;ac.copy(r).invert(),rs.copy(e.ray).applyMatrix4(ac);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=l.getX(g);Ea.fromBufferAttribute(h,p),oc(Ea,p,c,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Ea.fromBufferAttribute(h,g),oc(Ea,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function oc(i,e,t,n,r,a,o){const s=rs.distanceSqToPoint(i);if(s<t){const c=new F;rs.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:o})}}class xu extends Wt{constructor(e,t,n,r,a,o,s,c,l){super(e,t,n,r,a,o,s,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui extends Bt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+s,Math.PI);let l=0;const d=[],h=new F,f=new F,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const w=[],S=u/n;let b=0;u===0&&o===0?b=.5/t:u===n&&c===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const C=L/t;h.x=-e*Math.cos(r+C*a)*Math.sin(o+S*s),h.y=e*Math.cos(o+S*s),h.z=e*Math.sin(r+C*a)*Math.sin(o+S*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(C+b,1-S),w.push(l++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){const S=d[u][w+1],b=d[u][w],L=d[u+1][w],C=d[u+1][w+1];(u!==0||o>0)&&m.push(S,b,C),(u!==n-1||c<Math.PI)&&m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class F0 extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ko=new ht,sc=new F,lc=new F;class U0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lc),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I0 extends U0{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class N0 extends F0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class O0 extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class B0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cc(){return(typeof performance>"u"?Date:performance).now()}const uc=new ht;class z0{constructor(e,t,n=0,r=1/0){this.ray=new jr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(e,t=!0,n=[]){return as(e,this,n,t),n.sort(dc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)as(e[r],this,n,t);return n.sort(dc),n}}function dc(i,e){return i.distance-e.distance}function as(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let o=0,s=a.length;o<s;o++)as(a[o],e,t,!0)}}class hc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"165"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="165");const fc={type:"change"},Ho={type:"start"},pc={type:"end"},ba=new jr,mc=new Pn,k0=Math.cos(70*qn.DEG2RAD);class H0 extends Hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",he),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fc),n.update(),a=r.NONE},this.update=(function(){const v=new F,j=new Oi().setFromUnitVectors(e.up,new F(0,1,0)),H=j.clone().invert(),J=new F,le=new Oi,Re=new F,Ve=2*Math.PI;return function(Mt=null){const nt=n.object.position;v.copy(nt).sub(n.target),v.applyQuaternion(j),s.setFromVector3(v),n.autoRotate&&a===r.NONE&&U(M(Mt)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let yt=n.minAzimuthAngle,wt=n.maxAzimuthAngle;isFinite(yt)&&isFinite(wt)&&(yt<-Math.PI?yt+=Ve:yt>Math.PI&&(yt-=Ve),wt<-Math.PI?wt+=Ve:wt>Math.PI&&(wt-=Ve),yt<=wt?s.theta=Math.max(yt,Math.min(wt,s.theta)):s.theta=s.theta>(yt+wt)/2?Math.max(yt,s.theta):Math.min(wt,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let rn=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)s.radius=me(s.radius);else{const an=s.radius;s.radius=me(s.radius*l),rn=an!=s.radius}if(v.setFromSpherical(s),v.applyQuaternion(H),nt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&C){let an=null;if(n.object.isPerspectiveCamera){const Jn=v.length();an=me(Jn*l);const xi=Jn-an;n.object.position.addScaledVector(b,xi),n.object.updateMatrixWorld(),rn=!!xi}else if(n.object.isOrthographicCamera){const Jn=new F(L.x,L.y,0);Jn.unproject(n.object);const xi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),rn=xi!==n.object.zoom;const Si=new F(L.x,L.y,0);Si.unproject(n.object),n.object.position.sub(Si).add(Jn),n.object.updateMatrixWorld(),an=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;an!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(an).add(n.object.position):(ba.origin.copy(n.object.position),ba.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ba.direction))<k0?e.lookAt(n.target):(mc.setFromNormalAndCoplanarPoint(n.object.up,n.target),ba.intersectPlane(mc,n.target))))}else if(n.object.isOrthographicCamera){const an=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),an!==n.object.zoom&&(n.object.updateProjectionMatrix(),rn=!0)}return l=1,C=!1,rn||J.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o||Re.distanceToSquared(n.target)>o?(n.dispatchEvent(fc),J.copy(n.object.position),le.copy(n.object.quaternion),Re.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Te),n.domElement.removeEventListener("pointerdown",Ze),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",Ae,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",he),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new hc,c=new hc;let l=1;const d=new F,h=new Oe,f=new Oe,m=new Oe,g=new Oe,_=new Oe,p=new Oe,u=new Oe,w=new Oe,S=new Oe,b=new F,L=new Oe;let C=!1;const T=[],B={};let E=!1;function M(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function P(v){const j=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*j)}function U(v){c.theta-=v}function O(v){c.phi-=v}const $=(function(){const v=new F;return function(H,J){v.setFromMatrixColumn(J,0),v.multiplyScalar(-H),d.add(v)}})(),Z=(function(){const v=new F;return function(H,J){n.screenSpacePanning===!0?v.setFromMatrixColumn(J,1):(v.setFromMatrixColumn(J,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(H),d.add(v)}})(),W=(function(){const v=new F;return function(H,J){const le=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;v.copy(Re).sub(n.target);let Ve=v.length();Ve*=Math.tan(n.object.fov/2*Math.PI/180),$(2*H*Ve/le.clientHeight,n.object.matrix),Z(2*J*Ve/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(H*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),Z(J*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ie(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(v,j){if(!n.zoomToCursor)return;C=!0;const H=n.domElement.getBoundingClientRect(),J=v-H.left,le=j-H.top,Re=H.width,Ve=H.height;L.x=J/Re*2-1,L.y=-(le/Ve)*2+1,b.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function me(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function ge(v){h.set(v.clientX,v.clientY)}function Ie(v){ce(v.clientX,v.clientX),u.set(v.clientX,v.clientY)}function q(v){g.set(v.clientX,v.clientY)}function R(v){f.set(v.clientX,v.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const j=n.domElement;U(2*Math.PI*m.x/j.clientHeight),O(2*Math.PI*m.y/j.clientHeight),h.copy(f),n.update()}function X(v){w.set(v.clientX,v.clientY),S.subVectors(w,u),S.y>0?ie(P(S.y)):S.y<0&&k(P(S.y)),u.copy(w),n.update()}function se(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_),n.update()}function Q(v){ce(v.clientX,v.clientY),v.deltaY<0?k(P(v.deltaY)):v.deltaY>0&&ie(P(v.deltaY)),n.update()}function Le(v){let j=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),j=!0;break}j&&(v.preventDefault(),n.update())}function ye(v){if(T.length===1)h.set(v.pageX,v.pageY);else{const j=Xe(v),H=.5*(v.pageX+j.x),J=.5*(v.pageY+j.y);h.set(H,J)}}function Ne(v){if(T.length===1)g.set(v.pageX,v.pageY);else{const j=Xe(v),H=.5*(v.pageX+j.x),J=.5*(v.pageY+j.y);g.set(H,J)}}function D(v){const j=Xe(v),H=v.pageX-j.x,J=v.pageY-j.y,le=Math.sqrt(H*H+J*J);u.set(0,le)}function $e(v){n.enableZoom&&D(v),n.enablePan&&Ne(v)}function je(v){n.enableZoom&&D(v),n.enableRotate&&ye(v)}function ae(v){if(T.length==1)f.set(v.pageX,v.pageY);else{const H=Xe(v),J=.5*(v.pageX+H.x),le=.5*(v.pageY+H.y);f.set(J,le)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const j=n.domElement;U(2*Math.PI*m.x/j.clientHeight),O(2*Math.PI*m.y/j.clientHeight),h.copy(f)}function K(v){if(T.length===1)_.set(v.pageX,v.pageY);else{const j=Xe(v),H=.5*(v.pageX+j.x),J=.5*(v.pageY+j.y);_.set(H,J)}p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_)}function xe(v){const j=Xe(v),H=v.pageX-j.x,J=v.pageY-j.y,le=Math.sqrt(H*H+J*J);w.set(0,le),S.set(0,Math.pow(w.y/u.y,n.zoomSpeed)),ie(S.y),u.copy(w);const Re=(v.pageX+j.x)*.5,Ve=(v.pageY+j.y)*.5;ce(Re,Ve)}function Se(v){n.enableZoom&&xe(v),n.enablePan&&K(v)}function we(v){n.enableZoom&&xe(v),n.enableRotate&&ae(v)}function Ze(v){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",x)),!_e(v)&&(Je(v),v.pointerType==="touch"?ke(v):I(v)))}function A(v){n.enabled!==!1&&(v.pointerType==="touch"?de(v):ee(v))}function x(v){switch(Be(v),T.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(pc),a=r.NONE;break;case 1:const j=T[0],H=B[j];ke({pointerId:j,pageX:H.x,pageY:H.y});break}}function I(v){let j;switch(v.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Wi.DOLLY:if(n.enableZoom===!1)return;Ie(v),a=r.DOLLY;break;case Wi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;q(v),a=r.PAN}else{if(n.enableRotate===!1)return;ge(v),a=r.ROTATE}break;case Wi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;ge(v),a=r.ROTATE}else{if(n.enablePan===!1)return;q(v),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ho)}function ee(v){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;R(v);break;case r.DOLLY:if(n.enableZoom===!1)return;X(v);break;case r.PAN:if(n.enablePan===!1)return;se(v);break}}function te(v){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(v.preventDefault(),n.dispatchEvent(Ho),Q(ne(v)),n.dispatchEvent(pc))}function ne(v){const j=v.deltaMode,H={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(j){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return v.ctrlKey&&!E&&(H.deltaY*=10),H}function Ae(v){v.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(v){v.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function he(v){n.enabled===!1||n.enablePan===!1||Le(v)}function ke(v){switch(We(v),T.length){case 1:switch(n.touches.ONE){case Xi.ROTATE:if(n.enableRotate===!1)return;ye(v),a=r.TOUCH_ROTATE;break;case Xi.PAN:if(n.enablePan===!1)return;Ne(v),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$e(v),a=r.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(v),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Ho)}function de(v){switch(We(v),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ae(v),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;K(v),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(v),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(v),n.update();break;default:a=r.NONE}}function Te(v){n.enabled!==!1&&v.preventDefault()}function Je(v){T.push(v.pointerId)}function Be(v){delete B[v.pointerId];for(let j=0;j<T.length;j++)if(T[j]==v.pointerId){T.splice(j,1);return}}function _e(v){for(let j=0;j<T.length;j++)if(T[j]==v.pointerId)return!0;return!1}function We(v){let j=B[v.pointerId];j===void 0&&(j=new Oe,B[v.pointerId]=j),j.set(v.pageX,v.pageY)}function Xe(v){const j=v.pointerId===T[0]?T[1]:T[0];return B[j]}n.domElement.addEventListener("contextmenu",Te),n.domElement.addEventListener("pointerdown",Ze),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",te,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ae,{passive:!0,capture:!0}),this.update()}}function G0(i,e,t){const n=Math.PI/180,r=180/Math.PI,o=i.getTime()/864e5+24405875e-1-2451545,s=((280.46+.9856474*o)%360+360)%360,c=((357.528+.9856003*o)%360+360)%360,l=s+1.915*Math.sin(c*n)+.02*Math.sin(2*c*n),d=23.439-4e-7*o,h=Math.asin(Math.sin(d*n)*Math.sin(l*n));let f=Math.atan2(Math.cos(d*n)*Math.sin(l*n),Math.cos(l*n))/n;f=(f+360)%360;const m=o/36525,p=((((280.46061837+360.98564736629*o+387933e-9*m*m-m*m*m/3871e4)%360+360)%360+t+360)%360-f+540)%360-180,u=e*n,w=p*n,S=Math.asin(Math.sin(u)*Math.sin(h)+Math.cos(u)*Math.cos(h)*Math.cos(w));let b=Math.atan2(Math.sin(w),Math.cos(w)*Math.sin(u)-Math.tan(h)*Math.cos(u))/n+180;return b=(b+360)%360,{altitude:S,azimuth:b*n,altitudeDeg:S*r}}function V0(i,e,t=32){const n=Math.cos(i);return new F(Math.sin(e)*n*t,Math.sin(i)*t,Math.cos(e)*n*t)}function W0({scene:i,renderer:e,root:t}){const n={latitude:45.8,longitude:126.5,direction:new F(0,1,0),color:new Ee(1,.85,.58),intensity:0,altitudeDeg:0,azimuthDeg:0,locationName:"Harbin"},r=new bn;r.name="rainform-real-solar-system",i.add(r);const a=new N0(16771005,0);a.castShadow=!0,a.shadow.mapSize.set(1024,1024),r.add(a),r.add(a.target);const o=new dt(new Ui(.55,48,48),new En({color:16777174,transparent:!0,opacity:.95,depthWrite:!1}));o.name="real-time-sun",r.add(o);const s=new dt(new Ui(1.2,48,48),new En({color:16757852,transparent:!0,opacity:.18,blending:mi,depthWrite:!1}));r.add(s);const c=new dt(new Ui(2.5,48,48),new En({color:16765322,transparent:!0,opacity:.05,blending:mi,depthWrite:!1}));r.add(c);const l=new dt(new Ui(100,32,16),new Tt({side:Zt,transparent:!0,depthWrite:!1,uniforms:{uSunDir:{value:n.direction},uDay:{value:0},uColor:{value:n.color}},vertexShader:`

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

  `,fragmentShader:`

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

  `}));l.renderOrder=-10,r.add(l);function d(g,_,p){!Number.isFinite(g)||!Number.isFinite(_)||(n.latitude=Math.max(-90,Math.min(90,g)),n.longitude=Math.max(-180,Math.min(180,_)),n.locationName=p||"GPS")}async function h(){navigator.geolocation&&await new Promise(g=>{navigator.geolocation.getCurrentPosition(_=>{d(_.coords.latitude,_.coords.longitude,"GPS"),g()},()=>g(),{enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4})})}function f(){const g=G0(new Date,n.latitude,n.longitude),_=V0(g.altitude,g.azimuth,32);n.direction.copy(_).normalize(),n.altitudeDeg=g.altitudeDeg,n.azimuthDeg=g.azimuth*180/Math.PI;const p=qn.clamp((g.altitudeDeg+6)/30,0,1);n.intensity=p*1.5,a.position.copy(_),a.intensity=n.intensity,a.color.copy(n.color);const u=_.clone().normalize().multiplyScalar(14);u.y*=.7,o.position.copy(u),s.position.copy(u),c.position.copy(u);const w=1+Math.sin(performance.now()*.002)*.03;s.scale.setScalar(w),c.scale.setScalar(w*1.05);const S=u.y>-5;o.visible=S,s.visible=S,c.visible=S,l.material.uniforms.uSunDir.value.copy(n.direction),l.material.uniforms.uDay.value=p,l.material.uniforms.uColor.value.copy(n.color),t&&(t.dataset.solarAltitude=n.altitudeDeg.toFixed(2),t.dataset.solarAzimuth=n.azimuthDeg.toFixed(2),t.dataset.solarState=g.altitudeDeg>-.833?"day":"night")}function m(){h(),f()}return{state:n,start:m,update:f,locate:h,applyLocation:d,sunLight:a,sun:o}}function X0(){const i=navigator.userAgent||"";let e="";try{e=document.referrer?new URL(document.referrer).hostname:""}catch{e=""}const t=/Twitter(?:Android| for iPhone)?|com\.twitter|X\.com/i.test(i),n=/(^|\.)(?:x\.com|twitter\.com|t\.co)$/i.test(e);return t||n}const Su=X0(),Y0=new URLSearchParams(window.location.search).get("lang");var kc;const q0=Y0||(Su?"en":((kc=navigator.languages)==null?void 0:kc[0])||navigator.language||"en"),Xr=/^zh(?:-|$)/i.test(q0)?"zh-CN":"en",gc={"zh-CN":{documentTitle:"Rainform · 数据成雨",description:"Rainform「数据成雨」将 24 小时逐时降雨数据转化为可交互的实时粒子雨景。拖动降雨曲线，观察雨幕随数据重塑。",socialDescription:"Rainform「数据成雨」：拖动 24 小时降雨曲线，实时重塑由 Three.js 与 WebGL 驱动的粒子雨幕。",socialImageAlt:"Rainform 数据成雨生成的液态金属粒子雨幕",dashboardAria:"Rainform 数据成雨交互式粒子雨幕",sceneAria:"可交互的珍珠雨幕数据图",canvasAria:"可交互的珍珠雨幕降雨强度图",toolbarAria:"图表工具",editorToggle:"编辑降雨数据",soundEnable:"开启雨声",soundDisable:"关闭雨声",soundUnavailable:"当前浏览器不支持雨声音频",editorTitle:"编辑降雨数据",editorDescription:"拖动折线节点即可实时预览，松手后自动保存；也可以展开数字输入进行精确编辑。",editorCloseAria:"关闭降雨数据编辑器",close:"关闭",curveTitle:"逐时降雨曲线",liveSave:"实时保存",chartAria:"可拖拽降雨折线图",chartSvgAria:"00:00 至 24:00 降雨量折线，可上下拖动各小时节点",chartHint:"上下拖动节点调整雨量 · 方向键微调 · Shift + 方向键快速调整",preciseTitle:"精确输入 25 个时间点",preciseUnit:"单位：mm/h",inputGridAria:"00:00 至 24:00 的逐时降雨量",restoreDefault:"恢复默认",applyPrecise:"应用精确数据",axisTitle:"降雨强度",axisSubtitle:"每小时降水",axisUnit:"毫米/小时",rotateTitle:"请旋转至横屏",rotateDescription:"旋转手机以完整体验 Rainform 数据成雨",rotateSoundSuggestion:"建议开启声音",rotateDesktopSuggestion:"电脑端体验更佳",rotateBrowserSuggestion:"如果当前页面无法旋转，请轻点“⋮”并选择“在浏览器中打开”",rainfallInputAria:({time:i})=>`${i} 降雨量，毫米每小时`,chartPointAria:({time:i})=>`${i} 降雨量`,rainfallValueText:({value:i})=>`${i} 毫米每小时`,savedHour:({time:i})=>`已保存 ${i} 的降雨量。`,savedValue:({time:i,value:e})=>`已保存 ${i} · ${e} mm/h`,editorReady:"拖动节点会实时更新雨幕，松手后自动保存。",emptyRainfall:"请输入降雨量",invalidRainfall:"请输入大于或等于 0 的有限数字",invalidCount:({count:i})=>`有 ${i} 个时间点需要修正，已定位到第一处。`,applying:"正在重建降雨效果…",applied:({count:i,maximum:e})=>`已应用并保存 ${i} 个时间点，当前最大值 ${e} mm/h。`,applyFailed:"应用降雨数据失败",restored:"已恢复并应用内置默认降雨数据。",dataLengthError:({count:i})=>`降雨数据必须包含 ${i} 个时间点`,dataValueError:"降雨量必须是大于或等于 0 的有限数字",webglTitle:"无法显示实时雨景",webglUnavailable:"此设备或浏览器无法创建 WebGL2 图形环境。请升级浏览器，或确认硬件加速已开启。",webglInterrupted:"图形环境暂时中断，正在等待浏览器恢复。"},en:{documentTitle:"Rainform · Data into Rain",description:"Rainform turns 24 hours of hourly rainfall data into an interactive real-time particle landscape. Drag the rainfall curve to reshape the rain curtain.",socialDescription:"Rainform turns a 24-hour rainfall curve into a real-time particle landscape powered by Three.js and WebGL.",socialImageAlt:"Rainform liquid-metal particle rain generated from 24 hours of rainfall data",dashboardAria:"Rainform interactive rainfall particle landscape",sceneAria:"Interactive particle-based rainfall chart",canvasAria:"Interactive particle-based rainfall intensity chart",toolbarAria:"Chart tools",editorToggle:"Edit rainfall data",soundEnable:"Turn rain sound on",soundDisable:"Turn rain sound off",soundUnavailable:"Rain audio is not supported by this browser",editorTitle:"Edit rainfall data",editorDescription:"Drag a point for a live preview; changes save when released. Expand the fields below for precise input.",editorCloseAria:"Close rainfall data editor",close:"Close",curveTitle:"Hourly rainfall curve",liveSave:"Live save",chartAria:"Draggable rainfall line chart",chartSvgAria:"Rainfall from 00:00 to 24:00; drag each hourly point vertically to adjust it",chartHint:"Drag points vertically · Arrow keys for fine control · Shift + arrow keys for larger steps",preciseTitle:"Enter all 25 data points",preciseUnit:"Unit: mm/h",inputGridAria:"Hourly rainfall from 00:00 to 24:00",restoreDefault:"Restore defaults",applyPrecise:"Apply precise data",axisTitle:"Rainfall intensity",axisSubtitle:"Hourly rainfall",axisUnit:"mm/h",rotateTitle:"Rotate to landscape",rotateDescription:"Turn your phone sideways for the complete Rainform experience",rotateSoundSuggestion:"Sound on recommended",rotateDesktopSuggestion:"Best experienced on desktop",rotateBrowserSuggestion:"If this page cannot rotate, tap “⋮” and choose “Open in Browser”",rainfallInputAria:({time:i})=>`${i} rainfall, millimeters per hour`,chartPointAria:({time:i})=>`${i} rainfall`,rainfallValueText:({value:i})=>`${i} millimeters per hour`,savedHour:({time:i})=>`Saved rainfall at ${i}.`,savedValue:({time:i,value:e})=>`Saved ${i} · ${e} mm/h`,editorReady:"Dragging a point updates the rain live; releasing it saves the change.",emptyRainfall:"Enter a rainfall value",invalidRainfall:"Enter a finite number greater than or equal to 0",invalidCount:({count:i})=>`${i} data point${i===1?"":"s"} need correction. The first has been selected.`,applying:"Rebuilding the rainfall effect…",applied:({count:i,maximum:e})=>`Applied and saved ${i} data points. Current maximum: ${e} mm/h.`,applyFailed:"Failed to apply rainfall data",restored:"Restored and applied the built-in rainfall data.",dataLengthError:({count:i})=>`Rainfall data must contain ${i} data points`,dataValueError:"Rainfall must be a finite number greater than or equal to 0",webglTitle:"Unable to display the live rain scene",webglUnavailable:"This device or browser could not create a WebGL2 graphics context. Update the browser or make sure hardware acceleration is enabled.",webglInterrupted:"The graphics context was interrupted. Waiting for the browser to restore it."}};function Ke(i,e={}){const t=gc[Xr][i]??gc.en[i]??i;return typeof t=="function"?t(e):t}function $0(){var i,e,t,n,r,a,o;document.documentElement.lang=Xr,document.title=Ke("documentTitle"),(i=document.querySelector('meta[name="description"]'))==null||i.setAttribute("content",Ke("description")),(e=document.querySelector('meta[property="og:locale"]'))==null||e.setAttribute("content",Xr==="zh-CN"?"zh_CN":"en_US"),(t=document.querySelector('meta[property="og:title"]'))==null||t.setAttribute("content",Ke("documentTitle")),(n=document.querySelector('meta[property="og:description"]'))==null||n.setAttribute("content",Ke("socialDescription")),(r=document.querySelector('meta[property="og:image:alt"]'))==null||r.setAttribute("content",Ke("socialImageAlt")),(a=document.querySelector('meta[name="twitter:title"]'))==null||a.setAttribute("content",Ke("documentTitle")),(o=document.querySelector('meta[name="twitter:description"]'))==null||o.setAttribute("content",Ke("socialDescription")),document.querySelectorAll("[data-i18n]").forEach(s=>{s.textContent=Ke(s.dataset.i18n)}),document.querySelectorAll("[data-i18n-aria-label]").forEach(s=>{s.setAttribute("aria-label",Ke(s.dataset.i18nAriaLabel))}),document.querySelectorAll("[data-i18n-title]").forEach(s=>{s.setAttribute("title",Ke(s.dataset.i18nTitle))})}$0();const re=document.querySelector("#scene-root"),Gi=document.querySelector(".rainfall-dashboard"),j0=document.querySelector("#scene-toolbar"),Mu=document.querySelector("#selection-readout"),Z0=Mu.querySelector(".readout-time"),K0=Mu.querySelector(".readout-value"),zr=document.querySelector("#rainfall-editor-toggle"),An=document.querySelector("#rain-sound-toggle"),Jt=document.querySelector("#rainfall-editor"),vc=document.querySelector("#rainfall-data-form"),_c=document.querySelector("#rainfall-input-grid"),oi=document.querySelector("#rainfall-editor-status"),Tn=document.querySelector("#rainfall-editor-errors"),Cn=document.querySelector("#rainfall-line-chart"),xc=document.querySelector("#rainfall-chart-time"),Sc=document.querySelector("#rainfall-chart-value"),Mc=document.querySelector("#rainfall-precise-editor");document.querySelector("#solar-readout");const yc=document.querySelector("#solar-state"),wc=document.querySelector("#solar-time"),Ec=document.querySelector("#solar-altitude"),bc=document.querySelector("#solar-azimuth"),Ac=document.querySelector("#solar-lat"),Tc=document.querySelector("#solar-lon"),Go=document.querySelector("#solar-locate");re.dataset.locale=Xr;re.dataset.launchContext=Su?"x-embedded":"standard";function yu(i){let e=re.querySelector(".webgl-fallback");if(!e){e=document.createElement("section"),e.className="webgl-fallback",e.setAttribute("role","status"),e.setAttribute("aria-live","polite");const t=document.createElement("strong"),n=document.createElement("span");t.textContent=Ke("webglTitle"),e.append(t,n),re.appendChild(e)}e.querySelector("span").textContent=i,e.hidden=!1}function J0(){const i=re.querySelector(".webgl-fallback");i&&(i.hidden=!0)}const ci=Object.freeze([2.1,3.8,4.6,3.2,2.5,5.2,7.7,7.4,9.3,9.8,10,6.7,6.3,1.6,2.2,3.8,5.9,7.4,9.1,10,8.8,5.3,3.1,1.8,1.2]);let St=[...ci],nn=Math.max(...St),Bi=12.8,gn=[],Ms=Bi,vn=0;const Va=10,et=-.14,os=1831565813,Fn=795749149,Cc=1403592059,Rc=835170137,Q0=2051879369,ev=1284468263,Ka=!1,xt={BASE:0,AMBIENT:1,DOWNPOUR:2},vi={width:22.5,depth:10.4,frontZ:4.9},Vr={center:.2,thickness:.85,jitter:.22},$t=window.__rainAudioBoot,tv=Math.min(window.innerWidth,window.innerHeight),nv=Math.max(window.innerWidth,window.innerHeight),iv=window.matchMedia("(pointer: coarse)").matches||tv<=500&&nv<=1e3;var Hc;const Pe={enabled:((Hc=$t==null?void 0:$t.context)==null?void 0:Hc.state)==="running"||iv,started:!1,context:($t==null?void 0:$t.context)??null,gain:($t==null?void 0:$t.gain)??null,buffer:($t==null?void 0:$t.buffer)??null,preloadPromise:null,source:null,intentToken:0,sourceToken:0,contextObserved:!1},Pc=1,rv=4.8,av=1.8;function ov(){if(nn<=0)return 0;const i=St.reduce((n,r)=>n+r,0)/St.length,e=Ge(i/Va,0,1),t=Ge(nn/Va,0,1);return Ge(e*.76+t*.24,0,1)}function yr(){const i=ov();re.dataset.rainSoundStrength=i.toFixed(3);const e=i>0?.18+Math.pow(i,.62)*.4:0;return Ge(e*rv,0,av)}function wu(){if(!Pe.context){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t;try{t=new e({latencyHint:"interactive"})}catch{t=new e}const n=t.createGain();n.gain.value=0,n.connect(t.destination),Pe.context=t,Pe.gain=n}const{context:i}=Pe;return Pe.contextObserved||(Pe.contextObserved=!0,re.dataset.rainSoundEngine="web-audio-buffer-loop",re.dataset.rainSoundContext=i.state,re.dataset.rainSoundBaseLatency=Number.isFinite(i.baseLatency)?i.baseLatency.toFixed(4):"unknown",i.addEventListener("statechange",()=>{re.dataset.rainSoundContext=i.state,i.state==="running"&&Pe.enabled&&Pe.source&&(re.dataset.rainSoundAutoplay="playing")})),i}function Wn(i){const{context:e,gain:t}=Pe;if(!e||!t)return;const n=e.currentTime;t.gain.cancelScheduledValues(n),t.gain.value=i,t.gain.setValueAtTime(i,n),re.dataset.rainSoundGain=i.toFixed(3)}function sv(){const i=Pe.enabled?yr():0;Wn(i)}function Ja(){if(!An)return;const i=Ke(Pe.enabled?"soundDisable":"soundEnable");An.setAttribute("aria-pressed",String(Pe.enabled)),An.setAttribute("aria-label",i),An.setAttribute("title",i),re.dataset.rainSound=Pe.enabled?"on":"off"}function Eu(){const i=wu();return i?Pe.buffer?Promise.resolve(Dc(Pe.buffer)):(Pe.preloadPromise||(Pe.preloadPromise=fetch("/weather-widget/audio/rain-loop.wav").then(e=>{if(!e.ok)throw new Error(`Rain audio request failed: ${e.status}`);return e.arrayBuffer()}).then(e=>i.decodeAudioData(e)).then(Dc).catch(e=>{throw Pe.preloadPromise=null,e})),Pe.preloadPromise):Promise.reject(new Error("Web Audio is not supported"))}function Dc(i){return Pe.buffer=i,re.dataset.rainSoundDuration=i.duration.toFixed(3),re.dataset.rainSoundLoop="seamless-buffer",re.dataset.rainSoundLoaded="true",bu(i),i}function bu(i=Pe.buffer){if(Pe.source||!i||!Pe.context||!Pe.gain)return Pe.source;const e=Pe.context.createBufferSource(),t=++Pe.sourceToken;e.buffer=i,e.loop=!0,e.playbackRate.value=Pc,e.connect(Pe.gain),e.onended=()=>{t===Pe.sourceToken&&(Pe.source=null)},e.start(),Pe.source=e,Pe.started=!0,re.dataset.rainSoundStarted="true",re.dataset.rainSoundPlaybackRate=Pc.toFixed(1);const n=Pe.enabled&&Pe.context.state==="running";return Wn(n?yr():0),re.dataset.rainSoundAutoplay=n?"playing":"waiting-for-gesture",e}function lv(){const i=Pe.source;i&&(Pe.source=null,++Pe.sourceToken,i.onended=null,i.stop())}function Au(i){const e=wu();if(!e){Pe.enabled=!1,Ja();return}const t=e.state==="running"?Promise.resolve():e.resume(),n=Eu();Wn(yr()),Promise.all([t,n]).then(([,r])=>{i!==Pe.intentToken||!Pe.enabled||(bu(r),Wn(yr()),re.dataset.rainSoundAutoplay="playing")}).catch(()=>{i===Pe.intentToken&&(Wn(0),re.dataset.rainSoundAutoplay="waiting-for-gesture")})}function cv(i){const e=++Pe.intentToken;Pe.enabled=i,Ja(),i?Au(e):Wn(0)}function uv(){Pe.enabled&&Au(Pe.intentToken)}function Tu(){An&&cv(!Pe.enabled)}An==null||An.addEventListener("pointerdown",i=>{!i.isPrimary||i.button!==0||Tu()});An==null||An.addEventListener("click",i=>{i.detail===0&&Tu()});const Cu=i=>{i.target instanceof Element&&i.target.closest("#rain-sound-toggle")||uv()};document.addEventListener("pointerdown",Cu,{capture:!0,passive:!0});document.addEventListener("keydown",Cu);document.addEventListener("visibilitychange",()=>{const{context:i}=Pe;i&&(document.hidden?i.suspend().catch(()=>{}):Pe.enabled&&Pe.started&&i.resume().then(()=>{Pe.enabled&&Wn(yr())}).catch(()=>{}))});window.addEventListener("pagehide",()=>{Wn(0),lv()},{once:!0});re.dataset.rainSoundStarted="false";re.dataset.rainSoundLoaded="false";re.dataset.rainSoundProfile="procedurally-generated-rain-loop";Ja();re.dataset.rainSoundAutoplay="waiting-for-gesture";Eu().catch(()=>{});var Gc;(Gc=$t==null?void 0:$t.autoplayPromise)==null||Gc.then(i=>{var t;const e=((t=navigator.userActivation)==null?void 0:t.hasBeenActive)===!0;!i||e||Pe.intentToken!==0||Pe.enabled||(Pe.enabled=!0,Ja(),Wn(yr()),re.dataset.rainSoundAutoplay="playing")});const Fr={worldHeight:6.6,plotWidth:17,z:Vr.center+Vr.thickness+.32,dragThreshold:5};$u();const Pi={resX:768,resZ:512,xMin:-22.5*.6,xMax:vi.width*.6,zMin:-10.4*1.25,zMax:vi.depth*1.35},Nt={fog:0,pearlBright:new Ee(13818078),pearlMid:new Ee(8688290),pearlDark:new Ee(4345436),waterBright:new Ee(10662076),waterMid:new Ee(5924984),waterDark:new Ee(2633792)},oe={readout:{offsetX:0,offsetY:0},camera:{frameTargetYOffset:1.15,desktop:{pos:[-.27,3.6,16.6],target:[-.27,2.45,.26],fov:35},tablet:{pos:[-.27,4.5,20.4],target:[-.27,3.35,.2],fov:37},mobile:{pos:[-.27,4.9,24.2],target:[-.27,3.75,.16],fov:40}},mist:{color:11253439,opacity:.28,height:3.5,reflectionOpacity:0},pearls:{maxPointSize:1.9,minPointSize:25.3,alpha:3},rain:{baseWeight:.62,exponent:.05},metalRain:{darkColor:0,midColor:12766171,brightColor:16448511,tintColor:37375,pearlBandFrequency:5.5,pearlBandSpeed:-2.55,pearlSpecularPower:30,pearlFresnelStrength:1.56,threadBandDensity:.081,threadBandSpeed:-.9,threadMirrorStrength:.93,bodyBandDensity:5.4,bodyBandSpeed:-1.1,bodyMirrorStrength:.78,filamentBandDensity:2.35,filamentBandSpeed:.84,filamentMirrorStrength:.58,highlightMirrorStrength:.9},floorGlow:{base:-.77,baseByStrength:.48,lowerCurtain:.13,lowerCurtainByStrength:-.89,downpour:-1.43,downpourByStrength:.67,ambient:-.06},glint:{opacity:3,alphaMax:2.13,maxSize:62},foam:{opacity:2.67,maxSize:73.6},spray:{opacity:2.33,maxSize:86.3},water:{deepColor:0,surfaceColor:2830912,roughness:1,specularStrength:2.5,rippleHighlight:3,surfaceOpacity:5,wavePrimary:0,waveSecondary:0,reflStrength:.5,reflFade:2.15,rearFadeNearZ:-.7,rearFadeFarZ:-4.2},waterfallBody:{deepColor:1711651,midColor:13423835,brightColor:658447,broadSway:0,fineSway:0,streakFrequency:38.1,fineStreakFrequency:499.6,streakSharpness:.05,fineStreakSharpness:40,fineStreakWeight:-2,baseMass:0,riseMass:.64,cloudLow:.68,cloudHigh:1.05,gapDarkness:.05,streakBrightness:1.4,bottomFeather:.2,opacity:3},waterfallFilaments:{edgeWidth:3,highlightEdgeWidth:1.75,opacity:0,highlightOpacity:.28,bottomMistOpacity:5},ripple:{gain:0,damping:.9999,dropRain:1.51,dropClick:.95,displace:.012},orbit:{minDistance:9,maxDistance:30,azimuthDeg:60,minPolarDeg:52,maxPolarDeg:93,damping:.08}};JSON.parse(JSON.stringify(oe));function dv(i){if(typeof i=="number"&&Number.isFinite(i))return Math.max(0,Math.min(16777215,Math.round(i)));const e=String(i??"").trim().replace(/^#/,"");return/^[0-9a-f]{6}$/i.test(e)?parseInt(e,16):0}function bt(i){return`#${(Number(i)>>>0).toString(16).padStart(6,"0").slice(-6)}`}function Kt(i){const e=Number(i)>>>0;return`${e>>16&255}, ${e>>8&255}, ${e&255}`}function lt(i,e,t){return new Ee(i).lerp(new Ee(e),Ge(t,0,1)).getHex()}function hv(i){const e=dv(i);if(e===0)return{base:e,backgroundTop:0,backgroundMid:0,backgroundBottom:0,fog:0,shadow:0,panel:527380,panelTop:1843760,panelBottom:395536,accent:37375,textStrong:16448511,textMid:12766171,textSoft:9412024,axisLine:15067632,axisTick:12766171,axisStrong:16777215,axisTime:14476011,axisValue:16054010,axisUnit:12108239,metalDark:0,metalMid:12766171,metalBright:16448511,metalTint:37375,waterDeep:0,waterSurface:2830912,mist:11253439,waterfallDeep:1711651,waterfallMid:13423835,waterfallBright:658447};const t=new Ee(e),r=t.r*.2126+t.g*.7152+t.b*.0722>.42?0:16777215,a=lt(e,0,.7);return{base:e,backgroundTop:lt(e,r,.035),backgroundMid:e,backgroundBottom:lt(e,0,.24),fog:lt(e,0,.18),shadow:0,panel:a,panelTop:lt(a,16777215,.09),panelBottom:lt(a,0,.38),accent:lt(e,r,.56),textStrong:lt(e,16777215,.95),textMid:lt(e,16777215,.76),textSoft:lt(e,16777215,.58),axisLine:lt(e,r,.9),axisTick:lt(e,r,.72),axisStrong:lt(e,r,.98),axisTime:lt(e,r,.84),axisValue:lt(e,r,.94),axisUnit:lt(e,r,.66),metalDark:lt(e,r,.08),metalMid:lt(e,r,.64),metalBright:lt(e,r,.96),metalTint:lt(e,r,.34),waterDeep:lt(e,r,.035),waterSurface:lt(e,r,.24),mist:lt(e,r,.62),waterfallDeep:lt(e,r,.12),waterfallMid:lt(e,r,.68),waterfallBright:lt(e,r,.92)}}function fv(){return 0}function pv(i){const e=document.documentElement.style,t=i.base===0?.72:.9,n=i.base===0?.8:.94;e.setProperty("--background-top",bt(i.backgroundTop)),e.setProperty("--background-mid",bt(i.backgroundMid)),e.setProperty("--background-bottom",bt(i.backgroundBottom)),e.setProperty("--model-metal-dark",bt(i.metalDark)),e.setProperty("--model-metal-mid",bt(i.metalMid)),e.setProperty("--model-metal-bright",bt(i.metalBright)),e.setProperty("--model-metal-tint",bt(i.metalTint)),e.setProperty("--theme-highlight-rgb",Kt(i.textMid)),e.setProperty("--theme-shadow-rgb",Kt(i.shadow)),e.setProperty("--theme-panel-rgb",Kt(i.panel)),e.setProperty("--panel-surface-top",`rgba(${Kt(i.panelTop)}, ${t})`),e.setProperty("--panel-surface-bottom",`rgba(${Kt(i.panelBottom)}, ${n})`),e.setProperty("--panel-border",`rgba(${Kt(i.textStrong)}, 0.17)`),e.setProperty("--panel-divider",`rgba(${Kt(i.textStrong)}, 0.1)`),e.setProperty("--panel-card-border",`rgba(${Kt(i.textStrong)}, 0.13)`),e.setProperty("--panel-control-bg",`rgba(${Kt(i.textStrong)}, 0.055)`),e.setProperty("--panel-control-hover",`rgba(${Kt(i.textStrong)}, 0.1)`),e.setProperty("--panel-text-main",`rgba(${Kt(i.textStrong)}, 0.94)`),e.setProperty("--panel-text-soft",`rgba(${Kt(i.textMid)}, 0.58)`),e.setProperty("--panel-accent",`rgba(${Kt(i.accent)}, 0.78)`),e.setProperty("--panel-accent-soft",`rgba(${Kt(i.accent)}, 0.14)`)}function mv(i){Nt.fog=i.fog,Nt.pearlBright.setHex(i.metalBright),Nt.pearlMid.setHex(i.metalMid),Nt.pearlDark.setHex(i.metalDark),Nt.waterBright.setHex(i.mist),Nt.waterMid.setHex(i.waterSurface),Nt.waterDark.setHex(i.waterDeep)}let Ru=fv(),Ct=hv(Ru);pv(Ct);mv(Ct);function Pu(){const i=Number(oe.readout.offsetX)||0,e=Number(oe.readout.offsetY)||0;tt!=null&&tt.readout&&tt.readout.mesh.position.set(tt.readout.anchorX+i,tt.readout.anchorY+e,tt.readout.anchorZ),re.dataset.readoutMode="world-space-rotating",re.dataset.readoutOffsetX=String(i),re.dataset.readoutOffsetY=String(e),delete re.dataset.readoutBottom,delete re.dataset.readoutRight,delete re.dataset.readoutTop}const zi=window.matchMedia("(pointer: coarse)").matches,ki=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Xn(){const i=Math.min(window.innerWidth,window.innerHeight),e=Math.max(window.innerWidth,window.innerHeight);return window.innerWidth>window.innerHeight&&i<=500&&e<=1e3}function Du(){const i=Xn()?1.5:zi?1:1.75;return Math.min(window.devicePixelRatio||1,i)}let ui=Du();const pn=zi?{chains:1e3,ambientChains:400,downpourChains:700,waterfallFilaments:1e3,waterGlints:0,rippleEventsPerSecond:18}:{chains:2e3,ambientChains:800,downpourChains:1400,waterfallFilaments:1900,waterGlints:0,rippleEventsPerSecond:60},yn={showAxes:!0,showWater:!0,showMist:!0,showRainLines:!0,showPearls:!0,showWaterGlints:!0,showImpacts:Ka,showPeakWaterfall:!1};yn.showImpacts=yn.showImpacts&&Ka;const pe={pointerActive:!1,pointerDown:!1,pointerMoved:!1,pointerHour:18,pointerWorld:new F,pointerNdc:new Oe,pointerClient:{x:0,y:0},downClient:{x:0,y:0},downView:{x:0,y:0},activePointerId:null,selectedHour:18,selectedActive:!1,burst:0,lastHoverRippleAt:-1,view:{targetX:0,targetY:0},readoutKey:""};let Qe;try{Qe=new C0({antialias:!zi,alpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),re.dataset.webglStatus="ready"}catch(i){throw yu(Ke("webglUnavailable")),re.dataset.webglStatus="unavailable",i}Qe.setPixelRatio(ui);Qe.setSize(window.innerWidth,window.innerHeight);re.dataset.rendererPixelRatio=ui.toFixed(2);Qe.outputColorSpace=cn;Qe.domElement.setAttribute("aria-label",Ke("canvasAria"));re.appendChild(Qe.domElement);Qe.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),re.dataset.webglStatus="lost",yu(Ke("webglInterrupted"))});Qe.domElement.addEventListener("webglcontextrestored",()=>{re.dataset.webglStatus="ready",J0()});const Zn=new is;Zn.fog=new xs(Nt.fog,zi?.019:.022);const Qt=new fn(35,window.innerWidth/window.innerHeight,.1,110),Aa=new F,Rn=new F;new F;const wr=W0({scene:Zn,renderer:Qe,root:re}),Lc=.04;let dr=null,pt=null;io();pt=new H0(Qt,Qe.domElement);pt.enableDamping=!0;pt.dampingFactor=oe.orbit.damping;pt.enablePan=!1;pt.enableZoom=!0;pt.rotateSpeed=.55;pt.zoomSpeed=.8;pt.minDistance=oe.orbit.minDistance;pt.maxDistance=oe.orbit.maxDistance;pt.minPolarAngle=qn.degToRad(oe.orbit.minPolarDeg);pt.maxPolarAngle=qn.degToRad(oe.orbit.maxPolarDeg);pt.minAzimuthAngle=-qn.degToRad(oe.orbit.azimuthDeg);pt.maxAzimuthAngle=qn.degToRad(oe.orbit.azimuthDeg);pt.target.copy(Rn);pt.update();const Vo=new z0,gv=new Pn(new F(0,1,0),-et),vv=new Pn(new F(0,0,1),-1.37),Ta=new F,ss=new B0,Er=new At(0,1,0,1),br=new F(.002,0,.002),Ar=new Oe,Wa={value:0},Tr=new bn;Tr.name="pearl-rainfall-visualization";Zn.add(Tr);let tt=Ou();dr=tt.fitBounds.clone();io();Pu();ys(tt);ju();const jt=Tv(),Lu=Cv();let Yn=ku();jt.material.uniforms.uRainLut.value=Yn.lut;jt.material.uniforms.uLutBounds.value.set(Yn.lutXMin,Yn.lutSpan);const pr=nn<=0,Fu=gn.length>0,Fc=pr?0:qu(nn);let rt=zu(pr?0:Math.max(1,Math.round(pn.chains*Fc)),pr?0:Math.max(1,Math.round(pn.ambientChains*Math.pow(Fc,1.08))),pr||!Fu?0:pn.downpourChains),Gt=Hu(pr||!Fu?0:pn.waterfallFilaments,rt.data),di=Gu(pr?0:pn.waterGlints),ft=Vu(0,0,pn.rippleEventsPerSecond);const Yr=Nv(Qe);Tr.add(tt.group,Lu,jt,Yn.mesh,rt.lines,rt.points,Gt.group,di.points,ft.foam,ft.droplets,ft.crowns);Uu();ki&&(ws(rt,0,0),Es(di,0,0));Iu();Zr();Qe.domElement.addEventListener("pointerdown",Xv,{passive:!0});Qe.domElement.addEventListener("pointermove",Yv,{passive:!0});Qe.domElement.addEventListener("pointerup",qv,{passive:!0});Qe.domElement.addEventListener("pointercancel",$v,{passive:!0});Qe.domElement.addEventListener("pointerleave",jv,{passive:!0});Qe.domElement.addEventListener("dblclick",Kv);document.addEventListener("pointermove",i=>{i.target!==Qe.domElement&&to()},{passive:!0});j0.addEventListener("pointerenter",to);Jt.addEventListener("pointerenter",to);window.addEventListener("resize",Ps);window.addEventListener("orientationchange",Ps);var Vc;(Vc=window.visualViewport)==null||Vc.addEventListener("resize",Ps);window.addEventListener("blur",Zv);r_();Go==null||Go.addEventListener("click",()=>wr.locate());re.dataset.releaseChannel="public";wr.start();let ls=!1;window.addEventListener("message",i=>{i.data&&(i.data.type==="setSolarVisible"?ls=!i.data.visible:i.data.type==="setSolarLocation"&&typeof i.data.latitude=="number"&&typeof i.data.longitude=="number"&&wr.applyLocation(i.data.latitude,i.data.longitude,i.data.name||"parent"))});cs();function _v(){const i=wr.state,e=ls?0:i.intensity;wc&&(wc.textContent=new Date().toLocaleTimeString("zh-CN",{hour12:!1})),Ec&&(Ec.textContent=`${i.altitudeDeg.toFixed(1)}°`),bc&&(bc.textContent=`${i.azimuthDeg.toFixed(1)}°`),Ac&&(Ac.textContent=`${i.latitude.toFixed(3)}°`),Tc&&(Tc.textContent=`${i.longitude.toFixed(3)}°`),yc&&(yc.textContent=i.altitudeDeg>-.833?"SUN TRACKING":"SUN BELOW HORIZON"),jt.material.uniforms.uSolarDir.value.copy(i.direction),jt.material.uniforms.uSolarColor.value.copy(i.color),jt.material.uniforms.uSolarIntensity.value=e,jt.material.uniforms.uSolarElevation.value=i.altitudeRad;const t=Math.min(1,e*1.5);jt.material.uniforms.uColorDeep.value.lerpColors(new Ee(oe.water.deepColor),new Ee(1723002),t),jt.material.uniforms.uColorSurface.value.lerpColors(new Ee(oe.water.surfaceColor),new Ee(4886728),t),Tr.traverse(r=>{const a=r.material;a!=null&&a.uniforms&&(a.uniforms.uSolarDir&&a.uniforms.uSolarDir.value.copy(i.direction),a.uniforms.uSolarColor&&a.uniforms.uSolarColor.value.copy(i.color),a.uniforms.uSolarIntensity&&(a.uniforms.uSolarIntensity.value=e),a.uniforms.uSolarElevation&&(a.uniforms.uSolarElevation.value=i.altitudeRad))}),wr.sunLight.intensity=e;const n=Zn.getObjectByName("rainform-real-solar-system");n&&(n.visible=!ls)}let Uc=0;function cs(){if(zi){const t=performance.now();if(t-Uc<28){requestAnimationFrame(cs);return}Uc=t}const i=Math.min(ss.getDelta(),.04),e=ss.elapsedTime;pe.burst=Math.max(0,pe.burst-i*1.1),Yn.material.uniforms.uTime.value=ki?6.2:e,ki||(Fv(ft,e,i),ws(rt,e,i),Es(di,e,i)),pe.pointerActive&&e-pe.lastHoverRippleAt>.18&&(pe.lastHoverRippleAt=e,bs(Yr,pe.pointerWorld.x,pe.pointerWorld.z,.34+mr(pe.pointerHour)*.28,!1)),Ov(Yr,Qe),wr.update(e),_v(),Bv(e),Jv(),bv(tt),Zr(),Qe.render(Zn,Qt),requestAnimationFrame(cs)}function Uu(){tt.group.visible=yn.showAxes,jt.visible=yn.showWater,Lu.visible=yn.showWater,Yn.mesh.visible=yn.showMist,rt.lines.visible=yn.showRainLines,rt.points.visible=yn.showPearls,di.points.visible=yn.showWaterGlints;const i=Ka;ft.foam.visible=i,ft.droplets.visible=i,ft.crowns.visible=i,Gt.group.visible=yn.showPeakWaterfall,re.dataset.axisVisibility="visible"}function Iu(){var e;re.dataset.rainMaterial="procedural-liquid-metal",re.dataset.rainEdgeMode=Xn()?"mobile-crisp":"authored",re.dataset.rainfallMax=String(Number(nn.toFixed(3))),re.dataset.axisMax=String(Number(Bi.toFixed(3))),re.dataset.rainfallValues=St.join(","),re.dataset.rainfallPointCount=String(St.length);const i=St.map((t,n)=>t===0?n:null).filter(t=>t!==null);re.dataset.zeroRainfallCount=String(i.length),re.dataset.zeroRainfallHours=i.join(","),re.dataset.zeroRainSuppression="anchor-feathered",re.dataset.rainfallResponse="continuous-raw-hourly-v2",re.dataset.rainfallDry=String(nn<=0),re.dataset.chainCount=String(rt.data.count),re.dataset.zeroSuppressedChainCount=String(((e=rt.data.presence)==null?void 0:e.reduce((t,n)=>t+(n<=.08?1:0),0))??0),re.dataset.baseChainCount=String(rt.data.baseCount),re.dataset.ambientChainCount=String(rt.data.ambientCount),re.dataset.downpourChainCount=String(rt.data.downpourCount),re.dataset.pearlCount=String(rt.data.pearlCount),re.dataset.streakCount=String(rt.data.downpourCount),re.dataset.waterfallBodyCount=String(Gt.bodyCount),re.dataset.waterfallPeakCount=String(Gt.peakCount),re.dataset.waterfallFilamentCapacity=String(Gt.filamentCapacity),re.dataset.activeWaterfallFilaments=String(Gt.visibleFilamentCount),re.dataset.bridgeFilamentCount=String(Gt.bridgeFilamentCount),re.dataset.coreFilamentCount=String(Gt.coreFilamentCount),re.dataset.lowerFilamentCount=String(Gt.lowerFilamentCount),re.dataset.wideFilamentCount=String(Gt.wideFilamentCount),re.dataset.foregroundFilamentCount=String(Gt.foregroundFilamentCount),re.dataset.highlightFilamentCount=String(Gt.highlightFilamentCount),re.dataset.waterfallRibbonSegments=String(Gt.ribbonSegments),re.dataset.activeBridgeTrails=String(rt.data.activeBridgeTrailCount),re.dataset.waterfallPlotClip="off",re.dataset.baselineImpactCount=String(ft.data.staticSeedCount),re.dataset.splashImpactsEnabled=String(Ka),re.dataset.activeStormParticles=String(ft.data.activeCount),re.dataset.activeFoamParticles=String(ft.data.activeFoamCount),re.dataset.activeSprayDroplets=String(ft.data.activeDropletCount),re.dataset.activeCrownLines=String(ft.data.activeCrownCount),re.dataset.peakImpactCount=String(ft.data.totalPeakCollisions),re.dataset.stormEmissionRate=ft.data.currentEmissionRate.toFixed(1),re.dataset.activeRipples="0",re.dataset.rainPlotClip="off",re.dataset.rainCeilingValue=String(Number(Ms.toFixed(3))),re.dataset.rainCeilingWorldY=vn.toFixed(3),re.dataset.ambientCurtainMode="data-driven-ceiling",re.dataset.axisMode="3d-reference-labels",re.dataset.axisVisibility=tt.group.visible?"visible":"hidden",re.dataset.timeTickCount=String(tt.timeTickCount),re.dataset.valueTickCount=String(tt.valueTickCount),re.dataset.axisLabelCount=String(tt.labelCount)}function Wo(i){if(!Array.isArray(i)||i.length!==ci.length)throw new TypeError(Ke("dataLengthError",{count:ci.length}));St=i.map(t=>{const n=Number(t);if(!Number.isFinite(n)||n<0)throw new TypeError(Ke("dataValueError"));return Di(n)}),$u(),xv(),sv(),pe.readoutKey="",Zr(!0)}function xv(){const i=nn<=0,e=gn.length>0,t=i?0:qu(nn),n=Ou(),r=ku(),a=zu(i?0:Math.max(1,Math.round(pn.chains*t)),i?0:Math.max(1,Math.round(pn.ambientChains*Math.pow(t,1.08))),i||!e?0:pn.downpourChains),o=Hu(i||!e?0:pn.waterfallFilaments,a.data),s=Gu(i?0:pn.waterGlints),c=Vu(0,0,pn.rippleEventsPerSecond),l=[tt.group,Yn.mesh,rt.lines,rt.points,Gt.group,di.points,ft.foam,ft.droplets,ft.crowns];jt.material.uniforms.uRainLut.value=r.lut,jt.material.uniforms.uLutBounds.value.set(r.lutXMin,r.lutSpan),Tr.remove(...l),l.forEach(Sv),tt=n,dr=tt.fitBounds.clone(),Pu(),ys(tt),Yn=r,rt=a,Gt=o,di=s,ft=c,Tr.add(tt.group,Yn.mesh,rt.lines,rt.points,Gt.group,di.points,ft.foam,ft.droplets,ft.crowns),Mv(Yr),Uu(),ki&&(ws(rt,0,0),Es(di,0,0)),Iu()}function Sv(i){var r;if(!i)return;const e=new Set,t=new Set,n=new Set;i.traverse(a=>{a.geometry&&e.add(a.geometry),(Array.isArray(a.material)?a.material:[a.material]).filter(Boolean).forEach(s=>t.add(s))});for(const a of t){for(const o of Object.values(a))o!=null&&o.isTexture&&n.add(o);for(const o of Object.values(a.uniforms||{}))(r=o==null?void 0:o.value)!=null&&r.isTexture&&n.add(o.value)}n.forEach(a=>a.dispose()),e.forEach(a=>a.dispose()),t.forEach(a=>a.dispose())}function Mv(i){const e=Qe.getRenderTarget(),t=Qe.autoClear;Qe.autoClear=!0,Qe.setRenderTarget(i.rtA),Qe.clear(),Qe.setRenderTarget(i.rtB),Qe.clear(),Qe.setRenderTarget(e),Qe.autoClear=t,i.dropCount=0,i.dropGeometry.setDrawRange(0,0),i.texture=i.rtA.texture,jt.material.uniforms.uHeightField.value=i.texture,re.dataset.activeRipples="0"}function Nu(i,e){const t=Ge(Math.round(e),0,24),n=Ts(e).toFixed(1),r=`${t}-${n}-${Ru}`;if(i.key===r)return;const{canvas:a,context:o,texture:s}=i;o.clearRect(0,0,a.width,a.height),o.textAlign="left",o.textBaseline="middle";const c=a.width-12,l=Ke("axisUnit");o.font='450 32px Inter, "PingFang SC", "Microsoft YaHei", sans-serif';const d=o.measureText(l).width,h=18,f=8,m=48,g=26,_=218,p=h+f+m,u=16;let w=116;o.font=`350 ${w}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`;let S=o.measureText(n).width;const b=c-d-u-p;S>b&&(w=Math.max(72,w*b/S),o.font=`350 ${w}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`,S=o.measureText(n).width);const L=p,C=Math.min(c-d,L+S+u);o.globalAlpha=.92,o.fillStyle=bt(Ct.axisTick),o.fillRect(h,g,f,_-g),o.globalAlpha=1,o.fillStyle=bt(Ct.axisTime),o.font='550 42px Inter, "PingFang SC", "Microsoft YaHei", sans-serif',o.fillText(`${String(t).padStart(2,"0")}:00`,L,48),o.fillStyle=bt(Ct.axisStrong),o.font=`350 ${w}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`,o.fillText(n,L,158),o.fillStyle=bt(Ct.axisTick),o.font='450 32px Inter, "PingFang SC", "Microsoft YaHei", sans-serif',o.fillText(l,C,166),s.needsUpdate=!0,i.key=r}function yv(i,e,t,n){const r=document.createElement("canvas");r.width=480,r.height=260;const a=r.getContext("2d"),o=new xu(r);o.colorSpace=cn,o.minFilter=Rt,o.magFilter=Rt,o.generateMipmaps=!1,o.anisotropy=Math.min(4,Qe.capabilities.getMaxAnisotropy());const s=new En({map:o,transparent:!0,opacity:n,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,side:en}),c=.98,l=c*r.width/r.height,d=new Un(l,c);d.translate(-l*.5,0,0);const h=new dt(d,s);h.name="axis-dynamic-readout",h.position.set(i,e,t),h.renderOrder=9.6,h.visible=!1;const f={mesh:h,material:s,canvas:r,context:a,texture:o,anchorX:i,anchorY:e,anchorZ:t,key:""};return Nu(f,pe.selectedHour),f}function Ou(){const i=new bn;i.name="rainfall-3d-axes";const e=.85,t=new En({color:Ct.axisLine,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),n=new En({color:Ct.axisTick,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),r=new En({color:Ct.axisStrong,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),a=new En({color:Ct.axisStrong,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}),o=It(0),s=It(24),c=et-.18,l=vn,d=Fr.z,h=l+1.42,f=[o,c,d,s,c,d,o,c,d,o,l,d],m=[],g=new bn;g.name="axis-labels";const _=[];for(let U=0;U<=24;U+=2){const O=It(U);m.push(O,c,d);const $=Ca(`${String(U).padStart(2,"0")}:00`,{height:.2,fontSize:54,fontWeight:400,mobileScale:1.55,color:bt(Ct.axisTime)});$.sprite.position.set(O,c-.27,d+.04),g.add($.sprite),_.push({material:$.material,baseOpacity:$.opacity})}const p=[],u=Hv(),w=o-.72;for(const U of u){const O=Ev(U);U>0&&p.push(o-.08,O,d,o+.08,O,d);const $=Ca(ds(U),{height:.27,fontSize:64,fontWeight:350,mobileOffsetX:-.32,anchorX:0,color:bt(Ct.axisValue)});$.sprite.position.set(w,O+.02,d+.04),g.add($.sprite),_.push({material:$.material,baseOpacity:$.opacity});const Z=Ca(Ke("axisUnit"),{height:.14,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,anchorX:0,color:bt(Ct.axisUnit)});Z.sprite.position.set(w,O-.22,d+.04),g.add(Z.sprite),_.push({material:Z.material,baseOpacity:Z.opacity})}const S=w,b=Xr==="zh-CN"?[{text:Ke("axisTitle"),y:h-.22,height:.44,fontSize:76,fontWeight:550,mobileOffsetX:-.32,color:bt(Ct.axisStrong)},{text:Ke("axisSubtitle"),y:h-.57,height:.22,fontSize:52,fontWeight:450,mobileScale:1.55,mobileOffsetX:-.32,color:bt(Ct.axisTime)},{text:Ke("axisUnit"),y:h-.82,height:.15,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,color:bt(Ct.axisUnit)}]:[{text:Ke("axisTitle"),y:h-.22,height:.4,fontSize:76,fontWeight:550,mobileOffsetX:-.32,color:bt(Ct.axisStrong)},{text:Ke("axisSubtitle"),y:h-.57,height:.19,fontSize:46,fontWeight:450,mobileScale:1.55,mobileOffsetX:-.32,color:bt(Ct.axisTime)},{text:Ke("axisUnit"),y:h-.82,height:.15,fontSize:44,fontWeight:450,mobileScale:1.9,mobileOffsetX:-.32,color:bt(Ct.axisUnit)}];for(const U of b){const O=Ca(U.text,{height:U.height,fontSize:U.fontSize,fontWeight:U.fontWeight,mobileScale:U.mobileScale,mobileOffsetX:U.mobileOffsetX,anchorX:0,color:U.color});O.sprite.position.set(S,U.y,d+.04),O.material.opacity=e,g.add(O.sprite),_.push({material:O.material,baseOpacity:e})}const L=yv(s,h-.49,d+.05,e);L.mesh.position.x+=Number(oe.readout.offsetX)||0,L.mesh.position.y+=Number(oe.readout.offsetY)||0,_.push({material:L.material,baseOpacity:e});const C=Ra("axis-lines",f,t,.009,9),T=wv("time-ticks",m,n,.011,9.1),B=Ra("value-ticks",p,n,.008,9.1),E=Ra("selected-time-marker",[0,c,d+.012,0,c+.48,d+.012],r,.01,9.3),M=Ra("hover-time-marker",[0,c,d+.018,0,c+.34,d+.018],a,.008,9.4);E.visible=!1,M.visible=!1,i.add(C,T,B,g,L.mesh,E,M),i.updateMatrixWorld(!0);const P=new Rr().setFromObject(i,!0);return{group:i,fitBounds:P,labelGroup:g,readout:L,selectedMarker:E,hoverMarker:M,opacityEntries:[{material:t,baseOpacity:e},{material:n,baseOpacity:e},{material:r,baseOpacity:e},{material:a,baseOpacity:e},..._],opacity:1,dragging:!1,fadeStartedAt:-1,timeTickCount:13,valueTickCount:p.length/6,labelCount:13+u.length*2+b.length+1}}function wv(i,e,t,n,r){const a=new bn;a.name=i;const o=new Ui(n,16,10);for(let s=0;s<e.length;s+=3){const c=new dt(o,t);c.position.set(e[s],e[s+1],e[s+2]),c.renderOrder=r,a.add(c)}return a}function Ca(i,{height:e,fontSize:t,fontWeight:n=300,mobileScale:r=1.28,mobileOffsetX:a=0,anchorX:o=.5,color:s="#ffffff"}){const c=document.createElement("canvas"),l=c.getContext("2d"),d=3,h=t*d,f=`${n} ${h}px Inter, "PingFang SC", "Microsoft YaHei", sans-serif`;l.font=f;const m=Math.ceil(l.measureText(i).width+24*d),g=Math.ceil(h*1.45);c.width=m,c.height=g,l.clearRect(0,0,m,g),l.font=f,l.fillStyle=s,l.textAlign="center",l.textBaseline="middle",l.fillText(i,m*.5,g*.5);const _=new xu(c);_.colorSpace=cn,_.minFilter=Rt,_.magFilter=Rt,_.generateMipmaps=!1,_.anisotropy=Math.min(4,Qe.capabilities.getMaxAnisotropy());const p=new En({map:_,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,side:en}),u=e*m/g,w=new Un(u,e);w.translate((.5-o)*u,0,0);const S=new dt(w,p);return S.renderOrder=9.5,S.userData.mobileScale=r,S.userData.mobileOffsetX=a,{sprite:S,material:p,opacity:1}}function ys(i){var t;const e=Xn();for(const n of((t=i==null?void 0:i.labelGroup)==null?void 0:t.children)||[]){const r=e?n.userData.mobileScale||1.28:1;Number.isFinite(n.userData.basePositionX)||(n.userData.basePositionX=n.position.x),n.scale.setScalar(r),n.position.x=n.userData.basePositionX+(e&&n.userData.mobileOffsetX||0)}re.dataset.axisLabelScale=e?"1.28-1.90":"1.00"}function Ra(i,e,t,n,r){const a=new bn;a.name=i;const o=new F(1,0,0);for(let s=0;s<e.length;s+=6){const c=new F(e[s],e[s+1],e[s+2]),l=new F(e[s+3],e[s+4],e[s+5]),d=l.clone().sub(c),h=d.length(),f=new Dr(h,n,n),m=new dt(f,t);m.position.copy(c).add(l).multiplyScalar(.5),m.quaternion.setFromUnitVectors(o,d.normalize()),m.renderOrder=r,a.add(m)}return a}function Ev(i){return et+Ge(i/Bi,0,1)*Fr.worldHeight}function Bu(i,e){i.opacity=e;for(const t of i.opacityEntries)t.material.opacity=t.baseOpacity*e}function bv(i){i.selectedMarker.visible=!1,i.hoverMarker.position.x=It(pe.pointerHour),i.hoverMarker.visible=pe.pointerActive,i.readout.mesh.visible=pe.pointerActive,pe.pointerActive&&Nu(i.readout,pe.pointerHour),re.dataset.readoutVisibility=pe.pointerActive?"visible":"hidden",re.dataset.cursorLineVisibility=pe.pointerActive?"visible":"hidden"}function Av(){tt.dragging||(tt.dragging=!0,tt.fadeStartedAt=-1,tt.group.visible=!1,Bu(tt,0),re.dataset.axisVisibility="hidden")}function Qa(i=!1){!tt.dragging&&!i||(tt.dragging=!1,tt.group.visible=yn.showAxes,tt.fadeStartedAt=-1,Bu(tt,1),re.dataset.axisVisibility="visible")}function zu(i,e=0,t=0){const n=i+e+t,r={count:n,baseCount:i,ambientCount:e,downpourCount:t,role:new Uint8Array(n),style:new Uint8Array(n),resetSeed:new Uint32Array(n),seedIndex:new Uint32Array(n),hour:new Float32Array(n),strength:new Float32Array(n),presence:new Float32Array(n),stormWeight:new Float32Array(n),waterfallTop:new Float32Array(n),waterfallBlendTop:new Float32Array(n),waterfallFeather:new Float32Array(n),baseX:new Float32Array(n),z:new Float32Array(n),pathX:new Float32Array(n),pathZ:new Float32Array(n),top:new Float32Array(n),length:new Float32Array(n),headY:new Float32Array(n),speed:new Float32Array(n),near:new Float32Array(n),curtainLayer:new Uint8Array(n),driftX:new Float32Array(n),driftZ:new Float32Array(n),phase:new Float32Array(n),windSpeed:new Float32Array(n),alpha:new Float32Array(n),pearlStart:new Uint32Array(n),strandPearlCount:new Uint8Array(n),lineStart:new Uint32Array(n),lineCount:new Uint8Array(n),respawnCycle:new Uint32Array(n)},a=Ni(os),o=As(oe.rain.baseWeight,oe.rain.exponent,a,!0),s=Ni(Cc),c=()=>G(.04,23.96,s),l=Ni(Rc),d=Xu(l);let h=0,f=0;for(let ae=0;ae<i;ae+=1){const K=o(),xe=mr(K),Se=Oc(xe),we=Ii(K),Ze=us(K),A=Yo(a),x=ct(.88,1.12,Kn(K*1.55,Fn^1374857533)),I=G(-.32-xe*.34,.38+xe*.68,a),ee=Math.min(vn,et+Ge(.95+Math.pow(Ze,.92)*5.8*x+I,.76,8.8)),te=a(),ne=te<.5?0:te<.85?1:2,Ae=Math.max(.8,ee-et),ue=G(.78,1.14,a)+xe*G(.62,1.08,a)+A*G(.12,.32,a),he=ne===1?Math.max(.42,Math.min(ue*G(.64,.9,a),Ae*G(.24,.42,a))):ue,ke=Math.round(ct(20,34,Math.pow(xe,.55))+A*G(0,4,a)+(ne===1?1:0));r.hour[ae]=K,Xo(r,ae,K),r.role[ae]=xt.BASE,r.resetSeed[ae]=os,r.seedIndex[ae]=ae,r.strength[ae]=xe,r.presence[ae]=we,r.near[ae]=A,r.top[ae]=ee,r.length[ae]=he,r.curtainLayer[ae]=ne,r.pearlStart[ae]=h,r.strandPearlCount[ae]=Ge(ke,16,40),r.lineStart[ae]=f,r.lineCount[ae]=r.strandPearlCount[ae]-1,r.speed[ae]=G(1.5,2.45,a)+xe*G(1.15,2.55,a)+A*.42,r.driftX[ae]=G(.004,.014,a)+A*G(.003,.009,a),r.driftZ[ae]=G(.003,.01,a)+A*G(.002,.006,a),r.phase[ae]=a()*Math.PI*2,r.windSpeed[ae]=G(.22,.58,a),r.alpha[ae]=G(.54,.96,a)*(.22+Se*1.18)*(.76+A*.72)*(ne===1?1.12:1)*we,La(r,ae,!0),h+=r.strandPearlCount[ae],f+=r.lineCount[ae]}for(let ae=0;ae<e;ae+=1){const K=i+ae,xe=c(),Se=mr(xe),we=Oc(Se),Ze=Ii(xe),A=Yo(s),x=Math.round(G(28,38,s));r.hour[K]=xe,Xo(r,K,xe),r.role[K]=xt.AMBIENT,r.resetSeed[K]=Cc,r.seedIndex[K]=ae,r.strength[K]=Se,r.presence[K]=Ze,r.near[K]=A,r.top[K]=vn,r.length[K]=vn-et+G(.12,.3,s),r.curtainLayer[K]=2,r.pearlStart[K]=h,r.strandPearlCount[K]=x,r.lineStart[K]=f,r.lineCount[K]=x-1,r.speed[K]=0,r.driftX[K]=G(.002,.008,s),r.driftZ[K]=G(.002,.006,s),r.phase[K]=s()*Math.PI*2,r.windSpeed[K]=G(.18,.46,s),r.alpha[K]=G(.08,.2,s)*(.08+we*.92)*Ze,La(r,K,!0),h+=x,f+=x-1}for(let ae=0;ae<t;ae+=1){const K=i+e+ae,xe=d(),Se=mr(xe),we=Ii(xe),Ze=us(xe),A=Yo(l),x=ct(.9,1.12,Kn(xe*1.55,Fn^1374857533)),I=Ge(.95+Math.pow(Ze,.92)*5.8*x+G(-.22,.62,l),1.2,8.8),ee=l()<.45,te=l()<.7?G(.08,.38,l):G(.38,.58,l),ne=ee?I+G(-.12,.48,l):Math.max(.82,I*te+G(-.08,.24,l)),Ae=l(),ue=Ae<.7?0:Ae<.94?1:2,he=Math.round(ue===0?G(13,19,l):ue===1?G(15,21,l):G(16,22,l)),ke=ee?G(.82,1.5,l)+Se*G(.52,1.02,l):Math.min(G(.38,1.04,l),ne*G(.48,.86,l));r.hour[K]=xe,Xo(r,K,xe),r.role[K]=xt.DOWNPOUR,r.style[K]=ue,r.resetSeed[K]=Rc,r.seedIndex[K]=ae,r.strength[K]=Se,r.presence[K]=we,r.near[K]=A,r.top[K]=Math.min(vn,et+ne),r.length[K]=Math.max(.34,ke),r.curtainLayer[K]=0,r.pearlStart[K]=h,r.strandPearlCount[K]=he,r.lineStart[K]=f,r.lineCount[K]=he-1,r.speed[K]=G(2.65,4.35,l)+Se*.72,r.driftX[K]=0,r.driftZ[K]=0,r.phase[K]=l()*Math.PI*2,r.windSpeed[K]=0,r.alpha[K]=G(ue===0?.26:.32,ue===2?.62:.52,l)*(.88+Se*.34)*we,La(r,K,!0),h+=he,f+=he-1}for(let ae=0;ae<n;ae+=1)r.waterfallBlendTop[ae]=r.waterfallTop[ae]+Math.sin(r.phase[ae]*2.17+r.hour[ae]*.41)*.2;const m=new Float32Array(h*3),g=new Float32Array(h*3),_=new Float32Array(h),p=new Float32Array(h),u=new Float32Array(h),w=new Float32Array(h),S=new Float32Array(h),b=new Float32Array(h),L=new Float32Array(h),C=new Float32Array(h),T=new Float32Array(h),B=new Float32Array(h),E=new Float32Array(h),M=new Uint16Array(h),P=new Float32Array(h),U=new Float32Array(h),O=new Float32Array(h),$=new Float32Array(h),Z=new Float32Array(h),W=new Float32Array(h),ie=new Float32Array(f*2*3),k=new Float32Array(f*2*3),ce=new Float32Array(f*2),me=new Float32Array(f*2),ge=new Float32Array(f),Ie=new Uint32Array(f),q=new Uint32Array(f),R=new Uint16Array(f),X=new Float32Array(f*2);for(let ae=0;ae<i;ae+=1){const K=r.pearlStart[ae],xe=r.strandPearlCount[ae],Se=r.strength[ae],we=r.near[ae],Ze=G(1.15,1.7,a)+we*G(.3,.82,a)+Se*G(.1,.4,a);for(let A=0;A<xe;A+=1){const x=K+A,I=x*3,ee=xe<=1?0:A/(xe-1),te=a();M[x]=ae,P[x]=ee,U[x]=G(-.006,.006,a),O[x]=a()*Math.PI*2,w[x]=1,b[x]=a(),L[x]=.3,C[x]=G(.35,.55,a),T[x]=G(.18,.4,a),u[x]=Ze*G(.92,1.08,a),B[x]=G(1.04,1.26,a);let ne;te<.14?(E[x]=G(.18,.32,a),ne=G(.95,1.22,a)):te<.46?(E[x]=G(.06,.16,a),ne=G(.56,.86,a)):(E[x]=G(.02,.08,a),ne=G(.26,.52,a)),p[x]=Ge(ne*(.68+we*.5+Se*.4),0,1.1),_[x]=p[x],Bc(g,I,Se,G(.72,1.12,a)*(.82+we*.3)*(.78+ne*.36),a)}for(let A=0;A<xe-1;A+=1){const x=r.lineStart[ae]+A,I=x*6;Ie[x]=K+A,q[x]=K+A+1,R[x]=ae,ge[x]=G(.009,.026,a)*(.54+Se*.44)*(.6+we*.42),Bc(k,I,Se,G(.2,.36,a)*(.78+we*.24),a),k[I+3]=k[I]*1.12,k[I+4]=k[I+1]*1.12,k[I+5]=k[I+2]*1.12}}for(let ae=0;ae<e;ae+=1){const K=i+ae,xe=r.pearlStart[K],Se=r.strandPearlCount[K],we=r.strength[K],Ze=r.near[K],A=G(.58,1.02,s)+Ze*G(.08,.28,s);for(let x=0;x<Se;x+=1){const I=xe+x,ee=I*3,te=Se<=1?0:x/(Se-1);M[I]=K,P[I]=te,U[I]=G(-.004,.004,s),O[I]=s()*Math.PI*2,p[I]=G(.22,.5,s)*(.88+Ze*.22),_[I]=p[I],w[I]=1,b[I]=s(),L[I]=G(.72,.84,s),C[I]=G(.58,.78,s),T[I]=G(.55,.75,s),u[I]=A*G(.54,.88,s),B[I]=G(1.35,2,s),E[I]=G(.04,.14,s),Pa(g,ee,we,G(.34,.62,s),xt.AMBIENT,0,s)}for(let x=0;x<Se-1;x+=1){const I=r.lineStart[K]+x,ee=I*6;Ie[I]=xe+x,q[I]=xe+x+1,R[I]=K,ge[I]=G(.003,.009,s)*(.72+we*.24),Pa(k,ee,we,G(.1,.2,s),xt.AMBIENT,0,s),k[ee+3]=k[ee]*1.08,k[ee+4]=k[ee+1]*1.08,k[ee+5]=k[ee+2]*1.08}}for(let ae=0;ae<t;ae+=1){const K=i+e+ae,xe=r.pearlStart[K],Se=r.strandPearlCount[K],we=r.strength[K],Ze=r.near[K],A=r.style[K],x=A===0?G(.35,.5,l):A===1?G(.5,.7,l):G(.75,.95,l),I=(G(1.05,1.72,l)+Ze*G(.28,.82,l)+we*G(.1,.38,l))*x;for(let ee=0;ee<Se;ee+=1){const te=xe+ee,ne=te*3,Ae=Se<=1?0:ee/(Se-1),ue=l();M[te]=K,P[te]=Ae,U[te]=G(-.004,.004,l),O[te]=l()*Math.PI*2,p[te]=G(.2,A===2?.64:.5,l)*(.88+Ze*.24+we*.2),_[te]=p[te],w[te]=1,b[te]=l(),L[te]=G(.34,.48,l),C[te]=G(.48,.7,l),T[te]=G(.32,.58,l),u[te]=I*(ue<.7?G(.68,.94,l):G(.88,1.14,l)),B[te]=A===0?G(1.28,1.82,l):G(1.05,1.48,l),E[te]=A===2?G(.3,.52,l):G(.08,.24,l),Pa(g,ne,we,G(.38,A===2?.86:.68,l),xt.DOWNPOUR,A,l)}for(let ee=0;ee<Se-1;ee+=1){const te=r.lineStart[K]+ee,ne=te*6;Ie[te]=xe+ee,q[te]=xe+ee+1,R[te]=K,ge[te]=G(.008,A===2?.025:.021,l)*(.78+we*.34)*(.82+Ze*.22),Pa(k,ne,we,G(.2,A===2?.42:.34,l),xt.DOWNPOUR,A,l),k[ne+3]=k[ne]*1.1,k[ne+4]=k[ne+1]*1.1,k[ne+5]=k[ne+2]*1.1}}let se=0;for(let ae=0;ae<h;ae+=1){const K=M[ae];$[ae]=r.stormWeight[K],Z[ae]=r.waterfallBlendTop[K],W[ae]=r.waterfallFeather[K],$[ae]>.08&&b[ae]>.55&&(se+=1)}for(let ae=0;ae<f;ae+=1){const K=r.stormWeight[R[ae]],xe=Math.sin((R[ae]+1)*12.9898)*43758.5453,Se=(xe-Math.floor(xe))*Math.PI*2;X[ae*2]=K,X[ae*2+1]=K,ce[ae*2]=Se,ce[ae*2+1]=Se}const Q=new Bt;Q.setAttribute("position",new Fe(m,3).setUsage(Ot)),Q.setAttribute("aColor",new Fe(g,3)),Q.setAttribute("aAlpha",new Fe(_,1).setUsage(Ot)),Q.setAttribute("aSize",new Fe(u,1)),Q.setAttribute("aUpperScale",new Fe(w,1).setUsage(Ot)),Q.setAttribute("aUpperProgress",new Fe(S,1).setUsage(Ot)),Q.setAttribute("aAspect",new Fe(B,1)),Q.setAttribute("aHighlight",new Fe(E,1)),Q.setAttribute("aStorm",new Fe($,1)),Q.setAttribute("aWaterfallTop",new Fe(Z,1)),Q.setAttribute("aWaterfallFeather",new Fe(W,1)),Q.setAttribute("aMorphSeed",new Fe(b,1));const Le=new Tt({uniforms:{uTime:{value:0},uPixelRatio:{value:ui},uFogDensity:{value:Zn.fog.density},uMetalDark:{value:new Ee(oe.metalRain.darkColor)},uMetalMid:{value:new Ee(oe.metalRain.midColor)},uMetalBright:{value:new Ee(oe.metalRain.brightColor)},uMetalTint:{value:new Ee(oe.metalRain.tintColor)},uPearlBandFrequency:{value:oe.metalRain.pearlBandFrequency},uPearlBandSpeed:{value:oe.metalRain.pearlBandSpeed},uPearlSpecularPower:{value:oe.metalRain.pearlSpecularPower},uPearlFresnelStrength:{value:oe.metalRain.pearlFresnelStrength},uSolarDir:{value:new F(0,1,0)},uSolarColor:{value:new Ee(1,.85,.58)},uSolarIntensity:{value:0},uSolarElevation:{value:0},uViewport:{value:Ar},uPlotBounds:{value:Er},uPlotFeather:{value:br},uPlotClip:Wa,uMobileCrisp:{value:Xn()?1:0},uMinPointSize:{value:oe.pearls.minPointSize},uMaxPointSize:{value:oe.pearls.maxPointSize}},vertexShader:`
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
      uniform vec3 uSolarDir;
      uniform vec3 uSolarColor;
      uniform float uSolarIntensity;
      uniform float uSolarElevation;
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
        vec3 keyDirection = normalize(uSolarDir);
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
        float solarSpec = pow(max(dot(metalNormal, keyDirection), 0.0), 18.0) * uSolarIntensity * smoothstep(-0.12, 0.25, uSolarElevation);
        color += uSolarColor * solarSpec * 0.42;
        color *= mix(1.0, 0.78, vUpperProgress);
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.48);
        float alpha = uBeadAlpha * edge * vAlpha * plotMask
          * mix(1.0, 0.45, uMobileCrisp)
          * (0.78 + highlight * 0.05 * opticalDetail + rimLight * 0.18 + verticalSheet * mix(0.16, 0.04, uMobileCrisp))
          * (1.0 - fogFactor * 0.38);
        if (alpha < 0.001) discard;
        gl_FragColor = vec4(color, min(0.94, alpha));
      }
    `,transparent:!0,depthWrite:!1,blending:un}),ye=new Bt;ye.setAttribute("position",new Fe(ie,3).setUsage(Ot)),ye.setAttribute("aColor",new Fe(k,3)),ye.setAttribute("aAlpha",new Fe(me,1).setUsage(Ot)),ye.setAttribute("aStorm",new Fe(X,1)),ye.setAttribute("aBandPhase",new Fe(ce,1));const Ne=new Tt({uniforms:{uTime:{value:0},uFogDensity:{value:Zn.fog.density},uMetalDark:{value:new Ee(oe.metalRain.darkColor)},uMetalMid:{value:new Ee(oe.metalRain.midColor)},uMetalBright:{value:new Ee(oe.metalRain.brightColor)},uThreadBandDensity:{value:oe.metalRain.threadBandDensity},uThreadBandSpeed:{value:oe.metalRain.threadBandSpeed},uThreadMirrorStrength:{value:oe.metalRain.threadMirrorStrength},uSolarDir:{value:new F(0,1,0)},uSolarColor:{value:new Ee(1,.85,.58)},uSolarIntensity:{value:0},uSolarElevation:{value:0},uViewport:{value:Ar},uPlotBounds:{value:Er},uPlotFeather:{value:br},uPlotClip:Wa,uMobileCrisp:{value:Xn()?1:0}},vertexShader:`
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
      uniform vec3 uSolarDir;
      uniform vec3 uSolarColor;
      uniform float uSolarIntensity;
      uniform float uSolarElevation;
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
        float solarLine = pow(max(0.0, 0.5 + 0.5 * sin(vBandPhase * 6.2831 + uTime * 0.25)), 6.0)
          * uSolarIntensity * smoothstep(-0.12, 0.25, uSolarElevation);
        color += uSolarColor * solarLine * 0.16;
        color = mix(color, vec3(0.0, 0.0, 0.0), fogFactor * 0.55);
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:un}),D=new Ss(Q,Le);D.renderOrder=3,Le.uniforms.uBeadScale={value:1},Le.uniforms.uBeadAlpha={value:oe.pearls.alpha};const $e=new _u(ye,Ne);$e.renderOrder=2;const je={...r,pearlCount:h,lineTotal:f,pearlPositions:m,pearlAlphas:_,pearlBaseAlpha:p,pearlUpperScales:w,pearlUpperProgress:S,pearlUpperSeed:b,pearlTopRetention:L,pearlTopSize:C,pearlTopAlpha:T,pearlChain:M,pearlFraction:P,pearlOffsetY:U,pearlShimmer:O,linePositions:ie,lineAlphas:me,lineBaseAlpha:ge,linePearlA:Ie,linePearlB:q,lineChain:R,activeBridgeTrailCount:se};return{points:D,lines:$e,data:je}}function ws(i,e,t){const n=i.data;i.points.material.uniforms.uTime.value=e,i.lines.material.uniforms.uTime.value=e;for(let r=0;r<n.count;r+=1){const a=n.role[r]===xt.AMBIENT,o=n.headY[r]-n.length[r];a?n.headY[r]=vn-.03:n.headY[r]-=n.speed[r]*t*.58*(.92+pe.burst*.08);const s=n.headY[r]-n.length[r],c=n.phase[r],l=Math.sin(e*n.windSpeed[r]+c),d=Math.cos(e*n.windSpeed[r]*.72+c*.7),h=n.baseX[r]+l*n.driftX[r],f=n.z[r]+d*n.driftZ[r];if(n.pathX[r]=h,n.pathZ[r]=f,!a&&n.presence[r]>.08&&o>=et&&s<et){const m=Uv(ft,h,f,n.hour[r],n.strength[r],n.near[r],n.role[r]);Iv(ft,Yr,h,f,n.strength[r],m,n.role[r])}!a&&s<et&&La(n,r,!1)}for(let r=0;r<n.pearlCount;r+=1){const a=n.pearlChain[r],o=n.pearlFraction[r],s=r*3,c=n.headY[a]-o*n.length[a]+n.pearlOffsetY[r],l=Math.min(c,vn),d=1-Ht(vn-.055,vn,c),h=Math.max(.8,n.top[a]-et),f=(l-et)/h,m=1-Ge(f,0,1),g=n.pathX[a],_=n.pathZ[a],p=hs(n.hour[a],n.baseX[a],n.z[a]),u=.9+Math.sin(e*4.2+n.pearlShimmer[r])*.12,w=Ht(.55,1,f),S=ct(1,n.pearlTopRetention[r],Math.pow(w,1.15)),b=w<=0?1:1-Ht(S-.06,S+.06,n.pearlUpperSeed[r]),L=ct(1,n.pearlTopSize[r],Math.pow(w,1.05)),C=ct(1,n.pearlTopAlpha[r],Math.pow(w,1.1))*b,T=n.role[a],B=n.stormWeight[a],E=n.waterfallBlendTop[a],M=n.waterfallFeather[a],P=B*(1-Ht(E-M,E+M,l)),U=Ge((n.pearlUpperSeed[r]-.55)/.27,0,1),O=T===xt.DOWNPOUR?ct(.5,.82,U):ct(.4,.68,U),$=ct(1,O,P),Z=ct(1,T===xt.DOWNPOUR?ct(.96,1.62,U):ct(.78,1.36,U),Ht(.22,1,P)),W=ct(1,T===xt.DOWNPOUR?ct(.76,.98,U):ct(.62,.86,U),Ht(.48,1,P)),ie=T===xt.DOWNPOUR?Ht(et+.015,et+.1,l):Ht(et+.02,et+.12,l),k=n.curtainLayer[a]===1?1:0,ce=T===xt.BASE?1+Ht(.02,.5,m)*(oe.floorGlow.base+n.strength[a]*oe.floorGlow.baseByStrength)*(1-B)+k*(oe.floorGlow.lowerCurtain+n.strength[a]*oe.floorGlow.lowerCurtainByStrength)*(1-B):T===xt.DOWNPOUR?1+Ht(.02,.54,m)*(oe.floorGlow.downpour+n.strength[a]*oe.floorGlow.downpourByStrength)*(1-B):1+Ht(.02,.5,m)*oe.floorGlow.ambient;n.pearlPositions[s]=g,n.pearlPositions[s+1]=l,n.pearlPositions[s+2]=_,n.pearlUpperScales[r]=L*Z,n.pearlUpperProgress[r]=w,n.pearlAlphas[r]=Ge(n.pearlBaseAlpha[r]*n.alpha[a]*u*d*C*ie*ce*$*W*(1+p*.56+pe.burst*qa(n.hour[a],pe.selectedHour)*.38),0,.96)}for(let r=0;r<n.lineTotal;r+=1){const a=n.linePearlA[r]*3,o=n.linePearlB[r]*3,s=r*6,c=r*2,l=n.lineChain[r],d=n.role[l],h=(n.pearlPositions[a+1]+n.pearlPositions[o+1])*.5,f=n.stormWeight[l],m=n.waterfallBlendTop[l],g=n.waterfallFeather[l],_=f*(1-Ht(m-g,m+g,h)),p=1+4*_*(1-_)*.88,u=ct(1,d===xt.DOWNPOUR?.12:.2,_)*p,w=hs(n.hour[l],n.baseX[l],n.z[l]),S=Ge((n.pearlAlphas[n.linePearlA[r]]+n.pearlAlphas[n.linePearlB[r]])*.86,0,1),b=d===xt.DOWNPOUR?2.45:d===xt.AMBIENT?1.2:1,L=n.lineBaseAlpha[r]*S*(.76+w*.52)*b*u;n.linePositions[s]=n.pearlPositions[a],n.linePositions[s+1]=Math.max(et+.006,n.pearlPositions[a+1]),n.linePositions[s+2]=n.pearlPositions[a+2],n.linePositions[s+3]=n.pearlPositions[o],n.linePositions[s+4]=Math.max(et+.006,n.pearlPositions[o+1]),n.linePositions[s+5]=n.pearlPositions[o+2],n.lineAlphas[c]=L*.58,n.lineAlphas[c+1]=L}i.points.geometry.attributes.position.needsUpdate=!0,i.points.geometry.attributes.aAlpha.needsUpdate=!0,i.points.geometry.attributes.aUpperScale.needsUpdate=!0,i.points.geometry.attributes.aUpperProgress.needsUpdate=!0,i.lines.geometry.attributes.position.needsUpdate=!0,i.lines.geometry.attributes.aAlpha.needsUpdate=!0}function Tv(){const i=zi?64:150,e=zi?40:92,t=new Un(vi.width*1.16,vi.depth*2.3,i,e);t.rotateX(-Math.PI/2),t.translate(0,et,1.25);const n=new Tt({uniforms:{uTime:{value:0},uColorDeep:{value:new Ee(oe.water.deepColor)},uColorSurface:{value:new Ee(oe.water.surfaceColor)},uRoughness:{value:oe.water.roughness},uSpecularStrength:{value:oe.water.specularStrength},uRippleHighlight:{value:oe.water.rippleHighlight},uSurfaceOpacity:{value:oe.water.surfaceOpacity},uHeightField:{value:null},uFieldBounds:{value:new At(Pi.xMin,Pi.xMax,Pi.zMin,Pi.zMax)},uFieldTexel:{value:new Oe(1/Pi.resX,1/Pi.resZ)},uRippleGain:{value:oe.ripple.gain},uRippleDisplace:{value:oe.ripple.displace},uWavePrimary:{value:oe.water.wavePrimary},uWaveSecondary:{value:oe.water.waveSecondary},uRainLut:{value:null},uLutBounds:{value:new Oe(It(0),It(24)-It(0))},uReflStrength:{value:oe.water.reflStrength},uReflFade:{value:oe.water.reflFade},uSolarDir:{value:new F(0,1,0)},uSolarColor:{value:new Ee(1,.85,.58)},uSolarIntensity:{value:0},uSolarElevation:{value:0},uRearFadeNearZ:{value:oe.water.rearFadeNearZ},uRearFadeFarZ:{value:oe.water.rearFadeFarZ}},vertexShader:`
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
      uniform vec3 uSolarDir;
      uniform vec3 uSolarColor;
      uniform float uSolarIntensity;
      uniform float uSolarElevation;
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
        vec3 lightDir  = normalize(uSolarDir);
        float diffuse  = max(dot(normal, lightDir), 0.0);
        float fresnel  = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.5);
        vec3 reflDir   = reflect(-lightDir, normal);
        float specularPower = mix(150.0, 28.0, uRoughness);
        float specular = pow(max(dot(reflDir, viewDir), 0.0), specularPower);
        float sunGlint = pow(max(dot(normal, normalize(uSolarDir)), 0.0), mix(80.0, 18.0, uRoughness));
        float sunHorizon = smoothstep(-0.08, 0.22, uSolarElevation);
        vec3 solarHighlight = uSolarColor * sunGlint * uSolarIntensity * sunHorizon;

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
        color += edgeColor * specular * uSpecularStrength;
        color += rippleColor * rippleGlow * uRippleHighlight;
        color += solarHighlight;

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
    `,transparent:!0,depthWrite:!1,blending:un}),r=new dt(t,n);return r.renderOrder=0,r}function Cv(){const i=new Un(vi.width*1.16,vi.depth*2.3);i.rotateX(-Math.PI/2),i.translate(0,et-.28,1.25);const e=new Tt({uniforms:{uColor:{value:new Ee(oe.water.deepColor)},uRearFadeNearZ:{value:oe.water.rearFadeNearZ},uRearFadeFarZ:{value:oe.water.rearFadeFarZ}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,side:en,toneMapped:!1}),t=new dt(i,e);return t.renderOrder=-1,t}function ku(){const e=It(0),t=It(24),n=t-e,r=new Float32Array(256),a=new Float32Array(256);for(let f=0;f<=24;f+=.04){const m=Ge((It(f)-e)/n,0,1),g=mr(f),_=m*255,p=7,u=Math.max(0,Math.floor(_-p)),w=Math.min(255,Math.ceil(_+p));for(let S=u;S<=w;S+=1){const b=(S-_)/p,L=Math.exp(-b*b*1.3);r[S]+=g*L,a[S]+=L}}const o=new Float32Array(256*4);for(let f=0;f<256;f+=1){const m=f/255*24,g=Ii(m),_=(a[f]>0?Math.pow(r[f]/a[f],1.12):0)*g;o[f*4]=_,o[f*4+1]=_,o[f*4+2]=_,o[f*4+3]=1}const s=new R0(o,256,1,mn,Gn);s.minFilter=Rt,s.magFilter=Rt,s.wrapS=wn,s.wrapT=wn,s.needsUpdate=!0;const c=oe.mist.height,l=new Un(n*1.01,c,1,1);l.translate((e+t)*.5,et+c*.5-.42,1.15);const d=new Tt({uniforms:{uTime:{value:0},uLut:{value:s},uColor:{value:new Ee(oe.mist.color)},uOpacity:{value:oe.mist.opacity},uReflOpacity:{value:oe.mist.reflectionOpacity},uViewport:{value:Ar},uPlotBounds:{value:Er},uPlotFeather:{value:br}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:mi}),h=new dt(l,d);return h.name="rain-mist-band",h.renderOrder=1.7,h.frustumCulled=!1,{mesh:h,material:d,lut:s,lutXMin:e,lutSpan:n}}function Hu(i,e){const t=new bn;t.name="peak-waterfall-system";const n=Rv(),r=Pv(),a=new dt(n,r);a.name="peak-waterfall-density-body",a.renderOrder=1.5,a.frustumCulled=!1;const o=Dv(i,e),s=Ic(!1),c=new dt(o.geometry,s);c.name="peak-waterfall-filaments",c.renderOrder=2.45,c.frustumCulled=!1;const l=Ic(!0),d=new dt(o.highlightGeometry,l);return d.name="peak-waterfall-filament-highlights",d.renderOrder=2.75,d.frustumCulled=!1,t.add(a,c,d),{group:t,materials:[r,s,l],bodyCount:gn.length,peakCount:gn.length,filamentCapacity:i,visibleFilamentCount:i,bridgeFilamentCount:o.bridgeCount,coreFilamentCount:o.coreCount,lowerFilamentCount:o.lowerCount,wideFilamentCount:o.wideCount,foregroundFilamentCount:o.foregroundCount,highlightFilamentCount:o.highlightCount,ribbonSegments:o.ribbonSegments}}function Rv(){const n=2387*gn.length,r=new Float32Array(n*3),a=new Float32Array(n*2),o=new Float32Array(n),s=new Float32Array(n),c=new Uint16Array(gn.length*76*30*6);let l=0,d=0;for(let f=0;f<gn.length;f+=1){const[m,g]=gn[f],_=l;for(let p=0;p<=76;p+=1){const u=p/76,w=ct(m,g,u),S=Cs(w),b=Vi(w),L=et,C=.18+(Kn(w*2.1,Fn^1910834091)-.5)*.16;for(let T=0;T<=30;T+=1){const B=T/30,E=l*3,M=l*2;r[E]=It(w),r[E+1]=ct(L,S,B),r[E+2]=C+(Kn(w*3.2+B*1.7,Fn^1335520561)-.5)*.08,a[M]=u,a[M+1]=B,o[l]=b,s[l]=f*17.3+u*4.7,l+=1}}for(let p=0;p<76;p+=1)for(let u=0;u<30;u+=1){const S=_+p*31+u,b=S+31;c[d++]=S,c[d++]=b,c[d++]=S+1,c[d++]=b,c[d++]=b+1,c[d++]=S+1}}const h=new Bt;return h.setAttribute("position",new Fe(r,3)),h.setAttribute("aLocal",new Fe(a,2)),h.setAttribute("aStorm",new Fe(o,1)),h.setAttribute("aSeed",new Fe(s,1)),h.setIndex(new Fe(c,1)),n>0&&h.computeBoundingSphere(),h}function Pv(){return new Tt({uniforms:{uTime:{value:0},uMotion:{value:ki?0:1},uDeep:{value:new Ee(oe.metalRain.darkColor)},uMid:{value:new Ee(oe.metalRain.midColor)},uBright:{value:new Ee(oe.metalRain.brightColor)},uBodyBandDensity:{value:oe.metalRain.bodyBandDensity},uBodyBandSpeed:{value:oe.metalRain.bodyBandSpeed},uBodyMirrorStrength:{value:oe.metalRain.bodyMirrorStrength},uBroadSway:{value:oe.waterfallBody.broadSway},uFineSway:{value:oe.waterfallBody.fineSway},uStreakFrequency:{value:oe.waterfallBody.streakFrequency},uFineStreakFrequency:{value:oe.waterfallBody.fineStreakFrequency},uStreakSharpness:{value:oe.waterfallBody.streakSharpness},uFineStreakSharpness:{value:oe.waterfallBody.fineStreakSharpness},uFineStreakWeight:{value:oe.waterfallBody.fineStreakWeight},uBaseMass:{value:oe.waterfallBody.baseMass},uRiseMass:{value:oe.waterfallBody.riseMass},uCloudLow:{value:oe.waterfallBody.cloudLow},uCloudHigh:{value:oe.waterfallBody.cloudHigh},uGapDarkness:{value:oe.waterfallBody.gapDarkness},uStreakBrightness:{value:oe.waterfallBody.streakBrightness},uBottomFeather:{value:oe.waterfallBody.bottomFeather},uOpacity:{value:oe.waterfallBody.opacity},uViewport:{value:Ar},uPlotBounds:{value:Er},uPlotFeather:{value:br},uPlotClip:Wa},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:en,blending:un})}function Dv(i,e){const t=new O0,n=14,r=(n+1)*2,a=new Float32Array(r*3),o=new Float32Array(r*2),s=new Uint16Array(n*6);let c=0,l=0;for(let U=0;U<=n;U+=1){const O=U/n;for(let $=0;$<2;$+=1){const Z=c*3,W=c*2;a[Z]=$===0?-.5:.5,a[Z+1]=O,a[Z+2]=0,o[W]=$,o[W+1]=O,c+=1}}for(let U=0;U<n;U+=1){const O=U*2,$=O+1,Z=O+2,W=O+3;s[l++]=O,s[l++]=$,s[l++]=Z,s[l++]=Z,s[l++]=$,s[l++]=W}t.setAttribute("position",new Fe(a,3)),t.setAttribute("uv",new Fe(o,2)),t.setIndex(new Fe(s,1));const d=new Float32Array(i*3),h=new Float32Array(i*2),f=new Float32Array(i*4),m=new Float32Array(i*2),g=new Float32Array(i),_=new Float32Array(i*3),p=new Float32Array(i),u=Ni(Fn^1850919347),w=Xu(u),S=Math.round(i*.06),b=S,L=e.downpourCount>0?Math.round(i*.24):0,C=Math.round(i*.6);let T=0,B=0,E=0,M=0;for(let U=0;U<i;U+=1){const O=U<b,$=!O&&U<b+L,Z=!O&&!$&&U<b+L+C,W=!O&&!$&&!Z;p[U]=$?0:Z?1:W?2:3;let ie=18,k=0;const ce=U*3,me=U*2,ge=U*4,Ie=U*2,q=U*3;if($){const R=e.baseCount+e.ambientCount+Math.floor(u()*e.downpourCount);ie=e.hour[R],k=e.stormWeight[R];const X=e.waterfallTop[R],se=Math.max(et,X-G(1.15,1.95,u)),Q=e.near[R];d[ce]=e.baseX[R]+G(-.018,.018,u),d[ce+1]=se,d[ce+2]=e.z[R],h[me]=G(.008,.028,u)*(.84+Q*.26),h[me+1]=G(1.35,2.35,u),f[ge]=Ge(e.speed[R],2.8,6.4),f[ge+1]=G(.006,.025,u),f[ge+2]=e.phase[R],f[ge+3]=G(.26,.56,u),m[Ie]=G(6.5,13,u),m[Ie+1]=G(.34,.58,u),_[q]=e.windSpeed[R],_[q+1]=e.driftX[R],_[q+2]=e.driftZ[R],T+=1}else{for(let D=0;D<14&&(ie=w(),k=Vi(ie),!(k>.08&&u()<Math.pow(k,.58)));D+=1);const R=u(),X=Z&&u()<.34,se=Math.max(et,et+(O?G(-.02,.16,u):W?G(-.08,.18,u):X?G(.18,.72,u):G(-.12,.2,u))),Q=Math.max(.55,Cs(ie)-se),Le=O?G(.018,.044,u):W?G(.036,.082,u):u()<.82?G(.007,.022,u):G(.022,.042,u),ye=u(),Ne=W?G(2.6,4.2,u):ye<.28?G(3,4,u):ye<.68?G(4,5.4,u):G(5.4,7,u);d[ce]=It(ie)+G(-.08,.08,u),d[ce+1]=se,d[ce+2]=Ya(O?G(.7,1,u):R,u),h[me]=Le,h[me+1]=Q*(Z?X?G(.34,.66,u):G(.72,1.1,u):W?G(.5,.92,u):G(.68,1.02,u)),f[ge]=Ne,f[ge+1]=G(.006,W?.045:.034,u)*(.78+R*.36),f[ge+2]=u()*Math.PI*2,f[ge+3]=O?G(.54,.92,u):Z?G(.48,.9,u)*(.82+R*.26):W?G(.34,.64,u):G(.3,.56,u),m[Ie]=Z?G(4,9.4,u):W?G(2.6,6.8,u):G(4.8,10,u),m[Ie+1]=Z?G(.22,.46,u):W?G(.18,.42,u):G(.28,.52,u),_[q]=G(.12,.42,u),_[q+1]=G(.0015,W?.007:.0055,u),_[q+2]=G(.0015,W?.006:.0045,u),O?M+=1:Z?B+=1:W&&(E+=1)}g[U]=k}t.setAttribute("aAnchor",new Ci(d,3)),t.setAttribute("aDimensions",new Ci(h,2)),t.setAttribute("aFlow",new Ci(f,4)),t.setAttribute("aBreaks",new Ci(m,2)),t.setAttribute("aStorm",new Ci(g,1)),t.setAttribute("aDrift",new Ci(_,3)),t.setAttribute("aFilamentClass",new Ci(p,1)),t.instanceCount=i;const P=t.clone();return P.instanceCount=S,{geometry:t,highlightGeometry:P,highlightCount:S,bridgeCount:T,coreCount:B,lowerCount:E,wideCount:E,foregroundCount:M,ribbonSegments:n}}function Ic(i){return new Tt({uniforms:{uTime:{value:0},uMotion:{value:ki?0:1},uDeep:{value:new Ee(oe.metalRain.darkColor)},uMid:{value:new Ee(oe.metalRain.midColor)},uBright:{value:new Ee(oe.metalRain.brightColor)},uFilamentBandDensity:{value:oe.metalRain.filamentBandDensity},uFilamentBandSpeed:{value:oe.metalRain.filamentBandSpeed},uFilamentMirrorStrength:{value:i?oe.metalRain.highlightMirrorStrength:oe.metalRain.filamentMirrorStrength},uEdgeWidth:{value:i?oe.waterfallFilaments.highlightEdgeWidth:oe.waterfallFilaments.edgeWidth},uOpacity:{value:i?oe.waterfallFilaments.highlightOpacity:oe.waterfallFilaments.opacity},uBottomMistOpacity:{value:oe.waterfallFilaments.bottomMistOpacity},uViewport:{value:Ar},uPlotBounds:{value:Er},uPlotFeather:{value:br},uPlotClip:Wa},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:en,blending:i?mi:un})}function Gu(i){const e=new Float32Array(i*3),t=new Float32Array(i*3),n=new Float32Array(i*3),r=new Float32Array(i),a=new Float32Array(i),o=new Float32Array(i),s=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=Ni(Q0),_=As(.36,1.02,g);for(let u=0;u<i;u+=1){const w=_(),S=mr(w),b=Ii(w),L=u*3,C=.34+S*.52,T=It(w)+G(-C,C,g),B=g()<.62?G(.35,vi.frontZ*1.72,g):Ya(.54,g);e[L]=T,e[L+1]=et+G(.018,.06,g),e[L+2]=B,t.set(e.subarray(L,L+3),L),c[u]=w,l[u]=S,d[u]=b,h[u]=Vi(w),f[u]=g()*Math.PI*2,m[u]=G(.018,.052,g),a[u]=G(.08,.32,g)*(.32+Math.pow(S,.7)*1.25)*b,r[u]=a[u]*(.1+h[u]*.7),o[u]=G(.7,2.6,g)*(.74+S*.3),s[u]=g()<.42?G(2.4,5.4,g):G(1.18,2.3,g),Vv(n,L,S,G(.36,.86,g),g)}return{points:Wu({positions:e,colors:n,alphas:r,sizes:o,aspects:s,horizontal:1,opacity:oe.glint.opacity,maxSize:oe.glint.maxSize,renderOrder:5}),data:{positions:e,original:t,alphas:r,baseAlpha:a,hour:c,strength:l,presence:d,storm:h,shimmer:f,speed:m,count:i}}}function Es(i,e,t){const n=i.data;for(let r=0;r<n.count;r+=1){const a=r*3,o=hs(n.hour[r],n.positions[a],n.positions[a+2]);n.positions[a]=n.original[a]+Math.sin(e*.34+n.shimmer[r])*.018,n.positions[a+2]+=n.speed[r]*t,n.positions[a+2]>vi.frontZ*1.74&&(n.positions[a+2]=G(-10.4*.55,-10.4*.16)),n.positions[a+1]=et+.026+Math.sin(e*1.35+n.shimmer[r])*.006;const s=.78+Math.sin(e*2.1+n.shimmer[r])*.18;n.alphas[r]=Ge(n.baseAlpha[r]*(.1+n.storm[r]*.7)*s*(1+o*.52+pe.burst*qa(n.hour[r],pe.selectedHour)*.18),0,oe.glint.alphaMax)}i.points.geometry.attributes.position.needsUpdate=!0,i.points.geometry.attributes.aAlpha.needsUpdate=!0}function Vu(i,e,t){const n=Math.floor(i*.55),r=Math.floor(i*.35),a=0,o=Nc(n,{horizontal:1,opacity:oe.foam.opacity,maxSize:oe.foam.maxSize,renderOrder:5,blending:mi}),s=Nc(r,{horizontal:0,opacity:oe.spray.opacity,maxSize:oe.spray.maxSize,renderOrder:6,blending:un}),c=Lv(a);return{foam:o.points,droplets:s.points,crowns:c.lines,data:{count:i,foam:o,droplets:s,crowns:c,eventRate:e,rippleRate:t,emissionCredit:e*.2,rippleCredit:t*.2,random:Ni(ev),totalPeakCollisions:0,emittedEvents:0,windowEmitted:0,windowStartedAt:0,currentEmissionRate:0,activeCount:0,activeFoamCount:0,activeDropletCount:0,activeCrownCount:0,staticSeedCount:0}}}function Nc(i,{horizontal:e,opacity:t,maxSize:n,renderOrder:r,blending:a}){const o=new Float32Array(i*3),s=new Float32Array(i*3),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=new Uint8Array(i),_=new Float32Array(i),p=new Float32Array(i),u=new Float32Array(i),w=new Float32Array(i),S=new Float32Array(i),b=new Float32Array(i),L=new Float32Array(i),C=new Float32Array(i),T=new Float32Array(i),B=new Float32Array(i),E=new Float32Array(i),M=new Float32Array(i);for(let U=0;U<i;U+=1)o[U*3+1]=-100;return{points:Wu({positions:o,colors:s,alphas:c,sizes:d,aspects:f,horizontal:e,opacity:t,maxSize:n,renderOrder:r,dynamicColor:!0,dynamicShape:!0,blending:a}),count:i,cursor:0,positions:o,colors:s,alphas:c,baseAlpha:l,sizes:d,baseSizes:h,aspects:f,baseAspects:m,active:g,startedAt:_,lifetime:p,originX:u,originZ:w,velocityX:S,velocityY:b,velocityZ:L,gravity:C,phase:T,hour:B,strength:E,near:M}}function Lv(i){const e=new Float32Array(i*6),t=new Float32Array(i*6),n=new Float32Array(i*2),r=new Float32Array(i),a=new Uint8Array(i),o=new Uint8Array(i),s=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(i),d=new Float32Array(i),h=new Float32Array(i),f=new Float32Array(i),m=new Float32Array(i),g=new Float32Array(i),_=new Float32Array(i),p=new Float32Array(i);for(let b=0;b<i;b+=1)e[b*6+1]=-100,e[b*6+4]=-100;const u=new Bt;u.setAttribute("position",new Fe(e,3).setUsage(Ot)),u.setAttribute("aColor",new Fe(t,3).setUsage(Ot)),u.setAttribute("aAlpha",new Fe(n,1).setUsage(Ot));const w=new Tt({uniforms:{uFogDensity:{value:Zn.fog.density}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:mi}),S=new _u(u,w);return S.renderOrder=8,{lines:S,count:i,cursor:0,positions:e,colors:t,alphas:n,baseAlpha:r,active:a,kind:o,startedAt:s,lifetime:c,originX:l,originZ:d,angle:h,radius:f,height:m,phase:g,hour:_,strength:p}}function Fv(i,e,t){const n=i.data;n.emissionCredit=Math.min(n.eventRate*.34,n.emissionCredit+n.eventRate*t),n.rippleCredit=Math.min(n.rippleRate*.55,n.rippleCredit+n.rippleRate*t);const r=e-n.windowStartedAt;r>=.5&&(n.currentEmissionRate=n.windowEmitted/Math.max(.001,r),n.windowEmitted=0,n.windowStartedAt=e)}function Uv(i,e,t,n,r,a,o,s){i.data;const c=Vi(n);return Ge(r,0,1)<=0?0:c}function Iv(i,e,t,n,r,a,o,s){const c=i.data;if(c.rippleCredit<1)return;const l=o===xt.DOWNPOUR?1:o===xt.BASE?.48:.28,d=(.012+a*.14)*l;c.random()>d||(c.rippleCredit-=1,bs(e,t,n,.13+r*.25+a*.24,!1))}function Wu({positions:i,colors:e,alphas:t,sizes:n,aspects:r,orientations:a=null,horizontal:o,opacity:s,maxSize:c,renderOrder:l,dynamicColor:d=!1,dynamicShape:h=!1,blending:f=un}){const m=i.length/3,g=a??new Float32Array(m).fill(o),_=new Bt;_.setAttribute("position",new Fe(i,3).setUsage(Ot)),_.setAttribute("aColor",d?new Fe(e,3).setUsage(Ot):new Fe(e,3)),_.setAttribute("aAlpha",new Fe(t,1).setUsage(Ot)),_.setAttribute("aSize",h?new Fe(n,1).setUsage(Ot):new Fe(n,1)),_.setAttribute("aAspect",h?new Fe(r,1).setUsage(Ot):new Fe(r,1)),_.setAttribute("aHorizontal",h?new Fe(g,1).setUsage(Ot):new Fe(g,1));const p=new Tt({uniforms:{uPixelRatio:{value:ui},uFogDensity:{value:Zn.fog.density},uOpacity:{value:s},uMaxSize:{value:c}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:f}),u=new Ss(_,p);return u.renderOrder=l,u}function Nv(i){const{resX:e,resZ:t,xMin:n,xMax:r,zMin:a,zMax:o}=Pi,s=160,c={type:qr,format:mn,minFilter:Rt,magFilter:Rt,depthBuffer:!1,stencilBuffer:!1,wrapS:wn,wrapT:wn};let l=new $n(e,t,c),d=new $n(e,t,c);const h=new vs(-1,1,1,-1,0,1),f=i.getRenderTarget();i.setRenderTarget(l),i.clear(),i.setRenderTarget(d),i.clear(),i.setRenderTarget(f);const m=new Tt({uniforms:{uField:{value:null},uTexel:{value:new Oe(1/e,1/t)},uDamping:{value:oe.ripple.damping}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1}),g=new is;g.add(new dt(new Un(2,2),m));const _=new Float32Array(s*3),p=new Float32Array(s),u=new Bt;u.setAttribute("position",new Fe(_,3).setUsage(Ot)),u.setAttribute("aAmp",new Fe(p,1).setUsage(Ot)),u.setDrawRange(0,0);const w=new Tt({uniforms:{uDropPx:{value:Math.max(5,e/210)}},vertexShader:`
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
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:Xc,blendEquation:si,blendSrc:jo,blendDst:jo}),S=new is;return S.add(new Ss(u,w)),{rtA:l,rtB:d,simCamera:h,simMaterial:m,simScene:g,dropScene:S,dropGeometry:u,dropMaterial:w,dropPositions:_,dropAmps:p,dropCount:0,maxDrops:s,fieldBounds:{xMin:n,xMax:r,zMin:a,zMax:o},texture:l.texture}}function bs(i,e,t,n,r,a){if(i.dropCount>=i.maxDrops)return;const o=i.fieldBounds,s=(Ge(e,o.xMin,o.xMax)-o.xMin)/(o.xMax-o.xMin),c=(Ge(t,o.zMin,o.zMax)-o.zMin)/(o.zMax-o.zMin),l=i.dropCount;i.dropPositions[l*3]=s*2-1,i.dropPositions[l*3+1]=c*2-1,i.dropPositions[l*3+2]=0,i.dropAmps[l]=(r?oe.ripple.dropClick:oe.ripple.dropRain)*(.6+n),i.dropCount+=1}function Ov(i,e,t){const n=e.getRenderTarget(),r=e.autoClear;i.dropCount>0&&(i.dropGeometry.setDrawRange(0,i.dropCount),i.dropGeometry.attributes.position.needsUpdate=!0,i.dropGeometry.attributes.aAmp.needsUpdate=!0,e.autoClear=!1,e.setRenderTarget(i.rtA),e.render(i.dropScene,i.simCamera),e.autoClear=r),i.simMaterial.uniforms.uField.value=i.rtA.texture,e.setRenderTarget(i.rtB),e.render(i.simScene,i.simCamera);const a=i.rtA;i.rtA=i.rtB,i.rtB=a,i.texture=i.rtA.texture,e.setRenderTarget(n),e.autoClear=r,jt.material.uniforms.uHeightField.value=i.texture,re.dataset.activeRipples=String(i.dropCount),i.dropCount=0}function Bv(i){jt.material.uniforms.uTime.value=ki?0:i}function La(i,e,t){var h,f;t||(i.respawnCycle[e]+=1);const n=((h=i.resetSeed)==null?void 0:h[e])||os,r=((f=i.seedIndex)==null?void 0:f[e])??e,a=i_(n,r,i.respawnCycle[e]),o=i.strength[e],s=i.near[e],c=i.curtainLayer[e],l=Math.max(.8,i.top[e]-et),d=ct(.18,.68,Math.pow(o,.82));if(i.baseX[e]=Ge(It(i.hour[e])+G(-d,d,a),It(0)+.12,It(24)-.12),i.z[e]=Ya(s,a),i.role[e]===xt.AMBIENT){i.headY[e]=vn-.03;return}if(c===1){const m=et+l*G(.3,.44,a);i.headY[e]=G(et+i.length[e]*.72,m+i.length[e]*.4,a);return}if(c===0){i.headY[e]=G(et+i.length[e]*.78,i.top[e]+i.length[e]*.44,a);return}i.headY[e]=t?G(i.top[e]*.72,i.top[e]+i.length[e],a):i.top[e]+i.length[e]+G(.04,1.1,a)}function Xu(i=Math.random){if(!gn.length)return As(0,1,i,!0);const e=gn.map(([o,s])=>zv(o,s,i)),t=gn.map(([o,s])=>{let l=0;for(let d=0;d<24;d+=1){const h=ct(o,s,(d+.5)/24);l+=.02+Vi(h)*(.7+Xa(h))}return l*Math.max(.1,s-o)}),n=t.reduce((o,s)=>o+s,0);if(!Number.isFinite(n)||n<=0)return()=>G(.04,23.96,i);const r=[];let a=0;for(const o of t)a+=o/n,r.push(a);return()=>{const o=i(),s=Math.max(0,r.findIndex(c=>o<=c));return e[s]()}}function zv(i,e,t){const r=(e-i)/64,a=Array.from({length:64},(l,d)=>{const h=i+(d+.5)*r,f=Xa(h);return .001+Math.pow(Math.max(.001,f-.2),1.42)*Yu(h)}),o=a.reduce((l,d)=>l+d,0);if(!Number.isFinite(o)||o<=0)return()=>G(.04,23.96,t);const s=[];let c=0;for(const l of a)c+=l/o,s.push(c);return()=>{const l=t(),d=Math.max(0,s.findIndex(h=>l<=h));return Ge(i+(d+t())*r,i,e)}}function As(i,e,t=Math.random,n=!1,r=2.35,a=!1){const o=n?96:24,s=24/o,c=Array.from({length:o},(f,m)=>{const g=(m+.5)*s,_=Xa(g),p=Ii(g),u=n?Yu(g):1,w=a?kv(g):1,S=.55+Math.max(0,e)*.35,b=Math.pow(_,S),L=i*Math.pow(_,.85);return p*(L+b*r*u)*w}),l=c.reduce((f,m)=>f+m,0);if(!Number.isFinite(l)||l<=0)return()=>G(.04,23.96,t);const d=[];let h=0;for(const f of c)h+=f/l,d.push(h);return()=>{const f=t(),g=Math.max(0,d.findIndex(w=>f<=w))*s;if(n)return Ge(g+t()*s,.04,23.96);const _=Xa(g),p=ct(.54,.95,Math.pow(_,.62)),u=((t()+t()+t())/3-.5)*2;return Ge(g+.5+u*p,.04,23.96)}}function kv(i){const t=i>=12?2.3:1.45,n=Math.abs(i/12-1);return Ge(t*Math.pow(n,t-1),.42,2.3)}function Yu(i){const e=Kn(i*.62,Fn),t=Kn(i*2.45,Fn^2135587861);return .68+e*.38+t*.34}function Ts(i){const e=Ge(i,0,24),t=Math.floor(e),n=Math.min(t+1,St.length-1),r=e-t;return ct(St[t],St[n],r)}function Ii(i){const e=Ge(i,0,24),t=Math.floor(e),n=Math.min(t+1,St.length-1),r=e-t,a=St[t]>0,o=St[n]>0;if(!a&&!o)return 0;const s=.68;let c=1;return a||(c*=Ht(0,s,r)),o||(c*=1-Ht(1-s,1,r)),Ge(c,0,1)}function eo(i){return Ts(i)*Ii(i)}function Xa(i){return nn<=0?0:Ge(eo(i)/nn,0,1)}function mr(i){return Ge(eo(i)/Va,0,2)}function Oc(i){const e=Math.pow(Ge(i,0,1),.58),t=Ge(i-1,0,1)*.2;return e+t}function qu(i){const e=Ge(i/Va,0,1);return e<=0?0:.05+Math.pow(e,.62)*.95}function us(i){return Ge(eo(i)/Math.max(.001,Ms),0,1)}function $u(){nn=St.reduce((i,e)=>Math.max(i,e),0),Bi=Fa(nn),Ms=Bi,vn=et+Fr.worldHeight,gn=Gv()}function Fa(i){if(!Number.isFinite(i)||i<=0)return 1;const t=10**Math.floor(Math.log10(i)),n=i/t,a=(n<=1?1:n<=2?2:n<=5?5:10)*t;return Number.isFinite(a)?a:i}function Hv(){return[0,Bi*.5,Bi]}function ds(i){return Math.abs(i)>=1e6?i.toExponential(1):Math.abs(i)>=1e3?i.toLocaleString("zh-CN",{maximumFractionDigits:1}):Number.isInteger(i)?String(i):String(Number(i.toFixed(1)))}function Gv(){if(nn<=0)return[];const i=.25,e=[];let t=null;for(let r=0;r<=24+i*.5;r+=i){const a=Math.min(24,r),o=Vi(a)>.08;if(o&&t==null&&(t=Math.max(0,a-i)),(!o||a===24)&&t!=null){const s=o&&a===24?24:Math.min(24,a+i);e.push([t,s]),t=null}}const n=[];for(const r of e){const a=n[n.length-1];a&&r[0]-a[1]<=.5?a[1]=r[1]:n.push([...r])}return n.filter(([r,a])=>a-r>=.5)}function Vi(i){return Ht(5.8,7.8,eo(i))}function Cs(i){const e=us(i),t=ct(.91,1.09,Kn(i*1.55,Fn^1374857533)),n=Ge(.95+Math.pow(e,.92)*5.8*t,1.2,8.8),r=ct(.92,1.08,Kn(i*3.4,Fn^382051033));return et+n*.54*r}function Xo(i,e,t){i.stormWeight[e]=Vi(t),i.waterfallTop[e]=Cs(t),i.waterfallFeather[e]=ct(1.35,2.05,Kn(t*2.7+e*.013,Fn^1982518513))}function Yo(i=Math.random){const e=i();return e<.38?G(.72,1,i):e<.68?G(.38,.72,i):G(0,.38,i)}function Ya(i,e=Math.random){const t=(i-.5)*2;return Vr.center+t*Vr.thickness+G(-.22,Vr.jitter,e)}function hs(i,e,t){const n=pe.selectedActive?qa(i,pe.selectedHour)*.44:0;if(!pe.pointerActive)return n;const r=qa(i,pe.pointerHour),a=1-Ge(Math.hypot(e-pe.pointerWorld.x,(t-pe.pointerWorld.z)*.7)/3.2,0,1);return Math.max(n,r*a*.92)}function qa(i,e){const t=Math.abs(i-e);return Math.max(0,1-t/2.25)}function Bc(i,e,t,n,r=Math.random){const a=t>.62&&r()<.46?Nt.pearlBright:r()<.68?Nt.pearlMid:Nt.pearlDark,o=n*(.76+t*.28);i[e]=a.r*o,i[e+1]=a.g*o,i[e+2]=a.b*o}function Pa(i,e,t,n,r,a,o=Math.random){const s=r===xt.AMBIENT?.01:a===2?.72:.018,c=o(),l=c<s?Nt.pearlBright:c<s+.68?Nt.pearlMid:Nt.pearlDark,d=n*(.76+t*.28);i[e]=l.r*d,i[e+1]=l.g*d,i[e+2]=l.b*d}function Vv(i,e,t,n,r=Math.random){const a=t>.58&&r()<.34?Nt.waterBright:r()<.7?Nt.waterMid:Nt.waterDark,o=n*(.74+t*.24);i[e]=a.r*o,i[e+1]=a.g*o,i[e+2]=a.b*o}function It(i){return(i/24-.5)*Fr.plotWidth}function Wv(i){return Ge((i/Fr.plotWidth+.5)*24,0,24)}function Xv(i){var e,t;pe.pointerDown=!0,pe.pointerMoved=!1,pe.activePointerId=i.pointerId,(t=(e=Qe.domElement).setPointerCapture)==null||t.call(e,i.pointerId),pe.downClient.x=i.clientX,pe.downClient.y=i.clientY,pe.downView.x=pe.view.targetX,pe.downView.y=pe.view.targetY,Rs(i)}function Yv(i){if(Rs(i),pe.pointerDown){const e=i.clientX-pe.downClient.x,t=i.clientY-pe.downClient.y;Math.hypot(e,t)>Fr.dragThreshold&&(pe.pointerMoved=!0,Gi.classList.add("is-dragged"),Av())}}function qv(i){Rs(i),pe.pointerMoved||(pe.selectedHour=Ge(Math.round(pe.pointerHour),0,24),pe.selectedActive=!0,pe.burst=1.55,bs(Yr,pe.pointerWorld.x,pe.pointerWorld.z,.82,!0,ss.elapsedTime)),no(i.pointerId),pe.pointerDown=!1,pe.pointerMoved=!1,Qa(),Zr(!0)}function $v(i){no(i.pointerId),pe.pointerDown=!1,pe.pointerMoved=!1,pe.pointerActive=!1,Gi.classList.remove("is-pointer-active"),Qa()}function to(){pe.pointerActive=!1,Gi.classList.remove("is-pointer-active")}function jv(){to()}function Zv(){no(),pe.pointerDown=!1,pe.pointerMoved=!1,pe.pointerActive=!1,Gi.classList.remove("is-pointer-active"),Qa()}function no(i=pe.activePointerId){var e,t;i!=null&&((t=(e=Qe.domElement).hasPointerCapture)!=null&&t.call(e,i)&&Qe.domElement.releasePointerCapture(i),pe.activePointerId=null)}function Rs(i){const e=Qe.domElement.getBoundingClientRect(),t=(i.clientX-e.left)/e.width,n=(i.clientY-e.top)/e.height;pe.pointerClient.x=i.clientX,pe.pointerClient.y=i.clientY,pe.pointerNdc.set(t*2-1,-(n*2-1)),Vo.setFromCamera(pe.pointerNdc,Qt),Vo.ray.intersectPlane(gv,pe.pointerWorld);const r=Vo.ray.intersectPlane(vv,Ta),a=It(0),o=It(24),s=!!r&&Ta.x>=a&&Ta.x<=o;r&&(pe.pointerHour=Wv(Ta.x)),pe.pointerActive=s,Gi.classList.toggle("is-pointer-active",s)}function Kv(){no(),pe.pointerDown=!1,pe.pointerMoved=!1,io(),pe.selectedHour=18,pe.selectedActive=!0,pe.burst=.7,Gi.classList.remove("is-dragged"),Qa(!0),Zr(!0)}function Jv(i){pt&&pt.update()}function Qv(){return window.innerWidth<760?"mobile":window.innerWidth<1100||window.innerWidth/window.innerHeight<1.72?"tablet":"desktop"}function e_(i,e,t,n,r,a){if(!i||i.isEmpty()||!Number.isFinite(r)||r<=0)return null;const o=1-Ge(a,0,.2)*2,s=Math.tan(qn.degToRad(n*.5)),c=s*r;if(s<=0||c<=0||o<=0)return null;const l=t.clone().cross(Qt.up);l.lengthSq()<1e-8&&l.set(1,0,0),l.normalize();const d=l.clone().cross(t).normalize(),h=[];let f=0;for(const m of[i.min.x,i.max.x])for(const g of[i.min.y,i.max.y])for(const _ of[i.min.z,i.max.z]){const p=new F(m,g,_).sub(e),u=p.dot(l),w=p.dot(d),S=p.dot(t);h.push({horizontal:u,vertical:w,depthOffset:S}),f=Math.max(f,Math.abs(u)/(c*o)-S,Math.abs(w)/(s*o)-S,Qt.near+.05-S)}return{requiredDistance:f,samples:h,tanHorizontal:c,tanVertical:s,viewportLimit:o}}function t_(i,e){if(!i)return{horizontal:0,vertical:0};let t=0,n=0;for(const r of i.samples){const a=Math.max(Qt.near,e+r.depthOffset);t=Math.max(t,Math.abs(r.horizontal)/(a*i.tanHorizontal)),n=Math.max(n,Math.abs(r.vertical)/(a*i.tanVertical))}return{horizontal:t,vertical:n}}function n_(i){pt&&(pt.minDistance=oe.orbit.minDistance,pt.maxDistance=Math.max(oe.orbit.maxDistance,i*1.25))}function io(){const i=oe.camera[Qv()],e=new F(i.pos[0],i.pos[1],i.pos[2]);Rn.set(i.target[0],i.target[1]+oe.camera.frameTargetYOffset,i.target[2]),Qt.fov=i.fov;const t=Rn.clone().sub(e),n=t.length();n<=1e-6?t.set(0,0,-1):t.multiplyScalar(1/n),dr&&Xn()&&(Rn.x=0,Rn.y=(dr.min.y+dr.max.y)*.5);const r=e_(dr,Rn,t,Qt.fov,Qt.aspect,Lc),a=r&&Xn()?r.requiredDistance:Math.max(n,(r==null?void 0:r.requiredDistance)||0);Aa.copy(Rn).addScaledVector(t,-a),Qt.position.copy(Aa),Qt.lookAt(Rn),Qt.updateProjectionMatrix(),pt&&(n_(a),pt.target.copy(Rn),Qt.position.copy(Aa),pt.update());const o=t_(r,a);re.dataset.cameraFitMode=r?"curated-axis-bounds":"preset-fallback",re.dataset.cameraFitMargin=Lc.toFixed(3),re.dataset.cameraFitDistance=a.toFixed(3),re.dataset.cameraFitRequiredDistance=r?r.requiredDistance.toFixed(3):"unavailable",re.dataset.cameraFitHorizontalUsage=o.horizontal.toFixed(3),re.dataset.cameraFitVerticalUsage=o.vertical.toFixed(3),re.dataset.cameraFitPresetFloor=Xn()?"disabled":"preserved";const s=Rn.clone().sub(Aa),c=Math.hypot(s.x,s.z);re.dataset.initialCameraPitchDeg=qn.radToDeg(Math.atan2(s.y,c)).toFixed(3),re.dataset.initialCameraYawDeg=qn.radToDeg(Math.atan2(s.x,-s.z)).toFixed(3),re.dataset.initialCameraView="front-facing"}function Zr(i=!1){const e=pe.pointerActive?pe.pointerHour:pe.selectedHour;Gi.classList.toggle("is-selected",pe.selectedActive);const t=Ge(Math.round(e),0,24),n=Ts(e),r=`${t}-${n.toFixed(1)}-${pe.pointerActive}-${i}`;(r!==pe.readoutKey||i)&&(Z0.textContent=`${String(t).padStart(2,"0")}:00`,K0.textContent=n.toFixed(1),pe.readoutKey=r)}let qo=0;function $o(){var e,t,n,r;ui=Du(),Qe.setPixelRatio(ui),Qe.setSize(window.innerWidth,window.innerHeight),re.dataset.rendererPixelRatio=ui.toFixed(2);const i=Xn()?1:0;(t=(e=rt==null?void 0:rt.points)==null?void 0:e.material)!=null&&t.uniforms&&(rt.points.material.uniforms.uPixelRatio.value=ui,rt.points.material.uniforms.uMobileCrisp.value=i),(r=(n=rt==null?void 0:rt.lines)==null?void 0:n.material)!=null&&r.uniforms&&(rt.lines.material.uniforms.uMobileCrisp.value=i),re.dataset.rainEdgeMode=i?"mobile-crisp":"authored",Qt.aspect=window.innerWidth/window.innerHeight,io(),ys(tt),ju()}function Ps(){const i=++qo;$o(),requestAnimationFrame(()=>{i===qo&&$o()}),window.setTimeout(()=>{i===qo&&$o()},240)}function ju(){Er.set(0,1,0,1),br.set(.002,0,.002),Qe.getDrawingBufferSize(Ar)}function Ni(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function i_(i,e,t){const n=i^Math.imul(e+1,2654435761)^Math.imul(t+1,2246822507);return Ni(n>>>0)}function Kn(i,e){const t=Math.floor(i),n=Ht(0,1,i-t);return ct(zc(t,e),zc(t+1,e),n)}function zc(i,e){let t=Math.imul(i^e,73244475);return t=Math.imul(t^t>>>16,73244475),((t^t>>>16)>>>0)/4294967295}function G(i,e,t=Math.random){return i+t()*(e-i)}function ct(i,e,t){return i+(e-i)*t}function Ge(i,e,t){return Math.min(t,Math.max(e,i))}function Ht(i,e,t){const n=Ge((t-i)/(e-i),0,1);return n*n*(3-2*n)}function Di(i){const e=i*10;return Number.isFinite(e)?Math.round(e)/10:i}function r_(){if(!zr||!Jt||!vc||!_c||!Cn)return;const i=Jt.querySelector("#rainfall-editor-close"),e=Jt.querySelector("#rainfall-restore"),t=Jt.querySelector("#rainfall-apply"),n=[],r=[],a="http://www.w3.org/2000/svg",o={width:720,height:280,left:42,right:18,top:24,bottom:258},s=o.width-o.left-o.right,c=o.bottom-o.top;let l=[...St],d=Math.max(20,Fa(Math.max(...l)*1.25)),h=18,f=null,m=null,g=null,_=null;const p=(q,R={})=>{const X=document.createElementNS(a,q);for(const[se,Q]of Object.entries(R))X.setAttribute(se,String(Q));return X},u=p("defs"),w=p("linearGradient",{id:"rainfall-chart-area-gradient",x1:0,y1:0,x2:0,y2:1});w.append(p("stop",{offset:"0%","stop-color":"#c2cbdb","stop-opacity":.28}),p("stop",{offset:"100%","stop-color":"#687a96","stop-opacity":.015})),u.appendChild(w);const S=p("g",{"aria-hidden":"true"}),b=p("path",{class:"rainfall-chart-area"}),L=p("polyline",{class:"rainfall-chart-line"}),C=p("g");Cn.append(u,S,b,L,C);for(let q=0;q<ci.length;q+=1){const R=p("g",{class:"rainfall-chart-point","data-hour":q,tabindex:0,role:"slider","aria-orientation":"vertical","aria-valuemin":0});R.append(p("circle",{class:"rainfall-chart-handle-halo",r:13}),p("circle",{class:"rainfall-chart-handle",r:4.2}),p("circle",{class:"rainfall-chart-hit",r:14})),C.appendChild(R),r.push(R)}for(let q=0;q<ci.length;q+=1){const R=document.createElement("label");R.className="rainfall-hour-field",R.htmlFor=`rainfall-hour-${q}`;const X=document.createElement("span");X.className="rainfall-hour-label",X.textContent=`${String(q).padStart(2,"0")}:00`;const se=document.createElement("span");se.className="rainfall-input-shell";const Q=document.createElement("input");Q.id=`rainfall-hour-${q}`,Q.className="rainfall-hour-input",Q.type="number",Q.name="rainfall-hour",Q.dataset.hour=String(q),Q.min="0",Q.step="0.1",Q.inputMode="decimal",Q.required=!0,Q.setAttribute("aria-label",Ke("rainfallInputAria",{time:`${String(q).padStart(2,"0")}:00`}));const Le=document.createElement("span");Le.className="rainfall-input-unit",Le.setAttribute("aria-hidden","true"),Le.textContent="mm/h";const ye=document.createElement("span");ye.id=`rainfall-hour-${q}-error`,ye.className="rainfall-field-error",ye.hidden=!0,Q.setAttribute("aria-describedby",ye.id),Q.addEventListener("input",()=>{Q.removeAttribute("aria-invalid"),ye.hidden=!0,ye.textContent="",Tn.hidden=!0,Tn.textContent="",oi.textContent="";const Ne=Number(Q.value);Q.value.trim()!==""&&Number.isFinite(Ne)&&Ne>=0&&(l[q]=Di(Ne),l[q]>d&&(d=Fa(l[q]*1.2)),h=q,U(),Z())}),Q.addEventListener("change",()=>{const Ne=Number(Q.value);Q.value.trim()===""||!Number.isFinite(Ne)||Ne<0||(l[q]=Di(Ne),W(!0,Ke("savedHour",{time:`${String(q).padStart(2,"0")}:00`})))}),se.append(Q,Le),R.append(X,se,ye),_c.appendChild(R),n.push(Q)}const T=q=>Number(q).toFixed(1),B=(q,R)=>q.length===R.length&&q.every((X,se)=>X===R[se]);function E(q=h){h=Ge(Math.round(q),0,l.length-1),xc&&(xc.textContent=`${String(h).padStart(2,"0")}:00`),Sc&&(Sc.textContent=T(l[h]))}function M(q,R){const X=o.left+q/(l.length-1)*s,se=o.bottom-Ge(R/Math.max(.1,d),0,1)*c;return{x:X,y:se}}function P(){S.replaceChildren();for(const q of[0,.5,1]){const R=o.bottom-q*c;S.appendChild(p("line",{class:"rainfall-chart-grid-line",x1:o.left,x2:o.width-o.right,y1:R,y2:R}));const X=p("text",{class:"rainfall-chart-grid-label",x:o.left-9,y:R+6,"text-anchor":"end"});X.textContent=ds(d*q),S.appendChild(X)}for(const q of[0,6,12,18,24]){const R=o.left+q/24*s;S.appendChild(p("line",{class:"rainfall-chart-grid-line",x1:R,x2:R,y1:o.top,y2:o.bottom}))}}function U(){P();const q=l.map((R,X)=>M(X,R));L.setAttribute("points",q.map(R=>`${R.x},${R.y}`).join(" ")),b.setAttribute("d",`M ${q[0].x} ${o.bottom} L ${q.map(R=>`${R.x} ${R.y}`).join(" L ")} L ${q.at(-1).x} ${o.bottom} Z`),r.forEach((R,X)=>{const se=q[X];R.setAttribute("transform",`translate(${se.x} ${se.y})`),R.classList.toggle("is-active",X===h),R.setAttribute("aria-label",Ke("chartPointAria",{time:`${String(X).padStart(2,"0")}:00`})),R.setAttribute("aria-valuemax",String(d)),R.setAttribute("aria-valuenow",String(l[X])),R.setAttribute("aria-valuetext",Ke("rainfallValueText",{value:T(l[X])}))}),E()}function O(q=l){const R=q.reduce((X,se)=>Math.max(X,se),0);d=Math.max(20,Fa(R*1.25))}function $(){const q=l.map(R=>Di(Number(R)));B(q,St)||Wo(q)}function Z(){g===null&&(g=window.setTimeout(()=>{g=null,$()},90))}function W(q=!0,R=""){g!==null&&(window.clearTimeout(g),g=null),$(),ce(St,!1),R&&(oi.textContent=R)}function ie(q,R,{live:X=!0}={}){const se=Di(Ge(Number(R),0,d));l[q]=se,h=q,n[q].value=T(se),U(),X&&Z()}function k(q){const R=Cn.getBoundingClientRect(),X=(q.clientY-R.top)/Math.max(1,R.height)*o.height,se=(o.bottom-X)/c;return Di(Ge(se,0,1)*d)}function ce(q,R=!0){R&&(l=[...q]),n.forEach((X,se)=>{X.value=T(q[se]),X.removeAttribute("aria-invalid");const Q=document.getElementById(`${X.id}-error`);Q&&(Q.hidden=!0,Q.textContent="")}),Tn.hidden=!0,Tn.textContent="",R&&(O(q),U())}function me(q){if(Jt.classList.toggle("is-open",q),Jt.setAttribute("aria-hidden",String(!q)),zr.setAttribute("aria-expanded",String(q)),q)_=document.activeElement,Jt.removeAttribute("inert"),ce(St),oi.textContent=Ke("editorReady"),requestAnimationFrame(()=>i==null?void 0:i.focus());else{g!==null&&W(!0),Jt.setAttribute("inert",""),oi.textContent="";const R=_ instanceof HTMLElement?_:zr;requestAnimationFrame(()=>R.focus())}}function ge(){const q=[],R=[];return n.forEach(X=>{const se=X.value.trim(),Q=Number(se),Le=se===""||!Number.isFinite(Q)||Q<0,ye=document.getElementById(`${X.id}-error`);Le?(R.push(X),X.setAttribute("aria-invalid","true"),ye&&(ye.hidden=!1,ye.textContent=Ke(se===""?"emptyRainfall":"invalidRainfall"))):(X.removeAttribute("aria-invalid"),ye&&(ye.hidden=!0,ye.textContent=""),q.push(Di(Q)))}),R.length?(Mc&&(Mc.open=!0),Tn.hidden=!1,Tn.textContent=Ke("invalidCount",{count:R.length}),R[0].focus(),null):(Tn.hidden=!0,Tn.textContent="",q)}zr.addEventListener("click",()=>me(!0)),i==null||i.addEventListener("click",()=>me(!1)),document.addEventListener("pointerdown",q=>{if(Jt.getAttribute("aria-hidden")!=="false")return;const R=q.target;R instanceof Node&&(Jt.contains(R)||zr.contains(R)||me(!1))},!0),Jt.addEventListener("keydown",q=>{if(q.key==="Escape"){q.preventDefault(),me(!1);return}}),Cn.addEventListener("pointerdown",q=>{const R=q.target instanceof Element?q.target.closest(".rainfall-chart-point"):null;R instanceof SVGElement&&(q.preventDefault(),f=Number(R.dataset.hour),m=q.pointerId,Cn.setPointerCapture(q.pointerId),ie(f,k(q)))}),Cn.addEventListener("pointermove",q=>{f===null||q.pointerId!==m||(q.preventDefault(),ie(f,k(q)))});const Ie=q=>{if(f===null||q.pointerId!==m)return;const R=f;f=null,m=null,W(!0,Ke("savedValue",{time:`${String(R).padStart(2,"0")}:00`,value:T(l[R])})),U()};Cn.addEventListener("pointerup",Ie),Cn.addEventListener("pointercancel",Ie),Cn.addEventListener("focusin",q=>{const R=q.target instanceof Element?q.target.closest(".rainfall-chart-point"):null;R instanceof SVGElement&&(h=Number(R.dataset.hour),U())}),Cn.addEventListener("keydown",q=>{const R=q.target instanceof Element?q.target.closest(".rainfall-chart-point"):null;if(!(R instanceof SVGElement))return;const X=Number(R.dataset.hour),se=q.shiftKey?1:.1;let Q=null;q.key==="ArrowUp"&&(Q=l[X]+se),q.key==="ArrowDown"&&(Q=l[X]-se),q.key==="Home"&&(Q=0),q.key==="End"&&(Q=d),Q!==null&&(q.preventDefault(),ie(X,Q,{live:!1}),W(!0,Ke("savedValue",{time:`${String(X).padStart(2,"0")}:00`,value:T(l[X])})))}),vc.addEventListener("submit",q=>{q.preventDefault();const R=ge();if(R){t.disabled=!0,Jt.dataset.applying="true",oi.textContent=Ke("applying");try{l=[...R],Wo(R),ce(St),oi.textContent=Ke("applied",{count:ci.length,maximum:ds(nn)})}catch(X){Tn.hidden=!1,Tn.textContent=X instanceof Error?X.message:Ke("applyFailed"),oi.textContent=""}finally{t.disabled=!1,Jt.dataset.applying="false"}}}),e==null||e.addEventListener("click",()=>{g!==null&&(window.clearTimeout(g),g=null),l=[...ci],Wo(ci),ce(St),oi.textContent=Ke("restored")}),ce(St),re.dataset.rainfallEditorReady="true",re.dataset.rainfallEditorMode="live-draggable-line-chart"}
