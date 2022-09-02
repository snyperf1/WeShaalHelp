import { c as create_ssr_component, b as each, e as escape } from "./index-3b568e49.js";
var Table_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tableborder.svelte-133lqdf{border-style:solid;border-width:2px}.toptableborder.svelte-133lqdf{border-top-style:solid;border-top-width:2px}table.svelte-133lqdf{background-color:#293241;min-width:90%}",
  map: null
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headernames = ["Item", "Reported by", "Date reported", "Status", "Class"];
  let { data } = $$props;
  let { status } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  return `${status == "broken" ? `<h1 class="${"my-10 text-4xl font-bold text-red-400"}">Broken appliances</h1>
	<table class="${"border-b border-red-500 tableborder svelte-133lqdf"}"><tr class="${"border-b border-red-500"}">${each(headernames, (i) => {
    return `<th class="${"px-5 rounded py-2 "}">${escape(i)}</th>`;
  })}</tr>
		${each(data, (i) => {
    return `<tr class="${"border border-red-500"}"><td class="${"text-center p-3 "}">${escape(i.item)}</td>
				<td class="${"text-center p-3 "}">${escape(i.reportedBy)}</td>
				<td class="${"text-center p-3 "}">${escape(i.dateReported)}</td>
				<td class="${"text-center p-3 "}">${escape(i.status)}</td>
				<td class="${"text-center p-3 "}">${escape(i.class)}</td>
			</tr>`;
  })}</table>` : `${status == "working" ? `<h1 class="${"my-10 text-4xl font-bold text-green-400"}">Working appliances</h1>
	<table class="${"border-b border-green-500 tableborder svelte-133lqdf"}"><tr class="${"border-b border-green-500"}">${each(headernames, (i) => {
    return `<th class="${"px-5 rounded py-2 "}">${escape(i)}</th>`;
  })}</tr>
		${each(data, (i) => {
    return `<tr class="${"border border-green-500"}"><td class="${"text-center p-3 "}">${escape(i.item)}</td>
				<td class="${"text-center p-3 "}">${escape(i.reportedBy)}</td>
				<td class="${"text-center p-3 "}">${escape(i.dateReported)}</td>
				<td class="${"text-center p-3 "}">${escape(i.status)}</td>
				<td class="${"text-center p-3 "}">${escape(i.class)}</td>
			</tr>`;
  })}</table>` : `${status == "all" ? `<h1 class="${"my-10 text-4xl font-bold text-white"}">All appliances</h1>
	<table class="${"rounded-3xl svelte-133lqdf"}"><tr class="${""}">${each(headernames, (i) => {
    return `<th class="${"px-5 rounded py-2 "}">${escape(i)}</th>`;
  })}</tr>
		${each(data, (i) => {
    return `<tr class="${"rounded-2xl toptableborder border-t-slate-600 text-zinc-100 svelte-133lqdf"}"><td class="${"text-center p-3 "}">${escape(i.item)}</td>
				<td class="${"text-center p-3 "}">${escape(i.reportedBy)}</td>
				<td class="${"text-center p-3 "}">${escape(i.dateReported)}</td>
				<td class="${"text-center p-3 "}">${escape(i.status)}</td>
				<td class="${"text-center p-3 "}">${escape(i.class)}</td>
			</tr>`;
  })}</table>` : ``}`}`}`;
});
export { Table as T };
