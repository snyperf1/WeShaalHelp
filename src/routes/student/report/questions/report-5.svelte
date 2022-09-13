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

  console.log($answers);
  const teacherPath = [
    "Q1. What do you want to report?",
    "Q2. Which room is affected?",
    "Q3. What subject were you supposed to be having at that time?",
    "Q4. Which teacher is supposed to be in class at this timing?",
    "Q5. Do you have any other remarks? (optional)",
  ];

  function handleGoPrev() {
    // go back
    if ($answers[0][0] == 2) {
      goto("/student/report/questions/report-teacher-4");
    } else {
      goto("/student/report/questions/report-device-4");
    }
  }
  function handleNext() {}
</script>

<main class="pt-20 ml-64 text-white">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="0" />
  </div>
  <div class="pr-20">
    <div class="flex flex-col justify-center items-center w-full pl-20">
      <h2
        class="font-semibold text-3xl flex justify-center text-center text-white mt-20 mb-16"
      >
        Verify that this is what you want to submit:
      </h2>
    </div>
    <div class="w-full text-center">
      <div class="">
        {#if $answers[0][0] == 2}
          {#each $answers as e, i}
            <h3 class="font-bold">{teacherPath[i]}</h3>
            {#if i == 4}
              <p class="mb-5 font-light">Ans: {e}</p>
            {:else}
              <p class="mb-5 font-light">Ans: {e[1]}</p>
            {/if}
          {:else}
            <p>nothing to show :(</p>
          {/each}
        {/if}
      </div>
    </div>
    <div class="flex justify-between mt-20 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} />
    </div>
  </div>
</main>
