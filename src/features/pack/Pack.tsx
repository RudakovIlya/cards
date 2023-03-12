import { usePack } from 'features/pack'

export const Pack = () => {
  const pack = usePack('640df56ac88f1f12b0d5446f')

  console.log(pack)

  return <h1>Cards</h1>
}
