import { instance } from 'common'
import {
  AddPackRequestType,
  AddPackType,
  DeleteResponseType,
  PackListResponseType,
  QueryParams,
  UpdatePackRequestType,
  UpdateResponseType,
} from 'features/packs-list'

export const packListAPI = {
  getPackList(params?: Partial<QueryParams>) {
    return instance.get<PackListResponseType>('cards/pack', {
      params,
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
