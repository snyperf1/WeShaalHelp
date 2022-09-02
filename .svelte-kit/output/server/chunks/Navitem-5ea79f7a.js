import { c as create_ssr_component } from "./index-3b568e49.js";
const Navitem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li class="${"text-center cursor-pointer"}"><div class="${"rounded-lg bg-indigo-500 hover:bg-indigo-700 ease-in duration-100 mx-3 py-4 px-5 flex flex-row"}">${slots.svg ? slots.svg({}) : ``}

		<div class="${"ml-7 my-1 text-left"}">${slots.label ? slots.label({}) : ``}</div></div></li>`;
});
export { Navitem as N };
