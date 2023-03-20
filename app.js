// OBject.create

const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 20;

mary.getsMarried('Thompson');

console.log(mary.greeting());



const bob = Object.create(personPrototypes, {
    firstName: (value: 'Bob'),
    lastName: (value: 'Bobson'),
    age: {value: 40}
});

console.log(bob);

console.log(bob.greeting());