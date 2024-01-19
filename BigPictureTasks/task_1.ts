// Problem
export function timeouts() {
  console.log('start1');
  setTimeout(() => console.log('setTimeout2'), 100);
  setTimeout(() => console.log('setTimeout3'), 0);
  Promise.resolve(1).then(()=>{console.log('promise')});
  console.log('finish4');
}

timeouts();
