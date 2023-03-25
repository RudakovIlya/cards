import { Filters, InputSearch, Pagination } from 'common'
import { usePackCards, usePackFilters } from 'features/pack/index'

export const FilterPanels = () => {
  const {
    searchValue,
    onSearchChange,
    onChangePagination,
    onChangePageCount,
    pageParam,
    pageCountParam,
    cardsTotalCount,
  } = usePackFilters()
  const { status } = usePackCards()

  return (
    <Filters>
      <InputSearch onChangeValue={onSearchChange} searchValue={searchValue} />
      <Pagination
        disabled={status === 'loading'}
        page={pageParam}
        rows={pageCountParam}
        count={cardsTotalCount}
        onChange={onChangePagination}
        onChangePageCount={onChangePageCount}
      />
    </Filters>
  )
}
