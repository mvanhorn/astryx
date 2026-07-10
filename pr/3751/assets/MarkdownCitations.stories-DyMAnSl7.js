import{r,j as o,B as f}from"./iframe-fTbAoRaG.js";import{M as u}from"./Markdown-CFX4kNUb.js";import"./preload-helper-Ct5FWWRu.js";import"./CodeBlock-6tUoITXN.js";import"./useAnnounce-Bj6l8xH8.js";import"./highlightRanges-BuQ5g6yl.js";import"./SyntaxTheme-C7DpjGpD.js";import"./CheckboxListItem-PoXW8wQ6.js";import"./Field-DIgfbyL0.js";import"./FieldStatus-C7-kJ9Jg.js";import"./Tooltip-Cl2LajTE.js";import"./List-Cnx1-FPY.js";import"./ListItem-KdmCnCtd.js";import"./Item-DWER5HX6.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./CheckboxInput-BVVQZyAK.js";import"./Blockquote-DR-p1qqS.js";import"./Table-BRWrOf8q.js";import"./ContextMenu-CBdQcxSg.js";import"./renderDropdownItems-DB9NCtlD.js";import"./Divider-Ca9FMNS0.js";import"./useListFocus-BT4ffcAD.js";import"./useTypeahead-BgfiFHvu.js";import"./EmptyState-OxhVUM5t.js";import"./useStreamingText-c4-GwCkp.js";import"./Citation-BI-oS-he.js";import"./Code-Mm6U23OW.js";const X={title:"Core/MarkdownCitations",component:u,tags:["autodocs"]},m={abc1:{title:"Tokyo - Wikipedia",url:"https://en.wikipedia.org/wiki/Tokyo",icon:"https://en.wikipedia.org/favicon.ico"},def2:{title:"Japan Statistics Bureau - Population",url:"https://www.stat.go.jp/english/"},ghi3:{title:"World Population Review",url:"https://worldpopulationreview.com/world-cities/tokyo-population"},jkl4:{title:"Reuters — Tokyo GDP",url:"https://www.reuters.com/markets/",icon:"https://www.reuters.com/favicon.ico"},mno5:{title:"UN Urbanization Prospects",url:"https://population.un.org/wup/"}},x=["## Tokyo Overview","","Tokyo is the capital of Japan with a population of over 14 million[abc1].","It's the most populous metropolitan area in the world[def2][ghi3].","","### Economy","","Tokyo's GDP exceeds $1.9 trillion, making it the largest city economy globally[jkl4].","The metropolitan area is expected to remain the most populous urban agglomeration through 2035[mno5].","","### Key Facts","","- Population: 13.96 million (city proper)[abc1]","- Metro area: 37.4 million[def2]","- GDP: $1.93 trillion[jkl4]","","For more details, see the [full Wikipedia article](https://en.wikipedia.org/wiki/Tokyo)."].join(`
`),i={name:"Bracket [id]",args:{children:x,sources:m,density:"compact",headingLevelStart:3}},T=["## Search Results","","Tokyo has a population of over 14 million【abc1】.","The greater Tokyo area houses 37 million people【def2】【ghi3】.","","The city's economy is the largest in the world【jkl4】,","and urbanization trends suggest continued growth【mno5】."].join(`
`),n={name:"Fullwidth 【id】",args:{children:T,sources:m,density:"compact",headingLevelStart:3}},s={name:"No Sources (passthrough)",args:{children:`Text with [abc1] bracket markers but no sources prop.

They render as plain text.`}},v=["## AI Research Summary","","Large language models have shown remarkable capabilities in recent years[abc1].","Scaling laws suggest continued improvement with more compute[def2].","","### Key Findings","","- Models above 100B parameters show emergent abilities[ghi3]","- Fine-tuning remains critical for task-specific performance[jkl4]","- Safety alignment is an active area of research[mno5]","","These results have broad implications for the field."].join(`
`),c={name:"Streaming",render:()=>{const e=v,[a,p]=r.useState(0),[t,d]=r.useState(!0),[h,g]=r.useState(0);r.useEffect(()=>{if(!t)return;if(a>=e.length){d(!1);return}const l=Math.floor(Math.random()*8)+2,k=30+Math.random()*60,y=setTimeout(()=>{p(w=>Math.min(w+l,e.length))},k);return()=>clearTimeout(y)},[a,t,e]);const S=r.useCallback(()=>{p(0),d(!0),g(l=>l+1)},[]);return o.jsxs("div",{children:[o.jsxs("div",{style:{marginBlockEnd:12,display:"flex",gap:8,alignItems:"center"},children:[o.jsx(f,{label:"Replay",variant:"secondary",size:"sm",onClick:S,isDisabled:t}),o.jsx("span",{style:{fontSize:12,color:"#666"},children:t?`Streaming... ${a}/${e.length}`:"Complete"})]}),o.jsx(u,{isStreaming:t,density:"compact",headingLevelStart:3,sources:m,children:e.slice(0,a)},h)]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Bracket [id]',
  args: {
    children: BRACKET_MD,
    sources: SEARCH_SOURCES,
    density: 'compact',
    headingLevelStart: 3
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Fullwidth \\u3010id\\u3011',
  args: {
    children: FULLWIDTH_MD,
    sources: SEARCH_SOURCES,
    density: 'compact',
    headingLevelStart: 3
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'No Sources (passthrough)',
  args: {
    children: 'Text with [abc1] bracket markers but no sources prop.\\n\\nThey render as plain text.'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Streaming',
  render: () => {
    const text = STREAMING_CITATION_MD;
    const [charIndex, setCharIndex] = useState(0);
    const [isStreaming, setIsStreaming] = useState(true);
    const [key, setKey] = useState(0);
    useEffect(() => {
      if (!isStreaming) {
        return;
      }
      if (charIndex >= text.length) {
        setIsStreaming(false);
        return;
      }
      const chunkSize = Math.floor(Math.random() * 8) + 2;
      const delay = 30 + Math.random() * 60;
      const timer = setTimeout(() => {
        setCharIndex(prev => Math.min(prev + chunkSize, text.length));
      }, delay);
      return () => clearTimeout(timer);
    }, [charIndex, isStreaming, text]);
    const replay = useCallback(() => {
      setCharIndex(0);
      setIsStreaming(true);
      setKey(k => k + 1);
    }, []);
    return <div>
        <div style={{
        marginBlockEnd: 12,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <Button label="Replay" variant="secondary" size="sm" onClick={replay} isDisabled={isStreaming} />
          <span style={{
          fontSize: 12,
          color: '#666'
        }}>
            {isStreaming ? \`Streaming... \${charIndex}/\${text.length}\` : 'Complete'}
          </span>
        </div>
        <Markdown key={key} isStreaming={isStreaming} density="compact" headingLevelStart={3} sources={SEARCH_SOURCES}>
          {text.slice(0, charIndex)}
        </Markdown>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const Y=["BracketNotation","FullwidthNotation","NoCitations","StreamingWithCitations"];export{i as BracketNotation,n as FullwidthNotation,s as NoCitations,c as StreamingWithCitations,Y as __namedExportsOrder,X as default};
