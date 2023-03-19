import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { EnhancedTableContent } from 'common/components/table-content/EnhancedTableContent'
import { HeadCellType } from 'common/components/table-header/EnhancedTableHead'
import { usePackList } from 'features/packs-list'
import { useProfile } from 'features/profile'

export const PackTable = () => {
  const userProfileData = useProfile()
  const { status, cardPacks, pageCount, editPack, removePack, navigateToCards } = usePackList()
  const headCells: HeadCellType[] = [
    { id: 'name', label: 'Name' },
    { id: 'cardsCount', label: 'Cards' },
    { id: 'updated', label: 'Last updated' },
    { id: 'user_name', label: 'Created by' },
    { id: 'empty', label: 'Actions' },
  ]
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
        <IconButton disabled={p.cardsCount === 0} onClick={() => {}}>
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
    <EnhancedTableContent status={status} headCells={headCells} pageCount={pageCount}>
      {packItems}
    </EnhancedTableContent>
  )
}
