import { c as create_ssr_component, e as escape, a as subscribe, f as set_store_value, b as each, v as validate_component } from "../../../chunks/index-3b568e49.js";
import { p as prevRoutes } from "../../../chunks/stores-1f59aff4.js";
function verifyDate$1(dateSent) {
  const currentDate = new Date();
  if (dateSent.getUTCDate() == currentDate.getUTCDate() && dateSent.getUTCMonth() == currentDate.getUTCMonth() && dateSent.getUTCFullYear() == currentDate.getUTCFullYear()) {
    return dateSent.toLocaleTimeString();
  } else {
    return dateSent.toLocaleDateString() + ", " + dateSent.toLocaleTimeString();
  }
}
const Userchatbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text: text2 } = $$props;
  let { messageDate } = $$props;
  const timeText = verifyDate$1(messageDate);
  if ($$props.text === void 0 && $$bindings.text && text2 !== void 0)
    $$bindings.text(text2);
  if ($$props.messageDate === void 0 && $$bindings.messageDate && messageDate !== void 0)
    $$bindings.messageDate(messageDate);
  return `<div class="${"text-white p-4 w-1/2 text-left ml-10 my-5 rounded-2xl bg-slate-700"}"><div>${escape(text2)}</div>
	<div class="${"text-slate-400 text-xs text-right mr-2 mt-2"}">${escape(timeText)}</div></div>`;
});
function verifyDate(dateSent) {
  const currentDate = new Date();
  if (dateSent.getUTCDate() == currentDate.getUTCDate() && dateSent.getUTCMonth() == currentDate.getUTCMonth() && dateSent.getUTCFullYear() == currentDate.getUTCFullYear()) {
    return dateSent.toLocaleTimeString();
  } else {
    return dateSent.toLocaleDateString() + ", " + dateSent.toLocaleTimeString();
  }
}
const Otherchatbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text: text2 } = $$props;
  let { messageDate } = $$props;
  const timeText = verifyDate(messageDate);
  if ($$props.text === void 0 && $$bindings.text && text2 !== void 0)
    $$bindings.text(text2);
  if ($$props.messageDate === void 0 && $$bindings.messageDate && messageDate !== void 0)
    $$bindings.messageDate(messageDate);
  return `<div class="${"flex justify-end"}"><div class="${"rounded-2xl text-white bg-indigo-500 p-4 w-1/2 mr-10 my-5"}"><div>${escape(text2)}</div>
		<div class="${"text-indigo-200 text-xs text-right mr-2 mt-2"}">${escape(timeText)}</div></div></div>`;
});
const Chatinput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-8/12 bottom-0 bg-slate-600 fixed flex flex-row items-center"}"><svg class="${"mx-3 ml-4"}" width="${"38"}" height="${"38"}" viewBox="${"0 0 38 38"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M12.0926 5.37574C8.01236 5.37574 5.37611 8.17349 5.37611 12.4897V25.4952C5.37611 26.7064 5.60094 27.7878 5.98569 28.7236C6.0023 28.7037 6.3647 28.2621 6.83743 27.686C7.76127 26.5602 9.10651 24.9209 9.11594 24.9125C10.2116 23.6617 12.2684 21.7965 14.9679 22.9254C15.5595 23.1707 16.0853 23.5067 16.5694 23.816C16.6165 23.8461 16.6632 23.876 16.7096 23.9055C17.6169 24.5119 18.1504 24.7969 18.7046 24.7494C18.9342 24.7177 19.1495 24.6497 19.3538 24.523C20.1243 24.048 22.1219 21.2175 22.72 20.37C22.8077 20.2457 22.8654 20.1641 22.8846 20.1387C24.6104 17.8904 27.2704 17.2887 29.4871 18.6187C29.7848 18.7961 31.9175 20.286 32.6237 20.8845V12.4897C32.6237 8.17349 29.9874 5.37574 25.8929 5.37574H12.0926ZM25.8929 3.16699C31.2399 3.16699 34.8324 6.90683 34.8324 12.4897V25.4952C34.8324 25.6356 34.8177 25.7673 34.803 25.8988C34.7926 25.9913 34.7822 26.0838 34.777 26.1792C34.7736 26.2368 34.772 26.2945 34.7703 26.3522C34.7681 26.4291 34.7659 26.506 34.7596 26.5829C34.7564 26.613 34.7505 26.6419 34.7446 26.6708C34.7386 26.6997 34.7327 26.7286 34.7295 26.7587C34.6773 27.2558 34.5965 27.7308 34.4841 28.1916C34.4575 28.3067 34.4268 28.4177 34.3959 28.5297L34.3891 28.5542C34.2624 29.0007 34.1136 29.4266 33.9347 29.8335C33.9033 29.9019 33.8703 29.9686 33.8372 30.0353C33.8152 30.0797 33.7931 30.1242 33.7716 30.1692C33.5784 30.5571 33.3694 30.9292 33.1272 31.2743C33.0824 31.3382 33.0347 31.3981 32.9869 31.4581C32.9553 31.4977 32.9237 31.5374 32.8929 31.5783C32.6411 31.9045 32.3783 32.2164 32.0806 32.4998C32.0212 32.5563 31.9569 32.6081 31.8927 32.6598C31.8526 32.6921 31.8124 32.7244 31.7734 32.7579C31.4679 33.0207 31.1559 33.2725 30.8124 33.4878C30.7374 33.5349 30.6577 33.5744 30.5783 33.6138C30.527 33.6393 30.4758 33.6647 30.426 33.6921C30.0761 33.8852 29.723 34.0737 29.3383 34.2193C29.2457 34.2545 29.1472 34.2799 29.0484 34.3054C28.9782 34.3235 28.9079 34.3417 28.8395 34.3634C28.8053 34.374 28.771 34.3847 28.7368 34.3953C28.3932 34.5022 28.0506 34.6088 27.6805 34.6722C27.4661 34.7097 27.2386 34.7242 27.0109 34.7386C26.9124 34.7449 26.8138 34.7511 26.7163 34.7592C26.6114 34.7671 26.5086 34.7797 26.4057 34.7924C26.2382 34.813 26.0704 34.8337 25.8929 34.8337H12.0926C11.4973 34.8337 10.9289 34.7735 10.3794 34.6832C10.359 34.6801 10.3401 34.677 10.3213 34.6738L10.3209 34.6737C8.1786 34.3048 6.40052 33.2709 5.15444 31.7113C5.14578 31.7113 5.14239 31.7055 5.13786 31.6977C5.13493 31.6927 5.13153 31.6868 5.12594 31.6812C3.87352 30.1042 3.16577 27.9842 3.16577 25.4952V12.4897C3.16577 6.90683 6.76152 3.16699 12.0926 3.16699H25.8929ZM17.4167 13.4817C17.4167 15.627 15.6217 17.4164 13.4661 17.4164C11.5713 17.4164 9.95572 16.032 9.59364 14.2396C9.53381 13.9707 9.50005 13.6941 9.50005 13.4084C9.50005 11.2477 11.2552 9.49969 13.4246 9.49969C14.5293 9.49969 15.5296 9.96421 16.2461 10.7053C16.9657 11.4204 17.4167 12.406 17.4167 13.4817Z"}" fill="${"#A5B4FC"}"></path></svg>

	<textarea name="${"userinput"}" id="${"hi"}" rows="${"1"}" cols="${"30"}" placeholder="${"Enter a message..."}" class="${"bg-slate-700 text-white placeholder:text-slate-400 rounded-full resize-none m-2 p-3 shrink grow"}"></textarea>
	<div class="${"flex justify-end items-center mr-24 ml-4"}"><svg width="${"30"}" height="${"30"}" viewBox="${"0 0 30 30"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M26.7942 3.22748C26.169 2.58575 25.2436 2.34667 24.3807 2.59833L4.26 8.4494C3.34962 8.70232 2.70436 9.42836 2.53054 10.3507C2.35296 11.2894 2.97322 12.481 3.78355 12.9793L10.0749 16.846C10.7201 17.2424 11.553 17.143 12.087 16.6044L19.2911 9.35538C19.6538 8.97789 20.254 8.97789 20.6167 9.35538C20.9793 9.72028 20.9793 10.3117 20.6167 10.6892L13.4 17.9395C12.8648 18.4768 12.7647 19.3135 13.1586 19.9628L17.0027 26.3172C17.4529 27.0722 18.2282 27.5 19.0786 27.5C19.1786 27.5 19.2911 27.5 19.3912 27.4874C20.3666 27.3616 21.1419 26.6947 21.4295 25.751L27.3945 5.65599C27.6571 4.80035 27.4195 3.86921 26.7942 3.22748Z"}" fill="${"#F9FAFB"}"></path></svg></div></div>`;
});
var Namepick_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".othergrey.svelte-r9cvrd{background-color:#293241}",
  map: null
};
const Namepick = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { preview } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  $$result.css.add(css$1);
  return `<div class="${"w-72 othergrey h-16 p-5 cursor-pointer hover:bg-slate-700 flex items-center transition-colors svelte-r9cvrd"}"><div class="${"flex flex-row content-center"}"><div src="${""}" class="${"bg-black w-10 h-10 rounded-full"}"></div>
    <div class="${"flex flex-col"}"><strong class="${"ml-5 text-sm font-semibold text-white"}">${escape(name)}</strong>
      <p class="${"ml-5 mt-1 text-xs text-slate-400 truncate"}">${escape(preview)}</p></div></div>
</div>`;
});
var message_svelte_svelte_type_style_lang = "";
const css = {
  code: ".namesbar.svelte-26tkx1{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}",
  map: null
};
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.";
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prevRoutes, $$unsubscribe_prevRoutes;
  $$unsubscribe_prevRoutes = subscribe(prevRoutes, (value) => $prevRoutes = value);
  set_store_value(prevRoutes, $prevRoutes = ["Message"], $prevRoutes);
  let names = [
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ...."
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ...."
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ...."
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ...."
    },
    {
      name: "S3-01 - 18 - Shrinithi",
      lastMessage: "You: Ok, we will be coming ...."
    }
  ];
  const messageDate = new Date(165e10);
  $$result.css.add(css);
  $$unsubscribe_prevRoutes();
  return `<div class="${"flex"}"><nav class="${"ml-64 mt-16 bg-gray-800 max-h-screen overflow-y-scroll namesbar svelte-26tkx1"}">${each(names, (element) => {
    return `${validate_component(Namepick, "Namepick").$$render(
      $$result,
      {
        name: element.name,
        preview: element.lastMessage
      },
      {},
      {}
    )}`;
  })}</nav>
  <main class="${"pt-20 overflow-y-scroll max-h-screen"}"><section class="${"flex justify-center"}"><div class="${"bg-indigo-700 text-white rounded-xl text-center w-1/2 p-6 my-6 text-sm"}">This is used by the IT helpdesk to show when they are done and also for
        you to say your thanks to the IT helpdesk. Please do not send any
        unnecessary messages.
      </div></section>
    ${validate_component(Userchatbox, "Userchatbox").$$render($$result, { text, messageDate }, {}, {})}
    ${validate_component(Otherchatbox, "Otherchatbox").$$render($$result, { text, messageDate }, {}, {})}
    ${validate_component(Userchatbox, "Userchatbox").$$render($$result, { text, messageDate }, {}, {})}
    ${validate_component(Otherchatbox, "Otherchatbox").$$render($$result, { text, messageDate }, {}, {})}
    ${validate_component(Userchatbox, "Userchatbox").$$render($$result, { text, messageDate }, {}, {})}
    ${validate_component(Otherchatbox, "Otherchatbox").$$render($$result, { text, messageDate }, {}, {})}
    ${validate_component(Chatinput, "Chatinput").$$render($$result, {}, {}, {})}</main>
</div>`;
});
export { Message as default };
