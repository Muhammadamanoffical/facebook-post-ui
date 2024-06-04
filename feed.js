 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
  
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


var feedParent = document.getElementById("feedParent");
var feedData = [];

window.DeletePost = function (id) {
  var reference = ref(db, `post/${id}`);
  remove(reference);
};

function renderPost() {
  for (var i = 0; i < feedData.length; i++) {
    var obj = feedData[i];

    feedParent.innerHTML += ` <div class="mb-3 bg-white rounded shadow">
            <div class="p-3 d-flex align-items-center">
                <img width="50px" class="rounded-pill" src="${obj.userUrl}" alt="">
                <div class="p-2">
                    <h5 class="mb-0">${obj.userName}</h5>
                    <p class="mb-0">just now</p>
                </div>
            </div>
            <div class='p-3'>
            <p>${obj.description}</p>
            </div>
            <img src="${obj.postUrl}" width="100%" alt="">            
            <div class="p-3 d-flex">
                <button class='w-50 btn btn-light'>Like</button>
                <button class='w-50 btn btn-light'>Comment</button>
            </div>
            <div class="p-3 d-flex">
                <button onclick="DeletePost('${obj.id}')" class='w-50 btn btn-danger'>Delete</button>
            </div>
        </div>`;
  }
}

function getFeeds() {
  var reference = ref(db, "post");
  onValue(reference, function (apnaData) {
    console.log(apnaData.val());
    if (apnaData.val()) {
      feedData = Object.values(apnaData.val());
      renderPost();
    }
  });
}
getFeeds();