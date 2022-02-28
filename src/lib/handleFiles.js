import fs from 'fs';

export function getJsonData(testName) {
	const jsonData = fs.readFileSync(`src/json/${testName}-quiz.json`, 'utf8');
	console.log('jsonData', jsonData);
	return jsonData;
}

export function getJsonList() {
	const jsonList = fs.readdirSync('src/json');
	return jsonList.sort();
}
