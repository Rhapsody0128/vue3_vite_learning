import{r as e,o as t,c as o,a as n,t as s,u as r,F as a,w as u,b as l,d as c,e as i,f as m,g as d,h as p}from"./vendor.01ef7c5a.js";const h={props:{msg:{type:String,default:""}},setup(u){const l=e({count:0});return(e,c)=>(t(),o(a,null,[n("h1",null,s(u.msg),1),n("button",{type:"button",onClick:c[1]||(c[1]=e=>r(l).count++)}," count is: "+s(r(l).count),1)],64))},__scopeId:"data-v-597ccb38"};const f=n("img",{src:"./assets/logo.03d6d6da.png"},null,-1),g=c("Home | "),_=c(" About");const b={data:()=>({name:"None"}),mounted(){console.log("在後面"),this.name=this.$store.state.name}},v=Object.assign(b,{setup:function(e){return console.log("在script setup內的會在mounted之前被讀取"),(e,r)=>{const c=l("router-link"),i=l("router-view");return t(),o(a,null,[f,n(h,{msg:"selfComponent"}),n("p",null,"Store.Name = "+s(e.name),1),n(c,{to:"/"},{default:u((()=>[g])),_:1}),n(c,{to:"/about"},{default:u((()=>[_])),_:1}),n(i)],64)}}});let E;const y={},A=function(e,t){if(!t||0===t.length)return e();if(void 0===E){const e=document.createElement("link").relList;E=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in y)return;y[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":E,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},k=[{path:"/",name:"Home",component:()=>A((()=>import("./Home.b0e94093.js")),["assets/Home.b0e94093.js","assets/vendor.01ef7c5a.js"])},{path:"/about",name:"About",component:()=>A((()=>import("./About.14370439.js")),["assets/About.14370439.js","assets/vendor.01ef7c5a.js"])}],L=i({history:m(),routes:k});var j=d({state:{name:"Gary",Age:27},mutations:{},actions:{},modules:{}});const O=p(v);O.use(L),O.use(j),O.mount("#app");
