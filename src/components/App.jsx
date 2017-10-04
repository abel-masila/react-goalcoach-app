import React,{ Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
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
function mapStateToProps(state){
  console.log('state',state);
  return {};
}
export default connect(mapStateToProps,null)(App);
