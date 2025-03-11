import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { UserProvider } from '@components/UserContext'
import './index.css'
import routes from './routes'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>,
)
