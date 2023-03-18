import { useState } from 'react'

import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'

type Order = 'asc' | 'desc'

export type HeadCellType = {
  id: string
  label: string
}

type EnhancedTableProps = {
  headCells: HeadCellType[]
  onSortPackTable: (PackTableHeaderData: string) => void
}

export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { headCells, onSortPackTable } = props

  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>(headCells[0].id)

  const onClickSortHandler = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
    onSortPackTable((isAsc ? '0' : '1') + property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells?.map(headCell => (
          <TableCell
            key={headCell.id as string}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.id === 'empty' ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => onClickSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
