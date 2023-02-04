
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
      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

        function addRoom(){
            room_name = document.getElementById("room_name").value ;
             firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
             });
             localStorage.setItem("room_name",room_name);
              window.location = "kwitter_page.html";

        }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room name-" + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># " + Room_names + "</div><hr>";
           document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();


   function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
   }


   function logout(){

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location = "kwitter.html"; 
  }