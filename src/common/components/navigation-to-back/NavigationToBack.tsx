import { useNavigate } from 'react-router-dom'

import arrow_to_left from 'assets/img/arrow_to_left.svg'
import { paths } from 'common/constants'

export const NavigationToBack = () => {
  const navigate = useNavigate()
  const returnToPackList = () => navigate(paths.PACK_LIST)

  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginTop: '24px',
      }}
      onClick={returnToPackList}
    >
      <img src={arrow_to_left} alt="arrow" style={{ marginRight: '10px' }} /> Back to Packs List
    </div>
  )
}
