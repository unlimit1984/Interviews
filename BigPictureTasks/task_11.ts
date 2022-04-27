// Problem: Optimize execution of test

export function fibb(n: number): number {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibb(n - 1) + fibb(n - 2);
}

// Test

const start = new Date().getTime();
for (let i = 0; i < 40; i++) {
  fibb(i);
}
const end = new Date().getTime();
console.log('Execution in ms:', end - start);
