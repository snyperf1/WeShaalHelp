<script lang="ts">
  import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    getAuth,
    browserLocalPersistence,
    setPersistence,
  } from "firebase/auth";
  import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
  import { user, isLoggedIn, app } from "$lib/stores";

  const auth = getAuth();
  const db = getFirestore($app);

  async function loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      // i changed this from browser session to browser local
      const res = await setPersistence(auth, browserLocalPersistence).then(
        () => {
          return signInWithPopup(auth, provider);
        }
      );
      $user.displayName = res.user["displayName"];
      $user.email = res.user["email"];
      $user.photoURL = res.user["photoURL"];
      $isLoggedIn = true;
      console.log($user);

      const docRef = doc(db, "users", $user.email);
      const docSnap = await getDoc(docRef); // get data from database

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
        try {
          setDoc(doc(db, "user", $user.email), $user); // set new user data
          console.log("successful");
        } catch (e) {
          console.log(e.message);
        }

        // TODO: redirect user to a page where they
        // decide whether they want to be a student or cher and so on
      }

      //   if ($user.email.includes("s2020.ssts.edu.sg")) {

      //   }
    } catch (e) {
      console.log(e.message);
      console.log(e);
    }
  }
  async function logout() {
    console.log("signout button has been pressed");

    try {
      signOut(auth);
      $isLoggedIn = false;
    } catch (e) {
      console.log(e.message);
      console.log(e);
    }
  }
  //   $: if ($isLoggedIn) {

  //   }
</script>

<body class="flex justify-center items-center flex-col">
  {#if $isLoggedIn}
    <p class="text-gray-100">Welcome, {$user.displayName}!</p>
    <button class="text-gray-100 cursor-pointer" on:click={logout}
      >Sign out</button
    >
  {:else}
    <h3 class="text-white font-semibold text-4xl mb-60 mt-20">
      Welcome to <span class="text-indigo-400">Rebot</span>.
    </h3>
    <button
      class="cursor-pointer font-medium text-gray-100 bg-indigo-600 p-5 rounded-lg hover:bg-indigo-700"
      on:click={loginWithGoogle}
      >Sign in with google
    </button>
  {/if}
  <a href="/staff/edit-tips">click on this its for testing</a>
</body>
