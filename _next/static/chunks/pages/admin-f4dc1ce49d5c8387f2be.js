(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{9417:function(e,t,n){"use strict";var s=n(5893),i=n(5675);t.Z=function(e){var t=e.src,n=e.alt,r=e.quality,a=e.layout,c=e.width,l=e.height,o=e.placeholder,d=e.classnames;return(0,s.jsx)("div",{className:d,children:(0,s.jsx)(i.default,{src:t,alt:n,layout:a,width:c,height:l,quality:r,placeholder:o})})}},9139:function(e,t,n){"use strict";var s=n(5893);t.Z=function(e){var t=e.value,n=e.onClick,i=e.width,r=e.padding,a=void 0===r?"py-2 px-8":r,c=e.type,l=void 0===c?"button":c;return(0,s.jsx)("button",{onClick:n,className:"".concat(a," ").concat(i," text-white bg-fcsc-blue rounded-lg shadow-md hover:bg-fcsc-blue_light duration-150 transition ease-in font-medium outline-none"),type:l,children:t})}},4366:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var s=n(5893),i=n(7294),r=n(9417),a={src:"/_next/static/image/public/admin/sideNav/image.04b5f2ac5a44c377e8c2fcf04bcb48e5.svg",height:500,width:500},c=function(e){var t=e.onMenuItemSelect;return(0,s.jsxs)("div",{className:"md:col-span-2 md:flex flex-col w-full bg-gradient-to-b from-fcsc-blue to-fcsc-blue_light hidden p-4",children:[(0,s.jsxs)("div",{className:"md:flex flex-col",children:[(0,s.jsx)("div",{className:"text-3xl text-white font-semibold text-center my-16 cursor-default",children:"Management"}),["Notices"].map((function(e,n){return(0,s.jsx)("div",{onClick:t.bind(undefined,e),className:"w-full filter hover:brightness-110 bg-fcsc-blue_light shadow-lg hover:shadow-xl cursor-pointer flex flex-col justify-center items-center transition ease-in duration-200 text-xl text-white font-medium text-center p-4 my-2",children:e},n)}))]}),(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsx)(r.Z,{classnames:"flex items-center justify-center w-full my-20vh",src:a,alt:"image",layout:"intrinsic",quality:90})})]})},l=n(6265),o=n(5434),d=n(8193),u=n(3854),m=n(9139),f=n(6587),h=function(){return(0,s.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gradientBlue"})})},x=n(9461),p=n(7860),g=n(6455),b=n.n(g),v=void 0;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(){var e=(0,x.i)(),t=e.data,n=e.isSuccess,r=(0,i.useState)(!1),a=r[0],c=r[1],g=(0,i.useState)(!1),w=g[0],y=g[1],N=(0,i.useState)("Add"),C=N[0],k=N[1],O=(0,i.useState)(""),S=O[0],A=O[1],_=(0,i.useState)({title:"",body:"",category:"",photo:"",createdAt:""}),I=_[0],P=_[1];(0,i.useEffect)((function(){var e;e="noticeRecord",setTimeout((function(){document.querySelectorAll(".".concat(e)).forEach((function(e){e.removeAttribute("data-aos")}))}),2e3)}),[]);var T=function(){y((function(e){return!e}))},Z=function(e){P(j(j({},I),{},(0,l.Z)({},e.target.name,e.target.value)))},B=function(){return new Date((new Date).getTime()-6e4*(new Date).getTimezoneOffset()).toISOString().substring(0,19)},D=function(e){var t=new Date(e);return new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().substring(0,19)},E=function(e){var t=e.split(":")[0],n=e.split(":")[1],s=parseInt(t)>=12?"PM":"AM",i=parseInt(t)%12;return"".concat(String(i).padStart(2,"0"),":").concat(n," ").concat(s)},z=function(){P({title:"",body:"",category:"",photo:"",createdAt:""})},M=function(e){b().fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#1c1364",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it"}).then((function(t){t.isConfirmed&&(c(!0),p.k.deleteNotice(e).then((function(){c(!1),b().fire({heightAuto:!1,icon:"success",title:'<div class="text-2xl">Notice removed sucessfully!</div>',showConfirmButton:!1,timer:1500,willClose:function(){clearInterval(undefined)}}).then((function(){window.location.reload()}))})).catch((function(e){c(!1),b().fire({icon:"error",heightAuto:!1,title:'<div class="text-2xl">'.concat(e.response.data.message,"</div>"),showConfirmButton:!1,timer:1500})})))}))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.Z,{show:a}),(0,s.jsxs)("section",{className:"p-4 sm:p-5 md:h-full min-h-84vh",children:[(0,s.jsx)("div",{className:"bg-black fixed w-full h-full top-0 left-0 z-20 transition ease-in duration-200 pointer-events-none ".concat(w?"opacity-50":"opacity-0 ")}),n&&t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-auto px-6 mt-4 mb-10 py-2 rounded-lg bg-fcsc-blue lg:opacity-0 cursor-default lg:h-0 lg:m-0 lg:p-0","data-aos":"fade-right",children:(0,s.jsx)("div",{className:"text-2xl text-white font-semibold text-left ",children:"Notices"})}),(0,s.jsx)("div",{className:"inline-flex items-center justify-end w-full mb-8 pr-4 lg:pr-0","data-aos":"fade-left",children:(0,s.jsx)(m.Z,{value:"Add Notice",onClick:function(){z(),k("Add"),T()}})}),(0,s.jsxs)("div",{className:"hidden md:grid md:grid-rows-1 md:grid-cols-11 md:gap-4 bg-gradient-to-l from-fcsc-blue to-fcsc-blue_light font-medium text-lg text-white p-4 md:px-8 rounded-t-xl shadow-lg mb-3","data-aos":"fade-right",children:[(0,s.jsx)("h3",{className:"md:col-span-2",children:"Title"}),(0,s.jsx)("h3",{className:"md:col-span-3",children:"Body"}),(0,s.jsx)("h3",{className:"md:col-span-2",children:"Category"}),(0,s.jsx)("h3",{className:"md:col-span-2",children:"Issue Date"}),(0,s.jsx)("div",{className:"md:col-span-1"})]}),0!=t.length?(0,s.jsx)("div",{className:"flex flex-col space-y-2 md:max-h-65vh pb-4 md:overflow-y-scroll scrollbar-hide",children:t.map((function(e,t){var n,i=e._id,r=e.title,a=e.body,c=e.category,l=e.photo,m=e.createdAt,f=function(){A(i),P({title:r,body:a,category:c,photo:l,createdAt:D(m)}),T(),k("Edit")};return(0,s.jsxs)("div",{className:"grid grid-rows-1 grid-cols-1 sm:grid-cols-4 md:grid-cols-11 gap-2 sm:gap-4 rounded-sm shadow-lg p-4 md:px-8 justify-center items-center noticeRecord","data-aos":t%2==1?"fade-right":"fade-left",children:[(0,s.jsx)("p",{className:"sm:col-span-2 font-semibold text-xl md:text-base text-gray-700",children:r}),(0,s.jsxs)("div",{className:"sm:col-span-3 flex flex-row justify-start items-center",children:[(0,s.jsx)("div",{className:"w-27 md:w-0 md:h-0 mr-4 md:mr-0",children:(0,s.jsx)(o.ixJ,{className:"text-gray-700 hover:text-fcsc-blue_light transition ease-in duration-200 md:w-0 md:h-0 ",size:27})}),(0,s.jsx)("p",{className:"font-medium text-gray-700 w-3/4 md:w-full",style:{wordWrap:"break-word"},children:a})]}),(0,s.jsxs)("div",{className:"sm:col-span-2 flex flex-row justify-start items-end",children:[(0,s.jsx)(u.IKj,{className:"text-gray-700 hover:text-fcsc-blue_light transition ease-in duration-200 md:w-0 md:h-0 mr-4 md:mr-0",size:26}),(0,s.jsx)("p",{className:"font-medium text-md md:text-base text-gray-700",children:c})]}),(0,s.jsxs)("div",{className:"sm:col-span-2 flex flex-row justify-start items-end",children:[(0,s.jsx)(d.ow5,{className:"text-gray-700 hover:text-fcsc-blue_light transition ease-in duration-200 md:w-0 md:h-0 mr-4 md:mr-0",size:26}),(0,s.jsx)("p",{className:"font-medium text-md md:text-base text-gray-700",children:(n=D(m),"".concat(n.split("T")[0]," ").concat(E(n.split("T")[1].split(".")[0])))})]}),(0,s.jsx)("button",{className:"col-span-1 lg:col-span-1 hidden lg:flex items-center justify-center outline-none",onClick:f,children:(0,s.jsx)(d.dEB,{className:"text-lg text-gray-700 hover:text-green-500 transition ease-in duration-200",size:32})}),(0,s.jsx)("button",{className:"md:col-span-1 py-2 mt-2 mb-1 rounded-md bg-fcsc-blue hover:bg-fcsc-blue_light text-white transition ease-in flex md:hidden items-center justify-center outline-none",onClick:f,children:"Edit"}),(0,s.jsx)("button",{className:"sm:col-span-1 md:col-span-1 md:flex hidden items-center justify-center outline-none",onClick:M.bind(v,i),children:(0,s.jsx)(o.ZkW,{className:"text-lg hidden md:block text-gray-700 hover:text-red-500 transition ease-in duration-200",size:32})}),(0,s.jsx)("button",{className:"md:col-span-1 py-2 rounded-md bg-fcsc-blue hover:bg-fcsc-blue_light text-white transition ease-in flex md:hidden items-center justify-center outline-none",onClick:M.bind(v,i),children:"Remove"})]},t)}))}):(0,s.jsx)("div",{className:"font-semibold text-xl lg:text-2xl text-center mt-25vh lg:mt-30vh mb-20 px-8 text-gray-800","data-aos":"fade-left",children:"There are no notices at the moment."})]}):(0,s.jsx)("div",{className:"h-84vh-32",children:(0,s.jsx)(h,{})})]}),w&&(0,s.jsx)("div",{className:"fixed z-40 top-0 bottom-0 right-0 left-0 w-full h-full pointer-events-none",children:(0,s.jsxs)("form",{method:"post",onSubmit:function(e){e.preventDefault(),c(!0),I.createdAt||(I.createdAt=B());var t=JSON.parse(JSON.stringify(I));t.createdAt=new Date(t.createdAt).toUTCString(),"Add"==C?p.k.addNotice(t).then((function(){c(!1),T(),z(),b().fire({heightAuto:!1,icon:"success",title:'<div class="text-2xl">Notice Added sucessfully!</div>',showConfirmButton:!1,timer:1500,willClose:function(){clearInterval(undefined)}}).then((function(){window.location.reload()}))})).catch((function(e){var t=e.response.data.message,n="Failed to add notice";if(t)switch(!0){case t.includes("duplicate key"):n="There already is a notice with this title";break;case t.includes("Path `title` is required."):n="Please enter a notice title";break;case t.includes("Path `body` is required."):n="Please enter a notice body";break;case t.includes("Path `category` is required."):n="Please select a category";break;default:n=t}c(!1),b().fire({icon:"error",heightAuto:!1,title:'<div class="text-2xl">'.concat(n,"</div>"),showConfirmButton:!1,timer:1500})})):p.k.editNotice(S,t).then((function(){c(!1),T(),z(),b().fire({heightAuto:!1,icon:"success",title:'<div class="text-2xl">Notice edited sucessfully!</div>',showConfirmButton:!1,timer:1500,willClose:function(){clearInterval(undefined)}}).then((function(){window.location.reload()}))})).catch((function(e){c(!1),b().fire({icon:"error",heightAuto:!1,title:'<div class="text-2xl">'.concat(e.response.data.message,"</div>"),showConfirmButton:!1,timer:1500})}))},className:"absolute max-h-100vh z-50 top-1/2 left-1/2 md:left-6/10 transform -translate-x-1/2 -translate-y-1/2 bg-white w-72 md:w-96 mx-auto md:mx-0 rounded-lg p-4 px-6 pointer-events-auto overflow-y-scroll hide-scroll",children:[(0,s.jsx)("div",{className:"inline-flex items-center justify-end w-full mb-4",children:(0,s.jsx)("div",{onClick:T,children:(0,s.jsx)("div",{className:"cursor-pointer transform hover:scale-105 transition ease-in duration-100 fill-current text-fcsc-blue hover:text-gray-800",children:(0,s.jsx)(d.oHP,{size:30})})})}),(0,s.jsx)("div",{className:"inline-flex items-center justify-center w-full mb-6",children:(0,s.jsx)("div",{className:"font-semibold text-2xl sm:text-2xl text-fcsc-blue",children:"".concat(C," Notice")})}),(0,s.jsxs)("button",{className:"w-full h-full rounded-md shadow-ds2 relative mb-2",children:[(0,s.jsx)("input",{type:"file",id:"photo",name:"photo",className:"absolute left-0 w-full h-full opacity-0 cursor-pointer",onChange:function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(t){var n=new Image;n.src=t.target.result,n.onload=function(){var n=t.target.result;P(j(j({},I),{},(0,l.Z)({},e.target.name,n.split(",")[1])))}},t.readAsDataURL(e.target.files[0])}},disabled:!1}),I.photo?(0,s.jsx)("div",{className:"w-full h-full flex flex-col justify-center items-center",children:(0,s.jsx)("img",{className:"object-cover",src:I.photo.includes("https://firebasestorage.googleapis.com")?I.photo:"data:image/jpeg;base64,".concat(I.photo),alt:"speakerImage"})}):(0,s.jsxs)("div",{className:"h-full w-full flex flex-col justify-center items-center p-8",children:[(0,s.jsx)(o.OhX,{className:"fill-current-color text-gray-400",size:80}),(0,s.jsx)("div",{className:"mt-4 text-lg text-gray-400 font-semibold",children:"Add Notice Photo"})]})]}),(0,s.jsx)("input",{onChange:Z,className:"rounded-md mb-2 py-2 px-3 shadow-ds2 border-0 placeholder-gray-400 w-full",placeholder:"Title",type:"text",name:"title",value:I.title}),(0,s.jsx)("textarea",{onChange:Z,className:"rounded-md mb-2 py-2 px-3 shadow-ds2 border-0 placeholder-gray-400 w-full",placeholder:"Body",name:"body",value:I.body,rows:4}),(0,s.jsxs)("select",{className:"rounded-md mb-6 py-2 px-2 shadow-ds2 border-0 placeholder-gray-400 w-full",name:"category",onChange:function(e){P(j(j({},I),{},(0,l.Z)({},e.target.name,e.target.value)))},value:I.category,children:[(0,s.jsx)("option",{value:"",disabled:!0,selected:!0,className:"fill-current-color text-gray-400",children:"Category"}),(0,s.jsx)("option",{value:"Latest",children:"Latest"}),(0,s.jsx)("option",{value:"Older",children:"Older"})]}),(0,s.jsx)("input",{className:"rounded-md shadow-ds2 border-0 placeholder-gray-400 w-full py-2 px-3 mb-6",placeholder:"Notice Issue Date",value:I.createdAt||B(),onChange:Z,name:"createdAt",id:"createdAt",type:"datetime-local",required:!0}),(0,s.jsx)(m.Z,{value:C,width:"w-full",type:"submit"}),(0,s.jsx)("div",{className:"h-4"})]})})]})},N=function(e){var t=e.onMenuItemSelect;return(0,s.jsxs)("div",{className:"sticky bottom-0 left-0 right-0 md:hidden bg-gradient-to-b from-fcsc-blue to-fcsc-blue_light inline-flex items-center justify-between px-3 py-2",children:[(0,s.jsx)("div",{className:" sm:text-lg text-white font-medium cursor-default",children:"Management"}),(0,s.jsx)("div",{className:"inline-flex items-center space-x-2 sm:space-x-3",children:["Notices"].map((function(e,n){return(0,s.jsx)("button",{onClick:t.bind(undefined,e),className:"filter hover:brightness-110 bg-fcsc-blue_light cursor-pointer rounded-md shadow-lg hover:shadow-xl flex flex-col justify-center items-center transition ease-in duration-200 text-white font-medium text-center px-2 py-3",children:e},n)}))})]})},C=n(9008),k=function(){var e="";e=window.localStorage.getItem("MenuOptionCache")||"";var t=(0,i.useState)("Notices"),n=t[0],r=t[1];(0,i.useEffect)((function(){""!=e&&r(e)}),[e]);var a=function(e){r(e),window.localStorage.setItem("MenuOptionCache",e)};return(0,s.jsxs)("div",{children:[(0,s.jsxs)(C.default,{children:[(0,s.jsx)("title",{children:"Management | FCSC"}),(0,s.jsx)("meta",{name:"description",content:"FCSC website management"})]}),(0,s.jsx)("div",{title:"Management | FCSC SLIIT",children:(0,s.jsxs)("section",{className:"grid grid-rows-1 grid-cols-1 md:grid-cols-8 gap-4 min-h-90vh",children:[(0,s.jsx)(c,{onMenuItemSelect:a}),""!=n?(0,s.jsx)("section",{className:"md:col-span-6 py-10 px-4 sm:px-6 mb-10 md:mb-0",children:(0,s.jsx)("div",{className:"bg-white rounded-2xl shadow-lg p-4",children:(0,s.jsx)(y,{})})}):(0,s.jsx)("div",{}),(0,s.jsx)(N,{onMenuItemSelect:a})]})})]})}},7860:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var s={};n.r(s),n.d(s,{addNotice:function(){return l},deleteNotice:function(){return d},editNotice:function(){return h},getNotices:function(){return m}});var i=n(809),r=n.n(i),a=n(2447),c=n(3283);function l(e){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.post("/notices",t);case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.delete("/notices/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.get("/notices");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(r().mark((function e(t,n){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.put("/notices/".concat(t),n);case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9461:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});var s=n(8767),i=n(7860);function r(){return(0,s.useQuery)("NOTICE_LIST",i.k.getNotices)}},8860:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(4366)}])}},function(e){e.O(0,[228,774,888,179],(function(){return t=8860,e(e.s=t);var t}));var t=e.O();_N_E=t}]);