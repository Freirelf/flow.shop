import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './pages/_layouts/app'
import Dashboard from './pages/app/dashboard'
import AuthLayout from './pages/_layouts/auth'
import SignIn from './pages/auth/sign-in'
import SignUp from './pages/auth/sign-up'
import Order from './pages/app/orders/order'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Order /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
