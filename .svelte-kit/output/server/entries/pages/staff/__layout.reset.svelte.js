import { c as create_ssr_component, a as subscribe, v as validate_component, b as each, e as escape } from "../../../chunks/index-3b568e49.js";
/* empty css                            */import { N as Navitem } from "../../../chunks/Navitem-5ea79f7a.js";
import { p as prevRoutes } from "../../../chunks/stores-1f59aff4.js";
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prevRoutes, $$unsubscribe_prevRoutes;
  $$unsubscribe_prevRoutes = subscribe(prevRoutes, (value) => $prevRoutes = value);
  $$unsubscribe_prevRoutes();
  return `<nav class="${"bg-indigo-500 h-screen w-64 fixed text-white"}"><p class="${"mt-5 px-10"}"><span class="${"text-3xl ml-6"}">O </span><strong class="${"mb-5 text-3xl"}">Rebot</strong></p>
  <ul class="${"list-none flex flex-col mt-8"}"><a href="${"/staff/dashboard"}">${validate_component(Navitem, "Navitem").$$render($$result, {}, {}, {
    label: () => {
      return `<p slot="${"label"}">Dashboard</p>`;
    },
    svg: () => {
      return `<svg slot="${"svg"}" width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M11.4185 25.9667V22.1445C11.4185 21.1688 12.2152 20.3779 13.198 20.3779H16.7908C17.2627 20.3779 17.7154 20.564 18.0491 20.8953C18.3828 21.2266 18.5703 21.676 18.5703 22.1445V25.9667C18.5674 26.3723 18.7276 26.7623 19.0155 27.0502C19.3033 27.3381 19.6951 27.5 20.1037 27.5H22.5548C23.6995 27.5029 24.7984 27.0536 25.609 26.251C26.4195 25.4485 26.875 24.3587 26.875 23.2223V12.3336C26.875 11.4156 26.4651 10.5448 25.7558 9.95584L17.4175 3.34484C15.9671 2.1857 13.8889 2.22313 12.4817 3.43372L4.33377 9.95584C3.59093 10.5274 3.14694 11.4008 3.125 12.3336V23.2112C3.125 25.5798 5.05923 27.5 7.44522 27.5H9.84036C10.689 27.5 11.3787 26.8203 11.3849 25.9778L11.4185 25.9667Z"}" fill="${"#F9FAFB"}"></path></svg>`;
    }
  })}</a>
    <a href="${"/staff/edit-tips"}">${validate_component(Navitem, "Navitem").$$render($$result, {}, {}, {
    label: () => {
      return `<p slot="${"label"}">Tips</p>`;
    },
    svg: () => {
      return `<svg slot="${"svg"}" width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M9.7625 2.5H20.2388C24.1 2.5 26.25 4.725 26.25 8.5375V21.45C26.25 25.325 24.1 27.5 20.2388 27.5H9.7625C5.9625 27.5 3.75 25.325 3.75 21.45V8.5375C3.75 4.725 5.9625 2.5 9.7625 2.5ZM10.1 8.325V8.3125H13.8363C14.375 8.3125 14.8125 8.75 14.8125 9.28625C14.8125 9.8375 14.375 10.275 13.8363 10.275H10.1C9.56125 10.275 9.125 9.8375 9.125 9.3C9.125 8.7625 9.56125 8.325 10.1 8.325ZM10.1 15.925H19.9C20.4375 15.925 20.875 15.4875 20.875 14.95C20.875 14.4125 20.4375 13.9738 19.9 13.9738H10.1C9.56125 13.9738 9.125 14.4125 9.125 14.95C9.125 15.4875 9.56125 15.925 10.1 15.925ZM10.1 21.6375H19.9C20.3988 21.5875 20.775 21.1613 20.775 20.6625C20.775 20.15 20.3988 19.725 19.9 19.675H10.1C9.725 19.6375 9.3625 19.8125 9.1625 20.1375C8.9625 20.45 8.9625 20.8625 9.1625 21.1875C9.3625 21.5 9.725 21.6875 10.1 21.6375Z"}" fill="${"#F9FAFB"}"></path></svg>`;
    }
  })}</a>
    <a href="${"/staff/message"}">${validate_component(Navitem, "Navitem").$$render($$result, {}, {}, {
    label: () => {
      return `<p slot="${"label"}">Message</p>`;
    },
    svg: () => {
      return `<svg slot="${"svg"}" width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M26.7942 3.22748C26.169 2.58575 25.2436 2.34667 24.3807 2.59833L4.26 8.4494C3.34962 8.70232 2.70436 9.42836 2.53054 10.3507C2.35296 11.2894 2.97322 12.481 3.78355 12.9793L10.0749 16.846C10.7201 17.2424 11.553 17.143 12.087 16.6044L19.2911 9.35538C19.6538 8.97789 20.254 8.97789 20.6167 9.35538C20.9793 9.72028 20.9793 10.3117 20.6167 10.6892L13.4 17.9395C12.8648 18.4768 12.7647 19.3135 13.1586 19.9628L17.0027 26.3172C17.4529 27.0722 18.2282 27.5 19.0786 27.5C19.1786 27.5 19.2911 27.5 19.3912 27.4874C20.3666 27.3616 21.1419 26.6947 21.4295 25.751L27.3945 5.65599C27.6571 4.80035 27.4195 3.86921 26.7942 3.22748Z"}" fill="${"#F9FAFB"}"></path></svg>`;
    }
  })}</a>
    <a href="${"/staff/report"}">${validate_component(Navitem, "Navitem").$$render($$result, {}, {}, {
    label: () => {
      return `<p slot="${"label"}">Report</p>`;
    },
    svg: () => {
      return `<svg slot="${"svg"}" width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M18.0966 5.55261L27.1825 21.3215C27.3825 21.7922 27.47 22.1749 27.495 22.5725C27.545 23.5015 27.22 24.4045 26.5826 25.0993C25.9452 25.7917 25.0829 26.2005 24.1455 26.25H5.84863C5.46119 26.2265 5.07376 26.1385 4.71132 26.0023C2.89913 25.2715 2.02427 23.2154 2.76165 21.433L11.9101 5.54147C12.2226 4.98285 12.6975 4.50102 13.2849 4.19137C14.9846 3.24878 17.1467 3.86809 18.0966 5.55261ZM16.0844 15.9447C16.0844 16.5392 15.597 17.0359 14.9971 17.0359C14.3972 17.0359 13.8973 16.5392 13.8973 15.9447V12.4406C13.8973 11.8448 14.3972 11.363 14.9971 11.363C15.597 11.363 16.0844 11.8448 16.0844 12.4406V15.9447ZM14.9971 21.272C14.3972 21.272 13.8973 20.7753 13.8973 20.182C13.8973 19.5862 14.3972 19.0908 14.9971 19.0908C15.597 19.0908 16.0844 19.5751 16.0844 20.1684C16.0844 20.7753 15.597 21.272 14.9971 21.272Z"}" fill="${"#F9FAFB"}"></path></svg>`;
    }
  })}</a>
    <li class="${"text-center"}"><div class="${"rounded-md bg-indigo-500 mx-3 py-4 px-5"}"><p class="${"text-left"}">Todos</p></div></li></ul></nav>
<nav class="${"bg-slate-700 w-screen fixed top-0 h-16 text-white ml-64"}"><div class="${"ml-5 flex"}"><div class="${"py-5 flex"}">${each($prevRoutes, (element) => {
    return `<button class="${"mx-2 hover:bg-slate-600 text-slate-300 px-2 rounded"}">${escape(element)}</button>
        <p class="${"text-slate-300"}">/</p>`;
  })}</div></div></nav>
${slots.default ? slots.default({}) : ``}`;
});
export { _layout_reset as default };