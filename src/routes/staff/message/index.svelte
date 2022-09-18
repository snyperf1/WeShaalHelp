<!-- THIS IS MERELY COPY PASTED, ITS NOT DONE -->
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
    collection,
    query,
    where,
    getDocs,
  } from "firebase/firestore";
  import { onMount } from "svelte";
  const db = getFirestore(get(app));
  let namesarr = [];
  async function getNamesData() {
    // listen for changes
    const contactsRef = collection(db, "chats");
    // sort by timestamp
    const q = query(contactsRef, where("id", ">", -1));
    // LISTEN FOR CHANGES
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      namesarr.push(doc.data());
      namesarr = namesarr;
    });
  }
  //   function not tested yet for both the event dispatcher and this
  async function handleSend() {
    // TODO: put stuff here
  }
  //   onMount(() => {
  //     getNamesData();
  //   });
  let names = [
    {
      name: "S3-01 - 18 - Shrinithi",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
    },
  ];
  let chat = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.",
      messageDate: new Date(1650000000000),
      sender: "you",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.",
      messageDate: new Date(1650000000000),
      sender: "you",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.",
      messageDate: new Date(1650000000000),
      sender: "other",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.",
      messageDate: new Date(1650000000000),
      sender: "other",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.",
      messageDate: new Date(1650000000000),
      sender: "you",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.",
      messageDate: new Date(1650000000000),
      sender: "other",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.",
      messageDate: new Date(1650000000000),
      sender: "other",
    },
  ];
</script>

<div class="flex">
  <nav class="ml-64 mt-16 bg-gray-800 max-h-screen overflow-y-scroll namesbar">
    {#each names as element}
      <Namepick name={element.name} />
    {/each}
  </nav>
  <main class="pt-20 overflow-y-scroll max-h-screen">
    <!-- put something here as replacement since no chat is selected -->
  </main>
</div>

<style>
  .namesbar {
    min-width: fit-content;
  }
</style>
