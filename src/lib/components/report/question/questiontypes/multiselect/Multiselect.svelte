<script>
  import Checkbox from "$lib/components/report/question/questiontypes/multiselect/Checkbox.svelte";
  export let options1;
  export let options2;
  export let questionContent;
</script>

<h2
  class="font-semibold text-3xl flex justify-center text-center text-white mt-20 mb-16"
>
  {questionContent}
</h2>
<div class="flex flex-row gap-20 justify-center text-center">
  <div class="flex flex-col gap-10 text-white">
    {#each options1 as option}
      <Checkbox {option} />
    {/each}
  </div>

  <div class="flex flex-col gap-10 text-white">
    {#each options2 as option}
      <Checkbox {option} />
    {/each}
  </div>
</div>
