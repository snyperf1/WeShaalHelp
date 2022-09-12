<script context="module">
  import { get } from "svelte/store";
  import { isLoggedIn } from "$lib/stores";
  export async function load() {
    if (!get(isLoggedIn)) {
      return {
        status: 307,
        redirect: "/login",
      };
    }
  }
</script>

<script>
  import EditTips from "$lib/components/EditTips.svelte";
  import {
    doc,
    updateDoc,
    getFirestore,
    query,
    where,
    collection,
    getDocs,
  } from "firebase/firestore";
  import { app, user } from "$lib/stores";
  import { onMount } from "svelte";
  const db = getFirestore($app);
  console.log($user);
  let tipsarr = [];
  async function getData() {
    const tipsRef = collection(db, "tips");
    const q = query(tipsRef, where("id", ">", -1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      tipsarr.push(doc.data());
      console.log(doc.data());
      tipsarr = tipsarr;
    });
  }
  onMount(() => getData());

  async function handleUpdates(e) {
    tipsarr[e.detail.id].body = e.detail.newbody;
    const tipsRef = doc(db, "tips", e.detail.id.toString());

    await updateDoc(tipsRef, {
      body: e.detail.newbody,
    });
  }
</script>

<main class="pt-20 ml-64">
  {#each tipsarr as e}
    <EditTips
      bind:title={e.title}
      bind:body={e.body}
      bind:id={e.id}
      on:updateBody={handleUpdates}
    />
  {/each}
</main>
