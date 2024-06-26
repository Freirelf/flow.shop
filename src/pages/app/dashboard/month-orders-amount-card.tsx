import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingCart } from 'lucide-react'

function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">200</span>
        <p className="text-sx text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+4%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}

export default MonthOrdersAmountCard
