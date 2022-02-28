import { getJsonData } from '$lib/handleFiles';

export async function get({ params }) {
	const jsonData = getJsonData(params.id);
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
