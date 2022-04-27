// Problem

export function replace(str: string): string {
	return '';
}

// Test

const data = 'This is TEST only a TEST test string';
const expected = 'This is  only a  test string';
const result = replace(data);

if (result !== expected) {
	console.error('Nope');
}
