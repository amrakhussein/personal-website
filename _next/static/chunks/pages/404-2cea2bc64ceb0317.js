(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{8671:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(193)}])},3144:function(e,n,t){"use strict";t.d(n,{Z:function(){return F}});var r=t(5893),s=t(7294),a=t(7737),c=t(3841);function l(){return(0,r.jsx)("div",{className:"flex h-screen items-center justify-center",children:(0,r.jsx)(c.Z,{color:"#00798F"})})}var i=t(7486),o=t(1664),x=t.n(o),d=t(1163),m=[{key:1,name:"Home",link:"/"},{key:2,name:"About",link:"/about"},{key:3,name:"Projects",link:"/projects"},{key:4,name:"Blog",link:"/blog"}];function u(){var e=(0,s.useContext)(a.I),n=(0,d.useRouter)().pathname,t=(0,s.useState)(0),c=t[0],l=t[1],o=(0,s.useState)(!1),u=o[0],h=o[1],f=(0,i.Z)((function(){var e=window.pageYOffset;h(c<e&&c-e<100||e<-10),l(e)}),70);return(0,s.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[c,u,f]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("section",{className:"tranistion fixed inset-x-0 bottom-0 z-10 block border-[0.13rem] border-t-accent bg-white duration-100 ".concat(u&&"translate-y-full"," "),children:(0,r.jsx)("nav",{className:"py-2 text-xl font-extrabold text-secondary font-mono",children:(0,r.jsx)("ul",{className:"flex flex-row justify-around space-x-5 px-3",children:m.map((function(e){return(0,r.jsx)(x(),{href:e.link,passHref:!0,children:(0,r.jsx)("li",{className:"inline-block w-full rounded-full bg-accent py-2 text-center ".concat(n===e.link&&"text-important"),children:(0,r.jsx)("a",{"aria-label":e.name,rel:"internal",className:"block text-xs hover:text-important",children:e.name})})},e.key)}))})})})})}function h(e){var n=e.dark,t=void 0!==n&&n,s=t?" bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent":"z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:s,children:(0,r.jsx)("h1",{className:"pb-1 text-3xl font-extrabold",children:(0,r.jsx)(x(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(t?"text-cool":"text-primary"),children:".com"})]})})})})})}function f(){return(0,r.jsx)("section",{className:"text-sm",children:(0,r.jsx)("article",{className:"",children:"\xa9 2023 Amr Abdelkamel | Full-Stack Developer"})})}var j=t(269),p=t(6128);function b(){return(0,r.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"})]})}function v(){var e=(0,d.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"flex flex-col items-center pt-[10rem] text-2xl text-accent",children:(0,r.jsx)("ul",{className:"space-y-10",children:m.map((function(n){return(0,r.jsx)("li",{className:"underline-offset-3 hover:underline ".concat(e.pathname===n.link&&"underline-offset-3 underline decoration-cool"),children:(0,r.jsx)(x(),{href:n.link,children:(0,r.jsx)("a",{"aria-label":n.name,children:n.name})})},n.key)}))})})})}function g(){var e=(0,s.useState)(!1),n=e[0],t=e[1];return(0,s.useEffect)((function(){document.body.style.overflow=n?"hidden":"auto"}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"fixed top-0 right-0 z-100 h-full w-full bg-secondary duration-200 ease-out ".concat(n?"translate-x-0":"translate-x-full"," "),children:[(0,r.jsx)(h,{dark:!0}),(0,r.jsx)(v,{}),(0,r.jsx)(p.Z,{color:"border-accent",mt:"10"}),(0,r.jsx)("section",{className:"flex justify-center",children:(0,r.jsx)(j.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent"})}),(0,r.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,r.jsx)(f,{})})]}),n?(0,r.jsxs)("button",{className:"close fixed top-0 right-0 z-100 mr-4 mt-4 text-accent",onClick:function(){return t(!n)},"aria-label":"close navigational menu",children:[(0,r.jsx)("aside",{className:"underline-offset-3 inline align-top text-lg font-semibold underline hover:text-important",children:"Close"})," "]}):(0,r.jsx)("button",{onClick:function(){return t(!n)},className:"fixed top-0 right-0 z-10 mr-4 mt-[1.21rem]","aria-label":"open navigational menu",children:(0,r.jsx)(b,{})})]})}function N(){return(0,r.jsxs)("footer",{className:"fixed inset-x-0 bottom-0 flex items-center justify-between border-4 border-x-0 border-b-0 border-solid border-accent bg-white px-10 pb-6 pt-2",children:[(0,r.jsx)(f,{}),(0,r.jsx)(j.Z,{socialNames:!1,styleSocialItems:"flex space-x-10",linkStyle:"w-6 h-6 rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]"})]})}function y(){var e=(0,d.useRouter)().pathname;return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"flex flex-row space-x-5 lg:space-x-12",children:m.map((function(n){return(0,r.jsx)(x(),{href:n.link,passHref:!0,children:(0,r.jsx)("li",{className:"px-5 py-2 text-2xl text-secondary hover:cursor-pointer hover:rounded-lg hover:bg-accent ".concat(e===n.link&&"rounded-lg bg-accent text-important"),children:(0,r.jsx)("a",{"aria-label":n.name,children:n.name})})},n.key)}))})})}function k(e){var n=e.dark,t=void 0!==n&&n,s="flex flex-row justify-between pt-2 pb-1 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ".concat(t?"bg-secondary text-accent":"z-10 bg-white border-[0.13rem] border-b-accent text-gray-600");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:s,children:[(0,r.jsx)("h1",{className:"pt-[0.18rem] pr-4 text-3xl font-extrabold",children:(0,r.jsx)(x(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(t?"text-cool":"text-primary"),children:".com"})]})})}),(0,r.jsx)(y,{})]})})}function w(){return(0,r.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600",children:(0,r.jsx)(f,{})})}function F(e){var n=e.children,t=(0,s.useContext)(a.I),c=(0,s.useState)(!0),i=c[0],o=c[1];(0,s.useEffect)((function(){null!==t&&o(!1)}),[t]);return(0,r.jsx)("div",{className:"relative mx-2 mt-[1.5rem] break-words bg-white px-2 py-[5rem] text-gray-600 selection:bg-primary selection:text-accent sm:mx-4 lg:grid lg:place-items-center",children:i?(0,r.jsx)(l,{}):t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsx)(g,{}),(0,r.jsx)(u,{}),n,(0,r.jsx)(w,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{}),(0,r.jsx)("div",{className:"sm:max-w-4xl",children:n}),(0,r.jsx)(N,{})]})})}},269:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(1664),a=t.n(s),c=t(2377);function l(e){var n=e.styleSocialItems,t=e.linkStyle,s=e.socialNames,l=void 0===s||s;return(0,r.jsx)("section",{className:"".concat(n||"mt-10 grid grid-cols-2 gap-7"),children:c.U.map((function(e){return(0,r.jsx)(a(),{href:e.link,children:(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold tracking-wider text-important opacity-75",children:(0,r.jsxs)("div",{className:"".concat(t||"flex h-24 w-24 flex-col space-y-4 rounded-3xl p-2 hover:scale-110 hover:bg-accent sm:h-32 sm:w-32"),children:[e.icon,l&&(0,r.jsx)("p",{className:"text-sm text-secondary opacity-100 hover:opacity-100",children:e.name})]})})},e.name)}))})}},6128:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893);function s(e){var n=e.color,t=void 0===n?"border-secondary":n,s=e.mt,a=void 0===s?"10":s;return(0,r.jsx)("hr",{className:"mx-5 border opacity-30 ".concat(t," mt-").concat(a)})}},2377:function(e,n,t){"use strict";t.d(n,{U:function(){return c}});var r=t(5893),s=t(1417),a=t(2814),c=[{name:"Twitter",link:"https://twitter.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.mdU})},{name:"Instagram",link:"https://instagram.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.Zzi})},{name:"LinkedIn",link:"https://linkedin.com/in/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.D9H})},{name:"Github",link:"https://github.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.zhw})}]},5956:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(1664),a=t.n(s);function c(e){var n=e.children,t=e.href,s=e.rel,c=void 0===s?{}:s,l=e.styles;return(0,r.jsx)("span",{className:"text-important underline hover:text-cool hover:underline ".concat(l||""),children:(0,r.jsx)(a(),{href:t,rel:c,children:(0,r.jsx)("a",{"aria-label":c,target:"_blank",children:n})})})}},193:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),s=t(3144),a=t(5956);function c(){return(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center pt-44 pb-96",children:[(0,r.jsx)("h1",{className:"py-10",children:"404 - Page Not Found"}),(0,r.jsx)(a.Z,{href:"/",styles:"ml-5 text-3xl underline italic font-mono tracking-widest",children:"take me home"})]})})}}},function(e){e.O(0,[112,295,774,888,179],(function(){return n=8671,e(e.s=n);var n}));var n=e.O();_N_E=n}]);