import { Filters, InputSearch } from 'common'
import { Pagination } from 'common/components/pagination/Pagination'
import { usePackFilters } from 'features/pack/use-packFilters'

export const FilterPanels = () => {
  const {
    packName,
    cardsTotalCount,
    pageCount,
    page,
    onChangePageCount,
    onPaginationChange,
    onSearchChange,
  } = usePackFilters()

  return (
    <Filters>
      <InputSearch onChangeValue={onSearchChange} searchValue={packName} />
      <Pagination
        onChange={onPaginationChange}
        page={page}
        rows={pageCount}
        onChangePageCount={onChangePageCount}
        count={cardsTotalCount}
      />
    </Filters>
  )
}
