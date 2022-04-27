// Problem

export function removeDuplicates(array: Array<number>): Array<number> {
	return [];
}

// Test

const data1: Array<number> = [1, 1, 3, 3, 3, 3, 4, 5, 5];
const data2: Array<number> = [2, 2, 2, 3];

const result1: Array<number> = removeDuplicates(data1);
const result2: Array<number> = removeDuplicates(data2);

const expected1: Array<number> = [1, 3, 4, 5];
const expected2: Array<number> = [2, 3];

for (let i = 0; i < expected1.length; i++) {
	if (expected1[i] !== result1[i]) { console.error('Nope'); }
}

for (let i = 0; i < expected2.length; i++) {
	if (expected2[i] !== result2[i]) { console.error('Nope'); }
}