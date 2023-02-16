import {useState} from 'react'

function Searchbar(props) {
  return (
    <div>
        <input placeholder="Search 🔎" value={props.value} onChange={(e)=>props.handleChange(prev=> prev=e.target.value)} />
    </div>
  )
}

export default Searchbar