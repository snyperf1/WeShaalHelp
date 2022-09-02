import { c as create_ssr_component, g as add_attribute, e as escape } from "./index-3b568e49.js";
var Progress_svelte_svelte_type_style_lang = "";
const css = {
  code: "progress.svelte-19exnm2{-webkit-appearance:none;appearance:none;-moz-appearance:none;border:none;width:75%;height:0.5em;margin:0.5em}progress[value].svelte-19exnm2::-webkit-progress-bar{background-color:#6366f1;border-radius:100px}progress[value].svelte-19exnm2::-webkit-progress-value{background-color:#7affa7;border-radius:100px}progress[value].svelte-19exnm2::-moz-progress-bar{background-color:#6366f1;border-radius:2px}",
  map: null
};
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progressValue } = $$props;
  if ($$props.progressValue === void 0 && $$bindings.progressValue && progressValue !== void 0)
    $$bindings.progressValue(progressValue);
  $$result.css.add(css);
  return `

<progress max="${"100"}"${add_attribute("value", progressValue, 0)} class="${"svelte-19exnm2"}"></progress>
<p class="${"ml-5"}">${escape(progressValue)}%</p>`;
});
export { Progress as P };
