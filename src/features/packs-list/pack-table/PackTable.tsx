import { MouseEvent, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import pack_table_delete from 'assets/img/pack-table-delete.svg'
import pack_table_edit from 'assets/img/pack-table-edit.svg'
import pack_table_teacher from 'assets/img/pack-table-teacher.svg'
import { TableSkeleton } from 'common'
import {
  Data,
  EnhancedTableHead,
  Order,
} from 'features/packs-list/pack-table/pack-table-header/EnhancedTableHead'
import { usePackList } from 'features/packs-list/use-packlist'
import { useProfile } from 'features/profile'

export const PackTable = () => {
  const userProfileData = useProfile()
  const {
    status,
    cardPacks,
    pageCount,
    onClickEditPackHandler,
    onClickDeletePackHandler,
    onClickNavigateToCardsHandler,
  } = usePackList()

  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('name')

  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const packItems = cardPacks.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <div style={{ display: 'flex', height: '35px' }}>
          {p.deckCover && <img alt="img" src={p.deckCover} />}
          <button onClick={onClickNavigateToCardsHandler(p._id)}>{p.name}</button>
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
        <>
          <span>
            <img
              style={{ paddingLeft: '10px', cursor: 'pointer' }}
              src={pack_table_teacher}
              alt="edit"
              onClick={() => {}}
            />
          </span>
          {userProfileData._id === p.user_id && (
            <>
              <span>
                <img
                  style={{ paddingLeft: '15px', cursor: 'pointer' }}
                  src={pack_table_edit}
                  alt="edit"
                  onClick={onClickEditPackHandler(p._id)}
                />
                <img
                  style={{ paddingLeft: '15px', cursor: 'pointer' }}
                  src={pack_table_delete}
                  alt="delete"
                  onClick={onClickDeletePackHandler(p._id)}
                />
              </span>
            </>
          )}
        </>
      </TableCell>
    </TableRow>
  ))

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={8}
            />
            <TableBody>
              {status === 'loading' && <TableSkeleton amountRow={pageCount} />}
              {status === 'succeeded' && packItems}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
