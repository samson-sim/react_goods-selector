(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),s=c(6),r=c(4),a=c(5),l=c(8),d=c(7),i=c(1),u=c.n(i),b=(c(13),c(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={goods:h,selectedGoods:[]},e.select=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.remove=function(t){e.setState((function(e){return e.selectedGoods.splice(e.selectedGoods.indexOf(t),1),{selectedGoods:e.selectedGoods}}))},e.stringOfGoods=function(e){var t="";switch(e.length){case 0:t="No goods selected";break;case 1:t="".concat(e[0]," is selected");break;case 2:t="".concat(e[0]," and ").concat(e[1]," are selected");break;default:for(var c=0;c<e.length;c+=1)c===e.length-2?t+="".concat(e[c]," "):c===e.length-1?t+="and ".concat(e[c]," are selected"):t+="".concat(e[c],", ")}return t},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.goods,n=t.selectedGoods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:this.stringOfGoods(n)}),Object(b.jsx)("ul",{children:c.map((function(t){var c=n.includes(t);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("li",{className:c?"button__selected":"button",children:[t,n.includes(t)?Object(b.jsx)("button",{type:"button",onClick:function(){return e.remove(t)},children:"Remove"}):Object(b.jsx)("button",{type:"button",onClick:function(){return e.select(t)},children:"Select"})]},t)})}))})]})}}]),c}(u.a.Component),f=j;o.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b8ff2638.chunk.js.map