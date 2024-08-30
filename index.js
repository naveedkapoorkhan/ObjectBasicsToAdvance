
const person={

    name:["naveed","kabeer"],
    age:24,
    function(){
        console.log(`Hi i am ${this.name["0"]}`);
    }
    ,
    function(){
        console.log(`${this.name["0"]} ${this.name["1"]} is ${this.age} years old!`);
    },
    
    
};


let x=person["age"]=23;
console.log(x);
