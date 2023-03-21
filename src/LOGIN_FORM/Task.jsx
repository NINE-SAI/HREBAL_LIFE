import React from "react"
import { useState ,useEffect } from "react"
import "./Task.css"

const Task = ()=>{

    const [state,setState] = useState({
        name:"",
        number:""
    })
    const [store,setStore] = useState([])
    const [formerror,setFormerror] = useState({})
    const [submit,setSubmit] = useState(false)

    const updateHandler = (event)=>{
        setState({...state,[event.target.name]:event.target.value})
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        event.target.reset()
        console.log(state)
        setFormerror(validate(state))
        setSubmit(true)
    }

    useEffect(()=>{
        if((Object.keys(formerror).length === 0 && submit)){
            const newStore = [...store,state]
            setStore(newStore)
            setState("")
        }
    },[formerror])
    
    const validate = (value)=>{
        const errors = {}
        setFormerror(errors)
        if(!value.name){
            errors.name="ENTER NAME"
        }
        if(!value.number){
            errors.name="ENTER NUMBER"
        }
    }

    return(
        <div className="mainpage">
            <nav className="navbar">
                <a>LOGIN PAGE</a>
            </nav>
            <center>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="NAME" value={state.name} name="name" onChange={updateHandler}/>
                    <input type="number" placeholder="NUMBER" name="number" value={state.number} onChange={updateHandler}/>
                    <button>LOGIN</button>
                </form>
                <table>
                                    <thead>
                                        <th>
                                            <td>Sl.No</td>
                                            <td>NAME</td>
                                            <td>NUMBER</td>
                                        </th>
                                    </thead>
                                    <tbody>
                    {
                        store.map((data,index)=>{
                            return(
                                
                                    <div>
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.number}</td>
                                    </tr>
                                </div>
                            )
                        })
                    }
                    </tbody>
                </table>
            </center>
        </div>
    )
}
export default Task