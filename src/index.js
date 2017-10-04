import React from 'react';
import ReactDOM from 'react-dom';

import { firebaseApp } from './firebase';
import history from './History';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Redirect } from 'react-router'
import { Router, Link, Route } from 'react-router-dom';

//Listener to tell us if user is authenticated
 firebaseApp.auth().onAuthStateChanged(user=>{
   if(user){
     console.log("user has signed in or up",user);
     history.push('/app');
   }else{
      console.log("user has signed out or still needs to sign in",user);
      history.replace('/login');
   }
 });

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path='/app' component={App}  />
      <Route path='/login' component={SignIn}  />
      <Route path='/register' component={SignUp} />
    </div>
  </Router>,
   document.getElementById('root')
);
