import './Signup.css';
import { useState } from "react";


function Signup() {
  const [action,setAction] = useState("Sign Up");
  return (
    <>
    <div className="App">
      <div className="signup-form">
      
        <h1>{action}</h1>
      
        {action==="Log In"?<div></div>:<div className="input-field">
          <label>Name :</label>
          <input type="text"></input>
        </div>}
        
        {action==="Log In" ?<div></div>:<div className="input-field">
          <label>Email :</label>
          <input type="email"></input>
        </div>}

        <div className="input-field">
          <label>UserName :</label>
          <input type="text"></input>
        </div>

        <div className="input-field">
          <label>Password :</label>
          <input type="password"></input>
        </div>

        <div className="buttons">
        <button type="submit" className={action==="Log In"?"gray-button":""} onClick={()=>{setAction("Sign Up")}} >Signup</button>
        <button type="submit" className={action==="Sign Up"?"gray-button":""} onClick={()=>{setAction("Log In")}} >Login</button>
        </div>

        

      </div>
    </div>
    </>
  );
}export default Signup;