import{ag as a,a0 as Q}from"./iframe-DLBv-YrI.js";import{u as X,i as Z}from"./ChartAxis-COPBvF-Q.js";import{h as $,m as K,a as tt,g as et,c as nt,s as rt}from"./webgl-B2CDFegl.js";import{b as ot}from"./band-B4lqwueb.js";const st=`
  attribute vec2 a_position;
  attribute vec3 a_color;
  uniform vec2 u_resolution;
  varying vec3 v_color;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_color = a_color;
  }
`,it=`
  precision mediump float;
  varying vec3 v_color;
  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
`;function at(e,l){const c=Math.max(0,Math.min(1,l));if(e.length===1)return e[0];const p=c*(e.length-1),r=Math.floor(p),m=Math.min(r+1,e.length-1),o=p-r;return[e[r][0]+o*(e[m][0]-e[r][0]),e[r][1]+o*(e[m][1]-e[r][1]),e[r][2]+o*(e[m][2]-e[r][2])]}function ct({xKey:e,yKey:l,valueKey:c,colorRange:p,domain:r,cellGap:m=1}){const{data:o,xScale:d,width:u,height:s}=X(),g=a.useRef(null),v=a.useRef(null),h=a.useRef(null),T=a.useRef(null),F=a.useMemo(()=>p.map($),[p]),A=a.useMemo(()=>{const n=[...new Set(o.map(t=>String(t[l])))];return ot().domain(n).range([0,s]).padding(.05)},[o,l,s]),S=a.useMemo(()=>{if(r)return r;let n=1/0,t=-1/0;for(const f of o){const i=f[c];typeof i=="number"&&(i<n&&(n=i),i>t&&(t=i))}return[n,t]},[o,c,r]);return a.useEffect(()=>{const n=T.current;if(n)return g.current||(g.current=document.createElement("canvas")),K(n,g.current,u,s)},[u,s]),a.useEffect(()=>{const n=g.current;if(!n||u<=0||s<=0||!Z(d))return;tt(n,u,s),v.current||(v.current=et(n));const t=v.current;if(!t)return;h.current||(h.current=nt(t,st,it));const f=h.current;if(!f)return;t.viewport(0,0,n.width,n.height),rt(t),t.useProgram(f);const i=[],w=[],[C,O]=S,j=O-C||1,b=m,E=d.bandwidth(),k=A.bandwidth(),L=typeof d.step=="function"?d.step():E,M=A.step();for(const R of o){const U=d(String(R[e])),W=A(String(R[l]));if(U==null||W==null)continue;const H=((typeof R[c]=="number"?R[c]:0)-C)/j,[N,z,J]=at(F,H),D=U+E/2,P=W+k/2,_=D-L/2+b/2,x=D+L/2-b/2,y=P-M/2+b/2,B=P+M/2-b/2;i.push(_,y,x,y,_,B,x,y,x,B,_,B);for(let Y=0;Y<6;Y++)w.push(N,z,J)}const G=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,G),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const V=t.getAttribLocation(f,"a_position");t.enableVertexAttribArray(V),t.vertexAttribPointer(V,2,t.FLOAT,!1,0,0);const q=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,q),t.bufferData(t.ARRAY_BUFFER,new Float32Array(w),t.STATIC_DRAW);const I=t.getAttribLocation(f,"a_color");t.enableVertexAttribArray(I),t.vertexAttribPointer(I,3,t.FLOAT,!1,0,0),t.uniform2f(t.getUniformLocation(f,"u_resolution"),u,s),t.drawArrays(t.TRIANGLES,0,i.length/2),t.deleteBuffer(G),t.deleteBuffer(q)},[o,e,l,c,d,A,u,s,S,F,m]),u<=0||s<=0?null:Q.jsx("g",{ref:T})}ct.__docgenInfo={description:"",methods:[],displayName:"ChartHeatmapGL",props:{xKey:{required:!0,tsType:{name:"string"},description:""},yKey:{required:!0,tsType:{name:"string"},description:""},valueKey:{required:!0,tsType:{name:"string"},description:""},colorRange:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},domain:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:""},cellGap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};export{ct as C};
