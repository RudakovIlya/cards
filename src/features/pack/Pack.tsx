import { useParams } from 'react-router-dom'

import { MyPackTable } from './my-pack-table/MyPackTable'

import { Filters, InputSearch, SubHeader } from 'common'
import { usePack } from 'features/pack'

export const Pack = () => {
  const { packId } = useParams<{ packId: string }>()

  const { pack } = usePack(packId as string)

  return (
    <>
      <SubHeader title={pack.packName} titleButton={'Learn to pack'} />
      <Filters>
        <InputSearch onChangeValue={() => {}} searchValue={''} />
      </Filters>
      <MyPackTable />
    </>
  )
}
