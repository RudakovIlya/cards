import { instance } from 'common'
import { UpdateGradeRequestType, UpdateGradeResponseType } from 'features/pack'

export const learnAPI = {
  updateGrade(data: UpdateGradeRequestType) {
    return instance.put<UpdateGradeResponseType>('cards/grade', data)
  },
}
