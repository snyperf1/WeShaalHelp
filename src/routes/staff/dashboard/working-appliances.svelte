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
  import Table from "$lib/components/statistics/Table.svelte";

  const currentDate = new Date();
  let newDate = currentDate.toLocaleTimeString();

  let data = [
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01",
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01",
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01",
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01",
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01",
    },
  ];
</script>

<main class="pt-16 ml-72 text-white">
  <Table {data} status={"working"} />
</main>
