//Task 1
(function(){
    var a = b = 10;
})();

console.log(a);
console.log(b);

//Task 2
for (let i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

//Task 3
function Dog(newName){
    this.name = newName;
}
Dog.bark = function() {
    console.log(this.name + 'says Hello');
}
var dog = new Dog('Bob');
dog.bark();
