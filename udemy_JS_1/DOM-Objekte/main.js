"use strict";

// let string_1 = "<li id='mein-listenelement'><a id='mein-ankerelement' href='#'>Element</a></li>"
// li.innerHTML += string_1;
// let li = document.querySelector("#navigation > ul")

let li = document.createElement("li");
li.setAttribute("id", "mein-listenelement")

let a = document.createElement("a")
a.setAttribute("id", "mein-ankerelement");
a.setAttribute("href", "#");

let textnode = document.createTextNode("Element");

a.appendChild(textnode);
li.appendChild(a);

let liste = document.querySelector("#navigation > ul");
liste.insertAdjacentElement("afterbegin", li);
////////////////////////////////////////////////////////////////

let dom_string = "<li id='mein-listenelement'><a id='mein-ankerelement' href='#'>Element</a></li>"

liste.insertAdjacentHTML("beforeend", dom_string)

let text = "Lorem ipsum dolor";

liste.insertAdjacentText("beforebegin", text)














//-------------------------------------
// .createelement .setattribute .createtextNode .appendchild
// appendchild -> immer letztes kindelement eines elternelement einfügt


// let jumbo = document.querySelector(".jumbotron")
// console.log(jumbo)

// console.log(jumbo.innerHTML)
// console.log(jumbo.innerText)
// console.log(jumbo.textContent)

// let string_1 = "";
// let string_2 = "<header><h2>Lorem ipsum dolor sit amet</h2></header>"
//  let string_3 = "<p>Lorem ipsum dolor sit amet</p>"
// let string_4 = "Lorem ipsum dolor sit amet"


// jumbo.innerHTML = string_1;
// jumbo.innerHTML = string_2;
// jumbo.innerHTML += string_3


// jump.innerText = string_1;
// jumbo.innerText = string_2;
// jumbo.innerText += string_3;

// jumbo.textContent = string_1;
// jumbo.textContent = string_2;
// jumbo.textContent += string_3

// let div = document.createElement("div")
// div.setAttribute("id", "meine_id");
// div.setAttribute("class", "meine_klasse");
// let text = document.createTextNode("Lorem ipsum dolor sit amet.");

// // appendChild()-Methode: fügt ein Element als letzes Kindelement in ein Elternelement ein
// // Synatax: elternelement.appendchild(kindeelement)
// // exisiert das Kindleement im Elternelement bereits, wird es entefernt und stattdessen als 
// // letztes Kindlemenent wieder angefügt

// div.appendChild(text);

// let jumbo = document.querySelector(".jumbotron > section")
// jumbo.appendChild(div)

// // erstes Listenelement in ul in Navigation seleketiert
// let li = document.querySelector("#navigation > ul > li")

// // ul in Navigation seleketiert
// let ul = document.querySelector("#navigation > ul")
// // erstes Listenelement der ul erneut in ul eingefügt (allerdings
// // durch appendChild()- als letzes Kindlelement)
// ul.appendChild(li)


// let ul = document.querySelector("#navigation > ul")

// //kind-elemente
// let child_nodes = ul.childNodes; // gibt uns alle Kind elemente einschließlich textnoten und kommentarnoten
// let children = ul.children;  
// let first_child = ul.firstChild 
// let last_child = ul.lastChild 
// let first_element_child = ul.firstElementChild; // exlusive Text u. Kommentarknoten
// let last_element_child = ul.lastElementChild;

// // geschwister-elemente
// let next_sibling = ul.nextSibling; // gibt uns das nächste geschwisterelement inkl. Text u. Kommentarknoten
// let previous_sibling = ul.previousSibling;
// let next_element_sibling = ul.firstElementChild.nextElementSibling; // explusive text u. kommentar
// let previous_element_sibling = ul.lastElementChild.previousElementSibling;

// // eletern-element

// let parent_element = ul.parentElement;

// // allgemeines navigieren

// let anker = ul.querySelectorAll("li > a")


// console.log(child_nodes)
// console.log(children)
// console.log(first_child)
// console.log(last_child)
// console.log(first_element_child)
// console.log(last_element_child)
// console.log(next_sibling)
// console.log(previous_sibling)
// console.log(next_element_sibling)
// console.log(previous_element_sibling)
// console.log(parent_element)


// let html_collection = document.getElementsByClassName("jumbotron")
// let html_collection_2 = document.getElementsByTagName("li");
// console.log(html_collection_2)

// // for loop
// for (let i = 0; i < html_collection.length; i++) {
//     console.log(html_collection[i])
// }
// for (let i = 0; i < html_collection_2.length; i++) {
//     console.log(html_collection_2[i])
// }

// //for-of loop
// for (let e of html_collection) {
//     console.log(e)
// }

// for (let e of html_collection_2) {
//     console.log(e)
// }

// //Node-lists

// let node_list = document.querySelectorAll("p")
// console.log(node_list)

// for (let i = 0; i < node_list.length; i++) {
//     console.log(node_list[i])
// }

// for (let e of node_list) {
//     console.log(e)
// }

// node_list.forEach(function(e) {
//     console.log(e);
// });


// let qs_1 = document.querySelector("body > #navigation > ul")
// console.log(qs_1)

// let qs_2 = document.querySelector(".jumbotron");
// console.log(qs_2)

// let qs_3 = document.querySelector(".test");
// console.log(qs_3)

// let qsa_1 = document.querySelectorAll("body > #navigation > ul > li > a")
// console.log(qsa_1)

// let el_by_id_1 = document.getElementById("navigation");
// console.log(el_by_id_1)

// let el_by_classname = document.getElementsByClassName("jumbtron");
// console.log(el_by_classname)
// console.log(el_by_classname.length == 0)


// // Element nach Element-Namn (bzw. Tag-Namen) auswählen
// let els_by_tag_name = document.getElementsByTagName("p");
// console.log(els_by_tag_name)

// let els_by_tag_name2 = document.getElementsByTagName("test");
// console.log(els_by_tag_name2)
// console.log(els_by_tag_name2.length == 0)

