import { FC } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

import { EnhancedTableHead, HeadCellType, TableSkeleton } from 'common'
import { StatusType } from 'common/types'

type TableContentPropsType = {
  headCells: HeadCellType[]
  status: StatusType
  pageCount: number
  sortTableHandler: (TableHeaderData: string) => void
  children?: JSX.Element[]
}

export const EnhancedTableContent: FC<TableContentPropsType> = ({
  headCells,
  status,
  pageCount,
  children,
  sortTableHandler,
}) => {
  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
          <EnhancedTableHead
            status={status}
            headCells={headCells}
            onSortPackList={sortTableHandler}
          />
          <TableBody sx={{ height: 'inherit' }}>
            {status === 'loading' && (
              <TableSkeleton amountRow={pageCount} amountCell={headCells.length} />
            )}
            {status !== 'loading' && children}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
