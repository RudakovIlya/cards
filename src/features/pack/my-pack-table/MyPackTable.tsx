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

import { TableSkeleton, EnhancedTableHead, HeadCellType } from 'common'
import { useModals } from 'features/modals'
import { usePackCards } from 'features/pack'

const headCells: HeadCellType[] = [
  { id: 'question', label: 'Question' },
  { id: 'answer', label: 'Answer' },
  { id: 'updated', label: 'Last updated' },
  { id: 'grade', label: 'Grade' },
  { id: 'empty', label: '' },
]

export const MyPackTable = () => {
  const { packCards, isMe, status, pageCount } = usePackCards()
  const handleRequestSort = () => {}

  const { showModal } = useModals()

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
            <IconButton onClick={showModal('edit', p)}>
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton onClick={showModal('delete', p)}>
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
            <EnhancedTableHead headCells={headCells} onSortPackList={handleRequestSort} />
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
