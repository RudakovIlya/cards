import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { styleForIcons } from 'common/components/table-content/tableStyles'
import { usePackCards, usePackFilters } from 'features/pack'
import { TableSkeleton, EnhancedTableHead, HeadCellType } from 'common'
import { useModals } from 'features/modals'
import { EnhancedTableContent } from 'common/components/table-content/EnhancedTableContent'

export const MyPackTable = () => {
  const { packCards, isMe, status, pageCount } = usePackCards()
  const headCells: HeadCellType[] = [
    { id: 'question', label: 'Question' },
    { id: 'answer', label: 'Answer' },
    { id: 'updated', label: 'Last updated' },
    { id: 'grade', label: 'Grade' },
  ]
  const { onSortCardsTable } = usePackFilters()

  const { showModal } = useModals()

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
            <IconButton sx={styleForIcons} onClick={showModal('edit', p)}>
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
