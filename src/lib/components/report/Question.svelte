<script lang="ts">
  import MultipleChoice from "$lib/components/report/question/questiontypes/multiplechoice/MultipleChoice.svelte";
  import BackButton from "$lib/components/report/question/BackButton.svelte";
  import NextButton from "$lib/components/report/question/NextButton.svelte";
  import Multiselect from "$lib/components/report/question/questiontypes/multiselect/Multiselect.svelte";

  type TypeQuestion = "multipleChoice" | "checkbox" | "dropdown" | "true-false";
  export let currentQuestion;
  export let questionContent: string = "Q1: Whats your problem?";
  export let questionType: TypeQuestion = "checkbox";

  // Multiplechoice portion
  export let optionsMultipleChoice: string[] = [
    "Teacher missing",
    "Appliance not working",
    "Someone has injury",
    "I need academic help",
  ];
  // Multiselect portion
  export let options1 = [
    "Projector does not stay down",
    "Projector not powering on",
    "Cannot connect mac to projector",
    "Control panel not working",
  ];
  export let options2 = [
    "Projector screen glitching",
    "Speakers have no sound",
    "Speakers are glitching",
  ];
</script>

<div>
  {#if questionType == "multipleChoice"}
    <MultipleChoice options={optionsMultipleChoice} {questionContent} />
  {:else if questionType == "checkbox"}
    <Multiselect {options1} {options2} {questionContent} />
  {/if}
  <div class="flex justify-between mt-10 ml-10">
    <BackButton />
    <NextButton />
  </div>
</div>
