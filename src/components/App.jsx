import React,{ Component } from 'react';
import { firebaseApp } from '../firebase';
class App extends Component {
  //Logout helper method
  Logout(){
    firebaseApp.auth().signOut();
  }
  render(){
    return(
      <div>
        <button
          className="btn btn-danger"
          onClick={()=> this.Logout()}
          >Logout</button>
      </div>
    );
  };
}
export default App;
