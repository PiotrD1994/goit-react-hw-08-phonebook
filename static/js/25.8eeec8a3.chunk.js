"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[25],{6025:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(2791),u=t(9434),o=t(9439),i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},a=function(e){return e.filter},c=t(1634),l=t(3329),f=function(){var e=(0,u.v9)(a),n=(0,u.I0)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{children:"Find contact by name"}),(0,l.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target.value.toLowerCase();n((0,c.M6)(t))}})]})},s="NOT_FOUND";var p=function(e,n){return e===n};function v(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,u=void 0===r?p:r,o=t.maxSize,i=void 0===o?1:o,a=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!e(n[u],t[u]))return!1;return!0}}(u),l=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:s},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return s}return{get:r,put:function(n,u){r(n)===s&&(t.unshift({key:n,value:u}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function f(){var n=l.get(arguments);if(n===s){if(n=e.apply(null,arguments),a){var t=l.getEntries(),r=t.find((function(e){return a(e.value,n)}));r&&(n=r.value)}l.put(arguments,n)}return n}return f.clearCache=function(){return l.clear()},f}function d(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function h(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var o,i=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,f=l.memoizeOptions,s=void 0===f?t:f,p=Array.isArray(s)?s:[s],v=d(r),h=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),m=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return o=h.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:v,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return u}var m=h(v),y=function(e){return e.contacts.isLoading},g=function(e){return e.contacts.items},x=m([g,a],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),b=t(1538),j=i(),w=i(),k=function(){var e=(0,r.useState)(""),n=(0,o.Z)(e,2),t=n[0],i=n[1],a=(0,r.useState)(""),c=(0,o.Z)(a,2),s=c[0],p=c[1],v=(0,u.v9)(g),d=(0,u.I0)(),h=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":i(r);break;case"number":p(r);break;default:return}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("is already in contacts"):(d((0,b.uK)({name:t,number:s})),i(""),p(""))},children:[(0,l.jsxs)("label",{htmlFor:j,children:["Name",(0,l.jsx)("input",{type:"text",name:"name",placeholder:"name",value:t,onChange:h,pattern:"^[^\\d]+$",required:!0})]}),(0,l.jsxs)("label",{htmlFor:w,children:["Number",(0,l.jsx)("input",{type:"tel",name:"number",placeholder:"phonenumber",value:s,onChange:h,pattern:"\\+\\d{12}",required:!0})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]}),(0,l.jsx)(f,{})]})},C=t(3634),F=function(){var e=(0,u.v9)(x),n=(0,u.I0)();return(0,l.jsx)("ul",{children:e.map((function(e){return(0,l.jsxs)("li",{children:[e.name+":"+e.number,(0,l.jsx)("button",{type:"button",name:"delete",onClick:function(){return n((0,C._f)(e.id))},children:"delete"})]},e.id)}))})},A=t(4414);function S(){var e=(0,u.I0)(),n=(0,u.v9)(y);return(0,r.useEffect)((function(){e((0,C.yF)())}),[e]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Your contacts"}),(0,l.jsx)(k,{}),(0,l.jsx)("div",{children:n&&(0,l.jsx)(A.a,{})})," ",(0,l.jsx)(F,{})]})}}}]);
//# sourceMappingURL=25.8eeec8a3.chunk.js.map