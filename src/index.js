require('file-loader?name=[name].[ext]!../public/index.html')

import React from 'react'
import reactDom from 'react-dom'

import { App } from './App.tsx'

const rootElement = document.getElementById('root')
const root = reactDom.createRoot(rootElement)

root.render(
  <App />
)
