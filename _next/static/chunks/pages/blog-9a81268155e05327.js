(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{538:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(6066)}])},3144:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(5893),s=n(7294),a=n(7737);function c(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"text-sm",children:(0,r.jsx)("article",{className:"",children:"\xa9 2022 Amr Abdelkamel | web developer"})})})}var i=n(269);function o(){return(0,r.jsxs)("footer",{className:"fixed inset-x-0 bottom-0 flex items-center justify-between border-4 border-x-0 border-b-0 border-solid border-accent bg-white px-10 py-4",children:[(0,r.jsx)(c,{}),(0,r.jsx)(i.Z,{socialNames:!1,styleSocialItems:"flex justify-center items-center space-x-10 mr-10",linkStyle:" w-6 h-6 rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]"})]})}var l=n(1664),x=n.n(l),m=n(1163),d=[{key:1,name:"Home",link:"/"},{key:2,name:"About",link:"/about"},{key:3,name:"Projects",link:"/projects"},{key:4,name:"Blog",link:"/blog"}];function u(){var e=(0,m.useRouter)().pathname;return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:" flex flex-row space-x-5 lg:space-x-12",children:d.map((function(t){return(0,r.jsx)(x(),{href:t.link,passHref:!0,children:(0,r.jsx)("li",{className:"hover:cursor-pointer px-5 py-2 hover:bg-accent hover:rounded-lg text-secondary text-2xl ".concat(e===t.link?"bg-accent rounded-lg text-important ":""),children:(0,r.jsx)("a",{"aria-label":t.name,children:t.name})})},t.key)}))})})}function h(e){var t=e.dark,n=void 0!==t&&t,s="flex flex-row justify-between pt-2 pb-1 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ".concat(n?"bg-secondary text-accent":"z-10 bg-white border-[0.13rem] border-b-accent text-gray-600");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:s,children:[(0,r.jsx)("h1",{className:"text-3xl font-extrabold pt-[0.18rem] pr-4",children:(0,r.jsx)(x(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})}),(0,r.jsx)(u,{})]})})}function f(){return(0,r.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600",children:(0,r.jsx)(c,{})})}function j(e){var t=e.dark,n=void 0!==t&&t,s=n?" bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent":"z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:s,children:(0,r.jsx)("h1",{className:"text-3xl pb-1 font-extrabold",children:(0,r.jsx)(x(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})})})})}var p=n(3841);function b(){return(0,r.jsx)("div",{className:"h-screen flex justify-center items-center",children:(0,r.jsx)(p.Z,{color:"#00798F"})})}var g=n(6128);function v(){return(0,r.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"})]})}function y(){var e=(0,m.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"pt-[10rem] text-accent flex flex-col items-center text-2xl",children:(0,r.jsx)("ul",{className:"space-y-10",children:d.map((function(t){return(0,r.jsx)("li",{className:"hover:underline underline-offset-3 ".concat(e.pathname===t.link?"underline underline-offset-3 decoration-cool ":""),children:(0,r.jsx)(x(),{href:t.link,children:(0,r.jsx)("a",{"aria-label":t.name,children:t.name})})},t.key)}))})})})}function N(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,s.useEffect)((function(){document.body.style.overflow=t?"hidden":"auto"}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"z-100 top-0 right-0 fixed bg-secondary w-full h-full ease-out duration-200 ".concat(t?"translate-x-0":"translate-x-full"," "),children:[(0,r.jsx)(j,{dark:!0}),(0,r.jsx)(y,{}),(0,r.jsx)(g.Z,{color:"border-accent",mt:"10"}),(0,r.jsx)("section",{className:"flex justify-center",children:(0,r.jsx)(i.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent"})}),(0,r.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,r.jsx)(c,{})})]}),t?(0,r.jsxs)("button",{className:"z-100 close text-accent fixed top-0 right-0 mr-4 mt-4",onClick:function(){return n(!t)},"aria-label":"close navigational menu",children:[(0,r.jsx)("aside",{className:"font-semibold inline align-top text-lg underline underline-offset-3 hover:text-important",children:"Close"})," "]}):(0,r.jsx)("button",{onClick:function(){return n(!t)},className:"fixed z-10 top-0 right-0 mr-4 mt-[1.21rem]","aria-label":"open navigational menu",children:(0,r.jsx)(v,{})})]})}var k=n(7486);function w(){var e=(0,s.useContext)(a.I),t=(0,m.useRouter)().pathname,n=(0,s.useState)(0),c=n[0],i=n[1],o=(0,s.useState)(!1),l=o[0],u=o[1],h=(0,k.Z)((function(){var e=window.pageYOffset;u(c<e&&c-e<100||e<-10),i(e)}),70);return(0,s.useEffect)((function(){return window.addEventListener("scroll",h),function(){return window.removeEventListener("scroll",h)}}),[c,l,h]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("section",{className:"z-10 border-[0.13rem] border-t-accent bg-white block fixed inset-x-0 bottom-0 tranistion duration-100 ".concat(l?"translate-y-full":""," "),children:(0,r.jsx)("nav",{className:" py-2 text-primary font-extrabold text-xl ",children:(0,r.jsx)("ul",{className:"px-3 flex justify-around flex-row space-x-5",children:d.map((function(e){return(0,r.jsx)(x(),{href:e.link,passHref:!0,children:(0,r.jsx)("li",{className:"py-2 w-full bg-accent rounded-full inline-block text-center ".concat(t===e.link?"text-important":""),children:(0,r.jsx)("a",{"aria-label":e.name,className:"block text-xs hover:text-important",children:e.name})})},e.key)}))})})})})}function F(e){var t=e.children,n=(0,s.useContext)(a.I),c=(0,s.useState)(!0),i=c[0],l=c[1];(0,s.useEffect)((function(){null!==n&&l(!1)}),[n]);return(0,r.jsx)("div",{className:"bg-white px-2 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600 selection:bg-primary selection:text-accent ... sm:mx-4 lg:grid lg:place-items-center",children:i?(0,r.jsx)(b,{}):n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(N,{}),(0,r.jsx)(w,{}),t,(0,r.jsx)(f,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsx)("div",{className:"sm:max-w-4xl",children:t}),(0,r.jsx)(o,{})]})})}},269:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),s=n(1664),a=n.n(s),c=n(2377);function i(e){var t=e.styleSocialItems,n=e.linkStyle,s=e.socialNames,i=void 0===s||s;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"".concat(t||"mt-10 grid grid-cols-2 gap-7"),children:c.U.map((function(e){return(0,r.jsx)(a(),{href:e.link,children:(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold opacity-75 tracking-wider text-important",children:(0,r.jsxs)("div",{className:"".concat(n||"flex flex-col p-2 w-24 h-24 space-y-4 rounded-3xl hover:scale-110 hover:bg-accent ... sm:w-32 sm:h-32"),children:[e.icon,i&&(0,r.jsx)("p",{className:"text-sm text-secondary opacity-100 hover:opacity-100",children:e.name})]})})},e.name)}))})})}},6128:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893);function s(e){var t=e.color,n=void 0===t?"border-secondary":t,s=e.mt,a=void 0===s?"10":s;return(0,r.jsx)("hr",{className:"border mx-5 opacity-30 ".concat(n," mt-").concat(a)})}},2377:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var r=n(5893),s=n(1417),a=n(2814),c=[{name:"Twitter",link:"https://twitter.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.mdU})},{name:"Instagram",link:"https://instagram.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.Zzi})},{name:"LinkedIn",link:"https://linkedin.com/in/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.D9H})},{name:"Github",link:"https://github.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:s.zhw})}]},5956:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),s=n(1664),a=n.n(s);function c(e){var t=e.children,n=e.href,s=e.rel,c=void 0===s?{}:s,i=e.styles;return(0,r.jsx)("span",{className:"hover:underline text-important underline hover:text-cool ".concat(i||""),children:(0,r.jsx)(a(),{href:n,rel:c,children:(0,r.jsx)("a",{"aria-label":c,target:"_blank",children:t})})})}},6066:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),s=n(9008),a=n.n(s),c=n(1163),i=n(3144),o=n(5956);function l(){var e="https://amromoorie.com"+(0,c.useRouter)().pathname;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Blog | main page"}),(0,r.jsx)("link",{rel:"canonical",href:e}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:"Sharing my inspiration in my blog. Hope you find it interesting!"},"description")]}),(0,r.jsx)(i.Z,{children:(0,r.jsxs)("div",{className:"mb-96",children:[(0,r.jsx)("h2",{className:"text-3xl text-gray-600 mx-11 my-11 ",children:"very soon - no blog available at the moment"}),(0,r.jsxs)("section",{children:[(0,r.jsx)("article",{}),(0,r.jsxs)("h2",{className:"text-3xl mx-11 mt-11 pt-20 text-center text-primary",children:["you can react me at twitter:",(0,r.jsxs)(o.Z,{rel:"twitter",href:"https://twitter.com/amromoorie",children:[" ",(0,r.jsx)("span",{children:"@amromoorie"})]})]})]})]})})]})}}},function(e){e.O(0,[112,295,774,888,179],(function(){return t=538,e(e.s=t);var t}));var t=e.O();_N_E=t}]);