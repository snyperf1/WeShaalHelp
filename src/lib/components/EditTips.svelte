<!-- TODO: Fix the markdown problem -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let title: string = '';
	export let body: string = '';
	export let id: number;

	let isClicked: boolean = false;
	let modalShow: boolean = false;
	let newbody: string = body;

	function updateBody() {
		modalShow = !modalShow;
		dispatch('updateBody', {
			newbody: newbody,
			id: id
		});
		body = newbody;
	}
</script>

<!-- TODO: The modal is not specific for every element yet, might consider making -->
<!-- TODO: another component for the modal and have a property that links it to the edit buttons -->

<!-- TODO: BTW THIS IS NOT FINISHED -->

<li
	class="list-none bg-slate-700 rounded-xl p-5 mx-5 mt-2 mb-6 transition-all"
	class:extendHeight={isClicked}
>
	<div class="flex justify-between mb-2">
		<div class="flex">
			<h3 class="text-gray-50 text-2xl font-semibold cursor-pointer mr-5">
				{title}
			</h3>
			<button on:click={() => (modalShow = !modalShow)}>
				<svg
					class="transition-all hover:scale-105"
					width="30"
					height="30"
					viewBox="0 0 96 96"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M56.24 36.08L59.92 39.76L23.68 76H20V72.32L56.24 36.08M70.64 12C69.64 12 68.6 12.4 67.84 13.16L60.52 20.48L75.52 35.48L82.84 28.16C84.4 26.6 84.4 24.08 82.84 22.52L73.48 13.16C72.68 12.36 71.68 12 70.64 12V12ZM56.24 24.76L12 69V84H27L71.24 39.76L56.24 24.76V24.76Z"
						fill="#60a5fa"
					/>
				</svg>
			</button>
		</div>
		<button
			class="transition-all"
			class:rotate-90={isClicked}
			on:click={() => (isClicked = !isClicked)}
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.7459 19.7589C7.44784 19.4667 7.42074 19.0095 7.66461 18.6873L7.7459 18.595L14.4734 12L7.7459 5.40503C7.44784 5.11283 7.42074 4.65558 7.66461 4.33338L7.7459 4.24106C8.04396 3.94887 8.51037 3.9223 8.83904 4.16137L8.93321 4.24106L16.2541 11.418C16.5522 11.7102 16.5793 12.1675 16.3354 12.4897L16.2541 12.582L8.93321 19.7589C8.60534 20.0804 8.07376 20.0804 7.7459 19.7589Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>
	<p class="text-gray-50">
		{body}
	</p>
</li>

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" class:hidden={!modalShow} />

<div class="fixed inset-0 z-10 overflow-y-auto" class:hidden={!modalShow}>
	<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
		<div
			class="relative transform overflow-hidden rounded-lg bg-slate-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
		>
			<div class="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<h3 class="text-xl font-bold leading-6 text-indigo-400" id="modal-title">
						Change tip data
					</h3>

					<div class="mt-4 mb-2 text-base font-bold text-white">New Body content</div>
					<textarea
						bind:value={newbody}
						placeholder="insert your content here..."
						class="w-full h-32 resize-none rounded-lg border-none p-2 text-sm text-gray-500"
					/>
				</div>
			</div>
			<div class="bg-slate-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
					type="button"
					on:click={updateBody}
					class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
					>Update</button
				>
				<button
					type="button"
					class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					on:click={() => {
						modalShow = !modalShow;
						newbody = body;
					}}>Cancel</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	li {
		transition: max-height 200ms ease-in-out;
		max-height: 4em;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.extendHeight {
		transition: max-height 200ms ease-in-out;
		max-height: 10em;
		overflow: visible;
		white-space: normal;
		height: fit-content;
	}
</style>
