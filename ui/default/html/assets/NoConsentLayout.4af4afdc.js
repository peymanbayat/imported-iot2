import{j as e,a,r as s,L as c,F as d}from"./main.2be1b207.js";import{u as h}from"./useUserConfigs.1a3d1d00.js";const p=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"30px",height:"30px",viewBox:"0 0 155.373 152.224",children:[a("defs",{children:a("clipPath",{id:"a",children:a("rect",{width:"155.373",height:"152.224",fill:"none"})})}),e("g",{clipPath:"url(#a)",children:[a("path",{d:"M96.078,27.865l-.053.055-7.757,7.986-.156.16-4.565,4.7L41.785,83.758a34.065,34.065,0,0,0,8.908,1.19c.561,0,1.131-.013,1.693-.04a5.388,5.388,0,0,0,3.6-1.628L84.873,53.546l5.866-6.039.176-.182.1-.1a7.191,7.191,0,0,1,10.278-.038l44.226,44.846v38.933h-12.03v11.4H47.529v-41.02a50.5,50.5,0,0,1-9.856-1.58v52.456h117.7V87.991Z",fill:"#00d17a"}),a("path",{d:"M145.153,131.464a10.174,10.174,0,0,0-3.668-7.739L90.9,81.645a50.359,50.359,0,0,0,10.4-34.426l-.014-.032a7.191,7.191,0,0,0-10.278.039l-.1.1A40.293,40.293,0,0,1,52.679,90.969q-1,.049-1.986.048c-.722,0-1.864-.109-2.58-.162a38.471,38.471,0,0,1-10.3-2.044A40.216,40.216,0,0,1,24.685,19.878,40.323,40.323,0,0,1,88.268,35.906l7.757-7.986a50.794,50.794,0,1,0-48.5,73.428c1.166.071,2.335.116,3.512.106q1.239-.009,2.487-.079a50.325,50.325,0,0,0,30-11.973l43.745,49.254a10.236,10.236,0,0,0,17.887-6.834Z",fill:"#08103f"})]})]}),u="https://adroit-parsnip.cloudvent.net/",v=t=>{const[r,n]=s.exports.useState(!0),[o,l]=s.exports.useState({});return s.exports.useEffect(()=>{(async()=>{n(!0);const i=await(await fetch(`${u}${t}`)).json();l(i),n(!1)})()},[]),{data:o,loading:r}},f=()=>(h(),a("header",{className:"header",children:a("nav",{className:"primary-nav",children:a("div",{className:"flex justify-between p-6 grow md:px-8 lg:px-12",children:e(c,{to:"/",className:"flex gap-2 font-semibold h2 text-dark",children:[a(p,{})," Home Data Inspector"]})})})})),L=({children:t})=>e(d,{children:[a(f,{}),t]});export{L as D,p as L,v as u};