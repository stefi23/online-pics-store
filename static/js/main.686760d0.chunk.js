(this["webpackJsonponline-pics-store"]=this["webpackJsonponline-pics-store"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),a=n(29),s=n.n(a),o=(n(39),n(40),n(10)),u=n(16),l=n.n(u),j=n(30),b=n(19),d=n(33),m=n(8),O=n(31),f=n.n(O),v=i.a.createContext();function h(e){var t=e.children,n=Object(c.useState)([]),i=Object(m.a)(n,2),a=i[0],s=i[1],o=Object(c.useState)([]),u=Object(m.a)(o,2),O=u[0],h=u[1],x=function(e){var t=a.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{isFavorite:!t.isFavorite}):t}));s(t)};Object(c.useEffect)((function(){g()}),[]);var g=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json");case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(v.Provider,{value:{allPhotos:a,cartItems:O,toggleFavorite:x,addToCart:function(e){h((function(t){return[].concat(Object(d.a)(t),[e])}))},removeFromCart:function(e){h((function(t){return t.filter((function(t){return t.id!==e}))}))},emptyCart:function(){h([])}},toggleFavorite:x,children:t})}var x=function(){var e=Object(c.useContext)(v).cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line";return Object(r.jsx)("div",{children:Object(r.jsxs)("header",{children:[Object(r.jsx)(o.b,{to:"/online-pics-store",children:"Pic Some"}),Object(r.jsx)(o.b,{to:"/cart",children:Object(r.jsx)("i",{className:"".concat(e," ri-fw ri-2x")})})]})})};var g=function(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],i=Object(c.useRef)(null),a=function(){r(!0)},s=function(){r(!1)};return Object(c.useEffect)((function(){return i.current.addEventListener("mouseenter",a),i.current.addEventListener("mouseleave",s),function(){var e,t;null===(e=i.current)||void 0===e||e.removeEventListener("mouseenter",a),null===(t=i.current)||void 0===t||t.removeEventListener("mouseleave",s)}}),[]),[n,i]};var p=function(e){var t=e.className,n=e.img,i=Object(c.useContext)(v),a=i.cartItems,s=i.toggleFavorite,o=i.addToCart,u=i.removeFromCart,l=g(),j=Object(m.a)(l,2),b=j[0],d=j[1];return Object(r.jsxs)("div",{className:"".concat(t," image-container"),ref:d,children:[Object(r.jsx)("img",{src:n.url,className:"image-grid",alt:"Images from catalog"}),n.isFavorite?Object(r.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return s(n.id)}}):b?Object(r.jsx)("i",{className:"ri-heart-line favorite",onClick:function(){return s(n.id)}}):void 0,a.some((function(e){return e.id===n.id}))?Object(r.jsx)("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return u(n.id)}}):b?Object(r.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return o(n)}}):void 0]})};function C(e){return e%5===0?"big":e%6===0?"wide":void 0}var N=function(){var e=Object(c.useContext)(v).allPhotos.map((function(e,t){return Object(r.jsx)(p,{img:e,className:C(t)},e.id)}));return Object(r.jsx)("main",{className:"photos",children:e})};var F=function(e){var t=e.item,n=Object(c.useContext)(v).removeFromCart,i=g(),a=Object(m.a)(i,2),s=a[0],o=a[1],u=s?"ri-delete-bin-fill":"ri-delete-bin-line";return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("i",{className:u,onClick:function(){return n(t.id)},ref:o}),Object(r.jsx)("img",{src:t.url,width:"130px",alt:"Srimba JSON test images"}),Object(r.jsx)("p",{children:"$5.99"})]})};var S=function(){var e=Object(c.useContext)(v),t=e.cartItems,n=e.emptyCart,i=5.99*t.length,a=Object(c.useState)("Place Order"),s=Object(m.a)(a,2),o=s[0],u=s[1],l=i.toLocaleString("en-US",{style:"currency",currency:"USD"}),j=t.map((function(e){return Object(r.jsx)(F,{item:e},e.id)}));return Object(r.jsxs)("main",{className:"cart-page",children:[Object(r.jsx)("h1",{children:"Check out"}),j,Object(r.jsxs)("p",{className:"total-cost",children:["Total: ",l]}),Object(r.jsx)("div",{className:"order-button",children:t.length>0?Object(r.jsx)("button",{onClick:function(){u("Ordering..."),setTimeout((function(){u("Place Order"),t.length=0}),3e3),n()},children:o}):Object(r.jsx)("p",{children:"You have no items in your cart."})})]})},k=n(2);var w=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{}),Object(r.jsxs)(k.c,{children:[Object(r.jsx)(k.a,{exact:!0,path:"/online-pics-store",children:Object(r.jsx)(N,{})}),Object(r.jsx)(k.a,{path:"/online-pics-store/cart",children:Object(r.jsx)(S,{})})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};s.a.render(Object(r.jsx)(h,{children:Object(r.jsx)(o.a,{children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(w,{})})})}),document.getElementById("root")),y()}},[[65,1,2]]]);
//# sourceMappingURL=main.686760d0.chunk.js.map