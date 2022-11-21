import React, {useState, useEffect} from 'react'
import './formStyles.css'

// #4 Datos iniciale para el form para que no arroje errores
const initialForm = {
    id:null,
    name: "",
    lastname:"",
    age: "",
    email:""
}

function CrudFormApp({ createUser, updateUser, userToEdit, setUserToEdit}) {
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
      if(userToEdit){
        setForm(userToEdit)
      }else{
        setForm(initialForm)
      }
    },[userToEdit])
  

    const handelChange = (e)=>{
      setForm({
        ...form, [e.target.name]: e.target.value
      })
    }


    const handelSubmit = (e)=>{
      const {name, lastname, age, email,id} = form
      e.preventDefault()

      if(!name || !lastname || !age || !email){
        alert(' Please Insert all Data!')
        return;
      }

      if(id === null){
        createUser(form)
      }else{
        updateUser(form)
      }
      handelReset()
    }

   
    const handelReset = ()=>{
      setForm(initialForm)
      setUserToEdit(null)
    }

  return (
    <div className='form__container'>
      <h2 className='form__title'>
        {userToEdit ? "Edit User" : "Add User"}
      </h2>

        <form onSubmit={handelSubmit}>
            <input type='text' name='name' placeholder='User Name' onChange={handelChange} value={form.name} />

            <input type='text' name='lastname' placeholder='User Last Name' onChange={handelChange} value={form.lastname} />

            <input type='number' name='age' placeholder='User Age' onChange={handelChange} value={form.age} />

            <input type='email' name='email' placeholder='User Email' onChange={handelChange} value={form.email} />

            <input type='submit' value='Send' className='btn-style'/>
            <input type='reset' value='Reset' className='btn-style' onClick={handelReset}/>
        </form>

    </div>
  )
}

export default CrudFormApp