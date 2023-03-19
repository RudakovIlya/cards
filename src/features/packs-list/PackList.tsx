import { SubHeader } from 'common'
import { FilterPanels, PackTable, useFetchPackList, usePackList } from 'features/packs-list'

export const PackList = () => {
  const { status, addNewPack } = usePackList()

  useFetchPackList()

  return (
    <div>
      <SubHeader
        isLoading={false}
        title={'Pack list'}
        titleButton={'Add new pack'}
        disabled={status === 'loading'}
        onClick={addNewPack}
      />
      <FilterPanels />
      <PackTable />
    </div>
  )
}
