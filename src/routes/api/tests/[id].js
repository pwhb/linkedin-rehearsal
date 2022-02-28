import fs from 'fs';

export async function get({ params }) {
	const jsonData = fs.readFileSync(`src/constants/json/${params.id}-quiz.json`);
	const body = JSON.parse(jsonData).map((item) => {
		return {
			...item
		};
	});
	return {
		body
	};
}
