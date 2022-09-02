import { c as create_ssr_component, a as subscribe, f as set_store_value, v as validate_component } from "../../../chunks/index-3b568e49.js";
import { p as prevRoutes } from "../../../chunks/stores-1f59aff4.js";
import { P as Progress } from "../../../chunks/Progress-58afeb10.js";
let progressValue = 8;
const Student = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prevRoutes, $$unsubscribe_prevRoutes;
  $$unsubscribe_prevRoutes = subscribe(prevRoutes, (value) => $prevRoutes = value);
  set_store_value(prevRoutes, $prevRoutes = ["Dashboard"], $prevRoutes);
  $$unsubscribe_prevRoutes();
  return `<main class="${"pt-20 ml-64 "}"><div class="${"text-white p-5 flex justify-center"}">${validate_component(Progress, "Progress").$$render($$result, { progressValue }, {}, {})}</div></main>`;
});
export { Student as default };
