import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '../src/assets/css/index.css' 
import router from './routes'

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
