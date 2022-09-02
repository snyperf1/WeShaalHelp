import { c as create_ssr_component, g as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index-3b568e49.js";
var Statsprogress_svelte_svelte_type_style_lang = "";
const css = {
  code: "progress.svelte-9sygqc{-webkit-appearance:none;appearance:none;-moz-appearance:none;border:none;width:100%;margin:0.5em}progress[value].svelte-9sygqc::-webkit-progress-bar{background-color:var(--opacity-color);border-radius:100px}progress[value].svelte-9sygqc::-webkit-progress-value{background-color:var(--main-color);border-radius:100px}progress[value].svelte-9sygqc::-moz-progress-bar{background-color:var(--opacity-color);border-radius:2px}",
  map: null
};
const Statsprogress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { capacity = 30 } = $$props;
  let { value = 10 } = $$props;
  if ($$props.capacity === void 0 && $$bindings.capacity && capacity !== void 0)
    $$bindings.capacity(capacity);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `
<div class="${"flex flex-col items-center justify-center mt-3"}"><progress class="${"h-1 mt-3 svelte-9sygqc"}" max="${"100"}"${add_attribute("value", JSON.stringify(value / capacity * 100), 0)}></progress></div>
<div class="${"flex justify-between mt-2"}"><p class="${"text-xs"}">${escape(value)}/${escape(capacity)} classes</p>
	<p class="${"text-xs"}">${escape(parseInt(value / capacity * 100))}%</p>
</div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { capacity } = $$props;
  let { color } = $$props;
  let { maincolor } = $$props;
  let { opacity } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.capacity === void 0 && $$bindings.capacity && capacity !== void 0)
    $$bindings.capacity(capacity);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.maincolor === void 0 && $$bindings.maincolor && maincolor !== void 0)
    $$bindings.maincolor(maincolor);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  return `<div class="${"card mr-10 flex flex-col h-44 w-72 rounded-3xl bg-slate-700 text-white p-4"}"><div class="${"justify-between flex max-h-12 min-w-full flex-row align-middle"}"><div class="${"p-1 flex h-8 w-8 items-center justify-center bg-opacity-20 " + escape(color, true) + " rounded-md"}"><svg class="${""}" width="${"22"}" height="${"22"}" viewBox="${"0 0 22 22"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><rect y="${"17.4956"}" width="${"16.8704"}" height="${"4.95586"}" rx="${"2.47793"}" transform="${"rotate(-45 0 17.4956)"}"${add_attribute("fill", maincolor, 0)}></rect><path d="${"M15.5996 2.33609C14.4372 1.8875 13.153 1.8567 11.9657 2.24894C10.7785 2.64118 9.76166 3.43219 9.08853 4.4872C8.4154 5.5422 8.1276 6.79592 8.27417 8.03474C8.42074 9.27356 8.99261 10.4208 9.89235 11.2811C10.7921 12.1413 11.964 12.6613 13.2084 12.7524C14.4529 12.8435 15.6928 12.5002 16.717 11.7808C17.7412 11.0614 18.4863 10.0106 18.8252 8.80734C19.1642 7.60407 19.0761 6.32283 18.576 5.18191L15.5995 8.31124L13.6324 7.37122L12.6246 5.74633L15.5996 2.33609Z"}"${add_attribute("fill", maincolor, 0)}></path></svg></div>

    <button><svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M11.6371 8.38771C11.1496 8.87521 11.1496 9.66271 11.6371 10.1502L16.4871 15.0002L11.6371 19.8502C11.1496 20.3377 11.1496 21.1252 11.6371 21.6127C12.1246 22.1002 12.9121 22.1002 13.3996 21.6127L19.1371 15.8752C19.6246 15.3877 19.6246 14.6002 19.1371 14.1127L13.3996 8.37521C12.9246 7.90021 12.1246 7.90021 11.6371 8.38771Z"}" fill="${"#FFFFFF"}"></path></svg></button></div>
  <strong class="${"text-white text-xs mt-2 font-medium"}">Classes with broken appliances</strong>
  <div style="display: contents; --color:${escape(color, true)}; --main-color:${escape(maincolor, true)}; --opacity-color:${escape(opacity, true)};">${validate_component(Statsprogress, "Statsprogress").$$render($$result, { value, capacity }, {}, {})}</div></div>`;
});
const Pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let viewBox;
  let radius;
  let halfCircumference;
  let pieSize;
  let dashArray;
  let { size = 200 } = $$props;
  let { percent: percent2 = 0 } = $$props;
  let { bgColor = "#4ade80" } = $$props;
  let { fgColor = "#fa6261" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.percent === void 0 && $$bindings.percent && percent2 !== void 0)
    $$bindings.percent(percent2);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.fgColor === void 0 && $$bindings.fgColor && fgColor !== void 0)
    $$bindings.fgColor(fgColor);
  viewBox = `0 0 ${size} ${size}`;
  radius = size / 2;
  halfCircumference = Math.PI * radius;
  pieSize = halfCircumference * (percent2 / 100);
  dashArray = `0 ${halfCircumference - pieSize} ${pieSize}`;
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)}${add_attribute("viewBox", viewBox, 0)}><circle${add_attribute("r", radius, 0)}${add_attribute("cx", radius, 0)}${add_attribute("cy", radius, 0)}${add_attribute("fill", bgColor, 0)}></circle><circle${add_attribute("r", radius / 2, 0)}${add_attribute("cx", radius, 0)}${add_attribute("cy", radius, 0)}${add_attribute("fill", bgColor, 0)}${add_attribute("stroke", fgColor, 0)}${add_attribute("stroke-width", radius, 0)}${add_attribute("stroke-dasharray", dashArray, 0)}></circle><circle${add_attribute("cx", radius, 0)}${add_attribute("cy", radius, 0)}${add_attribute("r", radius / 1.6, 0)} fill="${"#334254"}"></circle></svg>`;
});
let percent = 30;
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"pt-16 ml-80 text-white"}"><h1 class="${"text-3xl font-bold mt-10"}">Dashboard</h1>
  <div class="${"flex gap-8"}"><div><h2 class="${"text-xl font-medium mt-10 mb-5"}">State of appliances in classes
      </h2>
      <div class="${"flex"}">${validate_component(Card, "Card").$$render(
    $$result,
    {
      color: "bg-red-400",
      maincolor: "#FA6262",
      opacity: "#5b4b5a",
      value: "10",
      capacity: "49"
    },
    {},
    {}
  )}
        ${validate_component(Card, "Card").$$render(
    $$result,
    {
      color: "bg-green-400",
      maincolor: "#22c55e",
      opacity: "#355c57",
      value: "15",
      capacity: "49"
    },
    {},
    {}
  )}</div></div>
    <div><h2 class="${"text-xl font-medium mt-10 mb-5"}">State of appliances</h2>
      <div class="${"w-80 h-44 rounded-2xl bg-slate-700 flex items-center pl-6"}">${validate_component(Pie, "Pie").$$render($$result, { size: 120, percent }, {}, {})}
        <div class="${"ml-7"}"><h3 class="${"text-lg font-semibold mb-5"}">Classes</h3>
          <div class="${"flex items-center mb-3"}"><div class="${"h-3 w-3 bg-green-400 mr-2"}"></div>
            <div class="${"text-xs"}">Functioning - ${escape(100 - percent)}%</div></div>
          <div class="${"flex items-center"}"><div class="${"h-3 w-3 bg-red-400 mr-2"}"></div>
            <div class="${"text-xs"}">Broken - ${escape(percent)}%</div></div></div></div></div></div>
  </main>`;
});
export { Dashboard as default };
