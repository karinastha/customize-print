import React from "react";
import '../Login/Login';
import "./Signup.css";

function SignUp() {
  const pass1= document.getElementsByName("pass");
  console.log(pass1);

  return (
    <>
      <div className="app">
        <div className="signup-form">
          <div className="title">Sign Up</div>
            <div className="form">
            <form >
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
              </div>
              {/* <div className="input-container">
                <label>Address </label>
                <input type="text" name="uname" required />
                </div>
              <div className="input-container">
                <label>Phone No </label>
                <input type="text" name="uname" required />
              </div> */}
              <div className="input-container">
                <label>Email </label>
                <input type="email" name="email" required />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
              </div>
              <div className="input-container">
                <label>Confirm Password </label>
                <input type="password" name="pass1" required />
              </div>
              <div className="button-container">
                <input type="submit"  onClick={()=>alert('Account Created Successfully!')} />
               </div>
              <div className="box">
                <p>Already have an account?</p>
                <a href="/login">Log In</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;