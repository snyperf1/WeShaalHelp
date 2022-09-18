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
    const q = query(contactsRef);
    // LISTEN FOR CHANGES
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      let data = doc.id;
      namesarr = [...namesarr, data];
      console.log("namesarr: ", namesarr);
    });
  }
  //   function not tested yet for both the event dispatcher and this
  async function handleSend() {
    // TODO: put stuff here
  }
  onMount(() => {
    getNamesData();
  });

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
  <nav class="ml-64 mt-16 bg-gray-800 h-screen overflow-y-scroll namesbar">
    {#each namesarr as element}
      <Namepick name={element} />
    {/each}
  </nav>
  <main
    class="pt-20 max-h-screen w-3/5 flex flex-col justify-center items-center text-white"
  >
    <!-- put something here as replacement since no chat is selected -->
    No chats displayed
  </main>
</div>
