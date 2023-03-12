import { usePackList } from 'features/packs-list'
import { PackTable } from 'features/packs-list/pack-table/PackTable'

export const PackList = () => {
  const packList = usePackList()

  console.log(packList)

  return (
    <div>
      PackList
      <PackTable />
    </div>
  )
}
