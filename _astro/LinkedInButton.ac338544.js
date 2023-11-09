import{j as e}from"./jsx-runtime.6940b965.js";import{r as l}from"./index.070054a4.js";import{a as v,T as j}from"./jwt.5556697d.js";import{a as u}from"./http.3e3d4bea.js";import{S as R}from"./Spinner.799b0955.js";function L(h){const{className:o}=h;return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:o,x:"0px",y:"0px",width:"100",height:"100",viewBox:"0,0,256,256",children:e.jsx("g",{transform:"translate(-26.66667,-26.66667) scale(1.20833,1.20833)",children:e.jsx("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"},children:e.jsxs("g",{transform:"scale(5.33333,5.33333)",children:[e.jsx("path",{d:"M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z",fill:"#0288d1"}),e.jsx("path",{d:"M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z",fill:"#ffffff"})]})})})})}const d="linkedInRedirectAt",m="linkedInLastPage";function M(h){const[o,n]=l.useState(!1),[f,r]=l.useState("");l.useEffect(()=>{const t=new URLSearchParams(window.location.search),a=t.get("code"),i=t.get("state"),I=t.get("provider");!a||!i||I!=="linkedin"||(n(!0),u(`https://api.roadmap.sh/v1-linkedin-callback${window.location.search}`).then(({response:s,error:k})=>{if(!s?.token){r(k?.message||"Something went wrong."),n(!1);return}let c="/";const g=localStorage.getItem(d),p=localStorage.getItem(m);if(g&&p){const S=parseInt(g,10);Date.now()-S<30*1e3&&(c=p)}const w=localStorage.getItem("authRedirect");w&&(localStorage.removeItem("authRedirect"),c=w),localStorage.removeItem(d),localStorage.removeItem(m),v.set(j,s.token,{path:"/",expires:30,domain:".roadmap.sh"}),window.location.href=c}).catch(s=>{r("Something went wrong. Please try again later."),n(!1)}))},[]);const x=()=>{n(!0),u("https://api.roadmap.sh/v1-linkedin-login").then(({response:t,error:a})=>{if(!t?.loginUrl){r(a?.message||"Something went wrong."),n(!1);return}if(!["/login","/signup"].includes(window.location.pathname)){const i=["/respond-invite","/befriend"].includes(window.location.pathname)?window.location.pathname+window.location.search:window.location.pathname;localStorage.setItem(d,Date.now().toString()),localStorage.setItem(m,i)}window.location.href=t.loginUrl}).catch(t=>{r("Something went wrong. Please try again later."),n(!1)})};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:o,onClick:x,children:[o?e.jsx(R,{className:"h-[18px] w-[18px]",isDualRing:!1}):e.jsx(L,{className:"h-[18px] w-[18px]"}),"Continue with LinkedIn"]}),f&&e.jsx("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:f})]})}export{M as LinkedInButton};
