import fs from 'fs';

function getJsonList() {
	const jsonList = fs.readdirSync('src/constants/json');
	return jsonList.sort();
}

export async function get() {
	const testList = getJsonList();
	return {
		body: testList
	};
}
