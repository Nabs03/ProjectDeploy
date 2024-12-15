// Import Firebase and Firestore SDK
// (Make sure this script runs after Firebase has been initialized)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration (replace with your own config)
const firebaseConfig = {
    apiKey: "AIzaSyByYUn-q6K_xkuZW3bNSpMjNEWrBqjVfiU",
    authDomain: "adv101-afb1e.firebaseapp.com",
    databaseURL: "https://adv101-afb1e-default-rtdb.firebaseio.com",
    projectId: "adv101-afb1e",
    storageBucket: "adv101-afb1e.firebasestorage.app",
    messagingSenderId: "542151518657",
    appId: "1:542151518657:web:62602d5750e45e1f732740",
    measurementId: "G-K1Z4ZEJPMM"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to handle form submission
document.querySelector('.checkout-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const postalCode = document.getElementById('postal-code').value;
  const paymentMethod = document.getElementById('payment-method').value;

  try {
    // Add a new document to the Firestore collection
    const docRef = await addDoc(collection(db, "orders"), {
      name: name,
      email: email,
      address: address,
      city: city,
      postalCode: postalCode,
      paymentMethod: paymentMethod,
      timestamp: new Date()
    });

    alert(`Order submitted successfully! Order ID: ${docRef.id}`);

    // Optionally, reset the form
    event.target.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to submit order. Please try again later.");
  }
});
