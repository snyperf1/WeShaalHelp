<script>
  import McqBox from "$lib/components/report/question/questiontypes/multiplechoice/McqBox.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let questionContent;
  export let options;
  export let selected = "";
  let fillcolour = "#1e293b";

  function handleClick(event) {
    selected = event.detail.text;
    dispatch("choose", {
      selected: selected,
    });
  }
  // https://svelte.dev/tutorial/classes
</script>

<h2
  class="mt-16 font-semibold text-3xl text-white flex justify-center text-center"
>
  {questionContent}
</h2>
<div class="grid grid-rows-2 gap-x-10 gap-y-2 grid-cols-2 mt-10 font-medium">
  {#each options as content, index}
    <McqBox
      {content}
      {index}
      on:userselect={handleClick}
      bind:selected_option={selected}
    />
  {/each}
</div>
