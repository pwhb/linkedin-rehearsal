import fs from 'fs';
import path from 'path';

const fileDir = path.join(process.cwd(), 'json');

export async function get({ params }) {
	const jsonDir = path.join(fileDir, `${params.id}-quiz.json`);
	const jsonData = fs.readFileSync(jsonDir);
	//const jsonData = fs.readFileSync(`json/${params.id}-quiz.json`);
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
