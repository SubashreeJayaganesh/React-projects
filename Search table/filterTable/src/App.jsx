import { useState } from "react"
import { Data } from "./Data.jsx"
import "./App.css";


function App() {
  const [search,setSearch]=useState("")
  return (
    <><div className="container mt-5">
      <h3>Filter Table</h3>
      <from className="col-md-6">
        <input type="text" className="form-control" placeholder="Search Text" onChange={(e)=>setSearch(e.target.value)}/>
        </from>
        <table className="table table-boredered mt-3 table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              </tr>
              </thead>
              <tbody>
                {Data.filter((item)=>{
                  return search===""?item: item.first_name.toLowerCase().includes(search.toLowerCase())||
                  item.last_name.toLowerCase().includes(search.toLowerCase())||
                  item.email.toLowerCase().includes(search.toLowerCase())||
                  item.phone.includes(search);
                })
                .map((item,index)=>(
                  <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
                </tbody></table></div>
    </>
  )
}

export default App
