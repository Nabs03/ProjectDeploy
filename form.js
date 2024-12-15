// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyByYUn-q6K_xkuZW3bNSpMjNEWrBqjVfiU",
  authDomain: "adv101-afb1e.firebaseapp.com",
  databaseURL: "https://adv101-afb1e-default-rtdb.firebaseio.com",
  projectId: "adv101-afb1e",
  storageBucket: "adv101-afb1e.firebasestorage.app",
  messagingSenderId: "542151518657",
  appId: "1:542151518657:web:62602d5750e45e1f732740",
  measurementId: "G-K1Z4ZEJPMM",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  // Signup function
  function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => alert(e.message));
    alert("SignUp Successfully");
  }
  
  // SignIN function
  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(
              email.value, password.value);
    promise.catch((e) => alert(e.message));
  }
  
  // SignOut
  function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
  }
  
  // Active user to homepage
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var email = user.email;
      alert("Active user " + email);
    } else {
      alert("No Active user Found");
    }
  });