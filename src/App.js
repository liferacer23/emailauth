import React, { useState } from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'
import './App.css';

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user,setUser]=useState({ });
  const [err,setErr]=useState('');

 onAuthStateChanged(auth,(currentUser)=>{
     setUser(currentUser);
 })


  const emailHandlerReg = (e) => { setRegisterEmail(e.target.value) };
  const passwordHandlerReg = (e) => { setRegisterPassword(e.target.value) };


  const emailHandlerLog = (e) => { setLoginEmail(e.target.value) };
  const passwordHandlerLog = (e) => { setLoginPassword(e.target.value) };


  const login = async () => {
    try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        console.log(user);
  
      }
              catch(error){
                setErr(error.message);
                console.log(error.message);
        }
  };
  const logOut = async () => {
      await signOut(auth);
  };
  const SignUp = async () => {
    try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        console.log(user);
  
      }
              catch(error){
                setErr(error.message);
            console.log(error.message);
        }
  };
  return (
    <div>
      <div>
        <h1>SIGN UP</h1>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" onChange={emailHandlerReg}/>

        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={passwordHandlerReg}/>
        <button onClick={SignUp}> Create User</button>
      </div>

      <div>
        <h1>LOG IN</h1>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" onChange={emailHandlerLog}/>

        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={passwordHandlerLog}/>
        <button onClick={login}> Login</button>
        </div>
        <button onClick={logOut}> Sign Out</button>
      
        <h1>User: {user?.email}</h1>
     
      <h1>{err}</h1>
    </div>
  );
}

export default App;
