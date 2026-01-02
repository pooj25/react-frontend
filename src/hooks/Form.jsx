// import {useState}  from 'react'
// const Form = () => {
//     const [form,setForm]=useState({
//         name:"",
//         age:"",
//         email:""
//     }
//     )
//     const handleChange=()=>{}
//     const handleSubmit=()=>{}
//   return (
//     <div>
//         <h1>Form</h1>
//         <form onChange={handleSubmit}>
//     <label htmlFor="name">Name:</label>
//     <input type ="text" name ="name" value ={form.name}
//     onChange={handleChange}/></br>
//     <label htmlFor="age">Age:</label>
//     <input type ="number" age ="age" value ={form.age}
//     onChange={handleChange}/><br></br>
//     <label htmlFor="email">Email:</label>
//     <input type ="email"  email="email" value ={form.email}
//     onChange={handleChange}/>
//     <button type='submit'> Submit</button>
//     </form>
//     </div>
    
//   )
// }

// export default Form


import { useState } from 'react';

const Form = () => {
 
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted with data:", form);
    
    alert(`Form submitted!\nName: ${form.name}\nAge: ${form.age}\nEmail: ${form.email}`);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
       
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
