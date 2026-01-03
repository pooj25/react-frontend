// import React from 'react'
 import React, { useState, useEffect } from 'react';
const Services = () => {
      const [users, setUsers] = useState([]);
      useEffect(() => {
        const fetchUsers = async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/comments");
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
            {user.name}
                  </li>
        ))}
      </ol>
    </div>
      );
    };
export default Services