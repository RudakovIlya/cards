import { SubHeader } from 'common'
import { useModals } from 'features/modals'
import { FilterPanels, PackTable, useFetchPackList, usePackList } from 'features/packs-list'
import { Modals } from 'features/packs-list/modals/Modals'

export const PackList = () => {
  const { status } = usePackList()

  useFetchPackList()

  const { showModal } = useModals()

  return (
    <div>
      <SubHeader
        isLoading={false}
        title={'Pack list'}
        titleButton={'Add new pack'}
        disabled={status === 'loading'}
        onClick={showModal('add', {})}
      />
      <FilterPanels />
      <PackTable />
      <Modals />
    </div>
  )
}
