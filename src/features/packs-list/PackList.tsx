import { SubHeader } from 'common'
import { usePackList } from 'features/packs-list'
import { FilterPanels } from 'features/packs-list/FilterPanels/FilterPanels'
import { PackTable } from 'features/packs-list/pack-table/PackTable'

export const PackList = () => {
  const packList = usePackList()

  return (
    <div>
      <SubHeader title={'Pack list'} titleButton={'Add new pack'} />
      <FilterPanels />
      <PackTable />
    </div>
  )
}
