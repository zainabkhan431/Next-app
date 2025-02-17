interface User{
  id:number;
  name:string;
  email:string;

}
const UserPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-store"}); // Add await here
  const users: User[] = await res.json(); // Now res is Response, and .json() works

  return (
    <>
    <p>
    {
      new Date().toLocaleTimeString()
    }
     </p>
      <h1>Todos</h1>
      <table className="table table-bordered">
        <thead>
          <tr>

          
          <th>Name</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>

       
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>           
            </tr>
          
        ))}
         </tbody>
      </table>
    </>
  );
};

export default UserPage;
