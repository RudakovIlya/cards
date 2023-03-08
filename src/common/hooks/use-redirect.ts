import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export const useRedirect = (to: string, condition: boolean) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (condition) {
      navigate(to)
    }
  }, [condition])
}
