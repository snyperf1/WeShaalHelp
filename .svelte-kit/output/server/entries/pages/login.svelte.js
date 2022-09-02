import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/index-3b568e49.js";
import { getAuth } from "firebase/auth";
import { i as isLoggedIn, u as user } from "../../chunks/stores-1f59aff4.js";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $user, $$unsubscribe_user;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  getAuth();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_user();
  return `<body class="${"flex justify-center"}">${$isLoggedIn ? `<p class="${"text-gray-100"}">Welcome, ${escape($user.displayName)}!</p>
		<button class="${"text-gray-100"}">Sign out</button>` : `<button class="${"cursor-pointer font-bold text-gray-100"}">Sign in with google</button>`}</body>`;
});
export { Login as default };
