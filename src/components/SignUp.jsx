import React,{ Component } from 'react';

class SignUp extends Component {
  render(){
    return(
      <div className="form-inline">
        <h2>Sign Up!</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            />
          &nbsp;&nbsp; 
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            />
          &nbsp;&nbsp;
          <button
            className="btn  btn-primary"
            type="button"
            >Sign Up</button>
        </div>
      </div>
    );
  };
}
export default SignUp;
