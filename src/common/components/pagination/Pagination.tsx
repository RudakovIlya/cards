import { ChangeEvent, FC, MouseEvent } from 'react'

import TablePagination from '@mui/material/TablePagination'

type PaginationType = {
  page: number // страницы
  rows: number // кол-во рядов
  count: number // общее кол-во
  onChange: (page: number) => void
  onChangePageCount: (pageCount: number) => void
}

export const Pagination: FC<PaginationType> = props => {
  const { onChange, page, rows, onChangePageCount, count } = props

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onChange(newPage + 1)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangePageCount(parseInt(event.target.value, 10))
  }

  return (
    <TablePagination
      component="div"
      count={count || 1}
      page={page - 1} // добавить -1 (page - 1) !count || count <= 0 ? 0 : page
      rowsPerPageOptions={[4, 7, 10]}
      onPageChange={handleChangePage}
      rowsPerPage={rows}
      onRowsPerPageChange={handleChangeRowsPerPage}
      showFirstButton
      showLastButton
      hidden={!count}
      sx={{
        '& .MuiTablePagination-toolbar': {
          padding: 0,
          margin: '20px 0',
        },
      }}
    />
  )
}
