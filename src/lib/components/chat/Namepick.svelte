<script>
  import { goto } from "$app/navigation";
  import { dynamicurl, username } from "$lib/stores";
  export let name = "";
  let realname = name;
  //   export let preview;
  for (let i = 0; i < name.length; i++) {
    if (name[i] == "@") {
      name = name.slice(0, i);
      console.log(name.slice(0, i));
      break;
    }
  }
  const handleClick = () => {
    $dynamicurl = realname;
    $username = name;
    goto(`/staff/message/${name}`);
  };
</script>

<div
  class="w-full othergrey h-16 p-5 cursor-pointer hover:bg-slate-600 flex transition-colors"
  on:click={handleClick}
>
  <div class="flex flex-row items-center">
    <div src="" class="bg-indigo-500 w-10 h-10 rounded-full" />
    <div class="flex flex-col items-center justify-center">
      <strong class="ml-5 text-sm font-semibold text-white">{name}</strong>
      <!-- <p class="ml-5 mt-1 text-xs text-slate-400 truncate">{preview}</p> -->
    </div>
  </div>
</div>

<style>
  .othergrey {
    background-color: #293241;
  }
</style>
