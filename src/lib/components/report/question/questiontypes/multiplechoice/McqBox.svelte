<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let selected = false;
  function handleClick() {
    selected = true;
    console.log(index);
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
    } else if (selected_option === index) {
      selected = true;
    }
  }
</script>

<div
  class="my-5 mx-10 bg-slate-700 text-white flex justify-center h-40 grow px-16
  w-full items-center text-center rounded-2xl text-xl cursor-pointer hover:bg-slate-600 transition-colors 
   "
  class:bg-green-400={selected}
  class:hover:bg-green-400={selected}
  on:click={handleClick}
>
  {content}
</div>
