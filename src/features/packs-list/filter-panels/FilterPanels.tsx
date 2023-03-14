import { ButtonsGroup, CustomSlider, Filters, InputSearch, ResetButton } from 'common'
import { useFilters } from 'features/packs-list/use-filters'

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
  } = useFilters()

  return (
    <Filters>
      <InputSearch onChangeValue={onSearchChange} searchValue={packName} />
      <ButtonsGroup onClickMy={getMyPacks} onClickAll={getAllPacks} />
      <CustomSlider
        minMax={[min, max]}
        onChangeCommitted={onChangeSliderValue}
        values={[minCardsCount, maxCardsCount]}
      />
      <ResetButton onClick={onReset} />
    </Filters>
  )
}
