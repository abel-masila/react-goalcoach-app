import React,{ Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

class SignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      error:{
        message:''
      }
    }
  }
  //SignUp Helper Method
  signUp(){
    const { email, password }= this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email,password).catch(error=>{
      this.setState({error});
    });
  }

  render(){
    return(
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Register!</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            style={{marginRight: '5px'}}
            onChange={event=> this.setState({email: event.target.value})}
            />

          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="Password"
            onChange={event=> this.setState({password: event.target.value})}
            />

          <button
            className="btn  btn-primary"
            type="button"
            onClick={()=>this.signUp()}
            >Sign Up</button>

        </div>
        <div className="text-danger">{this.state.error.message}</div>
        <div><Link to={'/login'}>Already A User? Login Instead!</Link></div>
      </div>
    );
  };
}
export default SignUp;
