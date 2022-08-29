<script>
	import Table from '$lib/components/statistics/Table.svelte';

	const currentDate = new Date();
	let newDate = currentDate.toLocaleTimeString();

	let data = [
		{
			item: 'Projector',
			reportedBy: 'ALONZO PUAH YU HENG student',
			dateReported: newDate,
			status: 'unrepaired',
			class: 'S3-01'
		},
		{
			item: 'Projector',
			reportedBy: 'ALONZO PUAH YU HENG student',
			dateReported: newDate,
			status: 'unrepaired',
			class: 'S3-01'
		},
		{
			item: 'Projector',
			reportedBy: 'ALONZO PUAH YU HENG student',
			dateReported: newDate,
			status: 'unrepaired',
			class: 'S3-01'
		},
		{
			item: 'Projector',
			reportedBy: 'ALONZO PUAH YU HENG student',
			dateReported: newDate,
			status: 'unrepaired',
			class: 'S3-01'
		},
		{
			item: 'Projector',
			reportedBy: 'ALONZO PUAH YU HENG student',
			dateReported: newDate,
			status: 'unrepaired',
			class: 'S3-01'
		}
	];
</script>

<main class="pt-16 ml-72 text-white">
	<Table {data} status={'working'} />
</main>
