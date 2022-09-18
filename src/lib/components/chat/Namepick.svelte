<script>
  export let name;
  //   export let preview;
</script>

<div
  class="w-full othergrey h-16 p-5 cursor-pointer hover:bg-slate-700 flex transition-colors"
>
  <div class="flex flex-row items-center">
    <div src="" class="bg-indigo-500 w-10 h-10 rounded-full" />
    <div class="flex flex-col items-center justify-center">
      <strong class="ml-5 text-base font-semibold text-white">{name}</strong>
      <!-- <p class="ml-5 mt-1 text-xs text-slate-400 truncate">{preview}</p> -->
    </div>
  </div>
</div>

<style>
  .othergrey {
    background-color: #293241;
  }
</style>
