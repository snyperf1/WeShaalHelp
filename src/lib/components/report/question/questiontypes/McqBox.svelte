<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let selected = false;
  function handleClick() {
    selected = !selected;
    dispatch("userselect", {
      text: index,
    });
  }
  export let content;
  export let index;
  export let selected_option;
  $: {
    if (selected_option != index) {
      selected = false;
    }
  }
</script>

<div
  class="my-5 mx-10 bg-slate-700 text-white flex justify-center h-40 
  w-full items-center rounded-2xl text-xl cursor-pointer hover:bg-slate-600 transition-colors 
   "
  class:bg-green-400={selected}
  class:hover:bg-green-400={selected}
  on:click={handleClick}
>
  {content}
</div>
