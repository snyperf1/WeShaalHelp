import { writable, type Writable } from 'svelte/store';
export const user: Writable<{ displayName: string; email: string }> = writable({
	displayName: '',
	email: ''
});
export const prevRoutes: Writable<string[]> = writable([]);
export const isLoggedIn = writable(false);
export const currentQuestion: Writable<string[]> = writable([]);
