import { appError, appInfoMessage, appStatus } from 'app/selectors'
import { useAppSelector } from 'common'

export const useAppData = () => {
  const error = useAppSelector(appError)
  const infoMessage = useAppSelector(appInfoMessage)
  const status = useAppSelector(appStatus)

  return { error, infoMessage, status }
}
