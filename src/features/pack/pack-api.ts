import { AddCardRequestType, UpdateCardRequestType } from './types'

import { instance } from 'common/api-instance/api-instance'
import { PackResponse, QueryPackParams } from 'features/pack'

export const packAPI = {
  getPack(params: Partial<QueryPackParams> = {}) {
    return instance.get<PackResponse>('cards/card', {
      params: {
        ...params,
      },
    })
  },
  addCard(data: AddCardRequestType) {
    return instance.post<'', AddCardRequestType>('cards/card', data)
  },
  deleteCard(id: string) {
    return instance.delete(`cards/card/?id=${id}`)
  },
  updateCard(data: UpdateCardRequestType) {
    return instance.put<'', UpdateCardRequestType>('cards/card', data)
  },
}
