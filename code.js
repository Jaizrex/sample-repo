// const dog = {
//     name: 'max',
//     breed: 'dachshund',
//     age: 5,
//     weightInPounds: 12,
//     eat: function () {
//         console.log('chomp!');
        
//     },
//     bark(){
//         console.log('woof!');
        
//     }
// }

// const anotherDog = {
//     name: 'marley',
//     breed: 'chocolate Lab',
//     age: 3,
//     weightInPounds: 60,
//     eat: function () {
//         console.log('chomp!');
        
//     },
//     bark(){
//         console.log('woof!');
        
//     }
// }

function getDog(name, breed, age, weightInPounds) {
    return {
        name: name,
        breed: breed,
        age: age,
        weightInPounds,
        eat(){
            console.log('chomp!');
        },
        bark(){
            console.log('woof!');
            
        }
    }
    
}

// const anotherDog = getDog('marley', 'chocolate Lab', 3, 60)
// console.log(anotherDog);

function Dog(name, breed, age, weightInPounds) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function () {
        console.log('chomp!');
        
    }
    this.bark = function(){
        console.log('woof!');
        
    }
}

const anotherDog = new Dog ('marley', 'Lab', 3, 60 );
console.log(anotherDog);
