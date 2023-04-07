(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{3725:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(6512)}])},3144:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(5893),a=n(7294),s=n(7737),c=n(3841);function i(){return(0,r.jsx)("div",{className:"flex h-screen items-center justify-center",children:(0,r.jsx)(c.Z,{color:"#00798F"})})}var l=n(7486),o=n(1664),x=n.n(o),m=n(1163),d=[{key:1,name:"Home",link:"/"},{key:2,name:"About",link:"/about"},{key:3,name:"Projects",link:"/projects"},{key:4,name:"Blog",link:"/blog"}];function u(){var e=(0,a.useContext)(s.I),t=(0,m.useRouter)().pathname,n=(0,a.useState)(0),c=n[0],i=n[1],o=(0,a.useState)(!1),u=o[0],f=o[1],h=(0,l.Z)((function(){var e=window.pageYOffset;f(c<e&&c-e<100||e<-10),i(e)}),70);return(0,a.useEffect)((function(){return window.addEventListener("scroll",h),function(){return window.removeEventListener("scroll",h)}}),[c,u,h]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("section",{className:"tranistion fixed inset-x-0 bottom-0 z-10 block border-[0.13rem] border-t-accent bg-white duration-100 ".concat(u&&"translate-y-full"," "),children:(0,r.jsx)("nav",{className:"py-2 text-xl font-extrabold text-secondary font-mono",children:(0,r.jsx)("ul",{className:"flex flex-row justify-around space-x-5 px-3",children:d.map((function(e){return(0,r.jsx)(x(),{href:e.link,passHref:!0,children:(0,r.jsx)("li",{className:"inline-block w-full rounded-full bg-accent py-2 text-center ".concat(t===e.link&&"text-important"),children:(0,r.jsx)("a",{"aria-label":e.name,rel:"internal",className:"block text-xs hover:text-important",children:e.name})})},e.key)}))})})})})}function f(e){var t=e.dark,n=void 0!==t&&t,a=n?" bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent":"z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:a,children:(0,r.jsx)("h1",{className:"pb-1 text-3xl font-extrabold",children:(0,r.jsx)(x(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})})})})}function h(){return(0,r.jsx)("section",{className:"text-sm",children:(0,r.jsx)("article",{className:"",children:"\xa9 2023 Amr Abdelkamel | Full-Stack Developer"})})}var p=n(269),j=n(6128);function b(){return(0,r.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"})]})}function g(){var e=(0,m.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"flex flex-col items-center pt-[10rem] text-2xl text-accent",children:(0,r.jsx)("ul",{className:"space-y-10",children:d.map((function(t){return(0,r.jsx)("li",{className:"underline-offset-3 hover:underline ".concat(e.pathname===t.link&&"underline-offset-3 underline decoration-cool"),children:(0,r.jsx)(x(),{href:t.link,children:(0,r.jsx)("a",{"aria-label":t.name,children:t.name})})},t.key)}))})})})}function v(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)((function(){document.body.style.overflow=t?"hidden":"auto"}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"fixed top-0 right-0 z-100 h-full w-full bg-secondary duration-200 ease-out ".concat(t?"translate-x-0":"translate-x-full"," "),children:[(0,r.jsx)(f,{dark:!0}),(0,r.jsx)(g,{}),(0,r.jsx)(j.Z,{color:"border-accent",mt:"10"}),(0,r.jsx)("section",{className:"flex justify-center",children:(0,r.jsx)(p.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent"})}),(0,r.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,r.jsx)(h,{})})]}),t?(0,r.jsxs)("button",{className:"close fixed top-0 right-0 z-100 mr-4 mt-4 text-accent",onClick:function(){return n(!t)},"aria-label":"close navigational menu",children:[(0,r.jsx)("aside",{className:"underline-offset-3 inline align-top text-lg font-semibold underline hover:text-important",children:"Close"})," "]}):(0,r.jsx)("button",{onClick:function(){return n(!t)},className:"fixed top-0 right-0 z-10 mr-4 mt-[1.21rem]","aria-label":"open navigational menu",children:(0,r.jsx)(b,{})})]})}function N(){return(0,r.jsxs)("footer",{className:"fixed inset-x-0 bottom-0 flex items-center justify-between border-4 border-x-0 border-b-0 border-solid border-accent bg-white px-10 pb-6 pt-2",children:[(0,r.jsx)(h,{}),(0,r.jsx)(p.Z,{socialNames:!1,styleSocialItems:"flex space-x-10",linkStyle:"w-6 h-6 rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]"})]})}function y(){var e=(0,m.useRouter)().pathname;return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"flex flex-row space-x-5 lg:space-x-12",children:d.map((function(t){return(0,r.jsx)(x(),{href:t.link,passHref:!0,children:(0,r.jsx)("li",{className:"px-5 py-2 text-2xl text-secondary hover:cursor-pointer hover:rounded-lg hover:bg-accent ".concat(e===t.link&&"rounded-lg bg-accent text-important"),children:(0,r.jsx)("a",{"aria-label":t.name,children:t.name})})},t.key)}))})})}function k(e){var t=e.dark,n=void 0!==t&&t,a="flex flex-row justify-between pt-2 pb-1 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ".concat(n?"bg-secondary text-accent":"z-10 bg-white border-[0.13rem] border-b-accent text-gray-600");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:a,children:[(0,r.jsx)("h1",{className:"pt-[0.18rem] pr-4 text-3xl font-extrabold",children:(0,r.jsx)(x(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})}),(0,r.jsx)(y,{})]})})}function w(){return(0,r.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600",children:(0,r.jsx)(h,{})})}function _(e){var t=e.children,n=(0,a.useContext)(s.I),c=(0,a.useState)(!0),l=c[0],o=c[1];(0,a.useEffect)((function(){null!==n&&o(!1)}),[n]);return(0,r.jsx)("div",{className:"relative mx-2 mt-[1.5rem] break-words bg-white px-2 py-[5rem] text-gray-600 selection:bg-primary selection:text-accent sm:mx-4 lg:grid lg:place-items-center",children:l?(0,r.jsx)(i,{}):n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(v,{}),(0,r.jsx)(u,{}),t,(0,r.jsx)(w,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{}),(0,r.jsx)("div",{className:"sm:max-w-4xl",children:t}),(0,r.jsx)(N,{})]})})}},269:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(1664),s=n.n(a),c=n(2377);function i(e){var t=e.styleSocialItems,n=e.linkStyle,a=e.socialNames,i=void 0===a||a;return(0,r.jsx)("section",{className:"".concat(t||"mt-10 grid grid-cols-2 gap-7"),children:c.U.map((function(e){return(0,r.jsx)(s(),{href:e.link,children:(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold tracking-wider text-important opacity-75","aria-label":e.ariaLabel,children:(0,r.jsxs)("div",{className:"".concat(n||"flex h-24 w-24 flex-col space-y-4 rounded-3xl p-2 hover:scale-110 hover:bg-accent sm:h-32 sm:w-32"),children:[e.icon,i&&(0,r.jsx)("p",{className:"text-sm text-secondary opacity-100 hover:opacity-100",children:e.name})]})})},e.name)}))})}},6128:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t=e.color,n=void 0===t?"border-secondary":t,a=e.mt,s=void 0===a?"10":a;return(0,r.jsx)("hr",{className:"mx-5 border opacity-30 ".concat(n," mt-").concat(s)})}},2377:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var r=n(5893),a=n(1417),s=n(2814),c=[{name:"Twitter",link:"https://twitter.com/amromoorie",icon:(0,r.jsx)(s.G,{color:"#00798F",size:"2x",icon:a.mdU}),ariaLabel:"Link to Twitter profile page"},{name:"Instagram",link:"https://instagram.com/amromoorie",icon:(0,r.jsx)(s.G,{color:"#00798F",size:"2x",icon:a.Zzi}),ariaLabel:"Link to Instagram profile page"},{name:"LinkedIn",link:"https://linkedin.com/in/amromoorie",icon:(0,r.jsx)(s.G,{color:"#00798F",size:"2x",icon:a.D9H}),ariaLabel:"Link to LinkedIn profile page"},{name:"Github",link:"https://github.com/amromoorie",icon:(0,r.jsx)(s.G,{color:"#00798F",size:"2x",icon:a.zhw}),ariaLabel:"Link to Github profile page"}]},7086:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t=e.children,n=e.styles;return(0,r.jsxs)("h2",{className:"ml-[-0.5rem] pt-5 text-4xl text-primary sm:ml-[-1rem] ".concat(n||"text-3xl"),children:[(0,r.jsx)("span",{className:"text-important hover:opacity-100",children:"# "}),t]})}},6512:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l},default:function(){return o}});var r=n(5893),a=n(9008),s=n.n(a),c=n(3144),i=n(7086),l=!0;function o(e){var t=e.content,n=e.data;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)("main",{className:"mb-16",children:[(0,r.jsx)(i.Z,{children:n.title}),(0,r.jsx)("section",{className:"pt-8",children:(0,r.jsx)("article",{dangerouslySetInnerHTML:{__html:t}})})]})})]})}}},function(e){e.O(0,[112,295,774,888,179],(function(){return t=3725,e(e.s=t);var t}));var t=e.O();_N_E=t}]);