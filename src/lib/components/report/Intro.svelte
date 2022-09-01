<script>
  import Progress from "$lib/components/report/Progress.svelte";
  import { prevRoutes } from "$lib/stores";
  import { currentQuestion } from "$lib/stores";
  $prevRoutes = ["Report", "Intro"];
</script>

<div class="text-white flex justify-center mt-5">
  <Progress progressValue="0" />
</div>
<h1 class="text-center text-4xl leading-10 font-bold text-white mt-36 mx-36">
  Hello, it seems that you would like to report something.
</h1>
<p class="text-center mt-20 text-white">
  Click on the button below to start reporting.
</p>
<div class="flex justify-center">
  <a
    href="/student/report"
    class="mt-20 appearance-none bg-indigo-500 rounded-full font-medium text-white py-2 
        px-10 text-sm transition-colors hover:bg-indigo-700"
    on:click={() => {
      console.log(currentQuestion);

      $currentQuestion.push("1");
      console.log($currentQuestion);
    }}
  >
    Start the report
  </a>
</div>
