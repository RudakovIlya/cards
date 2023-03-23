import { UpdateGradeRequestType } from '../types'

import { instance } from 'common'

export const learnApi = {
  updateGrade(data: UpdateGradeRequestType) {
    return instance.put<UpdateGradeRequestType>('cards/grade', data)
  },
}
