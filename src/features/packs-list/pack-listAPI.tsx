import { AddPackRequestType, AddPackType, UpdatePackRequestType } from './types'

import { instance } from 'common/api-instance/api-instance'
import { PackListResponse, QueryParams } from 'features/packs-list'

export const packListAPI = {
  getPackList(params?: QueryParams) {
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
    return instance.delete(`/cards/pack?id=${id}`)
  },
  updatePack(data: UpdatePackRequestType) {
    return instance.put('cards/pack', data)
  },
}
