<script context="module">
  import { currentQuestion } from "$lib/stores";
  import { get } from "svelte/store";
  export async function load() {
    if (get(currentQuestion).length == 0) {
      return {
        status: 301,
        redirect: "report/intro",
      };
    }
    return {};
  }
</script>

<script lang="ts">
  import Progress from "$lib/components/report/Progress.svelte";
  import Question from "$lib/components/report/Question.svelte";
  import { prevRoutes } from "$lib/stores";
  $prevRoutes = ["Report"];
  let options: string[] = [
    "Teacher missing",
    "Appliance not working",
    "Someone has injury",
    "I need academic help",
  ];
</script>

<main class="pt-20 ml-64">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="0" />
  </div>
  <div class="pr-20">
    <Question {currentQuestion} {options} />
  </div>
</main>
