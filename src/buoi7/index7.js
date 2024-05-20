var object3 = {
    a: 10,
};

var object4 = object3;

object4.a = 20;

console.log(object3.a); // 1.
console.log(object4.a); // 2.
