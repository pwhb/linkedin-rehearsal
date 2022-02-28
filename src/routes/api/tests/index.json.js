import fs from 'fs';

function getJsonList() {
	const jsonList = fs.readdirSync('json');
	return jsonList.sort();
}

export async function get() {
	const tests = getJsonList();
	return {
		body: {
			tests
		}
	};
}
