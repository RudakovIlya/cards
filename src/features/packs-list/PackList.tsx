import { SubHeader } from 'common'
import { useModals } from 'features/modals'
import { FilterPanels, Modals, PackTable, useFetchPackList, usePackList } from 'features/packs-list'

export const PackList = () => {
  const { status } = usePackList()

  const { showModal } = useModals()

  useFetchPackList()

  return (
    <>
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
    </>
  )
}
