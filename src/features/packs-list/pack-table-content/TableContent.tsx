import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { EditAndDeleteButton } from 'common/components/pack-table-buttons/EditAndDeleteButton'
import { TeachButton } from 'common/components/pack-table-buttons/TeachButton'
import { useProfile } from 'features/profile'

export const TableContent = () => {
  const userProfileData = useProfile()
  const fakeResponse = {
    cardPacks: [
      {
        _id: '640ca35d893e3319116c9b63',
        user_id: '6408fef8827dd518fc9b22a3',
        user_name: 'Samuil Prytchyn',
        name: 'new pack',
        private: false,
        path: '/def',
        grade: 0,
        shots: 0,
        cardsCount: 14,
        type: 'pack',
        rating: 0,
        more_id: '6408fef8827dd518fc9b22a3',
        created: '2023-03-11T15:50:53.530Z',
        updated: '2023-03-12T14:53:24.794Z',
        __v: 0,
      },
      {
        _id: '640dd66e7584343427e853c4',
        user_id: '5eecf82a3ed8f700042f1186',
        user_name: 'MrsUnknown',
        name: 'new name',
        private: false,
        path: '/def',
        grade: 0,
        shots: 0,
        cardsCount: 0,
        type: 'pack',
        rating: 0,
        more_id: '5eecf82a3ed8f700042f1186',
        created: '2023-03-12T13:41:02.867Z',
        updated: '2023-03-12T13:41:02.867Z',
        __v: 0,
      },
      {
        _id: '640dcbd97584343427e85198',
        user_id: '6406456987d68b1aafff79c9',
        user_name: 'Yevhenii',
        name: 'Test pack',
        private: false,
        path: '/def',
        grade: 0,
        shots: 0,
        cardsCount: 0,
        deckCover: '/project_cards/static/media/defaultPackCover.ccd485605c656341ff4d.png',
        type: 'pack',
        rating: 0,
        more_id: '6406456987d68b1aafff79c9',
        created: '2023-03-12T12:55:53.952Z',
        updated: '2023-03-12T12:55:53.952Z',
        __v: 0,
      },
      {
        _id: '640dbdd17584343427e84e28',
        user_id: '63d415dfd2b4bd375c173591',
        user_name: 'RazDvaDaria',
        name: 'Когда вам нужно скопировать лист в Google Sheets?7',
        private: false,
        path: '/def',
        grade: 0,
        shots: 0,
        cardsCount: 1,
        deckCover: '',
        type: 'pack',
        rating: 0,
        more_id: '63d415dfd2b4bd375c173591',
        created: '2023-03-12T11:56:01.655Z',
        updated: '2023-03-12T11:56:14.514Z',
        __v: 0,
      },
    ],
    page: 1,
    pageCount: 4,
    cardPacksTotalCount: 4371,
    minCardsCount: 0,
    maxCardsCount: 110,
    token: 'c1fe6840-c0e6-11ed-96da-0100a5b7a40a',
    tokenDeathTime: 1679238084804,
  }

  return (
    <TableBody>
      {fakeResponse.cardPacks.map(row => (
        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="left">{row.cardsCount}</TableCell>
          <TableCell align="left">{row.updated.slice(0, 10)}</TableCell>
          <TableCell align="left">{row.user_name}</TableCell>
          <TableCell align="left">
            <TeachButton />
            {userProfileData._id !== row.user_id ? <EditAndDeleteButton /> : ''}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
