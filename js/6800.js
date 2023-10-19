(()=>{var t={9847:t=>{t.exports=function(t){function i(t,i,s,a){function e(i){"function"!=typeof self.postMessage?t.ports[0].postMessage(i):self.postMessage(i)}s?("undefined"!=typeof console&&"error"in console&&console.error("Worker caught an error:",s),e([i,{message:s.message}])):e([i,null,a])}self.addEventListener("message",(function(s){var a=s.data;if(Array.isArray(a)&&2===a.length){var e=a[0],n=a[1];"function"!=typeof t?i(s,e,new Error("Please pass a function into register().")):function(t,s,a,e){var n,r=function(t,i){try{return{res:t(i)}}catch(t){return{err:t}}}(s,e);r.err?i(t,a,r.err):!(n=r.res)||"object"!=typeof n&&"function"!=typeof n||"function"!=typeof n.then?i(t,a,null,r.res):r.res.then((function(s){i(t,a,null,s)}),(function(s){i(t,a,s)}))}(s,t,e,n)}}))}}},i={};function s(a){var e=i[a];if(void 0!==e)return e.exports;var n=i[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return s.d(i,{a:i}),i},s.d=(t,i)=>{for(var a in i)s.o(i,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},s.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{var t=3*Math.max(499,491,487,503),i={ncycles:100,netsize:256,samplefac:10},a=function(){function s(t,s){if(function(t){for(var i=1,s=arguments.length;i<s;i++){var a=arguments[i];if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}}(this,i,{pixels:t},s),this.netsize<4||this.netsize>256)throw new Error("Color count must be between 4 and 256");if(this.samplefac<1||this.samplefac>30)throw new Error("Sampling factor must be between 1 and 30");this.maxnetpos=this.netsize-1,this.netbiasshift=4,this.intbiasshift=16,this.intbias=1<<this.intbiasshift,this.gammashift=10,this.gamma=1<<this.gammashift,this.betashift=10,this.beta=this.intbias>>this.betashift,this.betagamma=this.beta*this.gamma,this.initrad=this.netsize>>3,this.radiusbiasshift=6,this.radiusbias=1<<this.radiusbiasshift,this.initradius=this.initrad*this.radiusbias,this.radiusdec=30,this.alphabiasshift=10,this.initalpha=1<<this.alphabiasshift,this.radbiasshift=8,this.radbias=1<<this.radbiasshift,this.alpharadbshift=this.alphabiasshift+this.radbiasshift,this.alpharadbias=1<<this.alpharadbshift,this.network=[],this.netindex=new Uint32Array(256),this.bias=new Uint32Array(this.netsize),this.freq=new Uint32Array(this.netsize),this.radpower=new Uint32Array(this.netsize>>3);for(var a=0,e=this.netsize;a<e;a++){var n=(a<<this.netbiasshift+8)/this.netsize;this.network[a]=new Float64Array([n,n,n,0]),this.freq[a]=this.intbias/this.netsize,this.bias[a]=0}}var a=s.prototype;return a.unbiasnet=function(){for(var t=0,i=this.netsize;t<i;t++)this.network[t][0]>>=this.netbiasshift,this.network[t][1]>>=this.netbiasshift,this.network[t][2]>>=this.netbiasshift,this.network[t][3]=t},a.altersingle=function(t,i,s,a,e){this.network[i][0]-=t*(this.network[i][0]-s)/this.initalpha,this.network[i][1]-=t*(this.network[i][1]-a)/this.initalpha,this.network[i][2]-=t*(this.network[i][2]-e)/this.initalpha},a.alterneigh=function(t,i,s,a,e){for(var n=Math.abs(i-t),r=Math.min(i+t,this.netsize),h=i+1,o=i-1,f=1;h<r||o>n;){var l=this.radpower[f++];if(h<r){var u=this.network[h++];u[0]-=l*(u[0]-s)/this.alpharadbias,u[1]-=l*(u[1]-a)/this.alpharadbias,u[2]-=l*(u[2]-e)/this.alpharadbias}if(o>n){var c=this.network[o--];c[0]-=l*(c[0]-s)/this.alpharadbias,c[1]-=l*(c[1]-a)/this.alpharadbias,c[2]-=l*(c[2]-e)/this.alpharadbias}}},a.contest=function(t,i,s){for(var a=~(1<<31),e=a,n=-1,r=n,h=0,o=this.netsize;h<o;h++){var f=this.network[h],l=Math.abs(f[0]-t)+Math.abs(f[1]-i)+Math.abs(f[2]-s);l<a&&(a=l,n=h);var u=l-(this.bias[h]>>this.intbiasshift-this.netbiasshift);u<e&&(e=u,r=h);var c=this.freq[h]>>this.betashift;this.freq[h]-=c,this.bias[h]+=c<<this.gammashift}return this.freq[n]+=this.beta,this.bias[n]-=this.betagamma,r},a.inxbuild=function(){for(var t=0,i=0,s=0,a=this.netsize;s<a;s++){for(var e=this.network[s],n=null,r=s,h=e[1],o=s+1;o<a;o++)(n=this.network[o])[1]<h&&(r=o,h=n[1]);if(n=this.network[r],s!==r){var f=[n[0],e[0]];e[0]=f[0],n[0]=f[1];var l=[n[1],e[1]];e[1]=l[0],n[1]=l[1];var u=[n[2],e[2]];e[2]=u[0],n[2]=u[1];var c=[n[3],e[3]];e[3]=c[0],n[3]=c[1]}if(h!==t){this.netindex[t]=i+s>>1;for(var b=t+1;b<h;b++)this.netindex[b]=s;t=h,i=s}}this.netindex[t]=i+this.maxnetpos>>1;for(var p=t+1;p<256;p++)this.netindex[p]=this.maxnetpos},a.learn=function(){var i,s=this.pixels.length,a=30+(this.samplefac-1)/3,e=s/(3*this.samplefac),n=e/this.ncycles|0,r=this.initalpha,h=this.initradius,o=h>>this.radiusbiasshift;o<=1&&(o=0);for(var f=0;f<o;f++)this.radpower[f]=r*((o*o-f*f)*this.radbias/(o*o));s<t?(this.samplefac=1,i=3):i=s%499!=0?1497:s%491!=0?1473:s%487!=0?1461:1509;for(var l=0,u=0;u<e;){var c=(255&this.pixels[l])<<this.netbiasshift,b=(255&this.pixels[l+1])<<this.netbiasshift,p=(255&this.pixels[l+2])<<this.netbiasshift,d=this.contest(c,b,p);if(this.altersingle(r,d,c,b,p),0!==o&&this.alterneigh(o,d,c,b,p),(l+=i)>=s&&(l-=s),0===n&&(n=1),++u%n==0){r-=r/a,(o=(h-=h/this.radiusdec)>>this.radiusbiasshift)<=1&&(o=0);for(var w=0;w<o;w++)this.radpower[w]=r*((o*o-w*w)*this.radbias/(o*o))}}},a.buildColorMap=function(){this.learn(),this.unbiasnet(),this.inxbuild()},a.getColorMap=function(){for(var t=new Buffer(3*this.netsize),i=new Buffer(this.netsize),s=0,a=this.netsize;s<a;s++)i[this.network[s][3]]=s;for(var e=0,n=0,r=0,h=this.netsize;e<h;e++)r=i[e],t[n++]=255&this.network[r][0],t[n++]=255&this.network[r][1],t[n++]=255&this.network[r][2];return t},s}();function e(t,i,s,a){for(var e=0,n=16777216,r=0,h=t.length;r<h;){var o=i-t[r++],f=s-t[r++],l=a-t[r],u=o*o+f*f+l*l;u<n&&(n=u,e=r/3|0),r++}return e}function n(t,i){var s=new a(t,i);return s.buildColorMap(),s.getColorMap()}function r(t,i){for(var s=[],a={},n=0,r=0,h=t.length;n<h;){var o=t[n++],f=t[n++],l=t[n++],u=o<<16|f<<8|l;s[r++]=u in a?a[u]:a[u]=e(i,o,f,l)}return s}var h={name:"xyz",min:[0,0,0],channel:["X","Y","Z"],alias:["XYZ","ciexyz","cie1931"],whitepoint:{2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,65.627],E:[100,100,100]}}};h.max=h.whitepoint[2].D65,h.rgb=function(t,i){i=i||h.whitepoint[2].E;var s,a,e,n=t[0]/i[0],r=t[1]/i[1],o=t[2]/i[2];return a=-.96924363628087*n+1.87596750150772*r+.041555057407175*o,e=.055630079696993*n+-.20397695888897*r+1.056971514242878*o,s=(s=3.240969941904521*n+-1.537383177570093*r+-.498610760293*o)>.0031308?1.055*Math.pow(s,1/2.4)-.055:s*=12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a*=12.92,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,[255*(s=Math.min(Math.max(0,s),1)),255*(a=Math.min(Math.max(0,a),1)),255*(e=Math.min(Math.max(0,e),1))]};function o(t,i,s=1){const a=function(t){const i=new Uint8ClampedArray(t.length/4*3),s=t.length;let a=0;for(let e=0;e<s;){for(let s=0;s<3;s++)i[a++]=t[e++];e++}return i}(t),e=n(a,{netsize:i,samplefac:s}),h=r(a,e),o=[],l=e.length;for(let t=0;t<l;)o.push([e[t++],e[t++],e[t++],255]);return{centroid:o,label:f(i,h)}}function f(t,i){const s=new Array(t).fill(0);for(const t of i)s[t]++;return s}function l(t,i){const s=document.createElement("canvas"),a=s.getContext("2d");return s.height=i,s.width=t,a}function u(t,i){return new OffscreenCanvas(t,i).getContext("2d")}h.lab=function(t){var i=t[0],s=t[1],a=t[2];return s/=100,a/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(s=s>.008856?Math.pow(s,1/3):7.787*s+16/116)-16,500*(i-s),200*(s-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]};c.bind(void 0,l),c.bind(void 0,u);function c(t,i){const{naturalWidth:s,naturalHeight:a}=i,e=t(s,a);return e.drawImage(i,0,0,s,a),e.getImageData(0,0,s,a)}b.bind(void 0,l),b.bind(void 0,u);function b(t,i,s){const{naturalWidth:a,naturalHeight:e}=i,n=a*e/s;if(n>1){const s=a/Math.sqrt(n),r=e/Math.sqrt(n),h=t(s,r);return h.drawImage(i,0,0,s,r),h.getImageData(0,0,s,r)}{const s=t(a,e);return s.drawImage(i,0,0),s.getImageData(0,0,a,e)}}var p=s(9847);s.n(p)()((t=>{const{img:i,k:s}=t;return o(i.data,s)}))})()})();
//# sourceMappingURL=6800.js.map