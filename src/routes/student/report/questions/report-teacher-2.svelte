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

  let selected = $answers[2][0];
  const questionContent =
    "Q3. Which subject were you supposed to be having at the time?";
  let options = [
    "Math",
    "AMath",
    "Geography",
    "History",
    "Social Studies",
    "English",
    "Chinese",
    "Malay",
    "Tamil",
    "Higher Mother Tongue",
    "Bio",
    "Physics",
    "Chemistry",
    "Biotech",
    "Computing+",
    "Electronics",
    "Design Studies",
    "Engineering+",
  ];
  function handleSelect(event) {
    selected = event.detail.selected;
    console.log(selected);
  }

  function handleGoPrev() {
    goto("/student/report/questions/report-teacher-1");
  }
  function handleNext() {
    $answers[2] = [selected, options[selected]];
    goto("/student/report/questions/report-teacher-3");
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
        pickerContent="Select a subject"
      />
    </div>
    <div class="flex justify-between mt-20 ml-10">
      <BackButton on:click={handleGoPrev} />
      <NextButton on:click={handleNext} />
    </div>
  </div>
</main>
