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

  let selected = $answers[3][0];
  let isLocked = true;
  const questionContent =
    "Q4. What teacher is supposed to be in class at this time?";
  let options = [
    "Ms A",
    "Ms B",
    "Mr A",
    "Mr B",
    "Ms A",
    "Ms B",
    "Mr A",
    "Mr B",
    "Ms A",
    "Ms B",
    "Mr A",
    "Mr B",
    "Ms A",
    "Ms B",
    "Mr A",
    "Mr B",
  ];
  function handleSelect(event) {
    isLocked = false;
    selected = event.detail.selected;
    console.log(selected);
  }

  function handleGoPrev() {
    goto("/student/report/questions/report-teacher-2");
  }
  function handleNext() {
    $answers[3] = [selected, options[selected]];
    goto("/student/report/questions/report-teacher-4");
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
        pickerContent="Select a teacher"
      />
    </div>
    <div class="flex justify-between mt-20 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} bind:isLocked />
    </div>
  </div>
</main>
