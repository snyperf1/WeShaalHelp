import { writable, type Writable } from "svelte/store";
export const user: Writable<{
  displayName: string;
  email: string;
  photoURL: string;
  class: string;
  registerNumber: number;
  uid: string;
  isStudent: boolean;
}> = writable({
  displayName: "",
  email: "",
  photoURL: "",
  class: "",
  registerNumber: undefined,
  uid: "",
  isStudent: undefined,
});
export const prevRoutes: Writable<string[]> = writable([]);
export const isLoggedIn = writable(false);
export const currentQuestion: Writable<string[]> = writable([]);
export const app: any = writable({});

// report
export const answers = writable([
  [undefined, undefined],
  [undefined, undefined],
  [undefined, undefined],
  [undefined, undefined],
  "",
]);

export let dynamicurl: Writable<string> = writable("");
export let username: Writable<string> = writable("");

export let chatNames: Writable<
  [
    {
      name: String;
    }
  ]
> = writable([
  {
    name: "",
  },
]);

// export const answerProperties = {
//   deviceReport: undefined,
//   teacherReport: undefined,
// };
