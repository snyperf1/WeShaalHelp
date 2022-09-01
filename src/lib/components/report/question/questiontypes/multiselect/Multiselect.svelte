<script>
  import Checkbox from "$lib/components/report/question/questiontypes/multiselect/Checkbox.svelte";

  export let options;
  export let questionContent;
  let selected = [false, false, false, false, false, false, false, false];
  function changeSelected(e) {
    let index = e.detail.id;
    selected[index] = !selected[index];
    console.log(selected);
  }
</script>

<h2
  class="font-semibold text-3xl flex justify-center text-center text-white mt-20 mb-16"
>
  {questionContent}
</h2>
<div class="flex flex-row gap-20 justify-center text-center">
  <div class="grid grid-rows-4 grid-cols-2 gap-y-10 gap-x-20 text-white">
    {#each options as option, id}
      <Checkbox {option} {id} on:selected={changeSelected} />
    {/each}
  </div>
</div>
