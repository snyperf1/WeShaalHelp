<script context="module">
  import { currentQuestion, isLoggedIn, answers } from "$lib/stores";
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
  import Picker from "$lib/components/report/question/questiontypes/picker/Picker.svelte";
  import BackButton from "$lib/components/report/question/BackButton.svelte";
  import NextButton from "$lib/components/report/question/NextButton.svelte";
  import { goto } from "$app/navigation";

  let selected = $answers[1][0];
  const questionContent = "Q2. Which room is affected?";
  let options = [
    "S3-01",
    "S3-02",
    "S3-03",
    "S3-04",
    "S3-05",
    "S3-06",
    "S3-07",
    "S3-08",
    "S3-09",
    "S4-01",
    "S4-02",
    "S4-03",
    "S4-04",
    "S4-05",
    "S4-06",
    "S4-07",
    "S4-08",
  ];
  function handleSelect(event) {
    selected = event.detail.selected;
    console.log(selected);
  }

  function handleGoPrev() {
    goto("/student/report/");
  }
  function handleNext() {
    $answers[1] = [selected, options[selected]];
    goto("/student/report/questions/report-teacher-2");
  }
</script>

<main class="pt-20 ml-64">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="0" />
  </div>
  <div class="pr-20">
    <div class="flex flex-col justify-center items-center w-full pl-20 ">
      <Picker
        on:choose={handleSelect}
        {questionContent}
        {options}
        bind:selected
        pickerContent="Select a classroom"
      />
    </div>
    <div class="flex justify-between mt-20 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} />
    </div>
  </div>
</main>
