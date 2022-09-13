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
  import Multiselect from "$lib/components/report/question/questiontypes/multiselect/Multiselect.svelte";

  let selected = undefined;
  const questionContent = "Q3. Please select all that apply.";
  let options = [
    "Projector does not stay down",
    "Projector not powering on",
    "Cannot connect mac to projector",
    "Control panel not working",
    "Projector screen glitching",
    "Speakers have no sound",
    "Speakers are glitching",
  ];
  function handleSelect(event) {
    selected = event.detail.selected;
    console.log(selected);
  }

  function handleGoPrev() {
    // go back
    goto("/student/report/questions/report-device-1");
  }
  function handleNext() {
    const newarr = [];
    for (let i = 0; i < selected.length - 1; i++) {
      if (selected[i]) {
        newarr.push(options[i]);
      }
    }
    newarr.push(selected[selected.length - 1]);
    console.log(newarr);
    $answers[2] = [selected, newarr];
    console.log($answers);
    goto("/student/report/questions/report-device-3");
  }
</script>

<main class="pt-20 ml-64">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="0" />
  </div>
  <div class="pr-20">
    <div class="flex flex-col justify-center items-center w-full pl-20 ">
      <Multiselect on:userselect={handleSelect} {questionContent} {options} />
    </div>
    <div class="flex justify-between mt-20 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} />
    </div>
  </div>
</main>
