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
  import Checkbox from "$lib/components/report/question/questiontypes/multiselect/Checkbox.svelte";
  import BackButton from "$lib/components/report/question/BackButton.svelte";
  import NextButton from "$lib/components/report/question/NextButton.svelte";
  import { goto } from "$app/navigation";

  let isSelected = false;
  function handleSelect() {
    isSelected = !isSelected;
  }
  function handleGoPrev() {
    goto("/student/report/questions/report-device-2");
  }
  function handleNext() {
    $answers[2] = [isSelected, "I have checked"];
    goto("/student/report/questions/report-device-4");
  }
</script>

<main class="pt-20 ml-64 text-white ">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="80" />
  </div>
  <h2
    class="mt-16 font-semibold text-3xl text-white flex justify-center text-center pr-20"
  >
    Q4. I can verify that I have checked the tips page and tried to troubleshoot
    but failed.
  </h2>
  <div class="flex flex-col items-center mt-28">
    <Checkbox option="I have checked" id={0} on:selected={handleSelect} />
    <p class="mt-28 text-center w-2/6">
      If you have not, <span class="font-bold text-red-400"
        >please try it out,</span
      > it might fix your problem. However, if the problem persists, continue with
      this report.
    </p>
  </div>
  <div class="flex justify-between mt-20 ml-10 pr-20">
    <BackButton on:click={handleGoPrev} />
    <NextButton on:click={handleNext} />
  </div>
</main>
