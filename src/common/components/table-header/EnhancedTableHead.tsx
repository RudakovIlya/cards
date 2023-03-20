import { FC, useState } from 'react'

import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'

import { StatusType } from 'common/types'

type Order = 'asc' | 'desc'

export type HeadCellType = {
  id: string
  label: string
}

type EnhancedTableProps = {
  headCells: HeadCellType[]
  onSortPackList: (TableHeaderData: string) => void
  status: StatusType
}

export const EnhancedTableHead: FC<EnhancedTableProps> = ({
  headCells,
  onSortPackList,
  status,
}) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>(headCells[0].id)

  const onClickSortHandler = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
    onSortPackList((isAsc ? '0' : '1') + property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells?.map(headCell => (
          <TableCell
            sx={{ '&:first-of-type': { width: '350px' } }} // Фанур я тут поменял, что бы не было warning-ов
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.id === 'empty' ? (
              headCell.label
            ) : (
              <TableSortLabel
                disabled={status === 'loading'}
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
