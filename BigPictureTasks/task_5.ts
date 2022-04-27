// Problem

export function toString(arr: Array<string>): string {
	return '';
}

// Test

const expected = 'a, b, c, d';
const result = toString(['a', 'b', 'c', 'd']);

if (result !== expected) {
	console.error('Nope');
}
