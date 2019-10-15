// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const signIn = () => {
//   const email = document.getElementById('admin-email').value;
//   const password = document.getElementById('admin-password').value;
//   firebase.auth().signInWithEmailAndPassword(email, password);
// };

// const testWrite = () => {
//   const message = 'test';
//   firebase.database().ref('messages').set(message);
// };

// const attachEvents = () => {
//   document.getElementById('sign-in').addEventListener('click', signIn);
//   document.getElementById('write').addEventListener('click', testWrite);
// };

// export default { attachEvents };