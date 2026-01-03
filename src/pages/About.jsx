// import React from 'react'
// //import { useEffect } from 'react';
// import React, { useState,useEffect } from 'react';
// const About = () => {
//   // const Contact = () => {
//     const [users,setUsers]=React.useState([
//     ])
//     useEffect(()=>{
//       const fetchUsers=async()=>{
//         const res=await fetch("https://jsonplaceholder.typicode.com/users")
//          const data=await res.json()
//          //console.log(data)
//         setUsers(data)
//       }
//       fetchUsers()
//     },[])
//   return (
//     <div>
//   <h1>Datas from API</h1>
//   <ol>
//     {users.map((user)=>(
//       <li>
//         {user.name}
//       </li>
//     ))}
//   </ol>
// </div>
//   )
// }

// export default About

import React, { useState, useEffect } from 'react';
const About = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
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

export default About;
{/* <div>
  <h1>Datas from API</h1>
  <ol>
    {users.map((user)=>(
      <li>
        {user.name}
      </li>
    ))}
  </ol>
</div> */}