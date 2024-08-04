import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '../get-day-orders-amount'

export const getDayOrdersAmountMock = http.post<
  never,
  never,
  GetDayOrdersAmountResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({ amount: 20, diffFromYesterday: -5 })
})