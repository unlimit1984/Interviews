// Problem

// (function () {
//   var a = (b = 10);
// })();

//-------------------------------------
export function func() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}
func();
