<script>
	export let link = '/report';
	export let isLocked = false;
</script>

<a
	href={link}
	class="appearance-none bg-indigo-400 rounded-full font-medium py-2 px-10 text-sm text-white transition-colors hover:bg-indigo-500"
	class:opacity-50={isLocked}
>
	Next →
</a>
