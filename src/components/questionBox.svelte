<script>
	export let question;
	export let total;
	export let title;
	export let nextQuestion;
	let showAnswer = false;
	let color = 'bg-zinc-600';
	let answers = [];
	let correctCount = 0;
	function checkAnswer() {
		showAnswer = true;
		const correct = answers.every((val, idx) => val === question.choices[idx].answer)
			? true
			: false;
		if (correct) {
			correctCount++;
		}
		color = correct ? 'bg-green-600' : 'bg-red-600';
	}
	function next() {
		showAnswer = false;
		color = 'bg-zinc-600';
		answers = [];
		nextQuestion();
	}

	function reset() {
		showAnswer = false;
		color = 'bg-zinc-600';
		answers = [];
		correctCount = 0;
	}

	function clear() {
		answers = [];
	}

	function handleKeyPress(e) {
		if (!nextQuestion) {
			return;
		}
		if (e.keyCode === 13 || e.keyCode === 110) {
			if (showAnswer) {
				next();
			} else {
				checkAnswer();
			}
		} else if (e.keyCode >= 48 && e.keyCode <= 57) {
			const num = e.keyCode - 48;
			if (num <= question.choices.length) {
				answers[num - 1] = !answers[num - 1];
			}
		} else if (e.keyCode === 99) {
			clear();
		} else if (e.keyCode === 114) {
			reset();
		}
	}
</script>

<svelte:window on:keypress={handleKeyPress} />

{#if nextQuestion}
	<h2 class="text-xl text-center my-4">{correctCount}/{total}</h2>
{/if}


<div class="rounded-xl shadow-lg mx-4 mb-6">
	<div class={`rounded rounded-t-xl ${color} text-white text-center py-2`}>
		{title}
	</div>
	<div class="grid divide-y">
		<div class="mx-6 my-2">
			<h1>{question.question}</h1>
			{#if question.code}
				<div class="bg-gray-200 rounded-lg p-2 m-2">
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
						<p class="mr-2">{idx + 1}.</p>
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
		<div>
			<button class="rounded-2xl bg-zinc-600 text-white px-3 py-1 my-2 mr-4" on:click={clear}
				>Clear</button
			>
			<button class="rounded-2xl bg-red-700/75 text-white px-3 py-1 my-2 mr-4" on:click={reset}
				>Reset</button
			>
			{#if showAnswer}
				<button class="rounded-2xl bg-sky-700/75 text-white px-3 py-1 my-2 mr-4" on:click={next}
					>Next</button
				>
			{:else}
				<button
					class="rounded-2xl bg-sky-700/75 text-white px-3 py-1 my-2 mr-4"
					on:click={checkAnswer}>Check answer</button
				>
			{/if}
		</div>
	</div>
</div>
