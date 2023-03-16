import { addPack } from './pack-listSlice'

import { SubHeader, useAppDispatch } from 'common'
import { FilterPanels } from 'features/packs-list/filter-panels/FilterPanels'
import { PackTable } from 'features/packs-list/pack-table/PackTable'

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

  return (
    <div>
      <SubHeader title={'Pack list'} titleButton={'Add new pack'} onClick={addNewPack} />
      <FilterPanels />
      <PackTable />
    </div>
  )
}
