<script>
  import BoxElement from "./BoxElement.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let questionContent = "";
  export let options = [];
  export let pickerContent;
  export let selected;
  function handleClick(event) {
    selected = event.detail.text;
    dispatch("choose", {
      selected: selected,
    });
  }
</script>

<h2
  class="mt-16 font-semibold text-3xl text-white flex justify-center text-center"
>
  {questionContent}
</h2>

<div
  class="bg-slate-700 rounded-2xl flex flex-col items-center justify-center max-h-72 pt-5 mt-20 mb-18 w-10/12"
>
  <h3 class="font-semibold text-2xl text-white w-full mb-5 ml-10">
    {pickerContent}
  </h3>
  <div class="h-52 flex items-center justify-center w-full">
    <div
      class="flex flex-col max-h-52 overflow-scroll w-full overflow-x-hidden border border-indigo-600"
    >
      {#each options as i, index}
        <BoxElement
          text={i}
          {index}
          bind:selected
          on:userselect={handleClick}
        />
      {/each}
    </div>
  </div>
</div>
