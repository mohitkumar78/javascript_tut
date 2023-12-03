"use strict"
// Array Creation

let arr = ['1', '3', '3', "Mohit"];

//  for each method 
arr.forEach(element => {
    console.log(element);
});

// push method  add element at the end and change the length of Original Array
arr.push("Tashu");
console.log(arr);

// shift method of Array  delete the element form the begning and change the length of original array
arr.shift();
console.log(arr);

// unshift method of Array Add the element form start and change the length of original array

arr.unshift(5);
console.log(arr);


// length function of array tells the length of arr
console.log(arr.length);

// at method of javascript give the element of array at particular index
console.log(arr.at(3));


// pop method of array pop eleemnt from last
console.log(arr.pop)


// filter map and reduce in Javascript


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 54];

// filter method in js only return when the condition is true otherwise it return empty array
let new_nums = nums.filter((item) => item > 56);
console.log(new_nums);
console.log(nums.filter((item) => item > 5));


let obj_array = [{
    name: 'mohit',
    age: 20,
    marks: 100
}, {
    name: "rohit",
    age: 21,
    marks: 90
}, {
    name: "mohit",
    age: 20,
    marks: 80
}]

let new_obj_array = obj_array.filter((item) => {
    return item.name === "mohit" && item.age === 20;
})
console.log(new_obj_array);


// map in Javascript

//map() creates a new array from calling a function for every array element.

//map() does not execute the function for empty elements.

//map() does not change the original array

let map_arr = [1, 2, 3, 4, 5, 6, 78, 9];

let new_map_arr = map_arr.map((currval, index, arr_) => {
    console.log(currval);
    console.log(index);
    console.log(arr_);
    return currval * 10;
})
console.log(new_map_arr);

// map chaning

let map_chain = map_arr.map((val) => val * 10)
    .map((val) => val + 1)
    .filter((item) => item > 20);

console.log(map_chain);

// reduce function

let reduce_arr = map_arr.reduce((acq, currval) => {
    console.log(acq);
    console.log(currval);
    return acq + currval
}, 0)