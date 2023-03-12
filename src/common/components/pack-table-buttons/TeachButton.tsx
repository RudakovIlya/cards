import pack_table_teacher from 'assets/img/pack-table-teacher.svg'

export const TeachButton = () => {
  const onClickTeachHandler = () => {}

  return (
    <span>
      <img
        style={{ paddingLeft: '10px' }}
        src={pack_table_teacher}
        alt="edit"
        onClick={onClickTeachHandler}
      />
    </span>
  )
}
