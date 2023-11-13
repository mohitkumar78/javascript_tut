
// Datatyoe Conversion

let score=33;
console.log(typeof score);

score="abc";
console.log(typeof score);

// Converting string to number

console.log(typeof Number(score) + " "+score);

let alphanumeric="abc123";
console.log(typeof alphanumeric);

// when we consvert alphanumeric to number the type of that vaiable is string but value is  NaN(Not a Number)

console.log(typeof Number(alphanumeric));
let temp=Number(alphanumeric)
console.log(temp);

/* summery when we convert into number
 "33" => 33
 "abc22"=> NaN
 true/false=> 0/1
 */
  

 // Cheking conversion with Null and undifined

 let  n=null;
 console.log(typeof n);   // type of null is object
 // reason
   /*When JavaScript was being developed, the initial version of JavaScript (known as ECMAScript, 
    the standard on which JavaScript is based) represented values with a type tag and a value.
     The type tag for an object is 0. However, null was mistakenly tagged as 0, which is the type tag for objects.
      As a result, when you use typeof null, it incorrectly returns "object".

*/
let n1=Number(n);
console.log(typeof n1 +" "+ n1);  // when we convert null to number its value is 0

let n2=undefined;
console.log(typeof n2);// type of undefined is undefined
let n3=Number(n2);
console.log(n3);  // when we convert undifined to number the value is NaN


// We also convert number to string  Boolean to number  and number to Boolean
let num=123;
let flag=true;
let flag2=0;
console.log(typeof flag);
console.log(typeof Number(flag) );
console.log(typeof Boolean(flag2));
console.log(typeof String(num));


