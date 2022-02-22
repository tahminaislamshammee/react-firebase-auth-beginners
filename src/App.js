
import { useState } from 'react';
import './App.css';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth} from './firebase-config';

function App() {
  const[regEmail, setRegEmail]= useState('');
  const[regPass, setRegPass]= useState('');
  const[loginEmail, setLoginEmail]= useState('');
  const[loginPass, setLoginPass]= useState('');
  const [user,setUser]= useState({});

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
  })

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(
        auth, regEmail, regPass
      );
      console.log(user);
    }catch(e){
      console.log(e.message);
    }
  };

  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(
        auth, loginEmail, loginPass
      );
      console.log(user);
    }catch(e){
      console.log(e.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(e)=>{
            setRegEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e)=>{
            setRegPass(e.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(e)=>{
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e)=>{
            setLoginPass(e.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: 
        {user?.email}
      </h4>
      

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;





