import{p as w,r as i,j as a,a as e,L as v,b as y,c as b,d as S}from"./main.2be1b207.js";import{G as _,d as D,H as C,a as k,b as L}from"./utils.9f03f89a.js";import{S as g,R as j}from"./selects.5d291e59.js";function f(s){return _({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 20h2V8h3L8 4 4 8h3zm13-4h-3V4h-2v12h-3l4 4z"}}]})(s)}const x=({device:s})=>{var c;const[d,m]=i.exports.useState("https://via.placeholder.com/150"),[n,h]=i.exports.useState([]);return i.exports.useEffect(()=>{const r=JSON.parse(s.device_info.tag_list);h(r);for(const l in g)g[l].keywords.some(p=>r.includes(p))&&m(g[l].image)},[s.device_info.tag_list]),a("div",{className:"device-item status-empty",children:[a("div",{className:"device-info",children:[e("img",{src:d,alt:s?s.auto_name:"Unknown Device",className:"hidden w-auto h-12 lg:block md:h-16"}),a("div",{className:"px-4",children:[e("h3",{children:((c=s==null?void 0:s.device_info)==null?void 0:c.device_name)||(s==null?void 0:s.auto_name)||"Unknown Device"}),a("p",{className:"text-xs",children:[s&&s.ip,e("br",{}),s&&s.mac]})]})]}),e("div",{className:"device-tags",children:n.map(r=>e("div",{className:"tag",children:r},r))}),a("div",{className:"device-details",children:[s&&e("div",{className:"flex items-center justify-center px-4 text-sm border-r border-gray-300 w-fit",children:D(s.outbound_byte_count)}),e("div",{className:"flex items-center justify-center px-4 text-sm w-fit",children:e(v,{to:`/device-activity?deviceid=${s.device_id}`,className:"",children:"Details"})})]})]})};x.propTypes={tags:w.exports.array};const T=()=>{var u;const{devicesData:s,devicesDataLoading:d,sortDevicesData:m,error:n}=y(),{showError:h}=b(),[c,r]=i.exports.useState(""),[l,p]=i.exports.useState("ASC"),[o,N]=i.exports.useState(!1);return i.exports.useEffect(()=>{n&&h(n.message)},[n]),a("section",{className:"bg-gray-50 flex-flex-col-gap-4",id:"inspecting-devices",children:[a("div",{className:"flex items-center w-full gap-4 md:gap-5",children:[a("div",{className:"",children:[e("h2",{className:"h1",children:"Inspecting Devices"}),e("p",{className:"py-2",children:"Naming & tagging helps with our research"})]}),e("div",{className:"w-8 h-8 md:w-10 md:h-10 animate-spin-slow",children:e(j,{})})]}),a("div",{className:"grid grid-cols-4 gap-4 py-4 md:flex md:items-center",children:[a("form",{className:"flex flex-1 order-last col-span-4 md:order-first",children:[e("input",{type:"text",name:"search",id:"searchDevices",value:c,onChange:t=>r(t.target.value),className:"w-full px-4 py-2 text-gray-600 bg-white border border-gray-400 rounded-md",placeholder:"Search devices by name or tag"}),a("label",{htmlFor:"searchDevices",className:"sr-only",children:[e(C,{}),"Search devices by name or tag"]})]}),a("button",{className:"flex items-center justify-center gap-1 p-2 text-sm",children:["Name",e(f,{className:"w-4 h-4 text-gray-400"})]}),a("button",{className:"flex items-center justify-center gap-1 p-2 text-sm",onClick:()=>{p(l==="ASC"?"DESC":"ASC"),m("outbound_byte_count",l)},children:["Traffic",e(f,{className:"w-4 h-4 text-gray-400"})]}),e("div",{className:"flex items-center justify-center gap-3 px-2",children:e(S,{checked:o,onChange:N,children:a("span",{className:"flex",children:[e(k,{className:`${o?"text-white rounded-lg bg-secondary":"text-dark"} w-10 h-10 md:w-8 md:h-8 p-1 `}),e(L,{className:`${o?"text-dark":"text-white rounded-lg bg-secondary"} w-10 h-10 md:w-8 md:h-8 p-1 `})]})})})]}),d?e("div",{className:"skeleton h-[600px]"}):e("ul",{className:o?"card-grid":"min-h-[200px]",children:(u=s==null?void 0:s.devices)==null?void 0:u.filter(t=>{if(!c||t.auto_name.toLowerCase().includes(c.toLowerCase()))return!0}).map(t=>e("div",{children:t.device_info.is_inspected==1&&e("li",{className:`${o?"card-view":"list-view"} py-2`,children:e(x,{device:t})},t.device_id)},t.device_id))})]})};export{T as I};
