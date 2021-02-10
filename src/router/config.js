import JsonSchema from '../pages/jsonSchema'
import JsxSchema from '../pages/jsxSchema'
import Jsx from '../pages/jsx'
import Index from '../pages/Index'
import Chain from '../pages/chain'
 
export default [
     { Component: JsonSchema, path: '/json', label: 'JSON Schema开发表单' },
     { Component: JsxSchema, path: '/jsxschema', label: 'JSX Schema开发表单' },
     { Component: Jsx, path: '/jsx', label: '纯JSX开发表单' },
     { Component: Index, path: '/', label: '常用' },
     { Component: Chain, path: '/chain', label: '联动' }
 ]