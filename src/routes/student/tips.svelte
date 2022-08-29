<script>
	import { prevRoutes } from '$lib/stores';
	import Tip from '$lib/components/Tip.svelte';
	$prevRoutes = ['Tips'];
	const tipsarr = [
		{
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		},
		{
			title: 'Not working?',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusantium, nihil unde dolor veritatis reiciendis consequatur quas! Doloremque natus iure placeat odio nobis. Aliquid esse ducimus accusamus? Temporibus debitis explicabo rerum hic, labore soluta voluptatem maxime dolorum. Facilis quis aliquid sit quisquam fugiat eum minima optio, cum velit, ratione impedit.'
		}
	];
</script>

<main class="pt-20 ml-64">
	{#each tipsarr as i}
		<Tip title={i.title} body={i.body} />
	{/each}
</main>
