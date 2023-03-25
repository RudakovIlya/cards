import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { HeadCellType, EnhancedTableContent, styleForIcons } from 'common'
import { NotFindAnything } from 'common/components/table-content/NotFindAnything'
import { useModals } from 'features/modals'
import { useFilters, usePackList } from 'features/packs-list'
import { useProfile } from 'features/profile'

export const PackTable = () => {
  const headCells: HeadCellType[] = [
    { id: 'name', label: 'Name' },
    { id: 'cardsCount', label: 'Cards' },
    { id: 'updated', label: 'Last updated' },
    { id: 'user_name', label: 'Created by' },
    { id: 'empty', label: 'Actions' },
  ]

  const { showModal } = useModals()
  const userProfileData = useProfile()
  const { status, cardPacks, pageCount, navigateToCards, navigateToLearn } = usePackList()
  const { onSortPackTable, packName } = useFilters()

  const packItems = cardPacks.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <Box>
          <button
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: ' ellipsis',
              maxWidth: 320,
            }}
            onClick={navigateToCards(p._id)}
          >
            {p.name}
          </button>
          {p.deckCover && (
            <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={p.deckCover} />
          )}
        </Box>
      </TableCell>
      <TableCell align="left">{p.cardsCount}</TableCell>
      <TableCell align="left">{p.updated?.slice(0, 10)}</TableCell>
      <TableCell align="left">{p.user_name}</TableCell>
      <TableCell align="left" sx={{ padding: '10px 16px' }}>
        <IconButton
          sx={styleForIcons}
          disabled={p.cardsCount === 0}
          onClick={() => navigateToLearn(p._id)}
        >
          <SchoolOutlinedIcon />
        </IconButton>

        {userProfileData._id === p.user_id && (
          <span>
            <IconButton
              sx={styleForIcons}
              onClick={showModal('edit', { name: p.name, _id: p._id })}
            >
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton
              sx={styleForIcons}
              onClick={showModal('delete', { name: p.name, _id: p._id })}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </span>
        )}
      </TableCell>
    </TableRow>
  ))

  return (
    <div>
      <EnhancedTableContent
        sortTableHandler={onSortPackTable}
        status={status}
        headCells={headCells}
        pageCount={pageCount}
      >
        {packItems}
      </EnhancedTableContent>
      {!cardPacks.length && <NotFindAnything status={status} value={packName} />}
    </div>
  )
}
