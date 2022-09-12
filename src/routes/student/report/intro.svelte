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
    return {};
  }
</script>

<script>
  import Intro from "$lib/components/report/Intro.svelte";
</script>

<main class="pt-20 ml-64">
  <Intro />
</main>
