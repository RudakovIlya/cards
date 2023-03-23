import { instance } from 'common'
import { UpdateGradeRequestType, UpdateGradeResponseType } from 'features/pack/types'

export const learnApi = {
  updateGrade(data: UpdateGradeRequestType) {
    return instance.put<UpdateGradeResponseType>('cards/grade', data)
  },
}
