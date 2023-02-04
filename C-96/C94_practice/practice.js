
var firebaseConfig = {
    apiKey: "AIzaSyDGRfNQBkPCQhU1mh_2pYVC4qxzcpw1AV8",
    authDomain: "kwitterapp-5ce4c.firebaseapp.com",
    databaseURL: "https://kwitterapp-5ce4c-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-5ce4c",
    storageBucket: "kwitterapp-5ce4c.appspot.com",
    messagingSenderId: "481832915725",
    appId: "1:481832915725:web:80bd9b8e699a3a4bf11644",
    measurementId: "G-B4G1DXQKC3"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

     function addUser()
     {
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose:"adding user"
        });
     }