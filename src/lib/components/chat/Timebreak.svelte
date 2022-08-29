<script lang="ts">
	const milliseconds: number = 1650000000000;
	const messageDate: Date = new Date(milliseconds);

	function verifyDate(dateSent: Date): string {
		const currentDate = new Date();
		if (
			dateSent.getUTCDate() == currentDate.getUTCDate() &&
			dateSent.getUTCMonth() == currentDate.getUTCMonth() &&
			dateSent.getUTCFullYear() == currentDate.getUTCFullYear()
		) {
			return dateSent.toLocaleTimeString();
		} else {
			return dateSent.toLocaleDateString() + ', ' + dateSent.toLocaleTimeString();
		}
	}
	const timeText: string = verifyDate(messageDate);
</script>

<div class="flex justify-center">
	<p class="text-slate-400 text-sm bg-slate-800 text-center font-medium mt-5">
		{timeText}
	</p>
</div>
