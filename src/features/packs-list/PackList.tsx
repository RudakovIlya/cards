import { usePackList } from 'features/packs-list'
import { PackTable } from 'features/packs-list/pack-table/PackTable'
import { SubHeader } from 'common'
import { FilterPanels } from 'features/packs-list/FilterPanels/FilterPanels'

export const PackList = () => {
  const packList = usePackList()

  console.log(packList)

  return (
    <div>
      <SubHeader title={'Pack list'} titleButton={'Add new pack'} />
      <FilterPanels />
      <PackTable />
    </div>
  )
}
