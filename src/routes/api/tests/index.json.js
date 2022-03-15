import { getJsonList } from '$lib/handleFiles';

export async function get() {
	const tests = getJsonList();
	return {
		body: tests
	};
}
