<script>
	import Table from '$lib/components/statistics/Table.svelte';

	// let headernames = ['Item', 'Reported by', 'Date reported', 'Status', 'Class'];
	const currentDate = new Date();
	let newDate = currentDate.toLocaleTimeString();
	// let newDateArr = newDate.split('');

	// newDateArr.splice(2 + 1, 0, ' ');
	// newDateArr.splice(2, 0, ' ');
	// newDateArr.splice(7 + 1, 0, ' ');
	// newDateArr.splice(7, 0, ' ');

	// newDate = newDateArr.join('');
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
	<Table {data} status={'broken'} />
</main>
