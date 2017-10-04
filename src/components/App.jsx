import React,{ Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import AddGoal  from './AddGoal';
import GoalList  from './GoalList';
class App extends Component {
  //Logout helper method
  Logout(){
    firebaseApp.auth().signOut();
  }
  render(){
    return(
      <div>
          <h3>Goal Coach</h3>
          <AddGoal />
          <hr />
          <h4>Goals</h4>
          <GoalList />
          <hr />
        <button
          className="btn btn-danger"
          onClick={()=> this.Logout()}
          >Logout</button>
      </div>
    );
  };
}
function mapStateToProps(state){
  //console.log('state',state);
  return {};
}
export default connect(mapStateToProps,null)(App);
