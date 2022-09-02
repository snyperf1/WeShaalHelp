import { c as create_ssr_component, e as escape, a as subscribe, f as set_store_value, b as each, v as validate_component } from "../../../chunks/index-3b568e49.js";
import { p as prevRoutes } from "../../../chunks/stores-1f59aff4.js";
var Tip_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-t8ftpu{transition:max-height 200ms ease-in-out;max-height:4em;overflow:hidden;text-overflow:ellipsis}.extendHeight.svelte-t8ftpu{transition:max-height 200ms ease-in-out;max-height:10em;overflow:visible;white-space:normal}",
  map: null
};
const Tip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { body = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  $$result.css.add(css);
  return `<li class="${[
    "list-none bg-slate-700 rounded-xl p-5 mx-5 mt-2 mb-6 transition-all svelte-t8ftpu",
    ""
  ].join(" ").trim()}"><div class="${"flex justify-between mb-2 cursor-pointer"}"><h3 class="${"text-gray-50 text-2xl font-semibold cursor-pointer"}">${escape(title)}</h3>
		<button class="${["transition-all", ""].join(" ").trim()}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M7.7459 19.7589C7.44784 19.4667 7.42074 19.0095 7.66461 18.6873L7.7459 18.595L14.4734 12L7.7459 5.40503C7.44784 5.11283 7.42074 4.65558 7.66461 4.33338L7.7459 4.24106C8.04396 3.94887 8.51037 3.9223 8.83904 4.16137L8.93321 4.24106L16.2541 11.418C16.5522 11.7102 16.5793 12.1675 16.3354 12.4897L16.2541 12.582L8.93321 19.7589C8.60534 20.0804 8.07376 20.0804 7.7459 19.7589Z"}" fill="${"white"}"></path></svg></button></div>
	<p class="${"text-gray-50"}">${escape(body)}</p>
</li>`;
});
const Tips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prevRoutes, $$unsubscribe_prevRoutes;
  $$unsubscribe_prevRoutes = subscribe(prevRoutes, (value) => $prevRoutes = value);
  set_store_value(prevRoutes, $prevRoutes = ["Tips"], $prevRoutes);
  const tipsarr = [
    {
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    },
    {
      title: "Not working?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit."
    }
  ];
  $$unsubscribe_prevRoutes();
  return `<main class="${"pt-20 ml-64"}">${each(tipsarr, (i) => {
    return `${validate_component(Tip, "Tip").$$render($$result, { title: i.title, body: i.body }, {}, {})}`;
  })}</main>`;
});
export { Tips as default };
