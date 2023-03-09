import { AxiosError, isAxiosError } from 'axios'

export const errorUtils = (e: unknown) => {
  const err = e as Error | AxiosError

  if (isAxiosError(err)) {
    return err.response?.data ? (err.response.data as { error: string }).error : err.message
  } else {
    return `Native error ${err.message}`
  }
}
