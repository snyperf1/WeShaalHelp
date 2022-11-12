<script context="module">
  import { currentQuestion, isLoggedIn, answers } from "$lib/stores";
  import { get } from "svelte/store";
  export async function load() {
    if (get(currentQuestion).length == 0) {
      return {
        status: 301,
        redirect: "report/intro",
      };
    } else if (!get(isLoggedIn)) {
      return {
        status: 307,
        redirect: "/login",
      };
    }
    return {};
  }
</script>

<script lang="ts">
  import Progress from "$lib/components/report/Progress.svelte";
  import MultipleChoice from "$lib/components/report/question/questiontypes/multiplechoice/MultipleChoice.svelte";
  import BackButton from "$lib/components/report/question/BackButton.svelte";
  import NextButton from "$lib/components/report/question/NextButton.svelte";
  import { goto } from "$app/navigation";
  let selected = $answers[0][0];
  let options: string[] = [
    "ICT equipment not working properly",
    "Infrastructure broken",
    "The current teacher is missing",
    // "Others",
  ];
  let questionContent: string = "Q1: Whats your problem?";

  function handleGoPrev() {
    goto("/student/report/intro");
  }
  function handleNext() {
    if (selected == 0 || selected == 1) {
      $answers[0] = [selected, options[selected]];
      goto("/student/report/questions/report-device-1");
    } else if (selected == 2) {
      $answers[0] = [selected, options[selected]];
      goto("/student/report/questions/report-teacher-1");
    } else {
      console.log("do nothing");
    }
  }
  function handleSelect(e) {
    console.log("handleSelect called");

    selected = e.detail.selected;
  }
</script>

<main class="pt-20 ml-64">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="0" />
  </div>
  <div class="pr-20">
    <MultipleChoice
      bind:selected
      {questionContent}
      {options}
      on:choose={handleSelect}
    />
    <div class="flex justify-between mt-10 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} />
    </div>
  </div>
</main>
