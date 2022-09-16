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
  let isLocked = true;
  const questionContent = "Q3. Please select all that apply.";
  let options = [
    "Aircon broken",
    "Ceiling Fan(s) broken",
    "Light(s) broken",
    "Door lock broken",
    "Projector screen broken",
    "Projector broken",
    "Wifi router broken",
    "Speakers broken",
    "Teacher's table's fan not working",
  ];
  function handleSelect(event) {
    selected = event.detail.selected;
    let sum = 0;
    for (let i = 0; i < selected.length; i++) {
      sum += Number(Boolean(selected[i]));
    }
    if (sum == 0) {
      isLocked = true;
    } else {
      isLocked = false;
    }
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
    console.log([selected, newarr]);
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
    <div class="flex justify-between mt-10 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} bind:isLocked />
    </div>
  </div>
</main>
