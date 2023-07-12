import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { store } from '@/store/store'

import RootPage from '@/pages/rootPage'
import CounterPage from '@/pages/counter/counterPage'
import CountryPage from './pages/country/countryPage.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootPage />,
   },
   {
      path: '/counter',
      element: <CounterPage />,
   },
   {
      path: '/countries',
      element: <CountryPage />,
   },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
         </QueryClientProvider>
      </Provider>
   </React.StrictMode>,
)
