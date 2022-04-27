// Problem

export function newArray(
  arr1: Array<number>,
  arr2: Array<number>
): Array<number> {
  return [];
}

// Test

const data1: Array<number> = [1, 2, 3];
const data2: Array<number> = [3, 4, 5];

const result: Array<number> = newArray(data1, data2);
const expected: Array<number> = [1, 2, 3, 3, 4, 5];

for (let i = 0; i < expected.length; i++) {
  if (expected[i] !== result[i]) {
    console.error('Nope');
  }
}
