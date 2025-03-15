import React, { useEffect, useState } from 'react'

const Table = () => {
 const [users, setUsers] = useState([]);
 
     const createUserObjects = async () => {
         const response = await fetch("https://jsonplaceholder.typicode.com/users");
         const data = await response.json();
         setUsers(data);
     };
 
     useEffect(() => {
       createUserObjects();
     }, []);
 
     return (
       <div>
         {users.length > 0 ? (
           <table border={3}>
             <thead>
               <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Address</th>
                 <th>Email</th>
               </tr>
             </thead>
             <tbody>
             {users.map((user)=>(
               <tr key={user.id}>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.address.street}</td>
                 <td>{user.email}</td>
               </tr>
             ))}
             </tbody>
           </table>
         ) : (
           <p>Loading...</p>
         )}
       </div>
     );
   };
export default Table