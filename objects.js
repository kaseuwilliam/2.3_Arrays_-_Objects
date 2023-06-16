
let person = {
    name: "Fred Flintstone",
    age: 28,
    height: "5'11",
    job: "Software Engineer",
    kids: ["Pebbles", "Bambam","Tommy"],
    address: {
        street: "1234 Street",
        city: "Amazing City",
        zipCode: 12345
    },
    intro: function(){
        console.log(`Hello, I am ${this.name}`);
        return ""
    }
}

// console.log(person.intro())

for (key in person){

    console.log(`Key: ${key}, value: ${person[key]}`)
}





// console.log(person.height)


// console.log(person["kids"][1])

// person["job"] = "Actor";

// // person["career"] = person["job"]

// // delete person["job"]

// person["kids"].push("Rosey")


// console.log(person)
