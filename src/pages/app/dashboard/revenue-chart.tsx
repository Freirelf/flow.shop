import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  YAxis,
} from 'recharts'

import colors from 'tailwindcss/colors'

const data = [
  { date: '01-03', revenue: 1000 },
  { date: '02-03', revenue: 890 },
  { date: '03-03', revenue: 2000 },
  { date: '04-03', revenue: 2400 },
  { date: '05-03', revenue: 1600 },
  { date: '06-03', revenue: 960 },
  { date: '07-03', revenue: 2200 },
]

function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Recita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              dataKey="revenue"
              strokeWidth={2}
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default RevenueChart
