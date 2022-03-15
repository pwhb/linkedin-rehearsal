<script context="module">
	import { getTitle } from '$lib/helpers';
	export async function load({ params, fetch }) {
		const { id } = params;
		const res = await fetch(`/api/tests/${id}.json`);
		const data = await res.json();
		const title = getTitle(id);
		return {
			props: { data, title, id }
		};
	}
</script>

<script>
	import QuestionBox from '../../../components/questionBox.svelte';
	export let data;
	export let title;
	export let id;
	let counter = 0;
	const nextQuestion = () => {
		counter++;
	};
	let question;
	$: {
		question = data[counter];
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="text-center my-10">
	<a href={`/tests/${id}`}>Back</a>
</div>

<div class="">
	<QuestionBox {question} {nextQuestion} total={data.length} {title} />
</div>

<div class="text-center my-10">
	<p class="my-3">
		Press <strong>C</strong> to
		<span class="rounded-2xl bg-zinc-600 text-white px-3 py-1">Clear</span>
	</p>
	<p class="my-3">
		Press <strong>R</strong> to
		<span class="rounded-2xl bg-red-700/75 text-white px-3 py-1">Reset</span>
	</p>
	<p class="my-3">
		Press <strong>N</strong> or <strong>Enter</strong> to
		<span class="rounded-2xl bg-sky-700/75 text-white px-3 py-1">Next or Check answer</span>
	</p>
	<p class="my-3">Press 1,2,3, ... to toggle answers</p>
</div>
