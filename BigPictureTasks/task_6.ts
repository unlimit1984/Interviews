// Problem

// TODO
export function flat(arr: Array<Array<number>>): Array<number> {
  const result = [];
  arr.forEach((e1) => {
    e1.forEach((e2) => {
      result.push(e2);
    });
  });
  console.log(result);
  return result;
}

// Test

const expected = [1, 2, 3, 4, 5];
const data = [[1, 2], [3, 4], [5]];
const result = flat(data);

for (let i = 0; i < expected.length; i++) {
  if (result[i] !== expected[i]) {
    console.error('Nope');
  }
}
