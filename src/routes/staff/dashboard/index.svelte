<script>
  import BigNumbers from "$lib/components/statistics/BigNumbers.svelte";
  import Card from "$lib/components/statistics/Card.svelte";
  import Pie from "$lib/components/statistics/Pie.svelte";
  import SmallHeader from "$lib/components/statistics/SmallHeader.svelte";
  import Chart from "svelte-frappe-charts";
  const pushedBackAppliances = [20, 10, 5, 4, 3, 2];
  const pushedBackAppliancesLabelsRotated = [
    [10, 0, 1, 2, 1, 1],
    [5, 8, 3, 0, 1, 1],
    [2, 2, 1, 2, 1, 0],
  ];
  const datasetNames = ["Projectors", "Speakers", "Others"];
  function rotateMatrix(matrix) {
    matrix = matrix[0].map((_, index) => matrix.map((row) => row[index]));
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = `${datasetNames[j]}: ${temp}`;
      }
    }
    return matrix;
  }
  const pushedBackAppliancesLabels = rotateMatrix(
    pushedBackAppliancesLabelsRotated
  );
  const pushedBackAppliancesData = {
    labels: pushedBackAppliances,
    datasets: [
      {
        name: datasetNames[0],
        values: pushedBackAppliancesLabelsRotated[0],
      },
      {
        name: datasetNames[1],
        values: pushedBackAppliancesLabelsRotated[1],
      },
      {
        name: datasetNames[2],
        values: pushedBackAppliancesLabelsRotated[2],
      },
    ],
  };
  const brokenAppliancesLabels = [
    "Speakers",
    "Projectors",
    "Projector screens",
    "Wifi Routers",
    "Door locks",
    "Others",
  ];
  const brokenAppliancesValues = [4, 2, 5, 0, 20, 0];
  const brokenAppliancesData = {
    labels: brokenAppliancesLabels,
    datasets: [
      {
        values: brokenAppliancesValues,
      },
    ],
  };

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
  <div class="Furthest-pushed-back-repair-section">
    <SmallHeader text="Furthest pushed back repair / days:" />
    <BigNumbers
      values={pushedBackAppliances}
      labels={pushedBackAppliancesLabels}
    />
    <SmallHeader text="Furthest pushed back repair / days graph:" />
    <div class="w-11/12 h-80 bg-slate-800 z-0">
      <Chart
        data={pushedBackAppliancesData}
        type="bar"
        colors={["violet"]}
        height={300}
      />
    </div>
  </div>
  <div class="Amount-of-appliance-broken-section">
    <SmallHeader text="Amount of each appliance broken:" />
    <BigNumbers
      values={brokenAppliancesValues}
      labels={brokenAppliancesLabels}
    />
    <SmallHeader text="Amount of each appliance broken graph:" />
    <div class="w-11/12 h-80 bg-slate-800 z-0">
      <Chart
        data={brokenAppliancesData}
        type="bar"
        colors={["violet"]}
        height={300}
      />
    </div>
  </div>
</main>
