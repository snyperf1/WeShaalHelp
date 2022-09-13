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
    const contactsRef = collection(db, "users", "msgcontacts");
    const q = query(contactsRef, where("id", ">", -1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      namesarr.push(doc.data());
      namesarr = namesarr;
    });
  }
  async function handleSend() {
    // TODO: put stuff here
  }
  //   onMount(() => {
  //     getNamesData();
  //   });
  let names = [
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ....",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ....",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ....",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ....",
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ....",
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
    },
  ];
</script>

<div class="flex">
  <nav class="ml-64 mt-16 bg-gray-800 max-h-screen overflow-y-scroll namesbar">
    {#each names as element}
      <Namepick name={element.name} preview={element.lastMessage} />
    {/each}
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
    {#each chat as i}
      {#if i.sender == "you"}
        <Userchatbox text={i.text} messageDate={i.messageDate} />
      {:else}
        <Otherchatbox text={i.text} messageDate={i.messageDate} />
      {/if}
    {/each}
    <Chatinput />
  </main>
</div>

<style>
  .namesbar {
    min-width: fit-content;
  }
</style>
