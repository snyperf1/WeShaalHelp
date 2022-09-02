import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-3b568e49.js";
import { T as Table } from "../../../../chunks/Table-2161dfff.js";
const Appliances = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentDate = new Date();
  let newDate = currentDate.toLocaleTimeString();
  let data = [
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01"
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01"
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01"
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01"
    },
    {
      item: "Projector",
      reportedBy: "ALONZO PUAH YU HENG student",
      dateReported: newDate,
      status: "unrepaired",
      class: "S3-01"
    }
  ];
  return `<main class="${"pt-16 ml-72 text-white"}">${validate_component(Table, "Table").$$render($$result, { data, status: "all" }, {}, {})}</main>`;
});
export { Appliances as default };
