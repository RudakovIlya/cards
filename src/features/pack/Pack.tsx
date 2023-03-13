import { Filters, InputSearch, SubHeader } from 'common'
import { usePack } from 'features/pack'

export const Pack = () => {
  const { pack } = usePack('640df56ac88f1f12b0d5446f')

  return (
    <>
      <SubHeader title={pack.packName} titleButton={'Learn to pack'} />
      <Filters>
        <InputSearch fullWidth />
      </Filters>
    </>
  )
}
