import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-4"
        >
          Flow shop
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Lucas Freire</span>
          <span className="text-xs font-normal text-muted-foreground">
            lucasfreirel.dev@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-muted w-full h-0.5" />
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span> Perfil da loja </span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span> Sair </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
