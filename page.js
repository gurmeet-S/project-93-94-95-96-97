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
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id = "+Room_names+" onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML = row;
   //End code
   });});}
getData();