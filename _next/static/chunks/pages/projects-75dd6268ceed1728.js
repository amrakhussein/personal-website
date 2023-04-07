(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{1592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(6887)}])},3144:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(5893),i=n(7294),a=n(7737),s=n(3841);function o(){return(0,r.jsx)("div",{className:"flex h-screen items-center justify-center",children:(0,r.jsx)(s.Z,{color:"#00798F"})})}var l=n(7486),c=n(1664),d=n.n(c),m=n(1163),u=[{key:1,name:"Home",link:"/"},{key:2,name:"About",link:"/about"},{key:3,name:"Projects",link:"/projects"},{key:4,name:"Blog",link:"/blog"}];function x(){var e=(0,i.useContext)(a.I),t=(0,m.useRouter)().pathname,n=(0,i.useState)(0),s=n[0],o=n[1],c=(0,i.useState)(!1),x=c[0],h=c[1],p=(0,l.Z)((function(){var e=window.pageYOffset;h(s<e&&s-e<100||e<-10),o(e)}),70);return(0,i.useEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[s,x,p]),(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)("section",{className:"tranistion fixed inset-x-0 bottom-0 z-10 block border-[0.13rem] border-t-accent bg-white duration-100 ".concat(x&&"translate-y-full"," "),children:(0,r.jsx)("nav",{className:"py-2 text-xl font-extrabold text-secondary font-mono",children:(0,r.jsx)("ul",{className:"flex flex-row justify-around space-x-5 px-3",children:u.map((function(e){return(0,r.jsx)(d(),{href:e.link,passHref:!0,children:(0,r.jsx)("li",{className:"inline-block w-full rounded-full bg-accent py-2 text-center ".concat(t===e.link&&"text-important"),children:(0,r.jsx)("a",{"aria-label":e.name,rel:"internal",className:"block text-xs hover:text-important",children:e.name})})},e.key)}))})})})})}function h(e){var t=e.dark,n=void 0!==t&&t,i=n?" bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent":"z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:i,children:(0,r.jsx)("h1",{className:"pb-1 text-3xl font-extrabold",children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})})})})}function p(){return(0,r.jsx)("section",{className:"text-sm",children:(0,r.jsx)("article",{className:"",children:"\xa9 2023 Amr Abdelkamel | Full-Stack Developer"})})}var f=n(269),j=n(6128);function g(){return(0,r.jsxs)("div",{className:"menu-icon space-y-1",children:[(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"}),(0,r.jsx)("span",{className:"line"})]})}function b(){var e=(0,m.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"flex flex-col items-center pt-[10rem] text-2xl text-accent",children:(0,r.jsx)("ul",{className:"space-y-10",children:u.map((function(t){return(0,r.jsx)("li",{className:"underline-offset-3 hover:underline ".concat(e.pathname===t.link&&"underline-offset-3 underline decoration-cool"),children:(0,r.jsx)(d(),{href:t.link,children:(0,r.jsx)("a",{"aria-label":t.name,children:t.name})})},t.key)}))})})})}function v(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return(0,i.useEffect)((function(){document.body.style.overflow=t?"hidden":"auto"}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"fixed top-0 right-0 z-100 h-full w-full bg-secondary duration-200 ease-out ".concat(t?"translate-x-0":"translate-x-full"," "),children:[(0,r.jsx)(h,{dark:!0}),(0,r.jsx)(b,{}),(0,r.jsx)(j.Z,{color:"border-accent",mt:"10"}),(0,r.jsx)("section",{className:"flex justify-center",children:(0,r.jsx)(f.Z,{styleSocialItems:"flex space-x-8 pt-7",socialNames:!1,linkStyle:"w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent"})}),(0,r.jsx)("section",{className:"absolute bottom-1 left-1 text-accent",children:(0,r.jsx)(p,{})})]}),t?(0,r.jsxs)("button",{className:"close fixed top-0 right-0 z-100 mr-4 mt-4 text-accent",onClick:function(){return n(!t)},"aria-label":"close navigational menu",children:[(0,r.jsx)("aside",{className:"underline-offset-3 inline align-top text-lg font-semibold underline hover:text-important",children:"Close"})," "]}):(0,r.jsx)("button",{onClick:function(){return n(!t)},className:"fixed top-0 right-0 z-10 mr-4 mt-[1.21rem]","aria-label":"open navigational menu",children:(0,r.jsx)(g,{})})]})}function y(){return(0,r.jsxs)("footer",{className:"fixed inset-x-0 bottom-0 flex items-center justify-between border-4 border-x-0 border-b-0 border-solid border-accent bg-white px-10 pb-6 pt-2",children:[(0,r.jsx)(p,{}),(0,r.jsx)(f.Z,{socialNames:!1,styleSocialItems:"flex space-x-10",linkStyle:"w-6 h-6 rounded-full hover:scale-125 hover:text-important hover:rotate-[5deg]"})]})}function N(){var e=(0,m.useRouter)().pathname;return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:"flex flex-row space-x-5 lg:space-x-12",children:u.map((function(t){return(0,r.jsx)(d(),{href:t.link,passHref:!0,children:(0,r.jsx)("li",{className:"px-5 py-2 text-2xl text-secondary hover:cursor-pointer hover:rounded-lg hover:bg-accent ".concat(e===t.link&&"rounded-lg bg-accent text-important"),children:(0,r.jsx)("a",{"aria-label":t.name,children:t.name})})},t.key)}))})})}function k(e){var t=e.dark,n=void 0!==t&&t,i="flex flex-row justify-between pt-2 pb-1 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ".concat(n?"bg-secondary text-accent":"z-10 bg-white border-[0.13rem] border-b-accent text-gray-600");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:i,children:[(0,r.jsx)("h1",{className:"pt-[0.18rem] pr-4 text-3xl font-extrabold",children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:"",children:"amromoorie"}),(0,r.jsx)("span",{className:" ".concat(n?"text-cool":"text-primary"),children:".com"})]})})}),(0,r.jsx)(N,{})]})})}function w(){return(0,r.jsx)("footer",{className:"absolute bottom-1 left-1 text-gray-600",children:(0,r.jsx)(p,{})})}function _(e){var t=e.children,n=(0,i.useContext)(a.I),s=(0,i.useState)(!0),l=s[0],c=s[1];(0,i.useEffect)((function(){null!==n&&c(!1)}),[n]);return(0,r.jsx)("div",{className:"relative mx-2 mt-[1.5rem] break-words bg-white px-2 py-[5rem] text-gray-600 selection:bg-primary selection:text-accent sm:mx-4 lg:grid lg:place-items-center",children:l?(0,r.jsx)(o,{}):n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsx)(v,{}),(0,r.jsx)(x,{}),t,(0,r.jsx)(w,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{}),(0,r.jsx)("div",{className:"sm:max-w-4xl",children:t}),(0,r.jsx)(y,{})]})})}},269:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(1664),a=n.n(i),s=n(2377);function o(e){var t=e.styleSocialItems,n=e.linkStyle,i=e.socialNames,o=void 0===i||i;return(0,r.jsx)("section",{className:"".concat(t||"mt-10 grid grid-cols-2 gap-7"),children:s.U.map((function(e){return(0,r.jsx)(a(),{href:e.link,children:(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",className:"2xl pt-1 text-center font-semibold tracking-wider text-important opacity-75","aria-label":e.ariaLabel,children:(0,r.jsxs)("div",{className:"".concat(n||"flex h-24 w-24 flex-col space-y-4 rounded-3xl p-2 hover:scale-110 hover:bg-accent sm:h-32 sm:w-32"),children:[e.icon,o&&(0,r.jsx)("p",{className:"text-sm text-secondary opacity-100 hover:opacity-100",children:e.name})]})})},e.name)}))})}},6128:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.color,n=void 0===t?"border-secondary":t,i=e.mt,a=void 0===i?"10":i;return(0,r.jsx)("hr",{className:"mx-5 border opacity-30 ".concat(n," mt-").concat(a)})}},2377:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(5893),i=n(1417),a=n(2814),s=[{name:"Twitter",link:"https://twitter.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.mdU}),ariaLabel:"Link to Twitter profile page"},{name:"Instagram",link:"https://instagram.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.Zzi}),ariaLabel:"Link to Instagram profile page"},{name:"LinkedIn",link:"https://linkedin.com/in/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.D9H}),ariaLabel:"Link to LinkedIn profile page"},{name:"Github",link:"https://github.com/amromoorie",icon:(0,r.jsx)(a.G,{color:"#00798F",size:"2x",icon:i.zhw}),ariaLabel:"Link to Github profile page"}]},7086:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.children,n=e.styles;return(0,r.jsxs)("h2",{className:"ml-[-0.5rem] pt-5 text-4xl text-primary sm:ml-[-1rem] ".concat(n||"text-3xl"),children:[(0,r.jsx)("span",{className:"text-important hover:opacity-100",children:"# "}),t]})}},5956:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(1664),a=n.n(i);function s(e){var t=e.children,n=e.href,i=e.rel,s=void 0===i?{}:i,o=e.styles;return(0,r.jsx)("span",{className:"text-important underline hover:text-cool hover:underline ".concat(o||""),children:(0,r.jsx)(a(),{href:n,rel:s,children:(0,r.jsx)("a",{"aria-label":s,target:"_blank",children:t})})})}},6887:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),i=n(9008),a=n.n(i),s=n(1163),o=n(3144),l=n(5956),c=[{id:1,url_live:"https://amromoorie.github.io/apple-varieties/",url_repo:"https://github.com/amromoorie/apple-varieties",name:"Apple Varieties",description:"fully responsive landing page up to XL screens made with Tailwind",features:null,technologies:["React","Tailwind","Nodejs","Cheerio"],notes:"project was originally meant for experimenting with web scraping with puppeteer & cheerio but ended with a nice design work! based on a real article",isFeatured:!0},{id:2,url_live:"https://amromoorie.github.io/taskify-mantine/",url_repo:"https://github.com/amromoorie/taskify-mantine",name:"Taskify",description:"a todo app to experiment with mantine styling lib",features:["add, delete, mark complete, filter out completed & show total number of todos","todos has titles with content","data saved in browser local storage"],imgs:"",technologies:["TypeScript","React","Mantine","react-hook-form"],notes:"",isFeatured:!0},{id:3,url_live:"https://amromoorie.github.io/Fido/",url_repo:"https://github.com/amromoorie/Fido",name:"Fido",description:"fido is a collection of dogs images using the dog api; the aim for this project is to experiment with pagination & modern redux toolkitt",features:["pagination to different pages; enables users to specify a limit per page"],imgs:"",technologies:["React","Redux","TailwindCSS"],notes:"",isFeatured:!0},{id:4,url_live:"",url_repo:"https://github.com/amromoorie/average-world-temperature.VanillaJS",name:"Historical Zonal annual Means",description:"simple project working with chartJS tool, transforming csv data (global weather info) into tabulating data which can be visualized",features:null,imgs:"",technologies:["VanillaJS","ChartJS","Webpack"],notes:"",isFeatured:!1},{id:5,url_live:"",url_repo:"https://github.com/amromoorie/banking-system",name:"Backend Banking System",description:"simple banking app made with mongodb and nodeJS",features:null,imgs:"",technologies:null,notes:"",isFeatured:!1},{id:6,url_live:"",url_repo:"https://github.com/amromoorie/blog",name:"Simple Blog With Sanity",description:"project orginally developed for exploring strapi as a content first class model",features:null,imgs:"",technologies:["React","NextJS","Strapi","Groq","TailwindCSS"],notes:"",isFeatured:!1},{id:7,url_live:"",url_repo:"https://github.com/amromoorie/Article-Sentiment-Analysisg",name:"Article Sentiment Analysis",description:"Evaluate News Article with Natural Language Processing. It shows sentiment and analysis based on the article submitted based on meaningcloud API",features:null,imgs:"",technologies:["VanillaJS","nodeJS","Webpack"],notes:"",isFeatured:!1}],d=n(7086);function m(e){var t=e.projectData,n=t.id%2===0;return(0,r.jsxs)("article",{className:"mt-5 lg:mt-16",children:[(0,r.jsx)(d.Z,{styles:"text-2xl ... pl-2 text-secondary underline italic",children:t.name}),(0,r.jsx)("section",{className:"h-full mt-4 bg-gradient-to-t from-accent pb-3 ".concat(n?"pl-3 rounded-bl":"pr-3 rounded-br"),children:(0,r.jsxs)("section",{className:"bg-white h-full px-4 py-4 space-y-4",children:[t.description?(0,r.jsx)("p",{className:"text-secondary",children:t.description}):null,t.url_live?(0,r.jsxs)("h2",{className:"",children:["Preview:"," ",(0,r.jsx)("span",{className:"italic",children:(0,r.jsx)(l.Z,{href:t.url_live,children:t.url_live})})]}):null,(0,r.jsxs)("h2",{className:"",children:["Project repo:"," ",(0,r.jsx)("span",{className:"italic",children:(0,r.jsx)(l.Z,{href:t.url_repo,children:t.name})})]}),t.features?(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"",children:"Features: "}),(0,r.jsx)("ul",{className:"pl-10 text-secondary",children:t.features.map((function(e,t){return(0,r.jsx)("li",{className:"list-disc text-secondary",children:e},t)}))})]}):null,t.technologies?(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"",children:"Technologies: "}),(0,r.jsx)("ul",{className:"pl-10 text-secondary",children:t.technologies.map((function(e,t){return(0,r.jsx)("li",{className:"list-disc",children:e},t)}))})]}):null,t.notes&&(0,r.jsxs)("h2",{className:"italic font-mono py-5",children:["Notes: ",(0,r.jsx)("span",{className:"text-gray-500 ",children:t.notes})]})]})})]})}function u(){return(0,r.jsx)("section",{className:"ml-[-0.5rem] mb-44",children:c.map((function(e){return(0,r.jsx)(m,{projectData:e},e.id)}))})}function x(){var e="https://amromoorie.com"+(0,s.useRouter)().pathname;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"amromoorie | Portofolio"}),(0,r.jsx)("link",{rel:"canonical",href:e}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:"Here's a my portofolio. Hope you find it interesting!"},"description")]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{className:"text-5xl italic text-right text-bg-secondary mx-11 my-14 ... lg:mr-[-16rem]",children:"Portofolio"}),(0,r.jsx)("h3",{className:"italic",children:"my portofolio is under development..."}),(0,r.jsxs)("h4",{className:"pb-5",children:["you can check my lates work on"," ",(0,r.jsx)(l.Z,{href:"https://github.com/amromoorie",rel:"github",styles:"",children:"Github repo"})]}),(0,r.jsx)(u,{})]})]})}}},function(e){e.O(0,[112,295,774,888,179],(function(){return t=1592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);