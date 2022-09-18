<script context="module">
  import { get } from "svelte/store";
  import { isLoggedIn, app, user } from "$lib/stores";
  export async function load() {
    if (!get(isLoggedIn)) {
      return {
        status: 307,
        redirect: "/login",
      };
    }
    return {};
  }
</script>

<script>
  import Userchatbox from "$lib/components/chat/Userchatbox.svelte";
  import Otherchatbox from "$lib/components/chat/Otherchatbox.svelte";
  import Chatinput from "$lib/components/chat/Chatinput.svelte";
  import Namepick from "$lib/components/chat/Namepick.svelte";

  import {
    getFirestore,
    query,
    onSnapshot,
    collection,
    orderBy,
    limit,
    addDoc,
    serverTimestamp,
    getDocs,
  } from "firebase/firestore";
  import { afterUpdate, onDestroy, onMount } from "svelte";
  const db = getFirestore(get(app));
  let chat = [];
  let textValue = "";
  let unsub;
  const chatsRef = collection(db, "chats", get(user).email, "messages");
  afterUpdate(() => {
    document.querySelector("#lasttext").scrollIntoView(false);
  });
  async function getData() {
    // TODO: decide on what to put for orderBy("") and limit()
    const q = query(chatsRef, orderBy("messageDate", "desc"), limit(10));

    unsub = onSnapshot(
      q,
      (snapshot) => {
        let changes = snapshot.docChanges();
        const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        if (source == "Server") {
          if (changes.length > 1) {
            changes.forEach((doc) => {
              const newmessage = doc.doc.data();
              console.log("newmessage: ", newmessage);
              chat = [newmessage, ...chat];
            });
          } else {
            const newmessage = changes[0].doc.data();
            chat = [...chat, newmessage];
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //   function not tested yet for both the event dispatcher and this
  async function handleSend() {
    await addDoc(chatsRef, {
      text: textValue,
      messageDate: serverTimestamp(),
      uid: get(user).uid,
    });
    textValue = "";
  }
  onMount(() => {
    getData();
  });
  onDestroy(() => unsub());
</script>

<div class="flex">
  <nav
    class="w-2/5 ml-64 mt-16 bg-gray-800 namesbar flex flex-col justify-start"
  >
    <Namepick name="Staff" />
  </nav>
  <main class="pt-20 overflow-y-scroll max-h-screen">
    <section class="flex justify-center">
      <div
        class="bg-indigo-700 text-white rounded-xl text-center w-1/2 p-6 my-6 text-sm"
      >
        This is used by the IT helpdesk to show when they are done and also for
        you to say your thanks to the IT helpdesk. Please do not send any
        unnecessary messages unless you feel that it is necessary.
      </div>
    </section>
    <section>
      {#each chat as i}
        {#if i.uid != get(user).uid}
          <Userchatbox text={i.text} messageDate={i.messageDate} />
        {:else}
          <Otherchatbox text={i.text} messageDate={i.messageDate} />
        {/if}
      {/each}
      <div class="mt-20" id="lasttext" />
    </section>
    <Chatinput bind:textValue on:message={handleSend} />
  </main>
</div>
