import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export const TableHeader = () => {
  const rows = [
    { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'Frozen ', calories: 15, fat: 6.5, carbs: 26, protein: 5.0 },
    { name: 'yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'yo', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'la la', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  ]

  const cardPacks = [
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
  ]

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#EFEFEF' }}>
        <TableCell align={'left'}>Name</TableCell>
        <TableCell align={'left'}>Cards</TableCell>
        <TableCell align={'left'}>Last Updated</TableCell>
        <TableCell align={'left'}>Created by</TableCell>
        <TableCell align={'left'}>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}
