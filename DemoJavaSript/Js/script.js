{
    let a = 5;
    let b = 11;
    let c = a + b;
}
let d = Date();
alert(d);
console.log(d);
const myLove = {
    love : "Trang",
    me : "toi"
};
console.log(myLove);
function hamgiDO(){
    console.log("I'm form VietNam");
}
hamgiDO();
const doSomeThing = () =>{
    console.log("Hello");
}
setTimeout(doSomeThing, 2000);
const Students = {
    class: "IT",
    name : "Nam",
    doSomeThing: function(){
        console.log("Hi");
    }
};
console.log(Students.name)
console.log(Students['class'])
Students.doSomeThing();
//Class
//trong class sau hàm phải là dấu '=', trong object là ':'
class Student{
    constructor(name, schools_class){
        this.name = name;
        this.schools_class = this.schools_class;
    }
    getInfo = () => {
        return this.name + " " + this.schools_class;
    }
}
let myArray = [3,4,5,6,7];
const Square = (x) => {
    return x*x;
}
const modifyArray = (arr, func) =>{
    let result = [];
    for (let i = (arr.length -1); i>=0; i--){
        result.push[func(arr[i])];
    }
    console.log(result);
}
modifyArray(myArray, Square);
let foodArray = ["Milk", "Coffe", "Tea", "Honey"]
if(foodArray.includes('Meat') != true){
    foodArray.push('Meat');
    console.log(foodArray);
}
