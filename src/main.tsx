import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import { store } from '@/store/store'


import RootPage from "@/pages/rootPage";
import CounterPage from '@/pages/counter/counterPage';


const router = createBrowserRouter([
   {
      path: '/',
      element:  <RootPage/>,
   },
   {
      path: 'counter',
      element:  <CounterPage/>,
   },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>,
)
