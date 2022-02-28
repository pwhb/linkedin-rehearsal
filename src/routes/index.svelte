<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/api/tests');
		const data = await res.json();
		const list = data.map((fileName) => {
			const testName = fileName.replace(/-quiz\.json$/, '');
			return {
				title: testName.replaceAll('-', ' ').toUpperCase(),
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
</script>

<svelte:head>
	<title>Linkedin Rehearsal</title>
</svelte:head>
<div class="grid-cols-2 md:grid grid-cols-5 grid-flow-row gap-4 mb-24">
	{#each list as { testName, title }}
		<div
			class="bg-sky-700/75 w-56 h-16 flex flex-col justify-center text-white text-center p-2 mx-auto rounded rounded-lg"
		>
			<a href={`/tests/${testName}`}>
				{title}
			</a>
		</div>
	{/each}
</div>
