// function callMe(){
//     let promise = new Promise((resolve, reject)=> {
//         if(true){
//             resolve("resolve")
//         }else{
//            reject("rejected");
//         }
//     })
// }

// callMe()
// .then((result)=>{
//     console.log("result")
// })
// .catch((err)=>{
//     console.log(err)
// })

// const callMe = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("Resolved")
//     }else{
//         reject("Rejected")
//     }
// })

// callMe
// .then(result=>{
//     console.log(result)
// })
// .catch(err=>{
//     console.log(err)
// })

// function calculateSalary(job) {
//   let income = 5;

//   if (job) {
//     let income = 50;
//   }
//   {
//     let income = 500;
//     {
//       let income = 5000;
//     }
//   }
//   return income;
// }
// console.log(calculateSalary());

"use strict";

var i = 1;
function x(){
  setTimeout(function(){
    console.log(i)
  }, 1000);
}

x();