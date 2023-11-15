
const firebaseConfig = {
  apiKey: "AIzaSyDjjGBitK1TttE605jGDXGXyLnyGNcmVcE",
  authDomain: "kwitter-19b72.firebaseapp.com",
  databaseURL: "https://kwitter-19b72-default-rtdb.firebaseio.com",
  projectId: "kwitter-19b72",
  storageBucket: "kwitter-19b72.appspot.com",
  messagingSenderId: "981309556378",
  appId: "1:981309556378:web:eec2537bc13f2aa3b10123"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
