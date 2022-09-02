import { c as create_ssr_component, h as createEventDispatcher, e as escape, b as each, v as validate_component } from "../../../chunks/index-3b568e49.js";
var EditTips_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-28qor7{transition:max-height 200ms ease-in-out;max-height:4em;overflow:hidden;text-overflow:ellipsis}.extendHeight.svelte-28qor7{transition:max-height 200ms ease-in-out;max-height:10em;overflow:visible;white-space:normal;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}",
  map: null
};
const EditTips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { title = "" } = $$props;
  let { body = "" } = $$props;
  let { id } = $$props;
  let newbody = body;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `







<li class="${[
    "list-none bg-slate-700 rounded-xl p-5 mx-5 mt-2 mb-6 transition-all svelte-28qor7",
    ""
  ].join(" ").trim()}"><div class="${"flex justify-between mb-2"}"><div class="${"flex"}"><h3 class="${"text-gray-50 text-2xl font-semibold cursor-pointer mr-5"}">${escape(title)}</h3>
			<button><svg class="${"transition-all hover:scale-105"}" width="${"30"}" height="${"30"}" viewBox="${"0 0 96 96"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M56.24 36.08L59.92 39.76L23.68 76H20V72.32L56.24 36.08M70.64 12C69.64 12 68.6 12.4 67.84 13.16L60.52 20.48L75.52 35.48L82.84 28.16C84.4 26.6 84.4 24.08 82.84 22.52L73.48 13.16C72.68 12.36 71.68 12 70.64 12V12ZM56.24 24.76L12 69V84H27L71.24 39.76L56.24 24.76V24.76Z"}" fill="${"#60a5fa"}"></path></svg></button></div>
		<button class="${["transition-all", ""].join(" ").trim()}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M7.7459 19.7589C7.44784 19.4667 7.42074 19.0095 7.66461 18.6873L7.7459 18.595L14.4734 12L7.7459 5.40503C7.44784 5.11283 7.42074 4.65558 7.66461 4.33338L7.7459 4.24106C8.04396 3.94887 8.51037 3.9223 8.83904 4.16137L8.93321 4.24106L16.2541 11.418C16.5522 11.7102 16.5793 12.1675 16.3354 12.4897L16.2541 12.582L8.93321 19.7589C8.60534 20.0804 8.07376 20.0804 7.7459 19.7589Z"}" fill="${"white"}"></path></svg></button></div>
	<p class="${"text-gray-50"}">${escape(body)}</p></li>

<div class="${[
    "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "hidden"
  ].join(" ").trim()}"></div>

<div class="${["fixed inset-0 z-10 overflow-y-auto", "hidden"].join(" ").trim()}"><div class="${"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"}"><div class="${"relative transform overflow-hidden rounded-lg bg-slate-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"}"><div class="${"bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"}"><div class="${"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"}"><h3 class="${"text-xl font-bold leading-6 text-indigo-400"}" id="${"modal-title"}">Change tip data
					</h3>

					<div class="${"mt-4 mb-2 text-base font-bold text-white"}">New Body content</div>
					<textarea placeholder="${"insert your content here..."}" class="${"w-full h-32 resize-none rounded-lg border-none p-2 text-sm text-gray-500"}">${newbody || ""}</textarea></div></div>
			<div class="${"bg-slate-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"}"><button type="${"button"}" class="${"inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}">Update</button>
				<button type="${"button"}" class="${"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}">Cancel</button></div></div></div>
</div>`;
});
const Edit_tips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tipsarr = [
    {
      id: 0,
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      id: 1,
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      id: 2,
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      id: 3,
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      id: 4,
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main class="${"pt-20 ml-64"}">${each(tipsarr, (e) => {
      return `${validate_component(EditTips, "EditTips").$$render(
        $$result,
        { title: e.title, id: e.id, body: e.body },
        {
          body: ($$value) => {
            e.body = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</main>`;
  } while (!$$settled);
  return $$rendered;
});
export { Edit_tips as default };
