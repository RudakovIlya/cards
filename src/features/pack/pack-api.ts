import { instance } from 'common'
import {
  AddCardRequestType,
  PackResponse,
  QueryPackParams,
  UpdateCardRequestType,
} from 'features/pack'

export const packAPI = {
  getPack(params: Partial<QueryPackParams> = {}) {
    return instance.get<PackResponse>('cards/card', {
      params,
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
