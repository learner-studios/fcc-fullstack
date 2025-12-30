const dog = {
    name: 'Toby',
    weight: '10 lbs',
    age: 10,
    breed: 'Labrador',
}

const veterinarianInfo = {
    name: 'Dr. Smith',
    address: '123 Pet St.',
    phoneNumber: '555-1234',
    specialty: [ { office: '12345 Pet St.' , email: 'drsmith@vet.com' } ]
}

multiProperty1 = veterinarianInfo.specialty[0].email;
multiProperty2 = veterinarianInfo.specialty[0].office;
showProperty1 = dog.name;
showProperty2 = dog.breed;
typeofProperty1 = typeof(dog);
console.log(multiProperty1, multiProperty2);
console.log(typeofProperty1);
console.log(showProperty1);

const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;


function toObject(value) {
    if (value === null || value === undefined) {
        return {};
    }
    else {
        if (typeof value === "object"){
            return value;
        }
    }
    return Object(value);
}

console.log(toObject(null));
console.log(toObject(true));
console.log(toObject([1,2,3])); 
console.log(toObject("object"));
console.log(toObject(undefined));   

const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString); //the other JSON method is JSON.parse 
//mdn JSON;