import React from 'react'

const Table = ({store,deleteHandler,editHandler}) => {
  return (
    <div className="col-md-10">
        <table className='table'>
        <thead>
            <tr>
                <th>Sl.No</th>
                <th>NAME</th>
                <th>DEPARTMENT</th>
                <th>AVAILABLE</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
            {
                store.map((event,index)=>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{event.name}</td>
                    <td>{event.department}</td>
                    <td><input className='checkbox' type="checkbox"/></td>
                    <td><button onClick={()=>editHandler(index)}>EDIT</button> </td>
                    <td><button onClick={()=>deleteHandler(index)}>DELETE</button></td>
                </tr>
                )
            }
        </tbody>
        </table>
    </div>
  )
}
export default Table