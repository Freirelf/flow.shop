import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingCart } from 'lucide-react'

function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">20</span>
        <p className="text-sx text-muted-foreground">
          <span className="text-red-500 dark:text-red-400">-3%</span> em relação
          a ontem
        </p>
      </CardContent>
    </Card>
  )
}

export default DayOrdersAmountCard
