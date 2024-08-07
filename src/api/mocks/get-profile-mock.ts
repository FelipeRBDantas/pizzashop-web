import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Felipe Dantas',
      email: 'feliperbdantas@gmail.com',
      phone: '11999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
