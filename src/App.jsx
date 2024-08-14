import './App.css'
import UserCard from './components/UserCard.jsx';
import FormUser from './components/FormUser.jsx';
import useCrud from './hooks/useCrud.js';
import { useEffect, useState } from 'react';


function App() {
  
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud("/users/");
  const [userSelected, setUserSelected] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);


  return (
    <div className='App'>
      <header className="user__header">
      <h1>Users CRUD</h1>
      <button className='new__user__button'>New User</button>
      </header>
      
      <FormUser createUser = {createUser} userSelected = {userSelected} setUserSelected = {setUserSelected} updateUser = {updateUser}/>
      <section className="user__container flex-container">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} deleteUser={deleteUser} setUserSelected={setUserSelected} />
        ))}
      </section>
     
    </div>
  );
}

export default App;
