//import React from 'react'
 import React, { useState, useEffect } from 'react';
const Contact = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums");
        const data = await res.json();
        setUsers(data);
      };
      fetchUsers();
    }, []);
    return (
     <div>
    <h1>Datas from API</h1>
    <ol>
      {users.map((user)=>(
        <li>
          {user.title}
                </li>
      ))}
    </ol>
  </div>
    );
  };
export default Contact