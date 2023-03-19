import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { TableSkeleton } from 'common'
import { EnhancedTableHead, HeadCellType } from 'common/components/table-header/EnhancedTableHead'
import { useFilters, usePackList } from 'features/packs-list'
import { useProfile } from 'features/profile'

const headCells: HeadCellType[] = [
  { id: 'name', label: 'Name' },
  { id: 'cardsCount', label: 'Cards' },
  { id: 'updated', label: 'Last updated' },
  { id: 'user_name', label: 'Created by' },
  { id: 'empty', label: 'Actions' },
]

export const PackTable = () => {
  const userProfileData = useProfile()
  const { status, cardPacks, pageCount, editPack, removePack, navigateToCards } = usePackList()

  const { onSortPackTable } = useFilters()

  const packItems = cardPacks.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <div style={{ display: 'flex', height: '35px' }}>
          {p.deckCover && <img alt="img" src={p.deckCover} />}
          <button onClick={navigateToCards(p._id)}>{p.name}</button>
        </div>
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.cardsCount}
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.updated?.slice(0, 10)}
      </TableCell>
      <TableCell align="left">{p.user_name}</TableCell>
      <TableCell align="left">
        <IconButton onClick={() => {}}>
          <SchoolOutlinedIcon />
        </IconButton>

        {userProfileData._id === p.user_id && (
          <span>
            <IconButton onClick={editPack(p._id)}>
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton onClick={removePack(p._id)}>
              <DeleteOutlinedIcon />
            </IconButton>
          </span>
        )}
      </TableCell>
    </TableRow>
  ))

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead headCells={headCells} onSortPackList={onSortPackTable} />
            <TableBody>
              {status === 'loading' && <TableSkeleton amountRow={pageCount} />}
              {status === 'succeeded' && packItems}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
