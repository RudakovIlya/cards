import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { TableSkeleton } from 'common'
import { EnhancedTableHead, HeadCellType } from 'common/components/table-header/EnhancedTableHead'
import { usePackCards } from 'features/pack'

const headCells: HeadCellType[] = [
  { id: 'question', label: 'Question' },
  { id: 'answer', label: 'Answer' },
  { id: 'updated', label: 'Last updated' },
  { id: 'grade', label: 'Grade' },
]

export const MyPackTable = () => {
  const { packCards, removeCard, updateCurrentCard, isMe, status, pageCount } = usePackCards()

  const handleRequestSort = () => {}

  const packItems = packCards.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <div style={{ display: 'flex', height: '35px' }}>{p.question}</div>
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.answer}
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.updated?.slice(0, 10)}
      </TableCell>
      <TableCell
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        align="left"
      >
        <Rating name="read-only" value={p.grade} readOnly />
        {isMe && (
          <span>
            <IconButton onClick={updateCurrentCard(p._id)}>
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton onClick={removeCard(p._id)}>
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
            <EnhancedTableHead onSortPackList={handleRequestSort} headCells={headCells} />
            <TableBody>
              {status === 'succeeded' && packItems}
              {status === 'loading' && <TableSkeleton amountRow={pageCount} />}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
