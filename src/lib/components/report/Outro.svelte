<script>
	import Progress from '$lib/components/report/Progress.svelte';
	import { prevRoutes } from '$lib/stores';
	$prevRoutes = ['Report', 'Outro'];
</script>

<main class="pt-20 ml-64 text-white">
	<div class="text-white flex justify-center mt-5">
		<Progress progressValue="100" />
	</div>
	<h1 class="text-center text-5xl leading-10 font-bold text-white mt-36 mx-36">Report sent!</h1>
	<p class="text-center mt-20 mx-52">
		Your report has been sent to the IT helpdesk/General Office. As of now, wait for the IT
		helpdesk/General Office to get back to you. We have a chat with them opened for you! Check it
		out here → <a href="/student/message" class="text-indigo-300">link</a>
	</p>
	<div class="flex justify-center">
		<a
			href="/student"
			class="mt-20 appearance-none bg-indigo-500 rounded-2xl font-medium text-white py-3
  px-10 text-sm transition-colors hover:bg-indigo-700 hover:underline"
		>
			Back to homepage
		</a>
	</div>
</main>
