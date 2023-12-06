import './Signup.css';

function Signup() {
  return (
    <>
    <div className="App">
      <div className="signup-form">
        <h1>Sign Up</h1>

        <div className="input-field">
          <label>Name :</label>
          <input type="text"></input>
        </div>

        <div className="input-field">
          <label>Email :</label>
          <input type="email"></input>
        </div>

        <div className="input-field">
          <label>UserName :</label>
          <input type="text"></input>
        </div>

        <div className="input-field">
          <label>Password :</label>
          <input type="password"></input>
        </div>

        <button type="submit">Signup</button>

      </div>
    </div>
    </>
  );
}
export default Signup;