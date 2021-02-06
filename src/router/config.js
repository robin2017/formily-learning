import JsonSchema from '../pages/jsonSchema'
import JsxSchema from '../pages/jsxSchema'
import Jsx from '../pages/jsx'
 
export default [
     { Component: JsonSchema, path: '/', label: 'JSON Schema开发表单' },
     { Component: JsxSchema, path: '/jsxschema', label: 'JSX Schema开发表单' },
     { Component: Jsx, path: '/jsx', label: '纯JSX开发表单' }
 ]