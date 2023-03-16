import {SubHeader, useAppDispatch} from 'common'
import {FilterPanels} from 'features/packs-list/filter-panels/FilterPanels'
import {PackTable} from 'features/packs-list/pack-table/PackTable'
import {addPack} from "./pack-listSlice";


export const PackList = () => {
    const dispatch = useAppDispatch()
    const addNewPack = () => {
        dispatch(addPack({cardsPack: {name: "aaaa",deckCover:'', private: false}}))
    }

    return (
        <div>
            <SubHeader title={'Pack list'} titleButton={'Add new pack'} onClick={addNewPack}/>
            <FilterPanels/>
            <PackTable/>
        </div>
    )
}
