import React from 'react'
import './tableRowStyles.css'

function CrudTableRowApp({el, setUserToEdit, deleteUser}) {
    let {name,lastname, age, email, id} = el

  return (
    <tr className='table__row'>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{age}</td>
        <td>{email}</td>

        <td>
          <button className='btn_style' onClick={() => setUserToEdit(el)}>Edit</button>

          <button className='btn_style dl_btn' onClick={() => deleteUser(id)}>Delete</button>
        </td>
    </tr>
  )
}

export default CrudTableRowApp