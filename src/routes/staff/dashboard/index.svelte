<script>
  import Card from "$lib/components/statistics/Card.svelte";
  import Pie from "$lib/components/statistics/Pie.svelte";

  //   import { onMount } from "svelte";
  //   import Chart from "chart.js/auto/auto.js";

  //   let ctx;
  //   onMount(async () => {
  //     const myChart = new Chart(ctx, {
  //       type: "bar",
  //       data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         datasets: [
  //           {
  //             label: "# of Votes",
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(75, 192, 192, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(255, 159, 64, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(54, 162, 235, 1)",
  //               "rgba(255, 206, 86, 1)",
  //               "rgba(75, 192, 192, 1)",
  //               "rgba(153, 102, 255, 1)",
  //               "rgba(255, 159, 64, 1)",
  //             ],
  //             borderWidth: 1,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       },
  //     });
  //   });
  let percent = 30;
</script>

<main class="pt-16 ml-80 text-white">
  <h1 class="text-3xl font-bold mt-10">Dashboard</h1>
  <div class="flex gap-8">
    <div>
      <h2 class="text-xl font-medium mt-10 mb-5">
        State of appliances in classes
      </h2>
      <div class="flex">
        <Card
          color="bg-red-400"
          maincolor="#FA6262"
          opacity="#5b4b5a"
          value="10"
          capacity="49"
        />
        <Card
          color="bg-green-400"
          maincolor="#22c55e"
          opacity="#355c57"
          value="15"
          capacity="49"
        />
      </div>
    </div>
    <div>
      <h2 class="text-xl font-medium mt-10 mb-5">State of appliances</h2>
      <div class=" w-80 h-44 rounded-2xl bg-slate-700 flex items-center pl-6">
        <Pie size={120} {percent} />
        <div class="ml-7">
          <h3 class="text-lg font-semibold mb-5">Classes</h3>
          <div class="flex items-center mb-3">
            <div class="h-3 w-3 bg-green-400 mr-2" />
            <div class="text-xs">Functioning - {100 - percent}%</div>
          </div>
          <div class="flex items-center">
            <div class="h-3 w-3 bg-red-400 mr-2" />
            <div class="text-xs">Broken - {percent}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <canvas bind:this={ctx} id="myChart" /> -->
</main>
