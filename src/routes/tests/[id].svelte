<script context="module">
	import { getTitle } from '../../lib/helpers';
	export async function load({ params, fetch }) {
		const { id } = params;
		const res = await fetch(`/api/tests/${id}`);
		const data = await res.json();
		const title = getTitle(id);
		console.log(data);
		return {
			props: {
				data,
				title
			}
		};
	}
</script>

<script>
	import QuestionBox from '../../components/questionBox.svelte';
	export let data;
	export let title;
	let filterdQuizes;
	let searchTerm = '';
	$: {
		filterdQuizes = searchTerm
			? data.filter((val) => val.question.toLowerCase().includes(searchTerm.toLowerCase()))
			: data;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div class="m-8">
	<input
		type="text"
		placeholder="Search Quiz"
		class="border rounded rounded-lg py-2 px-4 w-full"
		bind:value={searchTerm}
	/>
</div>
<div class="">
	{#each filterdQuizes as quiz}
		<QuestionBox question={quiz} total={data.length} {title} />
	{/each}
</div>
