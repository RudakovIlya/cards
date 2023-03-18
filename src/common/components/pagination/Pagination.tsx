import { ChangeEvent, FC, MouseEvent } from 'react'

import TablePagination from '@mui/material/TablePagination'

type PaginationType = {
  page: number
  rows: number
  count: number
  disabled: boolean
  onChange: (page: number) => void
  onChangePageCount: (pageCount: number) => void
}

export const Pagination: FC<PaginationType> = ({
  onChange,
  page,
  rows,
  onChangePageCount,
  count,
  disabled,
}) => {
  const isDisabled = Math.ceil(count / rows) - 1 === page || page <= -1

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onChange(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangePageCount(parseInt(event.target.value, 10))
    onChange(0)
  }

  return (
    <TablePagination
      component="div"
      count={count}
      page={page > 0 && count < rows ? 0 : page}
      rowsPerPageOptions={[4, 7, 10]}
      onPageChange={handleChangePage}
      rowsPerPage={rows}
      onRowsPerPageChange={handleChangeRowsPerPage}
      showFirstButton
      showLastButton
      backIconButtonProps={{ disabled: disabled || page === 0 }}
      nextIconButtonProps={{ disabled: disabled || isDisabled }}
      hidden={!count}
      sx={{
        '& .MuiTablePagination-toolbar': {
          padding: 0,
          margin: '20px 0',
        },
      }}
      SelectProps={{
        disabled,
      }}
    />
  )
}
