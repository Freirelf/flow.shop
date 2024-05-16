import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './globals.css'
import { Toaster } from 'sonner'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Flow.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
