// Problem

export function concat(str: string) {
	return undefined;
}

// Test

const result = concat('Peter')('Parker');
const expected = 'Peter Parker';

if (expected !== result) {
	console.error('Nope');
}
