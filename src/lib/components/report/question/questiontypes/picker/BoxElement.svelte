<script>
  export let text;
  export let selected;
  export let index;
  let isSelected = false;
  $: {
    if (selected != index) {
      isSelected = false;
    } else if (selected === index) {
      isSelected = true;
    }
  }
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function handleClick() {
    isSelected = true;
    dispatch("userselect", {
      text: index,
    });
  }
</script>

<div
  class="p-2 pl-10 bg-slate-700 w-full text-white border border-indigo-600 hover:bg-slate-800 transition-colors cursor-pointer"
  on:click={handleClick}
  class:bg-green-400={isSelected}
  class:hover:bg-green-300={isSelected}
>
  {text}
</div>
