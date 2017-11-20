"use strict";

var max_length = 6;

function create() {   //Crea una lista de tamaño "max_length" y la rellena de NaN
    var list = [];
    return list;
}

function isEmpty(list) {
    var empty = false;
    if (isNaN(list[0])) {
        empty = true;
    }
    return empty;
}

function isFull(list) {
    var full = false;
    if (!isNaN(list[max_length - 1])) {
        full = true;
    }
    return full;
}

function size(list) {
    var length = 0;
    for (var i = 0; i < max_length; i++) {
        if (!isNaN(list[i])) {
            length++;
        }
    }
    return length;
}


function add(list, elem) {

    if (isFull(list)) {
        throw "List is full";
    }
    if (isNaN(elem)) {
        throw "The element is not a number";
    }
    list.push(elem);
    list.sort();
    return size(list);
}


function get(list, index) {
    if (index < 0 || index > size(list)) {
        throw "Index out of the limit";
    }
    return list[index];
}

function toString(list) {
    return list.toString();
}


function indexOf(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    return list.indexOf(elem);
}

function lastIndexOf(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    return list.lastIndexOf(elem);
}

function capacity(list) {
    return max_length;
}

function clear(list) {
    for (var i = 0; i < size(list); i++) {
        list[i] = NaN;
    }
}

function firstElement(list) {
    if (isEmpty(list)) {
        throw "List is empty";
    }
    else {
        return list[0];
    }

}

function lastElement(list) {
    if (isEmpty(list)) {
        throw "List is empty";
    }
    else {
        return list[size(list) - 1];
    }
}

function remove(list, index) {
    var deleted = list[index];
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
    }
    list.splice(index, 1);
    return deleted;
}

function removeElement(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
        return false;
    }
    remove(list, indexOf(list, elem));
    return true;
}


function test() {
    var list = create();

    console.log("IS EMPTY: ");
    try {
        console.log(isEmpty(list));
    }
    catch (error) {
        console.log(error);
    }

    console.log("ADD: ");
    try {
        console.log(add(list, 1));
        console.log(list);
        console.log(add(list, 5));
        console.log(list);
        console.log(add(list, 3));
        console.log(list);
        console.log(add(list, 1));
        console.log(list);
        console.log(add(list, 7));
        console.log(list);
        console.log(add(list, 4));
        console.log(list);
        console.log(add(list, 1));

    }
    catch (error) {
        console.log(error);
    }

    console.log("TO STRING: ");
    console.log(toString(list));

    console.log("INDEXOF:");
    try {
        console.log(indexOf(list, 2));
        console.log(indexOf(list, 7));
    }
    catch (error) {
        console.log(error);
    }

    console.log("LASTINDEXOF:");
    try {
        console.log(lastIndexOf(list, 3));
    }
    catch (error) {
        console.log(error);
    }

    console.log("FIRST ELEMENT & LAST ELEMENT:");
    try {
        console.log(lastElement(list));
        console.log(firstElement(list));
    }
    catch (error) {
        console.log(error);
    }
    console.log("REMOVE: ");

    try {
        console.log(remove(list, 1));
    }
    catch (error) {
        console.log(error);
    }
    console.log("REMOVE ELEMENT: ");


    try {
        console.log(removeElement(list, 3));
    }
    catch (error) {
        console.log(error);
    }
    console.log(list);

}

var list;

function myFunctionCreate() {
    list = create();
}

function myFunctionAdd(){
    var elem = document.getElementById("introduce").value;
    add(list,elem);
    result.innerHTML = list;
}

function myFunctionRemove(){
    var elem = document.getElementById("introduce").value;
    removeElement(list,elem);
    result.innerHTML = list;
}

function myFunctionIndexOf(){
    var elem = document.getElementById("introduce").value;
    result.innerHTML = indexOf(list,elem);
}

function myFunctionLastIndexOf(){
    var elem = document.getElementById("introduce").value;
    result.innerHTML = lastIndexOf(list,elem);
}
