var firebaseConfig = {
    apiKey: "AIzaSyBQdRmKsLrJZsfNKWQQ-2j1mB_U4KmV6Nk",
    authDomain: "chit-chat-gk2008.firebaseapp.com",
    projectId: "chit-chat-gk2008",
    storageBucket: "chit-chat-gk2008.appspot.com",
    messagingSenderId: "393790451592",
    appId: "1:393790451592:web:918197c9203ef873bfd43d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id = "+Room_names+" onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML = row;
   //End code
   });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "login_index.html";
  }