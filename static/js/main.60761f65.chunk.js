(this.webpackJsonpnodeapi=this.webpackJsonpnodeapi||[]).push([[0],{19:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(11),o=n.n(a),r=n(51),s=n(8),d=n(52),l=n(48),j=n(49),b=n(50),m=n(44),v=n(38),O=n(39),x=n(40),R=n(41),h=n(42),u=n(43),E=n(3);var I=function(e,t){var n=e.animal,i=e.getSelectedAnimal;return Object(E.jsx)(v.a,{className:"Animal shadow p-3 mb-5 bg-primary rounded-lg",children:Object(E.jsxs)(O.a,{children:[Object(E.jsxs)("div",{className:"card-content-top",children:[Object(E.jsx)(x.a,{tag:"h3",className:"text-third",children:n.name}),Object(E.jsx)(R.a,{bottom:!0,width:"100%",src:n.img,alt:n.title}),Object(E.jsx)(h.a,{tag:"h6",className:"mb-2 pt-3",children:Object(E.jsx)("i",{className:"text-third",children:n.latinName})})]}),Object(E.jsxs)(u.a,{children:[Object(E.jsx)(m.a,{className:"bg-third text-fourth","data-id":n._id,"data-content-type":"carousel",onClick:i,children:"Images"}),Object(E.jsx)(m.a,{className:"bg-third text-fourth","data-id":n._id,"data-content-type":"video",onClick:i,children:"Video"})]})]})},t)},F=n(20),H=n(45),V=n(46),f=n(47);var p=function(e){var t,n=e.animal,c=Object(i.useState)(0),a=Object(s.a)(c,2),o=a[0],r=a[1],d=Object(i.useState)(!1),l=Object(s.a)(d,2),j=l[0],b=l[1],m=function(){if(!j){var e=o===n.thumbnails.length-1?0:o+1;r(e)}},v=function(){if(!j){var e=0===o?n.thumbnails.length-1:o-1;r(e)}},O=null===(t=n.thumbnails)||void 0===t?void 0:t.map((function(e,t){return Object(E.jsx)(F.a,{onExiting:function(){return b(!0)},onExited:function(){return b(!1)},children:Object(E.jsx)("img",{src:"https:"+e.url,alt:e.title,className:"img-fluid rounded-lg w-100"})},t)}));return Object(E.jsxs)(H.a,{activeIndex:o,next:m,previous:v,children:[Object(E.jsx)(V.a,{items:n.thumbnails,activeIndex:o,onClickHandler:function(e){j||r(e)}}),O,Object(E.jsx)(f.a,{direction:"prev",directionText:"Previous",onClickHandler:v}),Object(E.jsx)(f.a,{direction:"next",directionText:"Next",onClickHandler:m})]})},z=function(e){var t=e.embedId;return Object(E.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(E.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,"embed-responsive-item":!0,title:"Embedded youtube"})})};var N=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),o=Object(s.a)(a,2),r=o[0],d=o[1];return[n,function(e){d(!0);var t="http://localhost:5000/animals/".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){c(e.data),console.log(e.data),d(!1)})).catch((function(e){return console.log("Request failed: "+e)}))},r]};var T=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){fetch("http://localhost:5000/animals").then((function(e){return e.json()})).then((function(e){c(e.data),console.log(e)})).catch((function(){return console.log("Request failed")}))}),[]),n};var Y=function(){var e=N(),t=Object(s.a)(e,3),n=t[0],c=t[1],a=t[2],o=Object(i.useState)("video"),r=Object(s.a)(o,2),v=r[0],O=r[1],x=T(),R=Object(i.useState)(!1),h=Object(s.a)(R,2),u=h[0],F=h[1],H=function(e){var t=e.target.dataset,n=t.id,i=t.contentType;c(n),O(i),f()},V={carousel:Object(E.jsx)(p,{animal:n}),video:Object(E.jsx)(z,{embedId:n.idVideo})},f=function(){F(!u)};return Object(E.jsxs)("div",{className:"AnimalsList mb-5",children:[x.map((function(e,t){return Object(E.jsx)(I,{animal:e,getSelectedAnimal:H},t)})),Object(E.jsxs)(d.a,{isOpen:u,toggle:f,className:"bg-primary rounded-lg modal-lg",children:[Object(E.jsx)(l.a,{className:"bg-primary bg-third rounded-top",toggle:f}),Object(E.jsx)(j.a,{className:"bg-primary justify-content-center px-2",children:!a&&V[v]}),Object(E.jsx)(b.a,{className:"bg-primary",children:Object(E.jsx)(m.a,{color:"secondary",onClick:f,className:"bg-third text-fourth",children:"Cancel"})})]})]})};n(35),n(36),n(19);var y=function(){return Object(E.jsxs)("div",{className:"App bg-secondary",children:[Object(E.jsx)("header",{fluid:!0,children:Object(E.jsx)("img",{src:"data:image/png;base64,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",alt:"Absolut amazing animals"})}),Object(E.jsx)("main",{className:"mb-0",children:Object(E.jsx)(r.a,{children:Object(E.jsx)(Y,{})})})]})};o.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(y,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.60761f65.chunk.js.map