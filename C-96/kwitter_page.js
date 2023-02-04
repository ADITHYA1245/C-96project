var firebaseConfig = {
      apiKey: "AIzaSyCnkZgTbkBvKweDoHMI9JV0idFBlkq4hek",
      authDomain: "kwitterapp-e9d08.firebaseapp.com",
      databaseURL: "https://kwitterapp-e9d08-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-e9d08",
      storageBucket: "kwitterapp-e9d08.appspot.com",
      messagingSenderId: "785347300180",
      appId: "1:785347300180:web:0e988e54abb085d7d496c1",
      measurementId: "G-9NCTD5GC01"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


 function send(){
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
 }

 function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html"; 
    }