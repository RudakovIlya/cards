import { FC } from 'react'

import arrow_to_left from 'assets/img/arrow_to_left.svg'

type NavigationToBackType = {
  onClick: () => void
}

export const NavigationToBack: FC<NavigationToBackType> = ({ onClick }) => {
  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginTop: '24px',
      }}
      onClick={onClick}
    >
      <img src={arrow_to_left} alt="arrow" style={{ marginRight: '10px' }} /> Back to Packs List
    </div>
  )
}
