import React from 'react'
import loadable from '../../utils/loadable'

// pages
const Overview = loadable(() => import('./index.jsx'))

// route definition
export default {
  path: '/',
  children: [{ index: true, element: <Overview /> }]
}