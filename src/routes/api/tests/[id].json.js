export async function get({ params }) {
	const res = await fetch(
		`https://raw.githubusercontent.com/pwhb/linkedin-rehearsal/main/src/json/${params.id}-quiz.json`
	);
	const data = await res.json();
	return {
		body: {
			questions: data
		}
	};
}
