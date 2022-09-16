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
  import { prevRoutes } from "$lib/stores";
  $prevRoutes = ["Dashboard"];
</script>

<main class="pt-20 ml-64 ">
  <!-- put the last 3 reports from the class here -->
</main>
