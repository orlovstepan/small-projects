import './App.css'
import {useState, useEffect} from 'react'
import Searchbar from './Components/Searchbar';
import Table from './Components/Table';
import { User, TypeSearch } from './type';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [value, setValue] = useState('');
  const [type, setSearchType] = useState<TypeSearch>('name');
  
  const filterUsers = (searchValue: string, users: User[]) => {
    return users.filter(user => user[type].toLowerCase().includes(searchValue.toLowerCase()));
  }

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  useEffect(() => {
      fetchUsers();
  }, [])

  const onChange = (value: string) => {
    setValue(value)
  }
  
  return (
    <main>

      <div className='elements'>
        <Searchbar value={value} handleChange={onChange} handleChangeType={setSearchType} />
        <Table users={filterUsers(value, users)} />
      </div>

    </main>
  )
}



//https://jsonplaceholder.typicode.com/users