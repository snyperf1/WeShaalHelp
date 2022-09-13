<script context="module">
  import { get } from "svelte/store";
  import { isLoggedIn, app } from "$lib/stores";
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
  import Tip from "$lib/components/Tip.svelte";
  import {
    getFirestore,
    query,
    where,
    collection,
    getDocs,
  } from "firebase/firestore";
  import { onMount } from "svelte";
  const db = getFirestore(get(app));
  let tipsarr = [];
  async function getData() {
    const tipsRef = collection(db, "tips");
    const q = query(tipsRef, where("id", ">", -1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      tipsarr.push(doc.data());
      tipsarr = tipsarr;
    });
  }
  onMount(() => {
    getData();
  });
</script>

<main class="pt-20 ml-64">
  {#each tipsarr as i}
    <Tip title={i.title} body={i.body} />
  {/each}
</main>
