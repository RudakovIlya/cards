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
}
