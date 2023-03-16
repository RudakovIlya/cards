import * as React from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'

import pack_table_delete from 'assets/img/pack-table-delete.svg'
import pack_table_edit from 'assets/img/pack-table-edit.svg'
import pack_table_teacher from 'assets/img/pack-table-teacher.svg'
import { useAppDispatch } from 'common'
import { deletePack, updatePack } from 'features/packs-list/pack-listSlice'
import { usePackList } from 'features/packs-list/use-packlist'
import { useProfile } from 'features/profile'

type Order = 'asc' | 'desc'

type Data = {
  name: string
  cardsCount: string
  updated: string
  user_name: string
  empty: string
}

type HeadCell = {
  id: keyof Data
  label: string
}

const headCells: readonly HeadCell[] = [
  { id: 'name', label: 'Name' },
  { id: 'cardsCount', label: 'Cards' },
  { id: 'updated', label: 'Last updated' },
  { id: 'user_name', label: 'Created by' },
  { id: 'empty', label: 'Actions' },
]

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  order: Order
  orderBy: string
  rowCount: number
}

export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, onRequestSort } = props

  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells?.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export const PackTable = () => {
  const userProfileData = useProfile()
  const packList = usePackList()

  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name')
  const dispatch = useAppDispatch()
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  const onClickNavigateToCardsHandler = () => {}
  const onClickLearnHandler = () => {}

  const onClickEditPackHandler = (id: string) => {
    return () =>
      dispatch(updatePack({ cardsPack: { name: 'New Name(Жоские)', _id: id, deckCover: '' } }))
  }

  const onClickDeletePackHandler = (id: string) => {
    return () => dispatch(deletePack(id))
  }

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
              {packList.map(p => (
                <TableRow hover key={p._id}>
                  <TableCell component="th" scope="row">
                    <div style={{ display: 'flex', height: '35px' }}>
                      {p.deckCover && <img alt="img" src={p.deckCover} />}
                      <div>{p.name}</div>
                    </div>
                  </TableCell>
                  <TableCell onClick={() => onClickNavigateToCardsHandler()} align="left">
                    {p.cardsCount}
                  </TableCell>
                  <TableCell onClick={() => onClickNavigateToCardsHandler()} align="left">
                    {p.updated.slice(0, 10)}
                  </TableCell>
                  <TableCell onClick={() => onClickNavigateToCardsHandler()} align="left">
                    {p.user_name}
                  </TableCell>
                  <TableCell align="left">
                    <>
                      <span>
                        <img
                          style={{ paddingLeft: '10px', cursor: 'pointer' }}
                          src={pack_table_teacher}
                          alt="edit"
                          onClick={() => onClickLearnHandler()}
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
