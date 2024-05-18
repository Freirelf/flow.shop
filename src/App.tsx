import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './globals.css'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="theme flow.shop" defaultTheme="dark">
        <Helmet titleTemplate="%s | Flow.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
