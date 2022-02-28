<script>
	export let question;
	export let total;
	export let title;
	let showAnswer = false;
	const answers = [];
	function checkAnswer() {
		console.log('checkAnswer', answers);
		showAnswer = true;
	}
</script>

<div class="rounded rounded-xl shadow-lg mx-4 mb-6">
	<div class="rounded rounded-t-xl bg-zinc-600 text-white text-center py-2">{title}</div>
	<div class="grid divide-y">
		<div class="mx-6 my-2">
			<h1>{question.question}</h1>
			{#if question.code}
				<div class="bg-gray-200 rounded rounded-lg p-2 m-2">
					<code>{question.code}</code>
				</div>
			{/if}
		</div>
		<div class="px-6 grid divide-y">
			{#each question.choices as choice, idx}
				<div class="py-2">
					{#if showAnswer && (answers[idx] || choice.answer)}
						<p class={`${choice.answer ? 'text-green-400' : 'text-red-400'} text-semibold`}>
							{choice.answer ? 'Correct Answer' : 'Incorrect Answer'}
						</p>
					{/if}

					<div class="py-2 flex flex-row items-center">
						<input type="checkbox" class="mr-3" bind:checked={answers[idx]} />
						{#if choice && choice.code}
							<code>{choice.text}</code>
						{:else}
							<p>{choice.text}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="bg-zinc-600 h-2 mt-3" />
	<div class="flex flex-row items-center justify-between py-2">
		<p class="ml-4">Q {question.id} / {total}</p>
		<button
			class="rounded rounded-2xl bg-sky-700/75 text-white px-3 py-1 my-2 mr-4"
			on:click={checkAnswer}>Check answer</button
		>
	</div>
</div>
