import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { logUser } from './actions';
import reducer from './reducers';
import { firebaseApp } from './firebase';
import history from './History';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Router,Route } from 'react-router-dom';

//Create store
const store=createStore(reducer);
//Listener to tell us if user is authenticated
 firebaseApp.auth().onAuthStateChanged(user=>{
   if(user){
     //console.log("user has signed in or up",user);
     const { email }=user;
     store.dispatch(logUser(email));
     history.push('/app');
   }else{
      //console.log("user has signed out or still needs to sign in",user);
      history.replace('/login');
   }
 });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path='/app' component={App}  />
        <Route path='/login' component={SignIn}  />
        <Route path='/register' component={SignUp} />
      </div>
    </Router>
  </Provider>
,
   document.getElementById('root')
);
