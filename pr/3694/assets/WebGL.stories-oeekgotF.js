import{a0 as x,ag as i}from"./iframe-DLBv-YrI.js";import{u as xe,C as q,h as Re,a as J,d as he,b as oe}from"./_data-DJcbQ7Od.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-Tc-BNNHY.js";import"./ChartSwatch-D5d_bwnb.js";import"./HStack-CiG87BSV.js";import"./Stack-mK8yRBNi.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-CgpCEQ_V.js";import"./index-DBWAn80Q.js";import"./index-Cnj2XUlo.js";function pe(e,r,u){const a=e.createShader(r);return a?(e.shaderSource(a,u),e.compileShader(a),e.getShaderParameter(a,e.COMPILE_STATUS)?a:(e.deleteShader(a),null)):null}function K(e,r,u){const a=pe(e,e.VERTEX_SHADER,r),o=pe(e,e.FRAGMENT_SHADER,u);if(!a||!o)return a&&e.deleteShader(a),o&&e.deleteShader(o),null;const c=e.createProgram();return c?(e.attachShader(c,a),e.attachShader(c,o),e.linkProgram(c),e.deleteShader(a),e.deleteShader(o),e.getProgramParameter(c,e.LINK_STATUS)?c:(e.deleteProgram(c),null)):(e.deleteShader(a),e.deleteShader(o),null)}const me=[.5,.5,.5];function Q(e){if(typeof e!="string")return me;let r=e.trim().replace(/^#/,"");if((r.length===3||r.length===4)&&(r=r.replace(/./g,a=>a+a)),r.length===8&&(r=r.slice(0,6)),!/^[0-9a-fA-F]{6}$/.test(r))return me;const u=parseInt(r,16);return[(u>>16)/255,(u>>8&255)/255,(u&255)/255]}function ge(){return((typeof window<"u"?window.devicePixelRatio:0)||2)*2}function ie(e){return e.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0})}function ce(e){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)}function se(e,r,u){const a=ge();return e.width=Math.max(1,Math.round(r*a)),e.height=Math.max(1,Math.round(u*a)),e.style.width=`${Math.max(0,r)}px`,e.style.height=`${Math.max(0,u)}px`,a}function ae(e,r,u,a){const o=e.ownerSVGElement;if(!o)return;const c=o.parentElement;if(!c)return;getComputedStyle(c).position==="static"&&(c.style.position="relative"),r.style.position="absolute",r.style.pointerEvents="none";const y=c.getBoundingClientRect(),f=e.getScreenCTM();return f?(r.style.left=`${f.e-y.left}px`,r.style.top=`${f.f-y.top}px`):(r.style.left="0",r.style.top="0"),r.style.width=`${u}px`,r.style.height=`${a}px`,c.appendChild(r),()=>{r.parentElement===c&&c.removeChild(r)}}function $(e,r,u){const a=o=>{o.preventDefault(),r()};return e.addEventListener("webglcontextlost",a,!1),e.addEventListener("webglcontextrestored",u,!1),()=>{e.removeEventListener("webglcontextlost",a,!1),e.removeEventListener("webglcontextrestored",u,!1)}}function X(e){const r=e.getExtension("WEBGL_lose_context");r&&r.loseContext()}const ve=1/.96,ye=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_size;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size * ${ve.toFixed(6)};
  }
`,_e=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    float edge = 1.0 - smoothstep(0.48, 0.5, dist);
    float a = u_opacity * edge;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function be({resolved:e,color:r,size:u,opacity:a,width:o,height:c}){const y=i.useRef(null),f=i.useRef(null),F=i.useRef(null),R=i.useRef(null),m=i.useRef(null),E=i.useRef(null),[v,b]=i.useState(0),T=i.useMemo(()=>{const l=[];for(const L of e)Number.isFinite(L.px)&&Number.isFinite(L.py)&&l.push(L.px,L.py);return new Float32Array(l)},[e]);return i.useEffect(()=>{const l=E.current;if(!l)return;y.current||(y.current=document.createElement("canvas"));const L=y.current,h=ae(l,L,o,c),B=$(L,()=>{f.current=null,F.current=null,R.current=null,m.current=null},()=>b(M=>M+1));return()=>{B(),h?.()}},[o,c]),i.useEffect(()=>{const l=y.current;if(!l||o<=0||c<=0)return;const L=se(l,o,c);f.current||(f.current=ie(l));const h=f.current;if(!h||h.isContextLost())return;F.current||(F.current=K(h,ye,_e),m.current=null);const B=F.current;if(!B)return;R.current||(R.current=h.createBuffer());const M=R.current;if(!M)return;m.current||(m.current={aPosition:h.getAttribLocation(B,"a_position"),uResolution:h.getUniformLocation(B,"u_resolution"),uColor:h.getUniformLocation(B,"u_color"),uSize:h.getUniformLocation(B,"u_size"),uOpacity:h.getUniformLocation(B,"u_opacity")});const P=m.current;h.viewport(0,0,l.width,l.height),ce(h),h.useProgram(B),h.bindBuffer(h.ARRAY_BUFFER,M),h.bufferData(h.ARRAY_BUFFER,T,h.STATIC_DRAW),h.enableVertexAttribArray(P.aPosition),h.vertexAttribPointer(P.aPosition,2,h.FLOAT,!1,0,0);const[G,O,s]=Q(r);h.uniform2f(P.uResolution,o,c),h.uniform3f(P.uColor,G,O,s),h.uniform1f(P.uSize,u*L),h.uniform1f(P.uOpacity,a),h.drawArrays(h.POINTS,0,T.length/2)},[o,c,r,u,a,T,v]),i.useEffect(()=>()=>{const l=f.current;l&&(R.current&&l.deleteBuffer(R.current),F.current&&l.deleteProgram(F.current),X(l)),f.current=null,F.current=null,R.current=null,m.current=null},[]),o<=0||c<=0?null:x.jsx("g",{ref:E})}function Ae(e,r){const{color:u}=r,a=r.size??6,o=r.opacity??.8;return{type:"dotGL",key:e,dataKeys:[e],layout:{},resolve(c){const{data:y,xKey:f,xScale:F,yScale:R}=c,m=[];for(let E=0;E<y.length;E++){const v=y[E];let b;"bandwidth"in F?b=(F(String(v[f]))??0)+F.bandwidth()/2:b=F(v[f]);const T=typeof v[e]=="number"?v[e]:0;m.push({px:b,py:R(T),py0:R(0),dataIndex:E})}return m},render(c,y){return x.jsx(be,{resolved:c,color:u,size:a,opacity:o,width:y.width,height:y.height})}}}const Ee=16;function Fe(e){const r=e+1;return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function Ce(e,r,u){return e===0&&r===0&&u===0?-1:(e<<16|r<<8|u)-1}const Le=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_size;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size;
  }
`,Se=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (dot(coord, coord) > 0.25) discard;
    gl_FragColor = vec4(u_color, u_opacity);
  }
`,Te=`
  attribute vec2 a_position;
  attribute vec3 a_pickColor;
  uniform vec2 u_resolution;
  uniform float u_size;
  varying vec3 v_pickColor;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size;
    v_pickColor = a_pickColor;
  }
`,Be=`
  precision mediump float;
  varying vec3 v_pickColor;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (dot(coord, coord) > 0.25) discard;
    gl_FragColor = vec4(v_pickColor, 1.0);
  }
`;function we({resolved:e,color:r,size:u,opacity:a,width:o,height:c,data:y,renderTooltip:f}){const F=i.useRef(null),R=i.useRef(null),[m,E]=i.useState(-1),[v,b]=i.useState(null),[T,l]=i.useState(0),L=i.useRef(null),h=i.useRef(null),B=i.useRef(null),M=i.useRef(null),P=i.useRef(null),G=i.useMemo(()=>{const d=new Float32Array(e.length*2);for(let p=0;p<e.length;p++)d[p*2]=e[p].px,d[p*2+1]=e[p].py;return d},[e]),O=i.useMemo(()=>{const d=new Float32Array(e.length*3);for(let p=0;p<e.length;p++){const[A,_,C]=Fe(p);d[p*3]=A,d[p*3+1]=_,d[p*3+2]=C}return d},[e.length]);i.useEffect(()=>{if(o<=0||c<=0)return;const d=window.devicePixelRatio||1,p=Math.max(1,Math.round(o*d)),A=Math.max(1,Math.round(c*d)),_=F.current;if(_){if(_.width!==p&&(_.width=p),_.height!==A&&(_.height=A),!L.current){const t=_.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,antialias:!0}),S=t?K(t,Le,Se):null;t&&S&&(L.current={gl:t,prog:S},h.current=null)}const w=L.current;if(w&&!w.gl.isContextLost()){const{gl:t,prog:S}=w;h.current||(h.current=t.createBuffer());const D=h.current;if(D){t.viewport(0,0,_.width,_.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.useProgram(S),t.bindBuffer(t.ARRAY_BUFFER,D),t.bufferData(t.ARRAY_BUFFER,G,t.STATIC_DRAW);const U=t.getAttribLocation(S,"a_position");t.enableVertexAttribArray(U),t.vertexAttribPointer(U,2,t.FLOAT,!1,0,0);const[j,N,k]=Q(r);t.uniform2f(t.getUniformLocation(S,"u_resolution"),o,c),t.uniform3f(t.getUniformLocation(S,"u_color"),j,N,k),t.uniform1f(t.getUniformLocation(S,"u_size"),u*d),t.uniform1f(t.getUniformLocation(S,"u_opacity"),a),t.drawArrays(t.POINTS,0,G.length/2)}}}const C=R.current;if(C){if(C.width!==p&&(C.width=p),C.height!==A&&(C.height=A),!B.current){const t=C.getContext("webgl",{alpha:!1,premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!0});if(t){const S=K(t,Te,Be),D=t.createFramebuffer(),U=t.createTexture();S&&D&&U&&(t.bindTexture(t.TEXTURE_2D,U),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.bindFramebuffer(t.FRAMEBUFFER,D),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,U,0),t.bindFramebuffer(t.FRAMEBUFFER,null),B.current={gl:t,prog:S,fb:D,tex:U,texW:0,texH:0,dpr:d},M.current=null,P.current=null)}}const w=B.current;if(w&&!w.gl.isContextLost()){const{gl:t,prog:S,fb:D,tex:U}=w;w.dpr=d,(w.texW!==C.width||w.texH!==C.height)&&(t.bindTexture(t.TEXTURE_2D,U),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,C.width,C.height,0,t.RGBA,t.UNSIGNED_BYTE,null),w.texW=C.width,w.texH=C.height),M.current||(M.current=t.createBuffer()),P.current||(P.current=t.createBuffer());const j=M.current,N=P.current;if(j&&N){t.bindFramebuffer(t.FRAMEBUFFER,D),t.viewport(0,0,C.width,C.height),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND),t.useProgram(S),t.bindBuffer(t.ARRAY_BUFFER,j),t.bufferData(t.ARRAY_BUFFER,G,t.STATIC_DRAW);const k=t.getAttribLocation(S,"a_position");t.enableVertexAttribArray(k),t.vertexAttribPointer(k,2,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,N),t.bufferData(t.ARRAY_BUFFER,O,t.STATIC_DRAW);const W=t.getAttribLocation(S,"a_pickColor");t.enableVertexAttribArray(W),t.vertexAttribPointer(W,3,t.FLOAT,!1,0,0),t.uniform2f(t.getUniformLocation(S,"u_resolution"),o,c),t.uniform1f(t.getUniformLocation(S,"u_size"),(u+Ee)*d),t.drawArrays(t.POINTS,0,G.length/2),t.bindFramebuffer(t.FRAMEBUFFER,null)}}}},[o,c,G,O,r,u,a,T]),i.useEffect(()=>{const d=[],p=F.current;p&&d.push($(p,()=>{L.current=null,h.current=null},()=>l(_=>_+1)));const A=R.current;return A&&d.push($(A,()=>{B.current=null,M.current=null,P.current=null},()=>l(_=>_+1))),()=>{for(const _ of d)_()}},[]),i.useEffect(()=>()=>{const d=L.current;if(d){const{gl:A,prog:_}=d;h.current&&A.deleteBuffer(h.current),A.deleteProgram(_),X(A)}const p=B.current;if(p){const{gl:A,prog:_,fb:C,tex:w}=p;M.current&&A.deleteBuffer(M.current),P.current&&A.deleteBuffer(P.current),A.deleteFramebuffer(C),A.deleteTexture(w),A.deleteProgram(_),X(A)}L.current=null,h.current=null,B.current=null,M.current=null,P.current=null},[]);const s=i.useCallback(d=>{const p=B.current;if(!p||p.gl.isContextLost())return;const A=d.currentTarget.ownerSVGElement;if(!A)return;const _=d.currentTarget.getScreenCTM();if(!_)return;const C=A.createSVGPoint();C.x=d.clientX,C.y=d.clientY;const w=C.matrixTransform(_.inverse()),{gl:t,fb:S,dpr:D,texW:U,texH:j}=p,N=Math.floor(w.x*D),k=Math.floor(w.y*D);if(N<0||k<0||N>=U||k>=j){E(-1),b(null);return}t.bindFramebuffer(t.FRAMEBUFFER,S);const W=new Uint8Array(4);t.readPixels(N,j-1-k,1,1,t.RGBA,t.UNSIGNED_BYTE,W),t.bindFramebuffer(t.FRAMEBUFFER,null);const Z=Ce(W[0],W[1],W[2]);E(Z),b(Z>=0?{x:w.x,y:w.y}:null)},[]),n=i.useCallback(()=>{E(-1),b(null)},[]),g=m>=0&&m<y.length?y[m]:null,I=(d,p)=>x.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,fontSize:12},children:[x.jsxs("div",{style:{fontWeight:600,color:"var(--color-text-primary)"},children:["Point ",p]}),Object.entries(d).map(([A,_])=>x.jsxs("div",{children:[x.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:[A,":"]})," ",x.jsx("span",{style:{fontWeight:500},children:String(_)})]},A))]});return x.jsxs("g",{children:[x.jsx("foreignObject",{x:0,y:0,width:o,height:c,style:{overflow:"hidden"},children:x.jsx("canvas",{ref:F,style:{width:o,height:c,pointerEvents:"none"}})}),x.jsx("foreignObject",{x:0,y:0,width:0,height:0,style:{overflow:"hidden"},children:x.jsx("canvas",{ref:R,style:{display:"none"}})}),x.jsx("rect",{x:0,y:0,width:o,height:c,fill:"transparent",onMouseMove:s,onMouseLeave:n}),g&&m>=0&&x.jsxs("g",{pointerEvents:"none",children:[x.jsx("circle",{cx:G[m*2],cy:G[m*2+1],r:u/2+7,fill:"none",stroke:r,strokeWidth:2,strokeOpacity:.35}),x.jsx("circle",{cx:G[m*2],cy:G[m*2+1],r:u/2+2.5,fill:r,stroke:"var(--color-background-body, #fff)",strokeWidth:2})]}),g&&v&&x.jsx("foreignObject",{x:v.x+12,y:Math.max(0,v.y-40),width:200,height:120,pointerEvents:"none",style:{overflow:"visible"},children:x.jsx("div",{style:{background:"var(--color-background-popover)",border:"1px solid var(--color-border)",borderRadius:8,padding:"8px 12px",boxShadow:"var(--shadow-med)",whiteSpace:"nowrap",width:"fit-content"},children:f?f(g,m):I(g,m)})})]})}function Pe(e,r){const{color:u}=r,a=r.size??6,o=r.opacity??.8,c=r.renderTooltip;return{type:"dotGLInteractive",key:e,dataKeys:[e],layout:{},resolve(y){const{data:f,xKey:F,xScale:R,yScale:m}=y,E=[];for(let v=0;v<f.length;v++){const b=f[v];let T;"bandwidth"in R?T=(R(String(b[F]))??0)+R.bandwidth()/2:T=R(b[F]);const l=typeof b[e]=="number"?b[e]:0;E.push({px:T,py:m(l),py0:m(0),dataIndex:v})}return E},render(y,f){return x.jsx(we,{resolved:y,color:u,size:a,opacity:o,width:f.width,height:f.height,data:f.data,renderTooltip:c})}}}const Ie=`
  attribute vec2 a_position;
  attribute vec3 a_color;
  uniform vec2 u_resolution;
  varying vec3 v_color;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_color = a_color;
  }
`,Me=`
  precision mediump float;
  varying vec3 v_color;
  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
`;function Ge(e,r){if(e.length===0)return[0,0,0];const u=Math.max(0,Math.min(1,Number.isFinite(r)?r:0));if(e.length===1)return e[0];const a=u*(e.length-1),o=Math.floor(a),c=Math.min(o+1,e.length-1),y=a-o;return[e[o][0]+y*(e[c][0]-e[o][0]),e[o][1]+y*(e[c][1]-e[o][1]),e[o][2]+y*(e[c][2]-e[o][2])]}function Ue({data:e,xKey:r,yKey:u,valueKey:a,xScale:o,yBandScale:c,colorRange:y,domain:f,cellGap:F,width:R,height:m}){const E=i.useRef(null),v=i.useRef(null),b=i.useRef(null),T=i.useRef(null),l=i.useRef(null),L=i.useRef(null),h=i.useRef(null),[B,M]=i.useState(0),P=i.useMemo(()=>y.map(Q),[y]),G=i.useMemo(()=>{if(f)return f;let s=1/0,n=-1/0;for(const g of e){const I=g[a];typeof I=="number"&&Number.isFinite(I)&&(I<s&&(s=I),I>n&&(n=I))}return!Number.isFinite(s)||!Number.isFinite(n)?[0,1]:[s,n]},[e,a,f]),O=i.useMemo(()=>{const s=[],n=[],[g,I]=G,d=I-g||1,p=F,A=o.bandwidth(),_=c.bandwidth(),C=typeof o.step=="function"?o.step():A,w=c.step();for(const t of e){const S=o(String(t[r])),D=c(String(t[u]));if(S==null||D==null)continue;const U=t[a],N=((typeof U=="number"&&Number.isFinite(U)?U:0)-g)/d,[k,W,Z]=Ge(P,N),le=S+A/2,fe=D+_/2,ee=le-C/2+p/2,te=le+C/2-p/2,re=fe-w/2+p/2,ne=fe+w/2-p/2;s.push(ee,re,te,re,ee,ne,te,re,te,ne,ee,ne);for(let de=0;de<6;de++)n.push(k,W,Z)}return{positions:new Float32Array(s),colors:new Float32Array(n),vertexCount:s.length/2}},[e,r,u,a,o,c,G,P,F]);return i.useEffect(()=>{const s=h.current;if(!s)return;E.current||(E.current=document.createElement("canvas"));const n=E.current,g=ae(s,n,R,m),I=$(n,()=>{v.current=null,b.current=null,T.current=null,l.current=null,L.current=null},()=>M(d=>d+1));return()=>{I(),g?.()}},[R,m]),i.useEffect(()=>{const s=E.current;if(!s||R<=0||m<=0)return;se(s,R,m),v.current||(v.current=ie(s));const n=v.current;if(!n||n.isContextLost())return;b.current||(b.current=K(n,Ie,Me),L.current=null);const g=b.current;if(!g)return;T.current||(T.current=n.createBuffer()),l.current||(l.current=n.createBuffer());const I=T.current,d=l.current;if(!I||!d)return;L.current||(L.current={aPosition:n.getAttribLocation(g,"a_position"),aColor:n.getAttribLocation(g,"a_color"),uResolution:n.getUniformLocation(g,"u_resolution")});const p=L.current;n.viewport(0,0,s.width,s.height),ce(n),n.useProgram(g),n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,O.positions,n.STATIC_DRAW),n.enableVertexAttribArray(p.aPosition),n.vertexAttribPointer(p.aPosition,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,d),n.bufferData(n.ARRAY_BUFFER,O.colors,n.STATIC_DRAW),n.enableVertexAttribArray(p.aColor),n.vertexAttribPointer(p.aColor,3,n.FLOAT,!1,0,0),n.uniform2f(p.uResolution,R,m),n.drawArrays(n.TRIANGLES,0,O.vertexCount)},[O,R,m,B]),i.useEffect(()=>()=>{const s=v.current;s&&(T.current&&s.deleteBuffer(T.current),l.current&&s.deleteBuffer(l.current),b.current&&s.deleteProgram(b.current),X(s)),v.current=null,b.current=null,T.current=null,l.current=null,L.current=null},[]),R<=0||m<=0?null:x.jsx("g",{ref:h})}function De(e){const{xKey:r,yKey:u,valueKey:a,colorRange:o}=e,c=e.cellGap??1;return{type:"heatmapGL",key:`heatmap-${a}`,dataKeys:[],layout:{yBandKey:u},resolve(y){const{data:f,xScale:F,yBandScale:R}=y,m=[];if(!("bandwidth"in F)||!R)return m;const E=F;for(let v=0;v<f.length;v++){const b=f[v],T=(E(String(b[r]))??0)+E.bandwidth()/2,l=(R(String(b[u]))??0)+R.bandwidth()/2;m.push({px:T,py:l,py0:l,dataIndex:v})}return m},render(y,f){return!("bandwidth"in f.xScale)||!f.yBandScale?null:x.jsx(Ue,{data:f.data,xKey:r,yKey:u,valueKey:a,xScale:f.xScale,yBandScale:f.yBandScale,colorRange:o,domain:e.domain,cellGap:c,width:f.width,height:f.height})}}}const Oe=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  }
`,je=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    float a = u_opacity;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function Ne({color:e,bufferSize:r,lineWidth:u,opacity:a,width:o,height:c,handleRef:y}){const{xScale:f,yScale:F}=xe(),R=i.useRef(null),m=i.useRef(null),E=i.useRef(null),v=i.useRef(null),b=i.useRef(null),T=i.useRef(null),l=i.useRef(null),[L,h]=i.useState(0),B=i.useRef({data:new Float32Array(r*2),head:0,count:0,capacity:r}),M=i.useRef(new Float32Array(r*2));i.useEffect(()=>{const s=B.current;s.capacity!==r&&(s.data=new Float32Array(r*2),s.head=0,s.count=0,s.capacity=r,M.current=new Float32Array(r*2))},[r]);const P=i.useCallback(()=>{const s=R.current;if(!s||o<=0||c<=0)return;m.current||(m.current=ie(s));const n=m.current;if(!n||n.isContextLost())return;E.current||(E.current=K(n,Oe,je),b.current=null);const g=E.current;if(!g)return;v.current||(v.current=n.createBuffer());const I=v.current;if(!I)return;b.current||(b.current={aPosition:n.getAttribLocation(g,"a_position"),uResolution:n.getUniformLocation(g,"u_resolution"),uColor:n.getUniformLocation(g,"u_color"),uOpacity:n.getUniformLocation(g,"u_opacity")});const d=b.current;n.viewport(0,0,s.width,s.height),ce(n);const{data:p,head:A,count:_,capacity:C}=B.current;if(_<2)return;const w=f,t=M.current;for(let j=0;j<_;j++){const N=(A-_+j+C)%C*2;t[j*2]=w(p[N]),t[j*2+1]=F(p[N+1])}n.useProgram(g),n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,t.subarray(0,_*2),n.DYNAMIC_DRAW),n.enableVertexAttribArray(d.aPosition),n.vertexAttribPointer(d.aPosition,2,n.FLOAT,!1,0,0);const[S,D,U]=Q(e);n.uniform2f(d.uResolution,o,c),n.uniform3f(d.uColor,S,D,U),n.uniform1f(d.uOpacity,a),n.lineWidth(u),n.drawArrays(n.LINE_STRIP,0,_)},[o,c,e,u,a,f,F]),G=i.useRef(P);i.useEffect(()=>{G.current=P},[P]);const O=i.useCallback(()=>{l.current==null&&(l.current=requestAnimationFrame(()=>{l.current=null,G.current()}))},[]);return i.useEffect(()=>{const s=T.current;if(!s)return;R.current||(R.current=document.createElement("canvas"));const n=R.current,g=ae(s,n,o,c),I=$(n,()=>{l.current!=null&&(cancelAnimationFrame(l.current),l.current=null),m.current=null,E.current=null,v.current=null,b.current=null},()=>h(d=>d+1));return()=>{I(),g?.()}},[o,c]),i.useEffect(()=>{const s=R.current;!s||o<=0||c<=0||se(s,o,c)},[o,c]),i.useEffect(()=>{O()},[P,O,L]),i.useImperativeHandle(y,()=>({push(s,n){if(!Number.isFinite(s)||!Number.isFinite(n))return;const g=B.current,I=g.head*2;g.data[I]=s,g.data[I+1]=n,g.head=(g.head+1)%g.capacity,g.count=Math.min(g.count+1,g.capacity),O()},clear(){const s=B.current;s.head=0,s.count=0,l.current!=null&&(cancelAnimationFrame(l.current),l.current=null);const n=m.current;n&&!n.isContextLost()&&(n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT))}}),[O]),i.useEffect(()=>()=>{l.current!=null&&(cancelAnimationFrame(l.current),l.current=null);const s=m.current;s&&(v.current&&s.deleteBuffer(v.current),E.current&&s.deleteProgram(E.current),X(s)),m.current=null,E.current=null,v.current=null,b.current=null},[]),o<=0||c<=0?null:x.jsx("g",{ref:T})}function ke(e){const{color:r}=e,u=e.bufferSize??500,a=e.lineWidth??2,o=e.opacity??1,c=e.handleRef;return{type:"streamGL",key:"stream",dataKeys:[],layout:{},resolve(){return[]},render(y,f){return x.jsx(Ne,{color:r,bufferSize:u,lineWidth:a,opacity:o,width:f.width,height:f.height,handleRef:c})}}}const nt={title:"Charts/WebGL",component:q},ue=x.jsxs(x.Fragment,{children:[x.jsx(J,{position:"bottom"}),x.jsx(J,{position:"left"})]}),H={name:"Scatter — static (high-performance)",render:()=>x.jsx(q,{data:he,xKey:"x",title:"WebGL scatter — static (dotGL)",series:[Ae("y",{color:"#3b82f6",size:5})],grid:x.jsx(oe,{horizontal:!0,vertical:!0}),axes:ue,height:400})},V={name:"Interactive scatter — hover + tooltip",render:()=>x.jsx(q,{data:he,xKey:"x",title:"WebGL scatter — interactive hover (dotGLInteractive)",series:[Pe("y",{color:"#6b1efd",size:6,renderTooltip:e=>x.jsxs("span",{children:["x: ",Math.round(e.x),", y: ",Math.round(e.y)]})})],grid:x.jsx(oe,{horizontal:!0,vertical:!0}),axes:ue,height:400})},z={render:()=>x.jsx(q,{data:Re,xKey:"hour",title:"Traffic heatmap",series:[De({xKey:"hour",yKey:"day",valueKey:"traffic",colorRange:["#eff6ff","#1e40af"]})],axes:x.jsxs(x.Fragment,{children:[x.jsx(J,{position:"bottom"}),x.jsx(J,{position:"left",showAxisLine:!0})]}),height:280})},Y={render:()=>{const e=i.useRef(null),r=60,[u,a]=i.useState(r);return i.useEffect(()=>{let o=0;const c=setInterval(()=>{e.current?.push(o,50+Math.sin(o/10)*30+Math.random()*10),o++,a(Math.max(r,o))},200);return()=>clearInterval(c)},[]),x.jsx(q,{data:[],xKey:"x",title:"Live stream (streamGL)",xDomain:[Math.max(0,u-r),u],yDomain:[0,100],series:[ke({handleRef:e,color:"#3b82f6"})],grid:x.jsx(oe,{}),axes:ue,height:300})}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Scatter — static (high-performance)',
  render: () => <Chart data={scatterData} xKey="x" title="WebGL scatter — static (dotGL)" series={[dotGL('y', {
    color: '#3b82f6',
    size: 5
  })]} grid={<ChartGrid horizontal vertical />} axes={axes} height={400} />
}`,...H.parameters?.docs?.source},description:{story:'Static, high-performance GPU scatter (`dotGL`) — one draw call, scales to\ntens of thousands of points. Intentionally has NO hover/tooltip; for\ninteractivity see "Interactive scatter" below.',...H.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Interactive scatter — hover + tooltip',
  render: () => <Chart data={scatterData} xKey="x" title="WebGL scatter — interactive hover (dotGLInteractive)" series={[dotGLInteractive('y', {
    color: '#6b1efd',
    size: 6,
    renderTooltip: (d: Record<string, unknown>) => <span>
              x: {Math.round(d.x as number)}, y: {Math.round(d.y as number)}
            </span>
  })]} grid={<ChartGrid horizontal vertical />} axes={axes} height={400} />
}`,...V.parameters?.docs?.source},description:{story:"GPU scatter with color-picking hover (`dotGLInteractive`) — hover any point\nfor a highlight + tooltip. O(1) hit detection regardless of point count.",...V.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={heatmapData} xKey="hour" title="Traffic heatmap" series={[heatmapGL({
    xKey: 'hour',
    yKey: 'day',
    valueKey: 'traffic',
    colorRange: ['#eff6ff', '#1e40af']
  })]} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" showAxisLine />
        </>} height={280} />
}`,...z.parameters?.docs?.source},description:{story:"GPU heatmap — a 2D grid of colored cells (traffic by hour x day).",...z.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleRef = useRef<StreamGLHandle | null>(null) as MutableRefObject<StreamGLHandle | null>;
    const WINDOW = 60;
    const [windowEnd, setWindowEnd] = useState(WINDOW);
    useEffect(() => {
      let t = 0;
      const interval = setInterval(() => {
        handleRef.current?.push(t, 50 + Math.sin(t / 10) * 30 + Math.random() * 10);
        t++;
        setWindowEnd(Math.max(WINDOW, t));
      }, 200);
      return () => clearInterval(interval);
    }, []);
    return <Chart data={[]} xKey="x" title="Live stream (streamGL)" xDomain={[Math.max(0, windowEnd - WINDOW), windowEnd]} yDomain={[0, 100]} series={[streamGL({
      handleRef,
      color: '#3b82f6'
    })]} grid={<ChartGrid />} axes={axes} height={300} />;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Streaming line via an imperative push handle + a sliding domain window.",...Y.parameters?.docs?.description}}};const ot=["Scatter","InteractiveScatter","Heatmap","Streaming"];export{z as Heatmap,V as InteractiveScatter,H as Scatter,Y as Streaming,ot as __namedExportsOrder,nt as default};
