import {useState} from 'react'
import { TypeSearch } from '../type'

type Props = {
  value: string,
  handleChange: (value: string) => void,
  handleChangeType: (type: TypeSearch) => void,
}

function Searchbar({value, handleChange, handleChangeType}: Props) {

  return (
    <div className='searchbar'>
        <input className='search-input' placeholder="Search 🔎" value={value} onChange={(e)=> handleChange(e.currentTarget.value)} />
        <select onChange={(e) => handleChangeType(e.currentTarget.value as TypeSearch)}>
          <option >name</option>
          <option >phone</option>
          <option >email</option>
        </select>
    </div>
  )
}

export default Searchbar