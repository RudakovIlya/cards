import pack_table_delete from 'assets/img/pack-table-delete.svg'
import pack_table_edit from 'assets/img/pack-table-edit.svg'

export const EditAndDeleteButton = () => {
  return (
    <span>
      <img style={{ paddingLeft: '10px' }} src={pack_table_edit} alt="edit" />
      <img style={{ paddingLeft: '10px' }} src={pack_table_delete} alt="delete" />
    </span>
  )
}
