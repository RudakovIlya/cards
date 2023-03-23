import { ButtonsGroup, CustomSlider, Filters, InputSearch, Pagination, ResetButton } from 'common'
import { useFilters, usePackList } from 'features/packs-list'

export const FilterPanels = () => {
  const {
    onSearchChange,
    packName,
    onReset,
    getMyPacks,
    getAllPacks,
    onChangeSliderValue,
    minCardsCount,
    maxCardsCount,
    min,
    max,
    page,
    pageCount,
    onPaginationChange,
    onChangePageCount,
    cardPacksTotalCount,
  } = useFilters()

  const { status } = usePackList()

  return (
    <Filters>
      <InputSearch onChangeValue={onSearchChange} searchValue={packName} />
      <ButtonsGroup
        disabled={status === 'loading'}
        onClickMy={getMyPacks}
        onClickAll={getAllPacks}
      />
      <CustomSlider
        disabled={status === 'loading'}
        minMax={[min, max]}
        onChangeCommitted={onChangeSliderValue}
        values={[minCardsCount, maxCardsCount]}
      />
      <ResetButton disabled={status === 'loading'} onClick={onReset} />
      <Pagination
        onChange={onPaginationChange}
        page={page}
        rows={pageCount}
        onChangePageCount={onChangePageCount}
        count={cardPacksTotalCount}
        disabled={status === 'loading'}
      />
    </Filters>
  )
}
