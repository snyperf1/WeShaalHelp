import { writable, type Writable } from "svelte/store";
export const user: Writable<{
  displayName: string;
  email: string;
  photoURL: string;
}> = writable({
  displayName: "",
  email: "",
  photoURL: "",
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
// export const answerProperties = {
//   deviceReport: undefined,
//   teacherReport: undefined,
// };
