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
  import Progress from "$lib/components/report/Progress.svelte";
  $prevRoutes = ["Dashboard"];
  let progressValue = 8;
</script>

<main class="pt-20 ml-64 ">
  <div class="text-white p-5 flex justify-center">
    <Progress {progressValue} />
  </div>
</main>
