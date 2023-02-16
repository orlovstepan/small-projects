import './App.css'
import {useState, useEffect} from 'react'
import Searchbar from './Components/Searchbar';
import Table from './Components/Table';

export default function App() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');
  
  const filterUsers = (searchValue: string, data: []) => {
    return data.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
  }

  const fetchUsers = (searchValue: string) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=> setUsers(filterUsers(searchValue, data)))
  }

  useEffect(() => {
      fetchUsers(value)
  }, [value])
  
  return (
    <main>

      <div className='elements'>
        <Searchbar value={value} handleChange={setValue} />
        <Table users={users} />
      </div>

    </main>
  )
}



//https://jsonplaceholder.typicode.com/users