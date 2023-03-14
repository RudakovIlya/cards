import { Filters, InputSearch, SubHeader } from 'common'
import { usePack } from 'features/pack'

export const Pack = () => {
  const { pack } = usePack('640dfb5114f6180608606bb2')

  return (
    <>
      <SubHeader title={pack.packName} titleButton={'Learn to pack'} />
      <Filters>
        <InputSearch onChangeValue={() => {}} searchValue={''} />
      </Filters>
    </>
  )
}
