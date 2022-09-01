<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let option;
  const green: string = "#4ADE80";
  let isclicked: Boolean = false;
  let fillcolour = "#1e293b";
  $: {
    if (isclicked) {
      fillcolour = green;
    } else {
      fillcolour = "#1e293b";
    }
  }
</script>

<div
  class="flex flex-row gap-2 p-1 items-center cursor-pointer"
  on:click={() => (isclicked = !isclicked)}
>
  <div
    class="border-white border-4 rounded-sm p-1 items-center mb-1 transition-all"
    class:border-green-400={isclicked}
  >
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="13.7121"
        height="6.58576"
        rx="3.29288"
        transform="matrix(-0.723072 -0.690772 -0.723072 0.690772 14.6768 20.4506)"
        fill={fillcolour}
      />
      <rect
        width="25.8464"
        height="5.88061"
        rx="2.9403"
        transform="matrix(0.532405 -0.84649 -0.867274 -0.497832 11.2393 24.8062)"
        fill={fillcolour}
      />
    </svg>
  </div>

  <p
    class="ml-5 text-base transition-all"
    class:font-bold={isclicked}
    class:text-green-400={isclicked}
    class:text-lg={isclicked}
  >
    {option}
  </p>
</div>
