(self.webpackJsonp=self.webpackJsonp||[]).push([[34],{2063:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=function(e,t,n){var r={type:String(e)};return null!=n||"string"!=typeof t&&!Array.isArray(t)?Object.assign(r,t):n=t,Array.isArray(n)?r.children=n:null!=n&&(r.value=String(n)),r},i=function(e){if(null==e)return l;if("string"==typeof e)return t=e,o((function(e){return e&&e.type===t}));var t;if("object"==typeof e)return"length"in e?function(e){var t=[],n=-1;for(;++n<e.length;)t[n]=i(e[n]);return o((function(...e){var n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0}))}(e):function(e){return o((function(t){var n;for(n in e)if(t[n]!==e[n])return;return!0}))}(e);if("function"==typeof e)return o(e);throw new Error("Expected function, string, or object as test")};function o(e){return function(...t){return Boolean(e.call(this,...t))}}function l(){return!0}const a=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null);var o=i(t),l=r?-1:1;!function e(i,a,u){var c,f="object"==typeof i&&null!==i?i:{};"string"==typeof f.type&&(c="string"==typeof f.tagName?f.tagName:"string"==typeof f.name?f.name:void 0,Object.defineProperty(s,"name",{value:"node ("+f.type+(c?"<"+c+">":"")+")"}));return s;function s(){var c,f,s,p=[];if((!t||o(i,a,u[u.length-1]||null))&&!1===(p=function(e){if(Array.isArray(e))return e;if("number"==typeof e)return[!0,e];return[e]}(n(i,u)))[0])return p;if(i.children&&"skip"!==p[0])for(f=(r?i.children.length:-1)+l,s=u.concat(i);f>-1&&f<i.children.length;){if(!1===(c=e(i.children[f],f,s)())[0])return c;f="number"==typeof c[1]?c[1]:f+l}return p}}(e,null,[])()};const u=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null),a(e,t,(function(e,t){var r=t[t.length-1];return n(e,r?r.children.indexOf(e):null,r)}),r)};var c=s("start"),f=s("end");function s(e){return function(t){var n=t&&t.position&&t.position[e]||{};return{line:n.line||null,column:n.column||null,offset:n.offset>-1?n.offset:null}}}var p=n(1096),h={}.hasOwnProperty;function d(e){return String(e||"").toUpperCase()}var g={}.hasOwnProperty;function y(e,t){return function(e){var t=e.data||{};if(g.call(t,"hName")||g.call(t,"hProperties")||g.call(t,"hChildren"))return!1;return"value"in e}(t)?e.augment(t,r("text",t.value)):e(t,"div",x(e,t))}function m(e,t,n){var r,i=t&&t.type;if(!i)throw new Error("Expected node, got `"+t+"`");return("function"==typeof(r=g.call(e.handlers,i)?e.handlers[i]:e.passThrough&&e.passThrough.includes(i)?v:e.unknownHandler)?r:y)(e,t,n)}function v(e,t){return t.children?{...t,children:x(e,t)}:t}function x(e,t){for(var n,r,i=t.children||[],o=-1,l=[];++o<i.length;)(n=m(e,i[o],t))&&(o&&"break"===i[o-1].type&&("text"===n.type&&(n.value=n.value.replace(/^\s+/,"")),"element"===n.type&&(r=n.children[0])&&"text"===r.type&&(r.value=r.value.replace(/^\s+/,""))),l=l.concat(n));return l}function b(e,t){return e(t,"hr")}function k(e,t){var n=[],i=-1;for(t&&n.push(r("text","\n"));++i<e.length;)i&&n.push(r("text","\n")),n.push(e[i]);return t&&e.length>0&&n.push(r("text","\n")),n}function N(e,t){var n={},r=t.ordered?"ol":"ul",i=x(e,t),o=-1;for("number"==typeof t.start&&1!==t.start&&(n.start=t.start);++o<i.length;)if("element"===i[o].type&&"li"===i[o].tagName&&i[o].properties.className&&i[o].properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}return e(t,r,n,k(i,!0))}function w(e,t){var n=e.footnoteOrder,i=String(t.identifier),o=n.indexOf(i),l=String(-1===o?n.push(i):o+1);return e(t,"a",{href:"#fn"+l,className:["footnote-ref"],id:"fnref"+l,role:"doc-noteref"},[e(t.position,"sup",[r("text",l)])])}var O=n(276),A=n.n(O);function P(e,t){var n,i,o,l=t.referenceType,a="]";return"collapsed"===l?a+="[]":"full"===l&&(a+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type?r("text","!["+t.alt+a):((i=(n=x(e,t))[0])&&"text"===i.type?i.value="["+i.value:n.unshift(r("text","[")),(o=n[n.length-1])&&"text"===o.type?o.value+=a:n.push(r("text",a)),n)}function S(e){var t=e.spread;return null==t?e.children.length>1:t}const j={blockquote:function(e,t){return e(t,"blockquote",k(x(e,t),!0))},break:function(e,t){return[e(t,"br"),r("text","\n")]},code:function(e,t){var n,i=t.value?t.value+"\n":"",o=t.lang&&t.lang.match(/^[^ \t]+(?=[ \t]|$)/),l={};return o&&(l.className=["language-"+o]),n=e(t,"code",l,[r("text",i)]),t.meta&&(n.data={meta:t.meta}),e(t.position,"pre",[n])},delete:function(e,t){return e(t,"del",x(e,t))},emphasis:function(e,t){return e(t,"em",x(e,t))},footnoteReference:w,footnote:function(e,t){for(var n,r=e.footnoteById,i=e.footnoteOrder,o=1;o in r;)o++;return n=String(o),i.push(n),r[n]={type:"footnoteDefinition",identifier:n,children:[{type:"paragraph",children:t.children}],position:t.position},w(e,{type:"footnoteReference",identifier:n,position:t.position})},heading:function(e,t){return e(t,"h"+t.depth,x(e,t))},html:function(e,t){return e.dangerous?e.augment(t,r("raw",t.value)):null},imageReference:function(e,t){var n,r=e.definition(t.identifier);return r?(n={src:A()(r.url||""),alt:t.alt},null!==r.title&&void 0!==r.title&&(n.title=r.title),e(t,"img",n)):P(e,t)},image:function(e,t){var n={src:A()(t.url),alt:t.alt};return null!==t.title&&void 0!==t.title&&(n.title=t.title),e(t,"img",n)},inlineCode:function(e,t){return e(t,"code",[r("text",t.value.replace(/\r?\n|\r/g," "))])},linkReference:function(e,t){var n,r=e.definition(t.identifier);return r?(n={href:A()(r.url||"")},null!==r.title&&void 0!==r.title&&(n.title=r.title),e(t,"a",n,x(e,t))):P(e,t)},link:function(e,t){var n={href:A()(t.url)};return null!==t.title&&void 0!==t.title&&(n.title=t.title),e(t,"a",n,x(e,t))},listItem:function(e,t,n){var i,o,l,a=x(e,t),u=n?function(e){var t=e.spread,n=e.children,r=-1;for(;!t&&++r<n.length;)t=S(n[r]);return t}(n):S(t),c={},f=[];for("boolean"==typeof t.checked&&(a[0]&&"element"===a[0].type&&"p"===a[0].tagName?o=a[0]:(o=e(null,"p",[]),a.unshift(o)),o.children.length>0&&o.children.unshift(r("text"," ")),o.children.unshift(e(null,"input",{type:"checkbox",checked:t.checked,disabled:!0})),c.className=["task-list-item"]),i=-1;++i<a.length;)l=a[i],(u||0!==i||"element"!==l.type||"p"!==l.tagName)&&f.push(r("text","\n")),"element"!==l.type||"p"!==l.tagName||u?f.push(l):f.push(...l.children);return a.length>0&&(u||"p"!==l.tagName)&&f.push(r("text","\n")),e(t,"li",c,f)},list:N,paragraph:function(e,t){return e(t,"p",x(e,t))},root:function(e,t){return e.augment(t,r("root",k(x(e,t))))},strong:function(e,t){return e(t,"strong",x(e,t))},table:function(e,t){for(var n,r,i,o,l,a=t.children,u=a.length,s=t.align||[],p=[];u--;){for(r=a[u].children,o=0===u?"th":"td",n=t.align?s.length:r.length,i=[];n--;)l=r[n],i[n]=e(l,o,{align:s[n]},l?x(e,l):[]);p[u]=e(a[u],"tr",k(i,!0))}return e(t,"table",k([e(p[0].position,"thead",k([p[0]],!0))].concat(p[1]?e({start:c(p[1]),end:f(p[p.length-1])},"tbody",k(p.slice(1),!0)):[]),!0))},text:function(e,t){return e.augment(t,r("text",String(t.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g,"$1")))},thematicBreak:b,toml:C,yaml:C,definition:C,footnoteDefinition:C};function C(){return null}var B={}.hasOwnProperty;function E(e,t){var n=t||{},r=n.allowDangerousHtml||!1,i={};return l.dangerous=r,l.definition=function(e){var t=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return u(e,"definition",(function(e){var n=d(e.identifier);n&&!h.call(t,n)&&(t[n]=e)})),function(e){var n=d(e);return n&&h.call(t,n)?t[n]:null}}(e),l.footnoteById=i,l.footnoteOrder=[],l.augment=o,l.handlers={...j,...n.handlers},l.unknownHandler=n.unknownHandler,l.passThrough=n.passThrough,u(e,"footnoteDefinition",(function(e){var t=String(e.identifier).toUpperCase();B.call(i,t)||(i[t]=e)})),l;function o(e,t){var n,r;return e&&"data"in e&&e.data&&((n=e.data).hName&&("element"!==t.type&&(t={type:"element",tagName:"",properties:{},children:[]}),t.tagName=n.hName),"element"===t.type&&n.hProperties&&(t.properties={...t.properties,...n.hProperties}),"children"in t&&t.children&&n.hChildren&&(t.children=n.hChildren)),e&&(r="type"in e?e:{position:e},Object(p.a)(r)||(t.position={start:c(r),end:f(r)})),t}function l(e,t,n,r){return Array.isArray(n)&&(r=n,n={}),o(e,{type:"element",tagName:t,properties:n||{},children:r||[]})}}function I(e,t){var n=E(e,t),i=m(n,e,null),o=function(e){for(var t,n,r,i,o=e.footnoteById,l=e.footnoteOrder,a=-1,u=[];++a<l.length;)(t=o[l[a].toUpperCase()])&&(n={type:"link",url:"#fnref"+(i=String(a+1)),data:{hProperties:{className:["footnote-back"],role:"doc-backlink"}},children:[{type:"text",value:"↩"}]},(r=[...t.children])[r.length-1]&&"paragraph"===r[r.length-1].type?r[r.length-1].children.push(n):r.push(n),u.push({type:"listItem",data:{hProperties:{id:"fn"+i,role:"doc-endnote"}},children:r,position:t.position}));return 0===u.length?null:e(null,"section",{className:["footnotes"],role:"doc-endnotes"},k([].concat(b(e),N(e,{type:"list",ordered:!0,children:u})),!0))}(n);return o&&i.children.push(r("text","\n"),o),Array.isArray(i)?{type:"root",children:i}:i}}}]);