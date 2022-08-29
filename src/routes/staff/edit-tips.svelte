<script>
	import EditTips from '$lib/components/EditTips.svelte';

	const tipsarr = [
		{
			id: 0,
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			id: 1,
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			id: 2,
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			id: 3,
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			id: 4,
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		}
	];
	function handleUpdates(e) {
		tipsarr[e.detail.id].body = e.detail.newbody;
	}
</script>

<main class="pt-20 ml-64">
	{#each tipsarr as e}
		<EditTips title={e.title} bind:body={e.body} id={e.id} on:updateBody={handleUpdates} />
	{/each}
</main>
