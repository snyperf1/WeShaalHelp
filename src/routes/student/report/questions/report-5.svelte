<script context="module">
  import { answers, currentQuestion, isLoggedIn, app } from "$lib/stores";
  import { get } from "svelte/store";
  export async function load() {
    if (!get(isLoggedIn)) {
      return {
        status: 307,
        redirect: "/login",
      };
    } else if (get(currentQuestion).length == 0) {
      return {
        status: 301,
        redirect: "/student/report/intro",
      };
    }
    return {};
  }
</script>

<script>
  import Progress from "$lib/components/report/Progress.svelte";
  import BackButton from "$lib/components/report/question/BackButton.svelte";
  import {
    collection,
    addDoc,
    getFirestore,
    serverTimestamp,
    doc,
    getDoc,
  } from "firebase/firestore";
  import { goto } from "$app/navigation";

  //   console.log($answers);
  const db = getFirestore($app);
  const teacherPath = [
    "Q1. What do you want to report?",
    "Q2. Which room is affected?",
    "Q3. What subject were you supposed to be having at that time?",
    "Q4. Which teacher is supposed to be in class at this timing?",
    "Q5. Do you have any other remarks? (optional)",
  ];
  const devicePath = [
    "Q1. What do you want to report?",
    "Q2. Which room is affected?",
    "Q3. Please select all those that apply.",
    "Q4. I can verify that I have checked the tips page and tried to troubleshoot but failed. ",
    "Q5. Do you have any other remarks for this device? (optional)",
  ];
  function handleGoPrev() {
    // go back
    if ($answers[0][0] == 2) {
      goto("/student/report/questions/report-teacher-4");
    } else {
      goto("/student/report/questions/report-device-4");
    }
  }
  async function handleNext() {
    let data = {};
    if ($answers[0][0] == 0 || $answers[1][0] == 1) {
      for (let i = 0; i < $answers.length; i++) {
        const element = $answers[i];
        data[`Question ${i + 1}`] = element[1];
      }
      data.timeStamp = serverTimestamp();
      // put it in reports
      await addDoc(collection(db, "reports"), data);
    }

    // update data
    const docRef = doc(db, "data", "data");
    const docSnap = await getDoc(docRef);
    let statistics = docSnap.data();
    const newstatistics = {};
    const statisticsKeys = Object.keys(statistics);
    console.log(statisticsKeys);
    // for (let i = 0; i < statisticsKeys.length; i++) {

    //     newstatistics[statisticsKeys[i]] = statistics[statisticsKeys[i]]
    // }

    // TODO:
    // Make the newstatistics properly by switch statements
    // post the newstatistics onto db
    // edit the "classes" document in db, where there
    // will be fields to show the things functioning in the class
    // edit the "chats" collection to make a chat
    // make a dynamic route for messages 😭

    goto("/student/report/outro");
  }
</script>

<main class="pt-20 ml-64 text-white">
  <div class="text-white flex justify-center mt-5">
    <Progress progressValue="0" />
  </div>
  <div class="pr-20">
    <div class="flex flex-col justify-center items-center w-full pl-20">
      <h2
        class="font-semibold text-3xl flex justify-center text-center text-white mt-20 mb-16"
      >
        Verify that this is what you want to submit:
      </h2>
    </div>
    <div class="w-full text-center">
      <div class="">
        {#if $answers[0][0] == 2}
          {#each $answers as e, i}
            <h3 class="font-bold">{teacherPath[i]}</h3>
            {#if i == 4}
              <p class="mb-5 font-light">Ans: {e}</p>
            {:else}
              <p class="mb-5 font-light">Ans: {e[1]}</p>
            {/if}
          {/each}
        {:else}
          {#each $answers as e, i}
            <h3 class="font-bold">{devicePath[i]}</h3>
            {#if i == 4}
              <p class="mb-5 font-light">Ans: {e}</p>
            {:else if i == 2}
              <p class="mb-5 font-light">Ans: {e[1].join(", ")}</p>
            {:else}
              <p class="mb-5 font-light">Ans: {e[1]}</p>
            {/if}
          {/each}
        {/if}
      </div>
    </div>
    <div class="flex justify-between mt-20 ml-10">
      <BackButton on:click={handleGoPrev} />
      <button
        on:click={handleNext}
        class="appearance-none bg-indigo-600 rounded-full font-medium text-white py-2 px-10 text-sm transition-colors hover:bg-indigo-700"
      >
        Submit
      </button>
    </div>
  </div>
</main>
