import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { EnhancedTableContent } from 'common/components/table-content/EnhancedTableContent'
import { styleForIcons } from 'common/components/table-content/tableStyles'
import { HeadCellType } from 'common/components/table-header/EnhancedTableHead'
import { usePackCards, usePackFilters } from 'features/pack'

export const MyPackTable = () => {
  const { packCards, removeCard, updateCurrentCard, isMe, status, pageCount } = usePackCards()
  const headCells: HeadCellType[] = [
    { id: 'question', label: 'Question' },
    { id: 'answer', label: 'Answer' },
    { id: 'updated', label: 'Last updated' },
    { id: 'grade', label: 'Grade' },
  ]
  const { onSortCardsTable } = usePackFilters()

  const packItems = packCards.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <div style={{ display: 'flex', width: '300px' }}>{p.question}</div>
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.answer}
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.updated?.slice(0, 10)}
      </TableCell>
      <TableCell align="left">
        <Rating sx={styleForIcons} name="read-only" value={p.grade} readOnly />
        {isMe && (
          <span>
            <IconButton sx={styleForIcons} onClick={updateCurrentCard(p._id)}>
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
    <EnhancedTableContent
      sortTableHandler={onSortCardsTable}
      status={status}
      headCells={headCells}
      pageCount={pageCount}
    >
      {packItems}
    </EnhancedTableContent>
  )
}
