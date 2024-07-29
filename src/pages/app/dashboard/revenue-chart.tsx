import { useQuery } from '@tanstack/react-query'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { GetDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Label } from '@/components/ui/label'

export function RevenueChart() {
  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period'],
    queryFn: GetDailyRevenueInPeriod,
  })

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>

          <CardDescription>Receita diária no período</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label>Período</Label>

          <DateRangePicker />
        </div>
      </CardHeader>

      <CardContent>
        {dailyRevenueInPeriod && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={110}
                tickMargin={16}
                tickFormatter={(value: number) =>
                  `R$ ${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
                }
              />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet[500]}
              />

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                className="stroke-muted"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
