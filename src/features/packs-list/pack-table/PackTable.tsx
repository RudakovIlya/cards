import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { EnhancedTableContent } from 'common/components/table-content/EnhancedTableContent'
import { styleForIcons } from 'common/components/table-content/tableStyles'
import { HeadCellType } from 'common/components/table-header/EnhancedTableHead'
import { TableSkeleton, EnhancedTableHead, HeadCellType } from 'common'
import { useModals } from 'features/modals'
import { useFilters, usePackList } from 'features/packs-list'
import { useProfile } from 'features/profile'

export const PackTable = () => {
  const userProfileData = useProfile()
  const { status, cardPacks, pageCount, editPack, removePack, navigateToCards } = usePackList()
  const { onSortPackTable } = useFilters()
  const headCells: HeadCellType[] = [
    { id: 'name', label: 'Name' },
    { id: 'cardsCount', label: 'Cards' },
    { id: 'updated', label: 'Last updated' },
    { id: 'user_name', label: 'Created by' },
    { id: 'empty', label: 'Actions' },
  ]

export const PackTable = () => {
  const userProfileData = useProfile()
  const { status, cardPacks, pageCount, navigateToCards } = usePackList()
  const { showModal } = useModals()
  const { onSortPackTable } = useFilters()

  const packItems = cardPacks.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <div style={{ display: 'flex' }}>
          <button onClick={navigateToCards(p._id)}>{p.name}</button>
          {p.deckCover && (
            <img style={{ height: '35px', marginLeft: '20px' }} alt="img" src={p.deckCover} />
          )}
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
        <IconButton sx={styleForIcons} disabled={p.cardsCount === 0} onClick={() => {}}>
          <SchoolOutlinedIcon />
        </IconButton>

        {userProfileData._id === p.user_id && (
          <span>
            <IconButton sx={styleForIcons} onClick={showModal('edit', p)}>
              <BorderColorOutlinedIcon />
            </IconButton>
            <IconButton sx={styleForIcons} onClick={showModal('edit', p)}>
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
