import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route'
import Authprovider from './Components/Authprovider/Authprovider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
   <RouterProvider router={router}></RouterProvider>
   </Authprovider>
  </StrictMode>,
)
