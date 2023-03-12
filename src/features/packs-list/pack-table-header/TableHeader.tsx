import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export const TableHeader = () => {
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#EFEFEF' }}>
        <TableCell align={'left'}>Name</TableCell>
        <TableCell align={'left'}>Cards</TableCell>
        <TableCell align={'left'}>Last Updated</TableCell>
        <TableCell align={'left'}>Created by</TableCell>
        <TableCell align={'left'}>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}
