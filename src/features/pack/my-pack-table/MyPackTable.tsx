import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { EnhancedTableContent } from 'common/components/table-content/EnhancedTableContent'
import { HeadCellType } from 'common/components/table-header/EnhancedTableHead'
import { usePackCards } from 'features/pack'

export const MyPackTable = () => {
  const { packCards, removeCard, updateCurrentCard, isMe, status, pageCount } = usePackCards()
  const headCells: HeadCellType[] = [
    { id: 'question', label: 'Question' },
    { id: 'answer', label: 'Answer' },
    { id: 'updated', label: 'Last updated' },
    { id: 'grade', label: 'Grade' },
  ]
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
    <EnhancedTableContent status={status} headCells={headCells} pageCount={pageCount}>
      {packItems}
    </EnhancedTableContent>
  )
}
