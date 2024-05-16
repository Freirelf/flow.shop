import { Outlet } from 'react-router-dom'
import { Store } from 'lucide-react'

function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground ">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Store className="w-5 h-5" />
          <span className="font-semibold">flow.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; flow.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col justify-center items-center relative">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
