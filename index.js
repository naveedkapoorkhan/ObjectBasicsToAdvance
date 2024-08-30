
const person={

    name:["naveed","kabeer"],
    age:24,
    /*function can be also written like this or bio:function(){},if you keep both
    function name function it will still work but function 2 will be call ok*/
    bio(){
        console.log(`Hi i am ${this.name["0"]}`);
    }
    ,
    introduceSelf(){
        console.log(`${this.name["0"]} ${this.name["1"]} is ${this.age} years old!`);
    },
    
    };
/*call object property by bracket notation*/
const student={
    name:"naveed",
    age:23,
};

function logProperty(StudentName){
    console.log(student[StudentName]);
}
 //logProperty("name");
 //logProperty("age");
function App(app){
    return(
        console.log(app)
    );
   
}
//App(2);
//this key word in javascript

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
//person1.introduceSelf();

//This isn't hugely useful when you are writing out object literals by hand,
// as using the object's name (person1 and person2) leads to the exact same 
//result,but it will be essential when we start using constructors to create
// more than one object from a single object definition,and that the subject
// of the next section.
//lets come to create object as much we want ok dynamically fill empty object
 function createPerson(name,age){
    let obj={};
    obj.name=name;
    obj.age=age;
    obj.introduceOk=function(){
    console.log(`hi i am ${this.name} and i am ${this.age} year old Fuck you!`);
    };
    return obj;
 }
 let Naveed=createPerson("naveed",20);
 let Kabeer=createPerson("kabeer khann kapoor",25);
 //Naveed.introduceOk();
 Kabeer.introduceOk();
  