<script context="module">
  import { answers, currentQuestion, isLoggedIn } from "$lib/stores";
  import { get } from "svelte/store";
  export async function load() {
    if (!get(isLoggedIn)) {
      return {
        status: 307,
        redirect: "/login",
      };
    } else if (get(currentQuestion).length == 0) {
      return {
        status: 301,
        redirect: "/student/report/intro",
      };
    }
    return {};
  }
</script>

<script>
  import Progress from "$lib/components/report/Progress.svelte";
  import BackButton from "$lib/components/report/question/BackButton.svelte";
  import NextButton from "$lib/components/report/question/NextButton.svelte";
  import { goto } from "$app/navigation";

  let remarksValue = $answers[4];

  function handleGoPrev() {
    // go back
    goto("/student/report/questions/report-device-3");
  }
  function handleNext() {
    $answers[4] = remarksValue;
    console.log($answers);
    goto("/student/report/questions/report-5");
  }
</script>

<main class="pt-20 ml-64">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="0" />
  </div>
  <div class="pr-20">
    <div class="flex flex-col justify-center items-center w-full pl-20">
      <h2
        class="font-semibold text-3xl flex justify-center text-center text-white mt-20 mb-16"
      >
        Do you have any other remarks? (optional)
      </h2>
      <textarea
        class="bg-slate-700 rounded-xl p-5 text-white w-5/6 resize-none"
        rows="10"
        placeholder="type something here... (optional)"
        bind:value={remarksValue}
      />
    </div>
    <div class="flex justify-between mt-20 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} />
    </div>
  </div>
</main>
