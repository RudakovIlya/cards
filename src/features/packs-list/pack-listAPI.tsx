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
}
