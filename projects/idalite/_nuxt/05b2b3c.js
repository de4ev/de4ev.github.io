(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{243:function(t,r,e){var content=e(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("e3bbde9c",content,!0,{sourceMap:!1})},244:function(t,r,e){var content=e(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("46fbbf9b",content,!0,{sourceMap:!1})},251:function(t,r,e){"use strict";var n=e(243),c=e.n(n);e.d(r,"default",(function(){return c.a}))},252:function(t,r,e){(r=e(19)(!1)).push([t.i,".wrapper_BHDvy{width:100%}.center_3PiHR,.wrapper_BHDvy{display:flex;flex-grow:1}.center_3PiHR{justify-content:center;align-items:center}.cards-container_2F4ra{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(264px,1fr));grid-column-gap:16px;grid-row-gap:16px}",""]),r.locals={wrapper:"wrapper_BHDvy",center:"center_3PiHR","cards-container":"cards-container_2F4ra"},t.exports=r},253:function(t,r,e){"use strict";var n=e(244),c=e.n(n);e.d(r,"default",(function(){return c.a}))},254:function(t,r,e){(r=e(19)(!1)).push([t.i,".card_OF-oQ{width:264px;max-height:272px;padding:16px;margin:0 auto;background-color:var(--white);box-shadow:0 4px 16px rgba(0,0,0,.05);border-radius:8px;cursor:pointer;transition:.3s}.card_OF-oQ:hover{transform:scale(1.02)}.card_OF-oQ:active{transform:none}.card_OF-oQ .card-img_25hSY{height:180px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.card_OF-oQ .card-img_25hSY img{max-width:100%;max-height:100%}.card_OF-oQ .card-img_25hSY .card-rating_2H21j{position:absolute;left:0;top:0}.card_OF-oQ .card-img_25hSY .cart-button_1JlUv{position:absolute;right:0;top:0}.card_OF-oQ .card-body_3V9Ox{margin-top:16px;font-size:14px;line-height:18px}.card_OF-oQ .card-body_3V9Ox .card-text_SQ5Ys{margin-bottom:6px;font-size:inherit;color:var(--grey);font-weight:400}.card_OF-oQ .card-body_3V9Ox .card-price_2AE9p{color:var(--black);font-weight:700}@media(max-width:375px){.card_OF-oQ{width:100%}}",""]),r.locals={card:"card_OF-oQ","card-img":"card-img_25hSY","card-rating":"card-rating_2H21j","cart-button":"cart-button_1JlUv","card-body":"card-body_3V9Ox","card-text":"card-text_SQ5Ys","card-price":"card-price_2AE9p"},t.exports=r},257:function(t,r,e){"use strict";e.r(r);e(126),e(17),e(42);var n=e(10);function c(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var d={props:{product:{type:Object,required:!0}},computed:{cardData:function(){return o(o({},this.product),{},{photo:"https://front-test.idalite.com".concat(this.product.photo)})},formatedPrice:function(){var t=this.cardData.price.toString(),r=t;return t.length>3&&(r=t.substring(0,t.length-3)+" "+t.substr(t.length-3)),r},inCart:function(){return this.$store.getters.cartItemsIds.indexOf(this.product.id)>=0}}},l=e(253),f=e(6);var component=Object(f.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.card},[e("div",{class:t.$style["card-img"]},[e("img",{attrs:{src:t.cardData.photo,draggable:"false"}}),t._v(" "),e("div",{class:t.$style["card-rating"]},[e("Rating",{attrs:{rating:t.cardData.rating,id:t.cardData.id}})],1),t._v(" "),e("CartButton",{class:t.$style["cart-button"],attrs:{small:!0,inCart:t.inCart},on:{click:function(r){return t.$emit("toggleBuying")}}})],1),t._v(" "),e("div",{class:t.$style["card-body"]},[e("h5",{class:t.$style["card-text"]},[t._v(t._s(t.cardData.name))]),t._v(" "),e("p",{class:t.$style["card-price"]},[t._v(t._s(t.formatedPrice)+" ₽")])])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);r.default=component.exports;installComponents(component,{Rating:e(175).default,CartButton:e(174).default})},259:function(t,r,e){"use strict";e.r(r);e(82),e(17),e(42);var n=e(10),c=(e(41),e(8)),o=e(11);function d(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var f={fetch:function(t){function r(){return t.apply(this,arguments)}return r.toString=function(){return t.toString()},r}((function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://front-test.idalite.com/api/product?category=".concat(t.$route.params.id)).then((function(t){return t.json()}));case 2:t.products=r.sent;case 3:case"end":return r.stop()}}),r)})))()})),data:function(){return{products:[]}},watch:{"$route.query":"$fetch"},computed:l(l({},Object(o.d)(["sortBy","cart"])),{},{sortedProducts:function(){var t=this;if(this.products.length>0){var r=this.products.slice();return"price"==this.sortBy.value?r.sort((function(a,b){return a[t.sortBy.value]-b[t.sortBy.value]})):r.sort((function(a,b){return b[t.sortBy.value]-a[t.sortBy.value]}))}}}),methods:l(l({},Object(o.b)(["toggleBuying"])),{},{updateCart:function(t){this.toggleBuying(t),localStorage.setItem("cart",JSON.stringify(this.cart))}})},h=e(251),y=e(6);var component=Object(y.a)(f,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.wrapper},[t.$fetchState.pending||t.$fetchState.error?e("div",{class:t.$style.center},[t.$fetchState.pending?e("Loader",{attrs:{color:"#F2C94C"}}):t.$fetchState.error||t.products.length<1?e("p",[t._v("An error occurred :(")]):t._e()],1):e("transition-group",{class:t.$style["cards-container"],attrs:{name:"list"}},t._l(t.sortedProducts,(function(r){return e("Card",{key:r.id,attrs:{product:r},on:{toggleBuying:function(e){return t.updateCart(r)}}})})),1)],1)}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);r.default=component.exports;installComponents(component,{Loader:e(173).default,Card:e(257).default})}}]);