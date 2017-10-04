import * as firebase from 'firebase';
const config={
    apiKey: "AIzaSyDBuQYRN-o4pxyqF7Q-J8bY_sWmCTcO8iY",
    authDomain: "goalcoach-22cf7.firebaseapp.com",
    databaseURL: "https://goalcoach-22cf7.firebaseio.com",
    projectId: "goalcoach-22cf7",
    storageBucket: "goalcoach-22cf7.appspot.com",
    messagingSenderId: "786160011389"
};
//Init firebaseApp and export it
export const firebaseApp=firebase.initializeApp(config);
export const goalRef=firebase.database().ref('goals');
export const completeGoalRef=firebase.database().ref('completeGoal');
