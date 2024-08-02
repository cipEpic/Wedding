// // method
// function insert() {
//   const form = $("#formMessage").serializeArray();
//   let dataMessage = JSON.parse(localStorage.getItem("dataMessage")) || [];

//   let newData = {};
//   form.forEach(function (item, index) {
//     let name = item["name"];
//     let value = name === "id" || name === "" ? Number(item["value"]) : item["value"];
//     newData[name] = value;
//   });
//   // console.log(newData)
//   localStorage.setItem("dataMessage", JSON.stringify([...dataMessage, newData]));
//   return newData;
// }

// function showData(dataMessage) {
//   let row = "";

//   if (dataMessage.length == 0) {
//     return (row = `<h1 class="title" style="text-align : center">Belum Ada Pesan Masuk</h1>`);
//   }

//   dataMessage.forEach(function (item, index) {
//     row += `<h1 class="title">${item["nama"]}</h1>`;
//     row += `<h4>- ${item["hubungan"]}</h4>`;
//     row += `<p>${item["pesan"]}</p>`;
//   });
//   return row;
// }

// let dataMessage;
// $(function () {
//   // initialize
//   dataMessage = JSON.parse(localStorage.getItem("dataMessage")) || [];

//   $(".card-message").html(showData(dataMessage));
//   // events
//   $("#formMessage").on("submit", function (e) {
//     e.preventDefault();
//     dataMessage.push(insert());
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Terima Kasih Atas Ucapan & Doanya ",
//       showConfirmButton: false,
//       timer: 2000,
//     });
//     $(".card-message").html(showData(dataMessage));
//   });
// });


// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getDatabase, ref, set, get, onValue } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADEQhtt5SVU4BbSHvBCjsqIfpWtF7U2L8",
  authDomain: "wedding-tuta.firebaseapp.com",
  databaseURL: "https://wedding-tuta-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-tuta",
  storageBucket: "wedding-tuta.appspot.com",
  messagingSenderId: "1014946306724",
  appId: "1:1014946306724:web:f630d023ff2816dfd5a431",
  measurementId: "G-LS6RBKB8T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Insert data function
function insert() {
  const form = document.getElementById("formMessage");
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const newMessageRef = ref(database, 'messages/' + Date.now()); // Use timestamp for unique keys
  set(newMessageRef, data)
    .then(() => {
      console.log("Data saved successfully");
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
    });
}

// Attach event listener to form
document.getElementById("formMessage").addEventListener("submit", (event) => {
  event.preventDefault();
  insert();
});
