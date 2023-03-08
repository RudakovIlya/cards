import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

export const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return createPortal(children, container)
}
