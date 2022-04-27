// Problem

export function compare(obj1: any, obj2: any): boolean {
	return false;
}

// Test

const a1 = { a: 1 };
const b1 = { a: 1 };

if (!compare(a1, b1)) {
	console.error('Nope');
}

const a2 = { a: 1, b: 1 };
const b2 = { a: 1 };

if (compare(a2, b2)) {
	console.error('Nope');
}

const a3 = {
	a: 1,
	b: { c: 1 }
};

const b3 = {
	a: 1,
	b: { c: 1 }
};

if (!compare(a3, b3)) {
	console.error('Nope');
}