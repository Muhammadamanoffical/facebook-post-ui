 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCjSmGb8bj6mughhLozUtR6UcVVWGLoqmg",
   authDomain: "testing-a3e12.firebaseapp.com",
   databaseURL: "https://testing-a3e12-default-rtdb.firebaseio.com",
   projectId: "testing-a3e12",
   storageBucket: "testing-a3e12.appspot.com",
   messagingSenderId: "341399121244",
   appId: "1:341399121244:web:2626ee3e272918b5122599"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const db = getDatabase();
// declare varables
var username=document.getElementById("userName")
var userUrl=document.getElementById("userUrl");
var postUrl=document.getElementById("postUrl")
var description=document.getElementById("description");
 window.createPost=function(){
    var obj = {
        userName: userName.value,
        userUrl: userUrl.value,
        postUrl: postUrl.value,
        description: description.value,
      };
      obj.id = push(ref(db, "post")).key;

  var reference = ref(db, `post/${obj.id}`);
  set(reference, obj)
    .then(function () {
      console.log("Data Send Succefully");
    })
    .catch(function (err) {
      console.log(err, "Error");
    });
 }