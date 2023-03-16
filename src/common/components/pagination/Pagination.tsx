import { ChangeEvent, FC, MouseEvent, useMemo } from 'react'

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
    onChange(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangePageCount(parseInt(event.target.value, 10))
  }

  const totalCount = useMemo(() => Math.ceil(count / rows), [count, rows])

  return (
    <TablePagination
      component="div"
      count={totalCount}
      page={!totalCount || totalCount <= 0 ? 0 : page} // добавить -1 (page - 1) || !count || count <= 0 ? 0 : page
      // page={page > 0 && count < rows ? 0 : page} // добавить -1 (page - 1) || !count || count <= 0 ? 0 : page
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
