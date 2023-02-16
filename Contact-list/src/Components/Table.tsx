import {useState} from 'react';

function Table({users}) {
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

function Contact({users}){

    const [copied, setCopied] = useState(false);

    const copyEmail = async (e) =>{
        try {
            await navigator.clipboard.writeText(e.target.innerText);
            setCopied(true);
          } catch (e) {
            console.log("error in copy", e);
          }
    }
    
      return (
          <ul>
            {users.map(user => <li id={user.id%2 ? "even" : "odd" } key={user.id} className="container" > 
            <p className="info">{user.name} </p>
            <p className="info">{user.phone} </p>
            <p className="info" id="email" onClick={(e)=>copyEmail(e)}>{user.email} <img src={copied ? "tick.png": "copy.png"} className="copy" /> </p>
            </li>)} 
        </ul>
      )   
}