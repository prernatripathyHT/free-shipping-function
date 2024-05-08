import{r as j,j as e}from"./index-Ch8JEnIn.js";import{b,a as v,c as f}from"./components-Ch7L-ocN.js";import{P as y,B as t,C as d,T as r,I as i,b as u,a as x}from"./Page-BT2t6vSp.js";import{L as l}from"./Layout-CyUPfQv3.js";import{L as s,a as o}from"./List-DkrqYOjR.js";import"./context-CpMjy5br.js";function I(){var h;const p=b(),a=v(),g=f(),m=["loading","submitting"].includes(p.state)&&p.formMethod==="POST",n=(h=a==null?void 0:a.product)==null?void 0:h.id.replace("gid://shopify/Product/","");j.useEffect(()=>{n&&shopify.toast.show("Product created")},[n]);const c=()=>g({},{replace:!0,method:"POST"});return e.jsxs(y,{children:[e.jsx("ui-title-bar",{title:"Remix app template",children:e.jsx("button",{variant:"primary",onClick:c,children:"Generate a product"})}),e.jsx(t,{gap:"500",children:e.jsxs(l,{children:[e.jsx(l.Section,{children:e.jsx(d,{children:e.jsxs(t,{gap:"500",children:[e.jsxs(t,{gap:"200",children:[e.jsx(r,{as:"h2",variant:"headingMd",children:"Congrats on creating a new Shopify app 🎉"}),e.jsxs(r,{variant:"bodyMd",as:"p",children:["This embedded app template uses"," ",e.jsx(s,{url:"https://shopify.dev/docs/apps/tools/app-bridge",target:"_blank",removeUnderline:!0,children:"App Bridge"})," ","interface examples like an"," ",e.jsx(s,{url:"/app/additional",removeUnderline:!0,children:"additional page in the app nav"}),", as well as an"," ",e.jsx(s,{url:"https://shopify.dev/docs/api/admin-graphql",target:"_blank",removeUnderline:!0,children:"Admin GraphQL"})," ","mutation demo, to provide a starting point for app development."]})]}),e.jsxs(t,{gap:"200",children:[e.jsx(r,{as:"h3",variant:"headingMd",children:"Get started with products"}),e.jsxs(r,{as:"p",variant:"bodyMd",children:["Generate a product with GraphQL and get the JSON output for that product. Learn more about the"," ",e.jsx(s,{url:"https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate",target:"_blank",removeUnderline:!0,children:"productCreate"})," ","mutation in our API references."]})]}),e.jsxs(i,{gap:"300",children:[e.jsx(u,{loading:m,onClick:c,children:"Generate a product"}),(a==null?void 0:a.product)&&e.jsx(u,{url:`shopify:admin/products/${n}`,target:"_blank",variant:"plain",children:"View product"})]}),(a==null?void 0:a.product)&&e.jsxs(e.Fragment,{children:[e.jsxs(r,{as:"h3",variant:"headingMd",children:[" ","productCreate mutation"]}),e.jsx(x,{padding:"400",background:"bg-surface-active",borderWidth:"025",borderRadius:"200",borderColor:"border",overflowX:"scroll",children:e.jsx("pre",{style:{margin:0},children:e.jsx("code",{children:JSON.stringify(a.product,null,2)})})}),e.jsxs(r,{as:"h3",variant:"headingMd",children:[" ","productVariantUpdate mutation"]}),e.jsx(x,{padding:"400",background:"bg-surface-active",borderWidth:"025",borderRadius:"200",borderColor:"border",overflowX:"scroll",children:e.jsx("pre",{style:{margin:0},children:e.jsx("code",{children:JSON.stringify(a.variant,null,2)})})})]})]})})}),e.jsx(l.Section,{variant:"oneThird",children:e.jsxs(t,{gap:"500",children:[e.jsx(d,{children:e.jsxs(t,{gap:"200",children:[e.jsx(r,{as:"h2",variant:"headingMd",children:"App template specs"}),e.jsxs(t,{gap:"200",children:[e.jsxs(i,{align:"space-between",children:[e.jsx(r,{as:"span",variant:"bodyMd",children:"Framework"}),e.jsx(s,{url:"https://remix.run",target:"_blank",removeUnderline:!0,children:"Remix"})]}),e.jsxs(i,{align:"space-between",children:[e.jsx(r,{as:"span",variant:"bodyMd",children:"Database"}),e.jsx(s,{url:"https://www.prisma.io/",target:"_blank",removeUnderline:!0,children:"Prisma"})]}),e.jsxs(i,{align:"space-between",children:[e.jsx(r,{as:"span",variant:"bodyMd",children:"Interface"}),e.jsxs("span",{children:[e.jsx(s,{url:"https://polaris.shopify.com",target:"_blank",removeUnderline:!0,children:"Polaris"}),", ",e.jsx(s,{url:"https://shopify.dev/docs/apps/tools/app-bridge",target:"_blank",removeUnderline:!0,children:"App Bridge"})]})]}),e.jsxs(i,{align:"space-between",children:[e.jsx(r,{as:"span",variant:"bodyMd",children:"API"}),e.jsx(s,{url:"https://shopify.dev/docs/api/admin-graphql",target:"_blank",removeUnderline:!0,children:"GraphQL API"})]})]})]})}),e.jsx(d,{children:e.jsxs(t,{gap:"200",children:[e.jsx(r,{as:"h2",variant:"headingMd",children:"Next steps"}),e.jsxs(o,{children:[e.jsxs(o.Item,{children:["Build an"," ",e.jsxs(s,{url:"https://shopify.dev/docs/apps/getting-started/build-app-example",target:"_blank",removeUnderline:!0,children:[" ","example app"]})," ","to get started"]}),e.jsxs(o.Item,{children:["Explore Shopify’s API with"," ",e.jsx(s,{url:"https://shopify.dev/docs/apps/tools/graphiql-admin-api",target:"_blank",removeUnderline:!0,children:"GraphiQL"})]})]})]})})]})})]})})]})}export{I as default};
