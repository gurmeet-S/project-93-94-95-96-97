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
  room_name = localStorage.getItem("room_name");

  function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}
