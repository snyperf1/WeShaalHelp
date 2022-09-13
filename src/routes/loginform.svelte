<!-- <script context="module">
  import { get } from "svelte/store";
  import { isLoggedIn } from "$lib/stores";
  export async function load() {
    if (!get(isLoggedIn)) {
      return {
        status: 307,
        redirect: "/login",
      };
    }
    return {};
  }
</script> -->
<script>
  import McqBox from "$lib/components/report/question/questiontypes/multiplechoice/McqBox.svelte";
  let selected = 1;
  function handleClick(e) {
    selected = e.detail.text;
    console.log(selected);
    isStudent = selected == 0;
  }
  let isLocked;
  $: isLocked = classInput && regNoInput;
  function submitForm() {}
  let options = ["Student", "Teacher"];
  let isStudent = null;
  let classInput = "";
  let regNoInput = "";
</script>

<body class="text-white flex flex-col items-center">
  <h3 class="text-3xl font-bold mt-10">
    Before signing up, please fill these in:
  </h3>
  <div class="flex flex-col gap-5">
    <h3 class="mt-20 font-semibold text-xl text-white">
      1. Are you a teacher or a student?
    </h3>
    <div class="flex font-medium place-content-center">
      {#each options as content, index}
        <McqBox
          {content}
          {index}
          on:userselect={handleClick}
          bind:selected_option={selected}
        />
      {/each}
    </div>

    {#if isStudent}
      <label for="class" class="font-semibold text-xl text-white"
        >2. State your class</label
      >
      <input
        type="text"
        id="class"
        placeholder="E.g. S1-01, S4-09"
        class="bg-gray-700 rounded-xl p-3"
        bind:value={classInput}
      />
      <label for="registernumber" class="font-semibold text-xl text-white"
        >3. State your register number</label
      >
      <input
        type="text"
        id="registernumber"
        placeholder="E.g. 1, 9, 29"
        class="bg-gray-700 rounded-xl p-3"
        bind:value={regNoInput}
      />
      <button
        on:click={submitForm}
        class="appearance-none bg-indigo-500 rounded-full font-medium py-2 px-10 text-sm text-white transition-colors hover:bg-indigo-600 w-32"
        class:opacity-50={!isLocked}
      >
        Submit
      </button>
    {:else if isStudent == false}
      <button
        on:click={submitForm}
        class="appearance-none bg-indigo-500 rounded-full font-medium py-2 px-10 text-sm text-white transition-colors hover:bg-indigo-600 w-32"
      >
        Submit
      </button>
    {/if}
  </div>
</body>
