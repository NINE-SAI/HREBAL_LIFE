import React , { useState , useEffect } from 'react'
import Navbar from './Navbar'
import Table from "./Table"
import "./Task.css"

const Task = () => {
    const [state,setState] = useState({
        name:"",
        department:""
    })
    const [store,setStore] = useState([])
    const [formerror,setFormerror] = useState({})
    const [submit,setSubmit] = useState(false)   

    const changeHandler = (event)=>{
        setState({...state,[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        event.target.reset()
        setFormerror(validate(state))
        setSubmit(true)
    }
    const deleteHandler = (indexvalue)=>{
        const deleteData = store.filter((element,index)=>index !== indexvalue)
        setStore(deleteData)
    }
    const editHandler = (indexvalue)=>{
        const editData = store.filter((element,index)=>index !== indexvalue)
        setStore(editData)
        const editFind = store.find((element,index)=>index === indexvalue)
        setState({
            name:editFind.name,
            department:editFind.department,
            available:editFind.available
        })
    }
    useEffect(()=>{
        if((Object.keys(formerror).length === 0 && submit)){
            const newStore = [...store,state]
            setStore(newStore)
            setState("")
        }
    },[formerror,submit])
    const validate = (values)=>{
        const errors = {}
        setFormerror(errors)
        if(!values.name){
            errors.name="ENTER NAME"
        }
        if(!values.department){
            errors.department="ENTER DEPARTMENT"
        }
        return errors
    }

  return (
    <div className='html'>
        {/* <Navbar/> */}
        <center>
            <div className="container">
                <div className="col-md-12">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="NAME" onChange={changeHandler} name="name" value={state.name}/>
                        <input type="text" placeholder="DEPARTMENT" onChange={changeHandler} name="department" value={state.department}/>
                        <button>ADD</button>
                    </form>
                    <div className="col-md-12 mb-1">
                    <span>{formerror.name}</span>
                    <span>{formerror.department}</span>
                    </div>
                    <Table store={store} deleteHandler={deleteHandler} editHandler={editHandler}/>
                </div>
            </div>
        </center>
    </div>
  )
}
export default Task