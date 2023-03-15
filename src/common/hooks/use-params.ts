import { useSearchParams } from 'react-router-dom'

export const useParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  return {
    params,
    setSearchParams,
  }
}
