"use strict";








// console.log(99.93 + 354.97)
// console.log(((99.93 * 100 + 354.97 * 100)/ 100).toFixed(2));

// let minimum = 1
// let maximum = 60;

// const zufallszahl = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(zufallszahl(minimum, maximum));


// console.log(Math)

// let a = Math.PI * Math.pow(12, 2);
// console.log(a)

// let a_gerundet = Math.round(a)
// console.log(a_gerundet)

// let a_abgerundet = Math.floor(a)
// console.log(a_abgerundet)

// let a_nachkommastellen = a.toFixed(3);
// console.log(a_nachkommastellen);

// let a_integer = parseInt(a_nachkommastellen)
// console.log(a_integer)

// let a_float = parseFloat(a_nachkommastellen);
// console.log(a_float)


// setTimeout(callback-funktion, zeitspanne[, parameter1, parameter2, ..., parameterM])

// console.log("LOS!");
// setTimeout(function() {
//     console.log("Fertig!");
// }, 2000);

// setTimeout(code-string, zeitspanne)

// console.log("Los!")
// console.log(setTimeout("console.log('Fertig!');", 2000));

// clearTimeout(1);

// setInterval(function() {
//     console.log("eine sec ist over baby")
//  }, 1000);

//  clearInterval(1);

// let d = new Date();
// console.log(d);

// let de_DE = d.toLocaleString("de-DE");
// let en_US = d.toLocaleString("en-US");
// console.log(de_DE);
// console.log(en_US);


// let de_DE_2 = d.toLocaleString("de-DE", {
//     year: "nummeric",
//     month: "long",
//     day: "nummeric",
//     weekday: "long",
//     hour: "nummeric",
//     minute: "2-digit",
//     second: "2-digit"   
// });
// console.log(de_DE_2)

// let de_DE_datum = d.toLocaleDateString("de-DE", {
//         month: "long",
//         day: "nummeric",
//         weekday: "long"
//     });
// console.log(de_DE_datum)

// let de_DE_zeit = d.toLocaleTimeString("de_DE", {
//         hour: "nummeric",
//         minute: "2-digit",
//         second: "2-digit"
//     });
// console.log(de_DE_zeit)

// let firstArray = [];
// function largestOfFour(arr) {
//     for (let i = 0; i < arr.length; i++) {
//             let iterated = arr[i];
//             let getMax = Math.max(...iterated);
//             firstArray.push(getMax); 
//         }
//          console.log(firstArray);

//     }

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])


// let d = new Date();

// console.log(Date.now());

// let e = new Date(146889831789);

// console.log(e);

// let f = new Date ("Sep 23 2003 07:52:22 GMT+0200")

// console.log(f)

// // new Date(jahr, monats-index[, tag[, stunde[, minute[, sekunde[, milisekunde]]]]];

// let g = new Date(2012, 5, 23, 15, 15, 15, 155)

// console.log(g)

// d.setFullYear(2021);
// d.setMonth(0);
// d.setDate(0);
// d.setMonth(0);
// d.setMonth(0);
// d.setMonth(0);










// let meine_map = new Map();
// meine_map.set("Test", "Wert der Eigenschaft Test");
// meine_map.set(13, "Wert der Eigenschaft 13.");
// meine_map.set([], "Wert zur Eigenschaft [].");
// meine_map.set(function() {}, "Wert der function() {}.");
// meine_map.set({}, "Wert zur Eigenschaft {}.");
// console.log(meine_map)

// let mein_set = new Set();
// mein_set.add("Test");
// mein_set.add(13);
// mein_set.add([]);
// mein_set.add(function() {});
// mein_set.add({});
// console.log(mein_set)

// console.log(meine_map.entries());
// console.log(meine_map.values());
// console.log(meine_map.keys());

// for (let wert of mein_set.values()) {
//     console.log(wert)
// }

// for (let [eigenschaft, wert] of meine_map.entries()) {
//     console.log(eigenschaft, wert)
// }

// for (let eigenschaft of meine_map.keys()) {
//     console.log(eigenschaft)
// }

// for (let wert of meine_map.values()) {
//     console.log(wert)
// }


    // for (let paar of Object.entries(mein_objekt)) {
    // console.log(paar);
    // for (let e of paar) {
    //     console.log(e);
    // }
    // }

    // for (let e of Object.keys(mein_objekt)) {
    //     console.log(e)
    // }

    // for (let w of Object.values(mein_objekt)) {
    // console.log(w)
    // }

// meine_map.forEach(function(wert, Eigenschaft, map) {
//         console.log(wert)
//         console.log(Eigenschaft)
//       //  console.log(map)
// });

// mein_set.forEach(function(wert, NULL, set) {
//         console.log(wert)
//     //  console.log(set)
// });

// for (let paar of meine_map) {
//     console.log(paar)
// }

// // [eigenschaft, wert]
// for (let wert of mein_set) {
//     console.log(wert)
// }

// let mein_set = new Set();

// mein_set.add("Test");
// mein_set.add("Test");
// mein_set.add(13);
// mein_set.add([]);
// mein_set.add([]);
// mein_set.add(function() {})
// mein_set.add(function() {})
// mein_set.add({});
// mein_set.add({});

// console.log(mein_set.has(7 + 6));
// console.log(mein_set.size);

// {} === {} = false

// console.log(mein_set)


// let meine_map = new Map();

// meine_map.set("Test", "Wert zur Eigenschaft Test");
// meine_map.set(13, "Wert zur Eigenschaft 13");
// meine_map.set([], "Wert zur Eigenschaft []");
// meine_map.set(function() {}, "Wert zur Eigenschaft Funktion")
// meine_map.set({}, "Wert zur Eigenschaft {}")

// console.log(meine_map.get("Test"));
// console.log(meine_map.get(13));
// console.log(meine_map.get([]));
// console.log(meine_map.get(function() {}));
// console.log(meine_map.get({}));

// console.log(meine_map.has(13));

// meine_map.delete("Test");
// // meine_map.clear();

// console.log(meine_map.size);


// let zahlen = [12, 23, 34, 77, 2, 32, 9, 44, 11, 2];

// let y = zahlen.sort(function(a, b) {
//     return b - a;
// });

// console.log(y)

// let worte = ["Zahl", "Wahnsinn", "Mangel"]

// let z = worte.sort();

// console.log(z)



// let zahlen = [12, 23, 34, 77, 2, 32, 9, 44, 11, 2];

// let x = zahlen.filter(function(e) {
//     if (e <= 20) {  
//         return true;
//     } else { 
//         return false;
//     }
// });

// console.log(x)


// let mein_objekt = {
//     name: "Mustermann",
//     vorname: "Max",
//     alter: 25
// };

//     for (let paar of Object.entries(mein_objekt)) {
//     console.log(paar);
//     for (let e of paar) {
//         console.log(e);
//     }
//     }

//     for (let e of Object.keys(mein_objekt)) {
//         console.log(e)
//     }

//     for (let w of Object.values(mein_objekt)) {
//     console.log(w)
//     }