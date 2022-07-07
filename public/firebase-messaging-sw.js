// Scripts for firebase and firebase messaging
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js',
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: 'AIzaSyB0UkMmZckaLeTeXF4XBAFlW6MpQ26jKw0',
  authDomain: 'materi-pwdk.firebaseapp.com',
  projectId: 'materi-pwdk',
  storageBucket: 'materi-pwdk.appspot.com',
  messagingSenderId: '642799249883',
  appId: '1:642799249883:web:968c71c034a8574f4f9ffe',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
