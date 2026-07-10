import{j as e}from"./iframe-BjhKexMw.js";import{C as s,s as l,b as o,p,a as n}from"./_data-DmguEAxU.js";import{b as d}from"./bar-C66NxJ1s.js";import{r as i}from"./referenceLine-B12fGyQf.js";import{l as m}from"./line-CpFC3NVb.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-uxm_Ft1_.js";import"./band-DM5a6yxH.js";import"./array-2GBN5xbU.js";import"./ChartLegend-CsA3tiKd.js";import"./ChartSwatch-E1BLLmbC.js";import"./HStack-4sl7mDOS.js";import"./Stack-BSgsWwxE.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-432WaOR6.js";import"./VStack-DCwuJBsY.js";import"./index-BN43M30H.js";import"./index-CZ8edCes.js";import"./markColor-lIStRotv.js";import"./monotone-DS2qxjW1.js";import"./step-BjW78yy2.js";const B={title:"Charts/Reference Line",component:s},c=e.jsxs(e.Fragment,{children:[e.jsx(n,{position:"bottom"}),e.jsx(n,{position:"left"})]}),r={render:()=>e.jsx(s,{data:l,xKey:"month",title:"Sales vs target",series:[d("sales",{color:"#3b82f6"}),i({y:50,label:"Target",color:"#ef4444"})],grid:e.jsx(o,{}),axes:c,height:300})},a={render:()=>e.jsx(s,{data:l,xKey:"month",title:"Acceptable range",series:[d("sales",{color:"#3b82f6"}),i({y:40,y2:60,label:"Acceptable",color:"#22c55e",bandOpacity:.12})],grid:e.jsx(o,{}),axes:c,height:300})},t={render:()=>e.jsx(s,{data:p,xKey:"x",title:"Event marker",series:[m("mean",{color:"#3b82f6"}),i({x:10,label:"Launch",color:"#6b1efd"})],grid:e.jsx(o,{}),axes:c,height:300})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={salesData} xKey="month" title="Sales vs target" series={[bar('sales', {
    color: '#3b82f6'
  }), referenceLine({
    y: 50,
    label: 'Target',
    color: '#ef4444'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...r.parameters?.docs?.source},description:{story:"A single horizontal reference line at a fixed y value.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={salesData} xKey="month" title="Acceptable range" series={[bar('sales', {
    color: '#3b82f6'
  }), referenceLine({
    y: 40,
    y2: 60,
    label: 'Acceptable',
    color: '#22c55e',
    bandOpacity: 0.12
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...a.parameters?.docs?.source},description:{story:"A shaded band between two y values (y + y2).",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={predictionData} xKey="x" title="Event marker" series={[line('mean', {
    color: '#3b82f6'
  }), referenceLine({
    x: 10,
    label: 'Launch',
    color: '#6b1efd'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...t.parameters?.docs?.source},description:{story:"A vertical reference line at a fixed x value (linear x scale only).",...t.parameters?.docs?.description}}};const H=["Horizontal","Band","Vertical"];export{a as Band,r as Horizontal,t as Vertical,H as __namedExportsOrder,B as default};
