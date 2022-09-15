<script>
  import Checkbox from "$lib/components/report/question/questiontypes/multiselect/Checkbox.svelte";
  import { createEventDispatcher } from "svelte";
  import Others from "./Others.svelte";
  const dispatch = createEventDispatcher();
  export let options;
  export let questionContent;
  let selected = [false, false, false, false, false, false, false, false, ""];
  function changeSelected(e) {
    let index = e.detail.id;
    selected[index] = !selected[index];
    dispatch("userselect", {
      selected: selected,
    });
  }
  function handleOthers(e) {
    selected[selected.length - 1] = e.detail.userinput;
    dispatch("userselect", {
      selected: selected,
    });
  }
</script>

<h2
  class="font-semibold text-3xl flex justify-center text-center text-white mt-20 mb-16"
>
  {questionContent}
</h2>
<div class="flex flex-row gap-20 justify-center text-center">
  <div class="grid grid-rows-4 grid-cols-2 gap-y-7 gap-x-20 text-white">
    {#each options as option, id}
      <Checkbox {option} {id} on:selected={changeSelected} />
    {/each}
    <Others on:selected={handleOthers} />
  </div>
</div>
<!-- <div class="flex justify-between mt-10 ml-10">
  <BackButton />
  <NextButton />
</div> -->
