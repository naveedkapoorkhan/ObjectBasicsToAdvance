
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
 logProperty("name");
 logProperty("age");
