import { SubHeader } from 'common'
import { FilterPanels } from 'features/packs-list/FilterPanels/FilterPanels'

export const PackList = () => {
  return (
    <>
      <SubHeader title={'Pack list'} titleButton={'Add new pack'} />
      <FilterPanels />
    </>
  )
}
