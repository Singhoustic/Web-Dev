function greet
    () {
    console.log("hello ronhihhit");
}
// greet();

let arrow = () => {
    console.log("i'm an arrow function ");
}

// arrow();

let callback = (a, b, call) => {

    return call(a, b);

}

function add(a, b) {
    return a + b;
}

// function multi(a, b) {
//     return a * b;
// }

const multi = (a, b) => a * b;

let divide = (a, b) => a / b;

// console.log(callback(74, 2, divide));
// console.log(callback(3, 4, add));

const multiResult = callback(5, 6, multi);
// console.log(multiResult);

const arr = [1, 2, -5, 3, 4, 8, -19];

let neg = (num) => {
    return num < 0;
}

// console.log(arr.find(neg));

const ans = arr.findIndex(neg);
// console.log(ans);

function allElement(num, i) {
    console.log("I'm data", num, "and i'm index", i + 1);
}

// console.log(arr.forEach(allElement));


// ================= CAllBACK =======================


function returnParts(callback) {
    setTimeout(() => {
        const parts = "🦾🦿";
        console.log("here's your parts ", parts);
        callback(parts);
    }, 2000);
}

function returnTyre(parts, callback) {
    setTimeout(() => {
        const tyre = parts + "🛞";
        console.log("I got these ", tyre);
        callback(tyre);
    }, 2000);
}
function returnBrakes(tyre, callback) {
    setTimeout(() => {
        const brakes = tyre + "😒";
        console.log("I got the brakes", brakes);
        callback(brakes);
    }, 2000);
}
function returnCar(brakes, callback) {
    setTimeout(() => {
        const car = brakes + "🚓";
        console.log("I'm car", car)
        callback(car);
    }, 2000);
}

returnCar((parts) => {
    returnParts(parts, (tyre) => {
        returnBrakes(tyre, (car) => {
            console.log("Now i'm complete", car);
        })
    });

});
