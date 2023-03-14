import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { EditAndDeleteButton } from 'common/components/pack-table-buttons/EditAndDeleteButton'
import { TeachButton } from 'common/components/pack-table-buttons/TeachButton'
import { usePackList } from 'features/packs-list/use-packlist'
import { useProfile } from 'features/profile'

export const TableContent = () => {
  const userProfileData = useProfile()

  const packList = usePackList()

  const packs = packList?.map(row => (
    <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="left">{row.cardsCount}</TableCell>
      <TableCell align="left">{row.updated.slice(0, 10)}</TableCell>
      <TableCell align="left">{row.user_name}</TableCell>
      <TableCell align="left">
        <TeachButton />
        {userProfileData._id === row.user_id ? <EditAndDeleteButton /> : ''}
      </TableCell>
    </TableRow>
  ))

  return <TableBody>{packs}</TableBody>
}
