import { c as create_ssr_component, a as subscribe, f as set_store_value, v as validate_component } from "../../../../chunks/index-3b568e49.js";
import { P as Progress } from "../../../../chunks/Progress-58afeb10.js";
import { p as prevRoutes, c as currentQuestion } from "../../../../chunks/stores-1f59aff4.js";
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prevRoutes, $$unsubscribe_prevRoutes;
  let $$unsubscribe_currentQuestion;
  $$unsubscribe_prevRoutes = subscribe(prevRoutes, (value) => $prevRoutes = value);
  $$unsubscribe_currentQuestion = subscribe(currentQuestion, (value) => value);
  set_store_value(prevRoutes, $prevRoutes = ["Report", "Intro"], $prevRoutes);
  $$unsubscribe_prevRoutes();
  $$unsubscribe_currentQuestion();
  return `<div class="${"text-white flex justify-center mt-5"}">${validate_component(Progress, "Progress").$$render($$result, { progressValue: "0" }, {}, {})}</div>
<h1 class="${"text-center text-4xl leading-10 font-bold text-white mt-36 mx-36"}">Hello, it seems that you would like to report something.
</h1>
<p class="${"text-center mt-20 text-white"}">Click on the button below to start reporting.
</p>
<div class="${"flex justify-center"}"><a href="${"/student/report"}" class="${"mt-20 appearance-none bg-indigo-500 rounded-full font-medium text-white py-2 px-10 text-sm transition-colors hover:bg-indigo-700"}">Start the report
  </a></div>`;
});
const Intro_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"pt-20 ml-64"}">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}</main>`;
});
export { Intro_1 as default };
