// Import the functions you need from the SDKs you need
import {
  initializeApp
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import {
  getDatabase,
  ref,
  set,
  onValue
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js';

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

  // Collect data from form
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const newMessageRef = ref(database, 'messages/' + Date.now()); // Use timestamp for unique keys
  set(newMessageRef, data)
    .then(() => {
      console.log("Data saved successfully");
      form.reset(); // Clear the form fields after successful submission
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

// Real-time data fetching and display
const db = getDatabase();
const messagesRef = ref(db, 'messages/');

onValue(messagesRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data); // Log data to console
  // Call a function to display data
  displayData(data);
});

function displayData(data) {
  const container = document.getElementById('messages-container');
  container.innerHTML = ''; // Clear existing content

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const message = data[key];
      const messageElement = document.createElement('div');

      // Create a message item
      messageElement.className = "message-item";
      messageElement.innerHTML = `
        <div class="message-content">
          <div class="message-info">
            <span class="message-name">${message.nama}</span> 
            <span class="message-hubungan">(${message.kehadiran})</span>
          </div>
          <div class="message-bubble">
            ${message.pesan}
          </div>
        </div>
      `;

      container.appendChild(messageElement);
    }
  }
}