import React from 'react'
import ReactDom from 'react-dom'
import Route from './router/index.js'
import '@alifd/next/dist/next.css';
ReactDom.render(<Route/>,document.querySelector('#root'))