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
        {headCells.map(headCell => (
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

  /*const packList = [
    {
      _id: '6412152d9c62a1934d54ec44',
      user_id: '640a6d447b509e27c30eedb8',
      user_name: 'Sergey',
      name: 'New Added Pack',
      private: false,
      path: '/def',
      grade: 0,
      shots: 0,
      cardsCount: 0,
      type: 'pack',
      rating: 0,
      more_id: '640a6d447b509e27c30eedb8',
      created: '2023-03-15T18:57:49.967Z',
      updated: '2023-03-15T18:57:49.967Z',
      __v: 0,
      deckCover: 'url or base64',
    },
    {
      _id: '641214e79c62a1934d54ec38',
      user_id: '640a6d447b509e27c30eedb8',
      user_name: 'nergey',
      name: 'New Added Pack',
      private: false,
      path: '/def',
      grade: 0,
      shots: 0,
      cardsCount: 0,
      type: 'pack',
      rating: 0,
      more_id: '640a6d447b509e27c30eedb8',
      created: '2023-03-15T18:56:39.002Z',
      updated: '2023-03-15T18:56:39.002Z',
      __v: 0,
      deckCover: 'url or base64',
    },
    {
      _id: '641214d99c62a1934d54ec2c',
      user_id: '640a6d447b509e27c30eedb8',
      user_name: 'rergey',
      name: 'New Added Pack',
      private: false,
      path: '/def',
      grade: 0,
      shots: 0,
      cardsCount: 0,
      type: 'pack',
      rating: 0,
      more_id: '640a6d447b509e27c30eedb8',
      created: '2023-03-15T18:56:25.888Z',
      updated: '2023-03-15T18:56:25.888Z',
      __v: 0,
      deckCover: 'url or base64',
    },
    {
      _id: '641213829c62a1934d54ebe1',
      user_id: '640a6d447b509e27c30eedb8',
      user_name: 'Sergey',
      name: 'New Added Pack',
      private: false,
      path: '/def',
      grade: 0,
      shots: 0,
      cardsCount: 0,
      type: 'pack',
      rating: 0,
      more_id: '640a6d447b509e27c30eedb8',
      created: '2023-03-15T18:50:42.292Z',
      updated: '2023-03-15T18:50:42.292Z',
      __v: 0,
      deckCover: 'url or base64',
    },
  ]*/

  console.log(packList)
  console.log(userProfileData)
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name')

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  const onClickNavigateToCardsHandler = () => {}
  const onClickLearnHandler = () => {}
  const onClickEditPackHandler = () => {}
  const onClickDeletePackHandler = () => {}

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
                              onClick={() => onClickEditPackHandler()}
                            />
                            <img
                              style={{ paddingLeft: '15px', cursor: 'pointer' }}
                              src={pack_table_delete}
                              alt="delete"
                              onClick={() => onClickDeletePackHandler()}
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
