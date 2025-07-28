importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
    apiKey: "AIzaSyARVVjjRT4tvlQZCoJrB1hb6J8cKmF2zUg",
    authDomain: "bdproperty-d8a7b.firebaseapp.com",
    projectId: "bdproperty-d8a7b",
    storageBucket: "bdproperty-d8a7b.firebasestorage.app",
    messagingSenderId: "503587327824",
    appId: "1:503587327824:web:760c3b1e45688b85826655",
    measurementId: "G-5PL2SR8N4E"
};

firebase?.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});
