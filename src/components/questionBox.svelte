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
		<h1 class="px-6 py-2">{question.question}</h1>
		<div class="px-6 grid divide-y">
			{#each question.choices as choice, idx}
				<div class="py-2">
					{#if showAnswer && (answers[idx] || question.answer.includes(idx))}
						<p
							class={`${
								question.answer.includes(idx) ? 'text-green-400' : 'text-red-400'
							} text-semibold`}
						>
							{question.answer.includes(idx) ? 'Correct Answer' : 'Incorrect Answer'}
						</p>
					{/if}

					<div class="py-2 flex flex-row items-center">
						<input type="checkbox" class="mr-3" bind:checked={answers[idx]} />
						{#if choice[0] === '`'}
							<code>{choice.replaceAll('`', '')}</code>
						{:else}
							<p>{choice}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="bg-zinc-600 h-2 mt-3" />
	<div class="flex flex-row items-center justify-between py-2">
		<p class="ml-12">Q {question.id} / {total}</p>
		<button
			class="rounded rounded-2xl bg-blue-700 text-white px-3 py-1 my-2 mr-12"
			on:click={checkAnswer}>Check answer</button
		>
	</div>
</div>
