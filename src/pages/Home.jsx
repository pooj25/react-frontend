// import Form from "./hooks/Form"
// import State from "./hooks/State"
// import User from "./User"

// const Home = () => {
//   return (
//     <div>
//         <Form/>
//         <State/>
//         <User name="xyz" age={33}/>
//         </div>
//   )
// }

// export default Home


import React from 'react'
import User from '../User'
import State from '../hooks/State'
import Form from '../hooks/Form'
import { createContext } from 'react'
export const userContext=React.createContext();

const Home = () => {
  return (
    <div>
      <userContext.Provider value={"asdfg"}>

      {/* </userContext.Provider> */}
        <State/>
      <Form/>
      <User name="xyz"/>
       </userContext.Provider>
    </div>
  )
}

export default Home