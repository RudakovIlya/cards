import { Filters, InputSearch, Pagination } from 'common'
import { usePackFilters } from 'features/pack/use-packFilters'

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

  return (
    <Filters>
      <InputSearch onChangeValue={onSearchChange} searchValue={searchValue} />
      <Pagination
        page={pageParam}
        rows={pageCountParam}
        count={cardsTotalCount}
        onChange={onChangePagination}
        onChangePageCount={onChangePageCount}
      />
    </Filters>
  )
}
