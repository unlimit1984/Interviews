// Problem

export function uniqueCharacters(str: string): boolean {
	return false;
}

// Test

const data1 = 'aab';
const result1 = uniqueCharacters(data1);

if (result1) {
	console.error('Nope');
}

const data2 = 'aba';
const result2 = uniqueCharacters(data2);

if (result2) {
	console.error('Nope');
}

const data3 = 'ab';
const result3 = uniqueCharacters(data3);

if (!result3) {
	console.error('Nope');
}