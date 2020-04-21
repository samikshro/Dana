var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDK22X7sCRguMzRzlu_xQAl6sfFV0fpZZY",
  authDomain: "dana-fff5d.firebaseapp.com",
  databaseURL: "https://dana-fff5d.firebaseio.com",
  projectId: "dana-fff5d",
  storageBucket: "dana-fff5d.appspot.com",
  messagingSenderId: "758855657507",
  appId: "1:758855657507:web:e4582cd56bc9d7c5d72996",
  measurementId: "G-JRG27F5TP5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

