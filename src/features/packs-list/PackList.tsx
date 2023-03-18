import { SubHeader } from 'common'
import { usePackList, FilterPanels, PackTable } from 'features/packs-list'

export const PackList = () => {
  const { status, addNewPack } = usePackList()

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
