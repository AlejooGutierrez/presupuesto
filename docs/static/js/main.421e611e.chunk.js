(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a(7),r=a.n(n),u=a(9),i=a(2),j=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},l=function(e){var t=e.presupuesto,a=e.restante;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto: $ ",t]}),Object(s.jsxs)("div",{className:j(t,a),children:["Restante: $ ",a]})]})},o=function(e){var t=e.mensaje;return Object(s.jsx)("p",{className:"alert alert-danger error animate__animated animate__flash",children:t})},b=a(8),d=a.n(b),O=function(e){var t=e.setGasto,a=e.guardarGasto,n=Object(c.useState)(""),r=Object(i.a)(n,2),u=r[0],j=r[1],l=Object(c.useState)(0),b=Object(i.a)(l,2),O=b[0],m=b[1],p=Object(c.useState)(!1),h=Object(i.a)(p,2),x=h[0],f=h[1];return Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===u.trim())f(!0);else{f(!1);var s={name:u,cantidad:O,id:d.a.generate()};t(s),a(!0),j(""),m(0)}},children:[Object(s.jsx)("h2",{children:"Agrega Tus Gastos"}),x&&Object(s.jsx)(o,{mensaje:"Ambos campos son obligatorios o el Presupuesto es incorrecto"}),Object(s.jsxs)("div",{className:"campo",children:[Object(s.jsx)("label",{children:"Nombre De Gasto"}),Object(s.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. Transporte",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(s.jsxs)("div",{className:"campo",children:[Object(s.jsx)("label",{children:"Cantidad De Gasto"}),Object(s.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",value:O,onChange:function(e){return m(parseInt(e.target.value))}})]}),Object(s.jsx)("input",{type:"submit",className:"u-full-width button-primary",value:"AGREGAR GASTO"})]})},m=function(e){var t=e.gasto;return Object(s.jsx)("li",{className:"gastos animate__animated animate__heartBeat",children:Object(s.jsxs)("p",{children:[t.name,Object(s.jsxs)("span",{className:"gasto",children:["$ ",t.cantidad]})]})})},p=function(e){var t=e.gastos;return Object(s.jsxs)("div",{className:"gastos-realizados",children:[Object(s.jsx)("h2",{children:"Listado"}),t.map((function(e){return Object(s.jsx)(m,{gasto:e},e.id)}))]})},h=function(e){var t=e.setPresupuesto,a=e.setRestante,n=e.setPregunta,r=Object(c.useState)(0),u=Object(i.a)(r,2),j=u[0],l=u[1],b=Object(c.useState)(!1),d=Object(i.a)(b,2),O=d[0],m=d[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"u-full-width",children:[Object(s.jsx)("h2",{children:"\xbfCuanto es tu presupuesto?"}),O&&Object(s.jsx)(o,{mensaje:"El Presupuesto Es Incorrecto"})]}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j<1||isNaN(j)?m(!0):(m(!1),t(j),a(j),n(!1))},children:[Object(s.jsx)("input",{type:"text",name:"respuesta",className:"u-full-width",placeholder:"Coloca tu Presupuesto",onChange:function(e){l(parseInt(e.target.value))}}),Object(s.jsx)("input",{type:"submit",className:"u-full-width button-primary",value:"Definir Presupuesto"})]})]})};var x=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(0),j=Object(i.a)(r,2),o=j[0],b=j[1],d=Object(c.useState)(!0),m=Object(i.a)(d,2),x=m[0],f=m[1],v=Object(c.useState)([]),g=Object(i.a)(v,2),N=g[0],S=g[1],_=Object(c.useState)({}),w=Object(i.a)(_,2),G=w[0],y=w[1],P=Object(c.useState)(!1),E=Object(i.a)(P,2),C=E[0],D=E[1];return Object(c.useEffect)((function(){if(C){S([].concat(Object(u.a)(N),[G]));var e=o-G.cantidad;b(e),D(!1)}}),[G,C,N,o]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"Gasto Semanal"}),Object(s.jsx)("div",{className:"contenido-principal",children:x?Object(s.jsx)(h,{setPresupuesto:n,setRestante:b,setPregunta:f}):Object(s.jsxs)("div",{className:"row animate__animated animate__backInDown",children:[Object(s.jsx)("div",{className:"one-half column",children:Object(s.jsx)(O,{setGasto:y,guardarGasto:D})}),Object(s.jsxs)("div",{className:"one-half column",children:[Object(s.jsx)(p,{gastos:N}),Object(s.jsx)(l,{presupuesto:a,restante:o})]})]})})]})})})};a(23);r.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.421e611e.chunk.js.map