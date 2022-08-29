<script lang="ts">
	export let text: string;
	export let messageDate: Date;
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
	const timeText = verifyDate(messageDate);
</script>

<div class="flex justify-end">
	<div class="rounded-2xl text-white bg-indigo-500 p-4 w-1/2 mr-10 my-5">
		<div>
			{text}
		</div>
		<div class="text-indigo-200 text-xs text-right mr-2 mt-2">{timeText}</div>
	</div>
</div>
