import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import { TableContent } from 'features/packs-list/pack-table-content/TableContent'
import { TableHeader } from 'features/packs-list/pack-table-header/TableHeader'

export const PackTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHeader />
          <TableContent />
        </Table>
      </TableContainer>
    </div>
  )
}
