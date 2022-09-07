<script>
  export let values;
  export let labels;
</script>

<div
  class="bg-slate-700 p-6 rounded-2xl w-11/12 h-40 flex items-center justify-center"
>
  <div class="flex flex-row items-center gap-10 justify-center">
    {#each values as element, i}
      <div class="flex flex-col items-center">
        {#if element < 5}
          <div class="mr-1 text-green-400 text-5xl font-bold">
            {element}
          </div>
        {:else if element < 10}
          <div class="mr-1 text-yellow-200 text-5xl font-bold">
            {element}
          </div>
        {:else}
          <div class="mr-1 text-red-400 text-5xl font-bold">
            {element}
          </div>
        {/if}
        {#if typeof labels[i] == "object"}
          <div class="flex flex-col gap-2 mt-2">
            {#each labels[i] as j}
              <p class="w-20 text-center text-xs">{j}</p>
            {/each}
          </div>
        {:else}
          <p class="text-sm mt-2">{labels[i]}</p>
        {/if}
      </div>
    {/each}
  </div>
</div>
