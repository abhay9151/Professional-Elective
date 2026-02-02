// const a=10;
// console.log(a);
// a=20;

// console.log(a);
// let a=20;

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let num = 10;
// console.log(typeof num);//number
// let str='Hello';
// console.log(typeof str);// string
// let emp=null;
// console.log(typeof emp);//object
// let isok=true;
// console.log(typeof isok);//boolen

// now we will learn about he function.
function add(a, b) {
  return a + b;
}

// let result = add(5, 10);
// console.log(result);

// let arr number[] ={1,2,3,4,5};
// for(const i=0;i<arr.length;i++){
// if(a%2==0){
//   console.log("Even");
// }
// else{
//   console.log("Odd")
// }
// }
// add the 3 to all the element in the array.
// let arr = [1, 2, 3, 4];
// arr.forEach((val, i) => {
//   arr[i] = val + 3;
// });
// console.log(arr);
// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] += 3;
// }
// console.log(arr); 

// const color=["Red","Black","White"];
// // color.forEach((i,a)=>console.log(i,a));//(value,index)


// for(const i in color){
//   console.log(i,color[i]);
// }

// const user={name:"Rabins",age:25,Hobby:"Coding"};
// for(const index in user){
//   console.log(index,user[index]);
// }
// If you have to iterate in the array the use for of.
// for(const index in color){
//   console.log(index,user[index]);
// }
// if you are using the for in you will iterate in indexes and if you are using for OF then you are iterating in the indexes.

function greet(name){
  console.log("Hello" + ' ' + name);
  console.log(`Hello ${name}`);
}
greet("Abhay");

// function.
const factorial=function(n)// anomonous function.
{
  if(n==0 || n==1) return 1;
  else return n*factorial(n-1);
}
console.log(factorial(5));
