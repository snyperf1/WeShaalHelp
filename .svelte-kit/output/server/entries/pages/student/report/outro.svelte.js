import { c as create_ssr_component, a as subscribe, f as set_store_value, v as validate_component } from "../../../../chunks/index-3b568e49.js";
import { P as Progress } from "../../../../chunks/Progress-58afeb10.js";
import { p as prevRoutes } from "../../../../chunks/stores-1f59aff4.js";
const Outro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prevRoutes, $$unsubscribe_prevRoutes;
  $$unsubscribe_prevRoutes = subscribe(prevRoutes, (value) => $prevRoutes = value);
  set_store_value(prevRoutes, $prevRoutes = ["Report", "Outro"], $prevRoutes);
  $$unsubscribe_prevRoutes();
  return `<main class="${"pt-20 ml-64 text-white"}"><div class="${"text-white flex justify-center mt-5"}">${validate_component(Progress, "Progress").$$render($$result, { progressValue: "100" }, {}, {})}</div>
	<h1 class="${"text-center text-5xl leading-10 font-bold text-white mt-36 mx-36"}">Report sent!</h1>
	<p class="${"text-center mt-20 mx-52"}">Your report has been sent to the IT helpdesk/General Office. As of now, wait for the IT
		helpdesk/General Office to get back to you. We have a chat with them opened for you! Check it
		out here \u2192 <a href="${"/student/message"}" class="${"text-indigo-300"}">link</a></p>
	<div class="${"flex justify-center"}"><a href="${"/student"}" class="${"mt-20 appearance-none bg-indigo-500 rounded-2xl font-medium text-white py-3 px-10 text-sm transition-colors hover:bg-indigo-700 hover:underline"}">Back to homepage
		</a></div></main>`;
});
const Outro_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Outro, "Outro").$$render($$result, {}, {}, {})}`;
});
export { Outro_1 as default };
