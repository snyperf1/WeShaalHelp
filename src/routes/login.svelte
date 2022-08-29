<script lang="ts">
	import { signInWithPopup, GoogleAuthProvider, signOut, getAuth } from 'firebase/auth';
	import { user, isLoggedIn } from '$lib/stores';
	const auth = getAuth();
	async function loginWithGoogle() {
		try {
			const provider = new GoogleAuthProvider();
			const res = await signInWithPopup(auth, provider);
			$user = res.user;
			$isLoggedIn = true;
			$isLoggedIn = $isLoggedIn;
			console.log($user);
		} catch (e) {
			console.log(e.message);
			console.log(e);
		}
	}
	async function logout() {
		console.log('signout button has been pressed');

		try {
			signOut(auth);
			$isLoggedIn = false;
		} catch (e) {
			console.log(e.message);
			console.log(e);
		}
	}
</script>

<body class="flex justify-center">
	{#if $isLoggedIn}
		<p class="text-gray-100">Welcome, {$user.displayName}!</p>
		<button class="text-gray-100" on:click={logout}>Sign out</button>
	{:else}
		<button class="cursor-pointer font-bold text-gray-100" on:click={loginWithGoogle}
			>Sign in with google</button
		>
	{/if}
</body>
