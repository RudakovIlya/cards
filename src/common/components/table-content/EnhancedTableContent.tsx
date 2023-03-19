import { FC } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

import { EnhancedTableHead, HeadCellType } from 'common/components/table-header/EnhancedTableHead'
import { TableSkeleton } from 'common/components/table-skeleton/TableSkeleton'
import { useFilters } from 'features/packs-list'
import { StatusType } from 'features/packs-list/types'

type TableContentPropsType = {
  headCells: HeadCellType[]
  status: StatusType
  pageCount: number
  children?: any
}

export const EnhancedTableContent: FC<TableContentPropsType> = ({
  headCells,
  status,
  pageCount,
  children,
}) => {
  const { onSortPackTable } = useFilters()

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead headCells={headCells} onSortPackList={onSortPackTable} />
            <TableBody>
              {status === 'loading' && <TableSkeleton amountRow={pageCount} />}
              {status === 'succeeded' && children}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
