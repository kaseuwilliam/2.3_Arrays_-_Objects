// list of cars

let car1 = "bmw";
let car2 = "mercedes";
let car3 = "audi"
let car4 = "bugatti"
let car5 = "kia"

let cars = ["bmw","mercedes","audi","bugatti","kia"]
        //   0       1         2       3        4

// 5 elements/items -> length
// index is the same thing as positioning of an item
// cars[0] -> BMW

// console.log(cars[1])

// console.log(cars.length)

// console.log(`The list before adding more cars`)
// for(let i=0; i < cars.length; i++){
//     console.log(cars[i])
// }

// console.log(`The list AFTER adding more cars`)

let car6 = "mazda";
let car7 = "land rover";

cars.push("tesla")
cars.push(car6)
cars.push(car7)

// for(let i=0; i < cars.length; i++){
//     console.log(cars[i])
// }

console.log(`The list AFTER REMOVING some cars`)

cars.unshift("Porsche")
cars.pop()

for(let i=0; i < cars.length; i++){
    console.log(cars[i])
}

console.log(cars.includes("bugattis"))

