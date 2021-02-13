import JsonSchema from '../pages/jsonSchema'
import JsonSchemaExpression from '../pages/jsonSchemaExpression'
import JsxSchema from '../pages/jsxSchema'
import Jsx from '../pages/jsx'
import Index from '../pages/Index'
import Chain from '../pages/chain'
import LifeCycle from '../pages/lifecycle'
import Eva from '../pages/eva'
import chain1 from '../pages/chain/one2mul.jsx'

export default [
    { Component: JsonSchema, path: '/json', label: 'JSON Schema开发表单' },
    { Component: JsxSchema, path: '/jsxschema', label: 'JSX Schema开发表单' },
    { Component: Jsx, path: '/jsx', label: '纯JSX开发表单' },
    { Component: Index, path: '/', label: '常用' },
    { Component: Chain, path: '/chain', label: '联动' },
    { Component: JsonSchemaExpression, path: '/JsonSchemaExpression', label: 'schema表达式' },
    { Component: LifeCycle, path: '/LifeCycle', label: '生命周期' },
    { Component: Eva, path: '/eva', label: 'eva' }
 ]