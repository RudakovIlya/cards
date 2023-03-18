import { MouseEvent, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
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
import { TableSkeleton } from 'common'
import { usePackCards } from 'features/pack'

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
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void
  order: Order
  orderBy: string
  rowCount: number
}

export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, onRequestSort } = props

  const createSortHandler = (property: keyof Data) => (event: MouseEvent<unknown>) => {
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
  const { packCards, removeCard, updateCurrentCard, isMe, status } = usePackCards()
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('question')
  const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const packItems = packCards.map(p => (
    <TableRow hover key={p._id}>
      <TableCell component="th" scope="row">
        <div style={{ display: 'flex', height: '35px' }}>{p.question}</div>
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.answer}
      </TableCell>
      <TableCell onClick={() => {}} align="left">
        {p.updated?.slice(0, 10)}
      </TableCell>
      <TableCell align="left">
        <Rating name="read-only" value={p.grade} readOnly />
      </TableCell>
      <TableCell align="left">
        <>
          {isMe && (
            <>
              <span>
                <img
                  style={{ paddingLeft: '15px', cursor: 'pointer' }}
                  src={pack_table_edit}
                  alt="edit"
                  onClick={updateCurrentCard(p._id)}
                />
                <img
                  style={{ paddingLeft: '15px', cursor: 'pointer' }}
                  src={pack_table_delete}
                  alt="delete"
                  onClick={removeCard(p._id)}
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
              {status === 'succeeded' && packItems}
              {status === 'loading' && <TableSkeleton />}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
