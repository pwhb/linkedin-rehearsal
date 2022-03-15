<script context="module">
	import { getTitle } from '../../lib/helpers';
	export async function load({ params, fetch, url }) {
		const { id } = params;
		const res = await fetch(`/api/tests/${id}.json`);
		const data = await res.json();
		const title = getTitle(id);
		return {
			props: {
				data,
				title,
				url
			}
		};
	}
</script>

<script>
	import QuestionBox from '../../components/questionBox.svelte';
	export let data;
	export let title;
	export let url;
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

<div class="m-8 text-center">
	<a class="mx-4 text-lg hover:scale-110" href={`${url.href}/practice`}>Practice</a>
</div>
<div class="">
	{#each filterdQuizes as quiz}
		<QuestionBox question={quiz} total={data.length} {title} />
	{/each}
</div>
