import { FC } from 'react'

import {
  styleContainerForNotFind,
  styleContentForNotFind,
  styleSpanForNotFind,
} from 'common/components/table-content/tableStyles'
import { StatusType } from 'common/types'

type PropsType = {
  status: StatusType
  value: string
}

export const NotFindAnything: FC<PropsType> = ({ status, value }) => {
  return (
    <div style={styleContainerForNotFind}>
      {status !== 'loading' && (
        <div>
          <div style={styleContentForNotFind}>
            We could not find anything for <span style={styleSpanForNotFind}>{`"${value}"`}</span>
          </div>
          <div>Try different or less specific keywords.</div>
        </div>
      )}
    </div>
  )
}
