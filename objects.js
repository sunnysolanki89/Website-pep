// JavaScripts objects are always in key value pair

// to declare an object

let obj = {}; // this is how you declare an object

let person = {
  name: "Sunny",
  age: 32,
  phone: 8800635011,
  gender: "Male",
  height: "5.6 feet",
};

let car = {
  name: "Rolls-Royce Ghost",
  brand: "Rolls Royce",
  maxSpeed: "180km/hr",
  color: "Black",
  price: "Rs. 6.95 Cr",
};


// Captain America - Avengers

let cap = {
    firstName:'Steve',
    lastName:'Rogers',
    friends:['Bucky', 'Tony', 'Dr Banner'],
    age:102,
    isAvanger:true,
    address: {
        state:'Manhattan',
        city:'New york',
        pincode:'000',
    },
    sayHi: function(){
        console.log('Captain says hi')
    }
}

// dot notation
//console.log(cap.firstName, cap.lastName)
//console.log(cap.address)
//console.log(cap.address.city)
//console.log('My best friend is',cap.friends[0])

// bracket notation
//console.log(cap['address'])
//console.log(cap['address']['state'])

//cap.sayHi()


// For in loop for objects
for(let key in cap){
    if(key=== "firstName"){
    console.log('key:', key, "Value:", cap[key])
    }
}

// Change
cap.isAvanger = false;

// Add
cap.movies = ['Age of Ultron', 'Civil War', 'First Avenger']

// Delete
delete cap.age

//console.log(cap)

