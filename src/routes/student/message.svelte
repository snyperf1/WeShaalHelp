<script>
	import Userchatbox from '$lib/components/chat/Userchatbox.svelte';
	import Otherchatbox from '$lib/components/chat/Otherchatbox.svelte';
	import { prevRoutes } from '$lib/stores';
	import Timebreak from '$lib/components/chat/Timebreak.svelte';
	import Chatinput from '$lib/components/chat/chatinput.svelte';
	import Namepick from '$lib/components/chat/Namepick.svelte';
	$prevRoutes = ['Message'];
	let text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates cumque. Totam adipisci esse natus aliquam excepturi itaque saepe.';
	let names = [
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....'],
		['S3-01 - 18 - Shrinithi', 'You: Ok, we will be coming ....']
	];
	const messageDate = new Date(1650000000000);
</script>

<div class="flex">
	<nav class="ml-64 mt-16 bg-gray-800 max-h-screen overflow-y-scroll namesbar">
		{#each names as element}
			<Namepick name={element[0]} preview={element[1]} />
		{/each}
	</nav>
	<main class="pt-20 overflow-y-scroll max-h-screen">
		<section class="flex justify-center">
			<div class="bg-indigo-700 text-white rounded-xl text-center w-1/2 p-6 my-6 text-sm">
				This is used by the IT helpdesk to show when they are done and also for you to say your
				thanks to the IT helpdesk. Please do not send any unnecessary messages.
			</div>
		</section>
		<Userchatbox {text} {messageDate} />
		<Otherchatbox {text} {messageDate} />
		<Userchatbox {text} {messageDate} />
		<Otherchatbox {text} {messageDate} />
		<Userchatbox {text} {messageDate} />
		<Otherchatbox {text} {messageDate} />
		<Userchatbox {text} {messageDate} />
		<Otherchatbox {text} {messageDate} />
		<Userchatbox {text} {messageDate} />
		<Otherchatbox {text} {messageDate} />
		<Userchatbox {text} {messageDate} />
		<Chatinput />
	</main>
</div>

<style>
	.namesbar {
		min-width: fit-content;
	}
</style>
