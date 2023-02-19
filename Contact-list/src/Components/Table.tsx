import {useState} from 'react';
import { User } from '../type'
import Add from './Add';

type Props = {
  users: User[]
}

function Table({users}: Props) {
  return (
    <div className="table" >
        <div className="table--upperRow">
            <p className="label"> Name </p>
            <p className="label">Phone </p>
            <p className="label">Email </p>
        </div>
        <Contact users={users} />
    </div>
  )
}

export default Table

function Contact({users}: Props){

    const [copied, setCopied] = useState('');
    const [showModal, setShowModal] = useState(true);

    const copyEmail = async (email: string) =>{
        try {
            await navigator.clipboard.writeText(email);
            setCopied(email);
          } catch (e) {
            console.log("error in copy", e);
          }
    }
    
      return (
          <div>
          <ul>
            {users.map(user => <li id={user.id%2 ? "even" : "odd" } key={user.id} className="container" > 
            <p className="info">{user.name} </p>
            <p className="info">{user.phone} </p>
            <p className="info" id="email" onClick={()=>copyEmail(user.email)}>
              {user.email} 
              <img src={copied === user.email ? "tick.png": "copy.png"} className="copy" /> 
            </p>
            </li>)} 
        </ul>
        <button className='btn-add'>+</button>
        {showModal && <Add/>}
        </div>
      )   
}