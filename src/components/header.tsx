import { Separator } from '@radix-ui/react-separator'
import { Home, Pyramid, ShoppingCart } from 'lucide-react'
import { NavLink } from './nav-link'
import { ModeToggle } from './theme/mode-toggle'
import { AccountMenu } from './account-menu'

export function Header() {
  return (
    <div className="border-b">
      <div className=" flex h-16 items-center gap-6 px-6">
        <Pyramid className="w-4 h-4" />
        <Separator orientation="vertical" className="h-6 w-0.5 bg-muted" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="w-4 h-4" />
            Início
          </NavLink>

          <NavLink to="/orders">
            <ShoppingCart className="w-4 h-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
