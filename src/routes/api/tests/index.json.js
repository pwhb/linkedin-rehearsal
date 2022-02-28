import fs from 'fs';

function getJsonList() {
	const jsonList = fs.readdirSync('static/json');
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
