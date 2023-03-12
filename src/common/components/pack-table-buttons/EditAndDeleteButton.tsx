import pack_table_delete from 'assets/img/pack-table-delete.svg'
import pack_table_edit from 'assets/img/pack-table-edit.svg'

export const EditAndDeleteButton = () => {
  const onClickEditHandler = () => {}
  const onClickDeleteHandler = () => {}

  return (
    <span>
      <img
        style={{ paddingLeft: '15px', cursor: 'pointer' }}
        src={pack_table_edit}
        alt="edit"
        onClick={onClickEditHandler}
      />
      <img
        style={{ paddingLeft: '15px', cursor: 'pointer' }}
        src={pack_table_delete}
        alt="delete"
        onClick={onClickDeleteHandler}
      />
    </span>
  )
}
