import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'

import { TableContent } from 'features/packs-list/pack-table-content/TableContent'
import { TableHeader } from 'features/packs-list/pack-table-header/TableHeader'

export const PackTable = () => {
  const onClickHandler = () => {}

  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: '30px' }}>
        <Button onClick={onClickHandler} size={'medium'} variant={'radius'}>
          Add new pack
        </Button>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHeader />
            <TableContent />
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
