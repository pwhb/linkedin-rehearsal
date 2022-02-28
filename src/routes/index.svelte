<script context="module">
	import { getTitle } from '../lib/helpers';
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/api/tests.json');
		const data = await res.json();
		const list = data.tests.map((fileName) => {
			const testName = fileName.replace(/-quiz\.json$/, '');
			return {
				title: getTitle(testName),
				testName
			};
		});
		return {
			props: { list }
		};
	}
</script>

<script>
	export let list;
	let searchTerm = '';
	let filteredList;

	$: {
		filteredList = searchTerm
			? list.filter((val) => val.title.toLowerCase().includes(searchTerm.toLowerCase()))
			: list;
	}
</script>

<svelte:head>
	<title>Linkedin Rehearsal</title>
</svelte:head>
<div class="m-8">
	<input
		type="text"
		placeholder="Search Test"
		class="border rounded rounded-lg py-2 px-4 w-full"
		bind:value={searchTerm}
	/>
</div>

<div class="grid grid-cols-2 px-3  md:grid-cols-5 gap-4 mb-24">
	{#each filteredList as { testName, title }}
		<div
			class="bg-sky-700/75 w-56 h-16 flex flex-col justify-center text-white text-center p-2 mx-auto rounded rounded-lg"
		>
			<a href={`/tests/${testName}`}>
				{title}
			</a>
		</div>
	{/each}
</div>
