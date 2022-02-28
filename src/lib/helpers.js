export function getTitle(string) {
	const arr = string.split('-');
	const capitalizedArr = arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
	return capitalizedArr.join(' ');
}
