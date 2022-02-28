import fs from 'fs';

export async function get({ params }) {
	const jsonData = fs.readFileSync(`json/${params.id}-quiz.json`);
	const questions = JSON.parse(jsonData).map((item) => {
		return {
			...item
		};
	});
	return {
		body: {
			questions
		}
	};
}
