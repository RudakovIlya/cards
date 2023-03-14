import { SubHeader } from 'common'
import { FilterPanels } from 'features/packs-list/filter-panels/FilterPanels'
import { PackTable } from 'features/packs-list/pack-table/PackTable'
export const PackList = () => {
  return (
    <div>
      <SubHeader title={'Pack list'} titleButton={'Add new pack'} />
      <FilterPanels />
      <PackTable />
    </div>
  )
}
