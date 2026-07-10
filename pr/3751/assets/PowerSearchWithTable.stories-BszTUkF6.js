import{r as d,j as r}from"./iframe-fTbAoRaG.js";import{P as u}from"./PowerSearch-CrTulyR5.js";import{u as m}from"./usePowerSearchConfig-vM2otoPD.js";import{T as h,p,a as c}from"./Table-BRWrOf8q.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-DfOv-Ttx.js";import"./BaseTypeahead-BhmfFLBY.js";import"./usePopover-Dw5UOT5L.js";import"./useFocusTrap-D4fjNLsR.js";import"./useAnnounce-Bj6l8xH8.js";import"./TypeaheadItem-C-PjqnIG.js";import"./getKey-DyRdrWhf.js";import"./Field-DIgfbyL0.js";import"./FieldStatus-C7-kJ9Jg.js";import"./Tooltip-Cl2LajTE.js";import"./inputStyles.stylex-OM0rSR3n.js";import"./InputClearButton-Bx1VugoL.js";import"./Token-DK7YK5yz.js";import"./useInteractiveRole-obmXvUaV.js";import"./OverflowList-Boqkkw6Z.js";import"./Avatar-BPwxkjF2.js";import"./Selector-CgKasjNb.js";import"./Divider-Ca9FMNS0.js";import"./utils-Dg8Th5AK.js";import"./hooks-Ebop4kQR.js";import"./Item-DWER5HX6.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./InputGroupContext-D2QWITWb.js";import"./TreeList-dhouUrqB.js";import"./TextInput-B2W-xf_z.js";import"./useInputContainer-DNzoGWdk.js";import"./NumberInput-CBUz04iW.js";import"./DateInput-OES9EMj3.js";import"./Calendar-vWVuE3z4.js";import"./plainDate-Dtf9zn3F.js";import"./dateParser-CVRMT8Ie.js";import"./TimeInput-Ckax4rcD.js";import"./timeParser-GgXRFdxl.js";import"./Typeahead-DLpXVdq9.js";import"./VStack-CQU9ufmy.js";import"./Stack-Bw5wycGv.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-432WaOR6.js";import"./HStack-f-aVOzdn.js";import"./ContextMenu-CBdQcxSg.js";import"./renderDropdownItems-DB9NCtlD.js";import"./useListFocus-BT4ffcAD.js";import"./useTypeahead-BgfiFHvu.js";import"./EmptyState-OxhVUM5t.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:p(2)},{key:"author",header:"Author",width:p(2)},{key:"year",header:"Year",width:c(100)},{key:"genre",header:"Genre",width:c(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],he={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const ye=["Default","WithPresetFilters"];export{o as Default,a as WithPresetFilters,ye as __namedExportsOrder,he as default};
