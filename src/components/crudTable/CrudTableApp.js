import React from 'react'
import CrudTableRowApp from '../rowTable/CrudTableRowApp'
import './tableStyles.css'

function CrudTableApp({data, setUserToEdit, deleteUser}) {
  return (
    <div className='table__content'>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>Age</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>
             
            <tbody>
                 {
                    data.length === 0 ? (
                        <tr>
                            <td colSpan='4'>
                                No User Added
                            </td>
                        </tr>
                    ): (data.map(el => <CrudTableRowApp 
                    key={el.id} el={el} 
                    setUserToEdit={setUserToEdit}
                    deleteUser={deleteUser}
                    />))
                }
            </tbody>
        </table>
    </div>
  )
}

export default CrudTableApp