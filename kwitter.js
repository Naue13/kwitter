
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

function addUser() {

  userName = document.getElementById("userName").value;

  localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html";
}

