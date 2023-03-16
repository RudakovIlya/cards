import {
  AddPackRequestType,
  AddPackType,
  DeleteResponseType,
  UpdatePackRequestType,
  UpdateResponseType,
} from './types'

import { instance } from 'common/api-instance/api-instance'
import { PackListResponse, QueryParams } from 'features/packs-list'

export const packListAPI = {
  getPackList(params?: Partial<QueryParams>) {
    return instance.get<PackListResponse>('cards/pack', {
      params: {
        ...params,
      },
    })
  },
  addPack(data: AddPackRequestType) {
    return instance.post<AddPackType>('cards/pack', data)
  },
  deletePack(id: string) {
    return instance.delete<DeleteResponseType>(`/cards/pack?id=${id}`)
  },
  updatePack(data: UpdatePackRequestType) {
    return instance.put<UpdateResponseType>('cards/pack', data)
  },
}
