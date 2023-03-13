import { ButtonsGroup, CustomSlider, Filters, InputSearch, ResetButton } from 'common'

export const FilterPanels = () => {
  return (
    <Filters>
      <InputSearch />
      <ButtonsGroup onClickMy={() => {}} onClickAll={() => {}} />
      <CustomSlider />
      <ResetButton onClick={() => {}} />
    </Filters>
  )
}
