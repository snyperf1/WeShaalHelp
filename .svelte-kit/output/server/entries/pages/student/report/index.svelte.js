import { c as create_ssr_component, h as createEventDispatcher, e as escape, b as each, v as validate_component, g as add_attribute, i as get_store_value, a as subscribe, f as set_store_value } from "../../../../chunks/index-3b568e49.js";
import { p as prevRoutes, c as currentQuestion } from "../../../../chunks/stores-1f59aff4.js";
import { P as Progress } from "../../../../chunks/Progress-58afeb10.js";
const McqBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let selected = false;
  let { content } = $$props;
  let { index } = $$props;
  let { selected_option } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.selected_option === void 0 && $$bindings.selected_option && selected_option !== void 0)
    $$bindings.selected_option(selected_option);
  {
    {
      if (selected_option != index) {
        selected = false;
      }
    }
  }
  return `<div class="${[
    "my-5 mx-10 bg-slate-700 text-white flex justify-center h-40 w-full items-center rounded-2xl text-xl cursor-pointer hover:bg-slate-600 transition-colors ",
    (selected ? "bg-green-400" : "") + " " + (selected ? "hover:bg-green-400" : "")
  ].join(" ").trim()}">${escape(content)}</div>`;
});
const MultipleChoice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { questionContent } = $$props;
  let { options } = $$props;
  let selected = "";
  if ($$props.questionContent === void 0 && $$bindings.questionContent && questionContent !== void 0)
    $$bindings.questionContent(questionContent);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h2 class="${"mt-16 font-semibold text-3xl text-white flex justify-center text-center"}">${escape(questionContent)}</h2>
<div class="${"grid grid-rows-2 gap-x-10 gap-y-2 grid-cols-2 mt-10 font-medium"}">${each(options, (content, index) => {
      return `${validate_component(McqBox, "McqBox").$$render(
        $$result,
        {
          content,
          index,
          selected_option: selected
        },
        {
          selected_option: ($$value) => {
            selected = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const BackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = "/report" } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<a${add_attribute("href", link, 0)} class="${"appearance-none bg-indigo-600 rounded-full font-medium text-white py-2 px-10 text-sm transition-colors hover:bg-indigo-700"}">\u2190 Back
</a>`;
});
const NextButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = "/report" } = $$props;
  let { isLocked = false } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.isLocked === void 0 && $$bindings.isLocked && isLocked !== void 0)
    $$bindings.isLocked(isLocked);
  return `<a${add_attribute("href", link, 0)} class="${[
    "appearance-none bg-indigo-400 rounded-full font-medium py-2 px-10 text-sm text-white transition-colors hover:bg-indigo-500",
    isLocked ? "opacity-50" : ""
  ].join(" ").trim()}">Next \u2192
</a>`;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { option } = $$props;
  let { id } = $$props;
  let fillcolour = "#1e293b";
  if ($$props.option === void 0 && $$bindings.option && option !== void 0)
    $$bindings.option(option);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    {
      {
        fillcolour = "#1e293b";
        dispatch("selected", { id });
      }
    }
  }
  return `<div class="${"flex flex-row gap-2 p-1 items-center cursor-pointer"}"><div class="${[
    "border-white border-4 rounded-sm p-1 items-center mb-1 transition-all",
    ""
  ].join(" ").trim()}"><svg width="${"25"}" height="${"25"}" viewBox="${"0 0 25 25"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><rect width="${"13.7121"}" height="${"6.58576"}" rx="${"3.29288"}" transform="${"matrix(-0.723072 -0.690772 -0.723072 0.690772 14.6768 20.4506)"}"${add_attribute("fill", fillcolour, 0)}></rect><rect width="${"25.8464"}" height="${"5.88061"}" rx="${"2.9403"}" transform="${"matrix(0.532405 -0.84649 -0.867274 -0.497832 11.2393 24.8062)"}"${add_attribute("fill", fillcolour, 0)}></rect></svg></div>

  <p class="${[
    "ml-5 text-base transition-all pr-10",
    "  "
  ].join(" ").trim()}">${escape(option)}</p></div>`;
});
const Multiselect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { questionContent } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.questionContent === void 0 && $$bindings.questionContent && questionContent !== void 0)
    $$bindings.questionContent(questionContent);
  return `<h2 class="${"font-semibold text-3xl flex justify-center text-center text-white mt-20 mb-16"}">${escape(questionContent)}</h2>
<div class="${"flex flex-row gap-20 justify-center text-center"}"><div class="${"grid grid-rows-4 grid-cols-2 gap-y-10 gap-x-20 text-white"}">${each(options, (option, id) => {
    return `${validate_component(Checkbox, "Checkbox").$$render($$result, { option, id }, {}, {})}`;
  })}</div></div>`;
});
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentQuestion: currentQuestion2 } = $$props;
  let { questionContent = "Q1: Whats your problem?" } = $$props;
  let { questionType = "checkbox" } = $$props;
  let { optionsMultipleChoice = [
    "Teacher missing",
    "Appliance not working",
    "Someone has injury",
    "I need academic help"
  ] } = $$props;
  let { optionsMultiSelect = [
    "Projector does not stay down",
    "Projector not powering on",
    "Cannot connect mac to projector",
    "Control panel not working",
    "Projector screen glitching",
    "Speakers have no sound",
    "Speakers are glitching"
  ] } = $$props;
  if ($$props.currentQuestion === void 0 && $$bindings.currentQuestion && currentQuestion2 !== void 0)
    $$bindings.currentQuestion(currentQuestion2);
  if ($$props.questionContent === void 0 && $$bindings.questionContent && questionContent !== void 0)
    $$bindings.questionContent(questionContent);
  if ($$props.questionType === void 0 && $$bindings.questionType && questionType !== void 0)
    $$bindings.questionType(questionType);
  if ($$props.optionsMultipleChoice === void 0 && $$bindings.optionsMultipleChoice && optionsMultipleChoice !== void 0)
    $$bindings.optionsMultipleChoice(optionsMultipleChoice);
  if ($$props.optionsMultiSelect === void 0 && $$bindings.optionsMultiSelect && optionsMultiSelect !== void 0)
    $$bindings.optionsMultiSelect(optionsMultiSelect);
  return `<div>${questionType == "multipleChoice" ? `${validate_component(MultipleChoice, "MultipleChoice").$$render(
    $$result,
    {
      options: optionsMultipleChoice,
      questionContent
    },
    {},
    {}
  )}` : `${questionType == "checkbox" ? `${validate_component(Multiselect, "Multiselect").$$render(
    $$result,
    {
      options: optionsMultiSelect,
      questionContent
    },
    {},
    {}
  )}` : ``}`}
  <div class="${"flex justify-between mt-10 ml-10"}">${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})}
    ${validate_component(NextButton, "NextButton").$$render($$result, {}, {}, {})}</div></div>`;
});
async function load() {
  if (get_store_value(currentQuestion).length == 0) {
    return { status: 301, redirect: "report/intro" };
  }
  return {};
}
const Report = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prevRoutes, $$unsubscribe_prevRoutes;
  $$unsubscribe_prevRoutes = subscribe(prevRoutes, (value) => $prevRoutes = value);
  set_store_value(prevRoutes, $prevRoutes = ["Report"], $prevRoutes);
  let options = [
    "Teacher missing",
    "Appliance not working",
    "Someone has injury",
    "I need academic help"
  ];
  $$unsubscribe_prevRoutes();
  return `<main class="${"pt-20 ml-64"}"><div class="${"text-white flex justify-center mt-5"}">${validate_component(Progress, "Progress").$$render($$result, { progressValue: "0" }, {}, {})}</div>
  <div class="${"pr-20"}">${validate_component(Question, "Question").$$render(
    $$result,
    {
      currentQuestion,
      optionsMultipleChoice: options
    },
    {},
    {}
  )}</div></main>`;
});
export { Report as default, load };
