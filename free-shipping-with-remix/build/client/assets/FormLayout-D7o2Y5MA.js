import{R as a,r as o}from"./index-Ch8JEnIn.js";import{d as g,w as u,B as d,I as x,a as F,T,i as k}from"./Page-BT2t6vSp.js";var l={Item:"Polaris-FormLayout__Item",grouped:"Polaris-FormLayout--grouped",condensed:"Polaris-FormLayout--condensed"};function f({children:e,condensed:t=!1}){const r=g(l.Item,t?l.condensed:l.grouped);return e?a.createElement("div",{className:r},e):null}function y({children:e,condensed:t,title:r,helpText:m}){const p=o.useId();let c=null,n,i=null,s;m&&(n=`${p}HelpText`,c=a.createElement(F,{id:n,color:"text-secondary"},m)),r&&(s=`${p}Title`,i=a.createElement(T,{id:s,as:"p"},r));const E=o.Children.map(e,I=>u(I,f,{condensed:t}));return a.createElement(d,{role:"group",gap:"200","aria-labelledby":s,"aria-describedby":n},i,a.createElement(x,{gap:"300"},E),c)}const L=o.memo(function({children:t}){return a.createElement(d,{gap:"400"},o.Children.map(t,b))});L.Group=y;function b(e,t){return k(e,y)?e:u(e,f,{key:t})}export{L as F};