(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(413)}])},7129:function(e,t,s){"use strict";s.d(t,{Z:function(){return y}});var r=s(5893),n=s(7294);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"text-sm",children:(0,r.jsx)("article",{className:"",children:"\xa9 2022 Amr Abdelkamel | web developer"})})})}var l=s(5021),c=s(1655),i=s(1664);function o(e){var t=e.dark,s=void 0!==t&&t,n=s?" bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent":"z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:n,children:(0,r.jsx)("h1",{className:"text-3xl font-extrabold",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(s?"text-cool":"text-primary"),children:".com"})]})})})})})}function x(){return(0,r.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"})]})}var m=s(1163),d=[{key:1,name:"Home",link:"/"},{key:2,name:"About",link:"/about"},{key:3,name:"Projects",link:"/projects"},{key:4,name:"Blog",link:"/blog"}];function h(){var e=(0,m.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"pt-[10rem] text-accent flex flex-col items-center text-2xl",children:(0,r.jsx)("ul",{className:"space-y-10",children:d.map((function(t){return(0,r.jsx)("li",{className:"hover:underline underline-offset-3 ".concat(e.pathname===t.link?"underline underline-offset-3 decoration-cool ":""),children:(0,r.jsx)(i.default,{href:t.link,children:(0,r.jsx)("a",{children:t.name})})},t.key)}))})})})}function u(){var e=(0,n.useState)(!1),t=e[0],s=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"z-100 top-0 right-0 fixed bg-secondary w-full h-full ease-out duration-200 ".concat(t?"translate-x-0":"translate-x-full"," "),children:[(0,r.jsx)(o,{dark:!0}),(0,r.jsx)(h,{}),(0,r.jsx)(c.Z,{color:"border-accent",mt:"10"}),(0,r.jsx)("section",{className:"flex justify-center",children:(0,r.jsx)(l.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent"})}),(0,r.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,r.jsx)(a,{})})]}),t?(0,r.jsxs)("button",{className:"z-100 close text-accent fixed top-0 right-0 mr-4 mt-4",onClick:function(){return s(!t)},children:[(0,r.jsx)("aside",{className:"font-semibold inline align-top text-lg underline underline-offset-3 hover:text-important",children:"Close"})," "]}):(0,r.jsx)("button",{onClick:function(){return s(!t)},className:"fixed z-10 top-0 right-0 mr-4 mt-4",children:(0,r.jsx)(x,{})})]})}var j=s(1914),p=s(6486);function f(){var e=(0,n.useContext)(j.I),t=(0,m.useRouter)(),s=(0,n.useState)(0),a=s[0],l=s[1],c=(0,n.useState)(!1),o=c[0],x=c[1],h=(0,p.debounce)((function(){var e=window.pageYOffset;x(a<e&&a-e<100||e<-10),l(e)}),70);return(0,n.useEffect)((function(){return window.addEventListener("scroll",h),function(){return window.removeEventListener("scroll",h)}}),[a,o,h]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("section",{className:"z-10 border-[0.13rem] border-t-accent bg-white block fixed inset-x-0 bottom-0 tranistion duration-100 ".concat(o?"translate-y-full":""," "),children:(0,r.jsx)("nav",{className:" py-2 text-primary font-extrabold text-xl ",children:(0,r.jsx)("ul",{className:"px-3 flex justify-around flex-row space-x-5",children:d.map((function(e,s){return(0,r.jsx)("li",{className:"py-2 w-full bg-accent rounded-full inline-block text-center ".concat(t.pathname===e.link?"text-important":""),children:(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",{className:"block text-xs hover:text-important",children:e.name})})},e.key)}))})})})})}function N(){var e=(0,m.useRouter)();return(0,r.jsx)("nav",{className:" text-important text-2xl",children:(0,r.jsx)("ul",{className:" flex flex-row space-x-5 lg:space-x-12",children:d.map((function(t){return(0,r.jsx)("li",{className:"px-4 py-2 hover:underline ".concat(e.pathname===t.link?"bg-accent px-4 py-2 rounded-lg":""),children:(0,r.jsx)(i.default,{href:t.link,children:(0,r.jsx)("a",{children:t.name})})},t.key)}))})})}function b(e){var t=e.dark,s=void 0!==t&&t,n="flex flex-row justify-between pt-3 pb-2 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ".concat(s?"bg-secondary text-accent":"z-10 bg-white border-[0.13rem] border-b-accent text-gray-600");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:n,children:[(0,r.jsx)("h1",{className:"text-3xl font-extrabold",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(s?"text-cool":"text-primary"),children:".com"})]})})}),(0,r.jsx)(N,{})]})})}function g(){return(0,r.jsxs)("footer",{className:"mt-44 px-10 py-10 flex justify-between items-center absolute bottom-1 inset-x-0 border-solid border-x-0 border-4 border-b-0 border-accent-700",children:[(0,r.jsx)(a,{}),(0,r.jsx)(l.Z,{socialNames:!1,styleSocialItems:"flex justify-center items-center space-x-10 mr-10",linkStyle:" w-6 h-6 rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]"})]})}function v(){return(0,r.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600",children:(0,r.jsx)(a,{})})}function y(e){var t=e.children,s=(0,n.useContext)(j.I);return(0,r.jsxs)("main",{className:"sm:mx-4 lg:mx-8 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600",children:[s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(u,{}),(0,r.jsx)(f,{}),(0,r.jsx)(v,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(g,{})]}),t]})}},5021:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(5893),n=s(1664),a=s(2814),l=s(1417),c=[{name:"Twitter",link:"https://twitter.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:l.mdU})},{name:"Instagram",link:"https://instagram.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:l.Zzi})},{name:"LinkedIn",link:"https://linkedin.com/in/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:l.D9H})},{name:"Github",link:"https://github.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:l.zhw})}];function i(e){var t=e.styleSocialItems,s=e.linkStyle,a=e.socialNames,l=void 0===a||a;return(0,r.jsx)("section",{className:"".concat(t||"mt-10 grid grid-cols-2 gap-7 -z-1d0"),children:c.map((function(e){return(0,r.jsx)(n.default,{href:e.link,children:(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold opacity-75 tracking-wider text-important",children:(0,r.jsxs)("div",{className:"".concat(s||"flex flex-col p-2 w-24 h-24 space-y-4 rounded-3xl hover:scale-110 hover:bg-accent"),children:[e.icon,l&&(0,r.jsx)("p",{className:"text-sm",children:e.name})]})})},e.name)}))})}},1655:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(5893);function n(e){var t=e.color,s=void 0===t?"border-secondary":t,n=e.mt,a=void 0===n?"10":n;return(0,r.jsx)("hr",{className:"border mx-5 opacity-30 ".concat(s," mt-").concat(a)})}},1774:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(5893);function n(e){var t=e.children,s=e.size;return(0,r.jsxs)("h2",{className:"pt-5 text-4xl text-primary opacity-70 hover:opacity-100 ".concat(s||"text-3xl"),children:[(0,r.jsx)("span",{className:"text-important hover:opacity-100",children:"# "}),t]})}},313:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(5893),n=s(1664);function a(e){var t=e.children,s=e.href,a=e.rel,l=void 0===a?{}:a,c=e.styles;return(0,r.jsx)("span",{className:"hover:underline text-important underline hover:text-cool ".concat(c||""),children:(0,r.jsx)(n.default,{href:s,rel:l,children:(0,r.jsx)("a",{children:t})})})}},413:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(5893),n=s(1655),a=s(313);function l(){return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-serious",children:"email: "}),(0,r.jsx)(a.Z,{href:"mailto:amromoorie@gmail.com",rel:"email",children:(0,r.jsx)("a",{className:"pl-2 text-important underline hover:text-cool",children:"amromoorie@gmail.com"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-serious",children:"telegram: "}),(0,r.jsx)(a.Z,{href:"https://telegram.me/amromoorie",rel:"telegram",children:(0,r.jsx)("a",{className:"pl-2",children:"reach me on telegram"})})]})]})}function c(e){var t=e.children;return(0,r.jsx)("div",{className:"flex flex-col items-center ",children:t})}var i=s(1774),o=s(1664),x=s(5021);function m(e){var t=e.w,s=void 0===t?200:t,n=e.h,a=void 0===n?200:n;return(0,r.jsx)("figure",{className:"",children:(0,r.jsxs)("div",{className:"ml-4 bg-accent inline-block rounded-full ",children:[(0,r.jsx)("img",{className:"rounded-full",src:"/img/amrologo.jpg",alt:"Picture of the author",width:s,height:a}),(0,r.jsx)("figcaption",{className:" hidden",children:"amromoorie"}),(0,r.jsxs)("div",{className:"text-gray-500 flex flex-col justify-center items-center",children:[(0,r.jsxs)("h1",{className:"mt-[0.2rem]",children:[(0,r.jsx)("span",{className:"text-primary font-extrabold",children:"@"})," ",(0,r.jsx)("strong",{children:"amromoorie"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{className:"mb-[1rem] text-sm",children:(0,r.jsx)("em",{children:"Hello World! \ud83d\udc4b"})})]})]})})}function d(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{children:(0,r.jsx)("section",{className:"shrink-0 space-y-3",children:(0,r.jsx)(m,{w:200,h:200})})}),(0,r.jsxs)("section",{children:[(0,r.jsx)(n.Z,{}),(0,r.jsxs)("article",{className:" mt-5",children:[(0,r.jsx)("h2",{className:"italic py-5 pr-1 text-4xl text-secondary opacity-50 text-right",children:"Nice to meet you!"}),(0,r.jsxs)("p",{className:"pl-5 pt-4 text-lg",children:["Hey, I am"," ",(0,r.jsx)("strong",{className:"text-important opacity-80",children:"Amr Abdelkamel"}),". I'm passionate about web development."]}),(0,r.jsxs)("h3",{className:"p-4 pt-5 text-lg",children:["Currently I'm seeking opportunities as an entry position web developer"," "]})]}),(0,r.jsxs)("article",{children:[(0,r.jsx)("h2",{className:"pl-2 pt-5 text-3xl text-primary",children:"more about me?"}),(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("a",{children:(0,r.jsx)("h2",{className:"pt-2 pl-4 text-2xl text-important opacity-70 underline hover:text-cool",children:"take me to about page"})})})]}),(0,r.jsxs)("article",{className:"pt-7",children:[(0,r.jsx)(i.Z,{size:"text-[1.4rem] sm:text-3xl",children:"It starts with a connection!"}),(0,r.jsx)("h3",{className:"pl-5 pt-5 text-3xl italic text-gray-500",children:"reach me out on:"})]})]}),(0,r.jsx)(c,{children:(0,r.jsx)(x.Z,{})}),(0,r.jsx)(n.Z,{}),(0,r.jsx)("section",{className:"pt-5",children:(0,r.jsx)("article",{children:(0,r.jsx)("div",{className:"pl-4 pt-5",children:(0,r.jsx)(l,{})})})}),(0,r.jsx)(n.Z,{})]})}function h(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{children:(0,r.jsxs)("article",{className:"",children:[(0,r.jsx)("h2",{className:"italic py-5 mr-[5rem] text-4xl text-secondary opacity-50 text-right",children:"Nice to meet you!"}),(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-20",children:[(0,r.jsx)(m,{}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{className:"pl-5 pt-4 text-lg",children:["Hey, I am"," ",(0,r.jsx)("strong",{className:"text-important opacity-80",children:"Amr Abdelkamel"}),". I'm passionate about web development."]}),(0,r.jsxs)("h3",{className:"p-4 pt-5 text-lg",children:["Currently I'm seeking opportunities as an entry position web developer"," ",(0,r.jsx)("span",{className:"text-important tracking-wide opacity-50 pl-2",children:"!important"})]})]})]})]})}),(0,r.jsx)(n.Z,{}),(0,r.jsxs)("section",{className:"pt-5 space-y-14 ",children:[(0,r.jsxs)("article",{children:[(0,r.jsx)("h2",{className:"pl-2 text-4xl text-primary",children:"more about me?"}),(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("a",{children:(0,r.jsx)("h2",{className:"pt-2 pl-4 text-2xl text-important underline hover:text-cool",children:"take me to about page"})})})]}),(0,r.jsxs)("article",{children:[(0,r.jsx)(i.Z,{size:"text-[1.4rem] sm:text-3xl",children:"It starts with a connection!"}),(0,r.jsx)("h3",{className:"pl-5 pt-5 text-3xl italic text-gray-500",children:"reach me out on:"}),(0,r.jsxs)("div",{className:"mb-32 pl-4 pt-5 flex justify-around",children:[(0,r.jsx)(x.Z,{styleSocialItems:"flex space-x-6",linkStyle:"flex flex-col p-2 w-24 h-24 space-y-4 rounded-3xl bg-accent hover:scale-125 hover:text-important hover:rotate-[5deg]",socialNames:!1}),(0,r.jsx)(l,{})]})]})]})]})}var u=s(7129),j=s(7294),p=s(1914);function f(){var e=(0,j.useContext)(p.I);return(0,r.jsx)(u.Z,{children:e?(0,r.jsx)(d,{}):(0,r.jsx)(h,{})})}}},function(e){e.O(0,[662,112,446,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);