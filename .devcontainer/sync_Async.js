// sync ka matlb ek k baad dusra hoga jb tk ek command complete na ho dusra suru na hoga
// async matlb saare kaam ek sath shuru krdo ,jiska answer pahle aajaya uska jwaab dedenaa
// kaise pata chalta hai ki tum sync code likh rahe ho ya async ?

// when we use these things in our code then it is async
/*
 1.settimeout
 2.setinterval
 3.promises
 4.fetch
 5.httpRequest
 */
// example of sync
console.log('hey');
console.log('hey1');
console.log("hey2");

// async code ka main motive hota hai ki un cases mein jinmein hume nahi pata hota code ka answer kb aaya ga

// example of async javascript

setTimeout(function(){
    console.log("hey3")
},3000);
console.log('hey4');