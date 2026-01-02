// import React, { useState } from 'react'
// const State = () => {
//     const [count,setCount]=useState(0)
//     const [Like,setLike]=useState(0)
//   return (
//     <div>
//         <h1>useState Example</h1>
//     <h2>Count:{count}</h2>
//     <button onClick={()=>setCount(count+1)}>+
//     </button>
//     <button onClick={()=>setCount(count-1)}>-
//     </button>
//     <h1>Likes :{Like}</h1>
//     <button onClick={()=>setLike(like+1)}>❤</button>
//     <button onClick={()=>setLike(like-1)}>💔</button>
//     </div>

//   )
// }
// export default State

import React, { useState } from 'react';
const State = () => {
  const [count, setCount] = useState(0);
  const [Like, setLike] = useState(0);
  return (
    <div>
      <h1>useState Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>Like: {Like}</h1>
      <button onClick={() => setLike(Like + 1)}>❤</button>
      <button onClick={() => setLike(Like - 1)}>💔</button>
    </div>
  );
};
export default State;
