import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { HeadCellType, EnhancedTableContent, styleForIcons } from 'common'
import { useModals } from 'features/modals'
import { useFilters, usePackList } from 'features/packs-list'
import { useProfile } from 'features/profile'

export const PackTable = () => {
  const userProfileData = useProfile()
  const { status, cardPacks, pageCount, navigateToCards } = usePackList()
  const { onSortPackTable } = useFilters()
  const headCells: HeadCellType[] = [
    { id: 'name', label: 'Name' },
    { id: 'cardsCount', label: 'Cards' },
    { id: 'updated', label: 'Last updated' },
    { id: 'user_name', label: 'Created by' },
    { id: 'empty', label: 'Actions' },
  ]

  const { showModal } = useModals()
export const PackTable = () => {
  const userProfileData = useProfile()
  const { status, cardPacks, pageCount, editPack, removePack, navigateToCards, navigateToLearn } =
    usePackList()
  const { onSortPackTable } = useFilters()

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
      <TableCell align="left">
        <IconButton sx={styleForIcons} disabled={p.cardsCount === 0} onClick={() => navigateToLearn(p._id)}>
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
    <EnhancedTableContent
      sortTableHandler={onSortPackTable}
      status={status}
      headCells={headCells}
      pageCount={pageCount}
    >
      {packItems}
    </EnhancedTableContent>
  )
}
