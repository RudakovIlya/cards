import { addPack } from './pack-listSlice'

import { SubHeader, useAppDispatch } from 'common'
import { FilterPanels } from 'features/packs-list/filter-panels/FilterPanels'
import { PackTable } from 'features/packs-list/pack-table/PackTable'
import { usePackList } from 'features/packs-list/use-packlist'

export const PackList = () => {
  const dispatch = useAppDispatch()
  const addNewPack = () => {
    dispatch(
      addPack({
        cardsPack: {
          name: 'New Pack (Жоские) ' + (Math.random() + 10),
          deckCover: '',
          private: false,
        },
      })
    )
  }
  const { status } = usePackList()

  return (
    <div>
      <SubHeader
        isVisible={true}
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
