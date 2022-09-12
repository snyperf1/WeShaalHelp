<script>
  import "$lib/app.css";
  import { initializeApp } from "firebase/app";
  import { app } from "$lib/stores";

  const firebaseConfig = {
    apiKey: "AIzaSyBi7QNN9qP5AFgsxJS_5LCsvDEkeBdGabY",
    authDomain: "sstinc-ict-helpdesk.firebaseapp.com",
    projectId: "sstinc-ict-helpdesk",
    storageBucket: "sstinc-ict-helpdesk.appspot.com",
    messagingSenderId: "253562610341",
    appId: "1:253562610341:web:4a803a66dd0dea9389634c",
    measurementId: "G-BLBD06F5GV",
  };
  $app = initializeApp(firebaseConfig);
</script>

<slot />
