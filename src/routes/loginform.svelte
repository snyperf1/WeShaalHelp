<script context="module">
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
</script>

<script>
  import McqBox from "$lib/components/report/question/questiontypes/multiplechoice/McqBox.svelte";
  import { user, app } from "$lib/stores";
  import { doc, setDoc, getFirestore } from "firebase/firestore";
  import { goto } from "$app/navigation";

  const db = getFirestore($app);
  let selected = undefined;

  function handleClick(e) {
    selected = e.detail.text;
    console.log(selected);
    isStudent = selected == 0;
  }
  let isLocked;
  let classValid;
  let regNoValid;
  $: isLocked = classInput && regNoInput;
  $: classValid = checkClassValid(classInput);
  $: regNoValid = checkRegNoValid(regNoInput);

  function checkRegNoValid(value) {
    try {
      let test = parseInt(value);
      if (test > 0 && test < 35) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  function checkClassValid(value) {
    // S3-01
    if (
      value[0] == "S" &&
      value[2] == "-" &&
      value[3] == "0" &&
      value.length == 5 &&
      0 < parseInt(value[1]) &&
      parseInt(value[1]) < 5 &&
      0 < parseInt(value[4]) &&
      parseInt(value[4]) < 10
    ) {
      return true;
    }
    return false;
  }
  async function submitForm() {
    $user["registerNumber"] = parseInt(regNoInput);
    $user["class"] = classInput;
    $user["isStudent"] = isStudent;

    // write the $user store to db and the fields
    await setDoc(doc(db, "users", $user.email), $user); // set new user data
    // "registerNumber" and "class"
    if (isStudent) {
      goto("/student");
    } else {
      goto("/staff");
    }
  }
  //   let options = ["Student", "Teacher"];
  let isStudent = $user.email.includes(".ssts.edu.sg");
  let classInput = "";
  let regNoInput = "";
</script>

<body class="text-white flex flex-col items-center">
  <h3 class="text-3xl font-bold mt-10">
    Before signing up, please fill these in:
  </h3>
  <div class="flex flex-col gap-5">
    <!-- <h3 class="mt-20 font-semibold text-xl text-white">
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
    </div> -->

    {#if isStudent === true}
      <div class="flex justify-between text-xl items-center">
        <label for="class" class="font-semibold text-white"
          >2. State your class (e.g. S3-01, S4-09)
        </label>
        {#if classValid === true}
          <div class="text-green-400 font-medium text-base">Valid</div>
        {:else}
          <div class="text-red-400 font-medium text-base">Invalid</div>
        {/if}
      </div>
      <input
        type="text"
        id="class"
        placeholder="E.g. S1-01, S4-09"
        class="bg-gray-700 rounded-xl p-3"
        bind:value={classInput}
      />
      <div class="flex justify-between text-xl">
        <label for="registernumber" class="font-semibold text-white"
          >3. State your register number (e.g. 1, 28, 10)</label
        >
        {#if regNoValid === true}
          <div class="text-green-400 font-medium text-base">Valid</div>
        {:else}
          <div class="text-red-400 font-medium text-base">Invalid</div>
        {/if}
      </div>
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
    {:else if isStudent === false}
      <button
        on:click={submitForm}
        class="appearance-none bg-indigo-500 rounded-full font-medium py-2 px-10 text-sm text-white transition-colors hover:bg-indigo-600 w-48 mt-20"
      >
        I am a teacher
      </button>
    {/if}
  </div>
</body>
