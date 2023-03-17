import { FC } from 'react'

import Skeleton from '@mui/material/Skeleton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

type TableSkeletonType = {
  amountRow?: number
  amountCell?: number
}

export const TableSkeleton: FC<TableSkeletonType> = ({ amountRow = 6, amountCell = 5 }) => {
  const skeletItem = Array.from(new Array(amountRow)).map((item, index) => {
    return (
      <TableRow key={index}>
        {Array.from(new Array(amountCell)).map((cell, i) => {
          return (
            <TableCell key={i} component="th" scope="row">
              <Skeleton />
            </TableCell>
          )
        })}
      </TableRow>
    )
  })

  return <>{skeletItem}</>
}
