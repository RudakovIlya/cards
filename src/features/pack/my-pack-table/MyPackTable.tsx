import * as React from 'react'
import { useEffect } from 'react'

import Box from '@mui/material/Box'
import { idID } from '@mui/material/locale'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'
import { useNavigate } from 'react-router-dom'

import { usePackCards } from '../use-pack-cards'

import pack_table_delete from 'assets/img/pack-table-delete.svg'
import pack_table_edit from 'assets/img/pack-table-edit.svg'
import pack_table_teacher from 'assets/img/pack-table-teacher.svg'
import { useProfile } from 'features/profile'
type Order = 'asc' | 'desc'

type Data = {
  question: string
  answer: string
  updated: string
  grade: string
}

type HeadCell = {
  id: keyof Data
  label: string
}

const headCells: readonly HeadCell[] = [
  { id: 'question', label: 'Question' },
  { id: 'answer', label: 'Answer' },
  { id: 'updated', label: 'Last updated' },
  { id: 'grade', label: 'Grade' },
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

export const MyPackTable = () => {
  const { packCards } = usePackCards()
  const userProfileData = useProfile()
  const navigate = useNavigate()
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('question')
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const onClickNavigateToCardsHandler = (id: string) => {
    return () => navigate(`/pack/${id}`)
  }

  // const onClickEditPackHandler = (id: string) => {
  //   return () =>
  //     dispatch(
  //       updatePack({
  //         cardsPack: { name: `New Name(Жоские) ${Math.random()}`, _id: id, deckCover: '' },
  //       })
  //     )
  // }
  //
  // const onClickDeletePackHandler = (id: string) => {
  //   return () => dispatch(deletePack(id))
  // }

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
              {packCards?.map(p => (
                <TableRow hover key={p._id}>
                  <TableCell component="th" scope="row">
                    <div style={{ display: 'flex', height: '35px' }}>
                      {/*{p.deckCover && <img alt="img" src={p.deckCover} />}*/}
                    </div>
                  </TableCell>
                  <TableCell onClick={() => {}} align="left">
                    {/*{p.cardsCount}*/}
                  </TableCell>
                  <TableCell onClick={() => {}} align="left">
                    {p.updated?.slice(0, 10)}
                  </TableCell>
                  <TableCell align="left">{p.cardsPack_id}</TableCell>
                  <TableCell align="left">
                    <>
                      <span>
                        <img
                          style={{ paddingLeft: '10px', cursor: 'pointer' }}
                          src={pack_table_teacher}
                          alt="edit"
                          // onClick={() => onClickAddCardHandler()}
                        />
                      </span>
                      {userProfileData._id === p.user_id && (
                        <>
                          <span>
                            <img
                              style={{ paddingLeft: '15px', cursor: 'pointer' }}
                              src={pack_table_edit}
                              alt="edit"
                              // onClick={onClickEditPackHandler(p._id)}
                            />
                            <img
                              style={{ paddingLeft: '15px', cursor: 'pointer' }}
                              src={pack_table_delete}
                              alt="delete"
                              // onClick={onClickDeletePackHandler(p._id)}
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
