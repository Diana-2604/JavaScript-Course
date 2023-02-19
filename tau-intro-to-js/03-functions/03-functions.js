function sum(a, b) {
    return a+b;
}
console.log(sum(10, 10)); // 20

function product(a, b) {
    return a*b;
}
console.log(product(12, 12)); //144

// Anonymous function
setTimeout(function () {
    console.log("Hey! You rock!!!");
}, 1000);

// Arrow function
setTimeout(() => console.log("Hey! You rock!!!"), 1000);