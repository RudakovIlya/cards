import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { Empty, EnhancedTableContent, HeadCellType, NotFindAnything, styleForIcons } from 'common'
import { useModals } from 'features/modals'
import { usePackCards, usePackFilters } from 'features/pack'

export const MyPackTable = () => {
  const { packCards, isMe, status, pageCount } = usePackCards()
  const headCells: HeadCellType[] = [
    { id: 'question', label: 'Question' },
    { id: 'answer', label: 'Answer' },
    { id: 'updated', label: 'Last updated' },
    { id: 'grade', label: 'Grade' },
  ]
  const { onSortCardsTable, searchValue } = usePackFilters()

  const { showModal } = useModals()

  const packItems = packCards.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: ' ellipsis',
          }}
        >
          {p.questionImg ? (
            <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={p.questionImg} />
          ) : (
            p.question
          )}
        </div>
      </TableCell>
      <TableCell align="left">
        {p.answerImg ? (
          <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={p.answerImg} />
        ) : (
          p.answer
        )}
      </TableCell>
      <TableCell align="left">{p.updated?.slice(0, 10)}</TableCell>
      <TableCell
        align="left"
        sx={{
          display: 'table-cell',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Rating sx={styleForIcons} name="read-only" value={p.grade} readOnly />
          {isMe && (
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <IconButton
                sx={styleForIcons}
                onClick={showModal('edit', {
                  _id: p._id,
                  answer: p.answer,
                  question: p.question,
                  questionImg: p.questionImg,
                  answerImg: p.answerImg,
                })}
              >
                <BorderColorOutlinedIcon />
              </IconButton>
              <IconButton onClick={showModal('delete', p)}>
                <DeleteOutlinedIcon />
              </IconButton>
            </span>
          )}
        </div>
      </TableCell>
    </TableRow>
  ))

  return (
    <>
      <EnhancedTableContent
        sortTableHandler={onSortCardsTable}
        status={status}
        headCells={headCells}
        pageCount={pageCount}
      >
        {packItems}
      </EnhancedTableContent>
      {!packCards.length && searchValue && <NotFindAnything status={status} value={searchValue} />}
      {status === 'succeeded' && !packCards.length && <Empty />}
    </>
  )
}
