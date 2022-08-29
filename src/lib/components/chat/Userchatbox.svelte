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

<div class="text-white p-4 w-1/2 text-left ml-10 my-5 rounded-2xl bg-slate-700">
	<div>
		{text}
	</div>
	<div class="text-slate-400 text-xs text-right mr-2 mt-2">{timeText}</div>
</div>
