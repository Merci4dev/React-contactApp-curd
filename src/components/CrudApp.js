import React, {useState, useEffect} from 'react'
import CrudFormApp from './crudForm/CrudFormApp'
import CrudTableApp from './crudTable/CrudTableApp'
import data from '../assets/data.json'

// #1 Datos a consumir
const initialDB =[
    {
      id:1,
      name: "Merci",
      lastname:"Lopes",
      age:39,
      email:"lopes@gmail.es"
    },
    {
      id:2,
      name: "Lucho",
      lastname:"Mendex",
      age:30,
      email:"lucho@gmail.es"
    },
  
    {
      id:3,
      name: "Maria",
      lastname:"Peraz",
      age:20,
      email:"maria@gmail.com"
    },
  
  
  ]
  
function CrudApp() {
   
    const [db, setDB] = useState(initialDB)
    const [userToEdit, setUserToEdit] = useState(null)

    
    const createUser = (data) =>{
        data.id = Date.now() 
        setDB([...db, data])
    }


    const updateUser = (data) =>{
      let newUser = db.map(el => el.id === data.id ? data: el)

      setDB(newUser)
    }
    
    const deleteUser = (id) => {
      let isDelete = window.confirm(`Do you want to delete ${id} `)

      if(isDelete){
        let newUser = db.filter(el => el.id !==id)
        setDB(newUser)
      }
    }
    
  return (
   <section className='main__content'>
     <h1 className='main__title'>React Basic Crud</h1>

     <article className='grid_1_2'>
        <div>
            <CrudFormApp
            createUser={createUser}
            updateUser={updateUser}
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
            />
        </div>

        <div>
            <CrudTableApp
            data={db}
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
            deleteUser={deleteUser}
            />
        </div>
     </article>
   </section>
  )
}

export default CrudApp