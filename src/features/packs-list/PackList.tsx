import { usePackList } from 'features/packs-list'

export const PackList = () => {
  const packList = usePackList()

  console.log(packList)

  return <div>PackList</div>
}
