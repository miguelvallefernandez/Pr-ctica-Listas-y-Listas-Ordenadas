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
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    if (isFull(list)) {
        throw "List is full";
    }
    list.push(elem);
    return size(list);
}

function addAt(list, elem, index) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    if (isFull(list)) {
        throw "List is full";
    }
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
    }
    list.splice(index, 0, elem);
}


function get(list, index) {
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
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


function set(list, elem, index) {
    var deleleted = list[index];
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    if (index < 0 || index > size(list)) {
        throw "Out of the limit";
    }
    list.splice(index, 1, elem);
    return deleleted;
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


    console.log("ADD:");
    try {
        add(list, 1);
        add(list, 2);
        add(list, 3);
        add(list, 4);
        add(list, 5);
    }
    catch (error) {
        console.log(error);
    }


    console.log(list);


    console.log("ADD AT: ");
    try {
        addAt(list, 8, 2);
    }
    catch (error) {
        console.log(error);
    }

    console.log(list);

    console.log("GET:");
    try {
        console.log(get(list, 2));
    }
    catch (error) {
        console.log(error);
    }

    console.log("TO STRING: ")
    try {
        console.log(toString(list));
    }
    catch (error) {
        console.log(error);
    }

    console.log("INDEXOF: ");
    try {
        console.log(indexOf(list, 8));
    }
    catch (error) {
        console.log(error);
    }

    console.log("LASTINDEXOF: ");
    try {
        console.log(lastIndexOf(list, 8));
    }
    catch (error) {
        console.log(error);
    }

    console.log("REMOVE: ");
    try {
        console.log(remove(list, 2));
    }
    catch (error) {
        console.log(error);
    }

    console.log("REMOVE ELEMENT: ");
    try {
        console.log(removeElement(list, 2));
    }
    catch (error) {
        console.log(error);
    }

    console.log("SET: ");
    try {
        console.log(set(list, 8, 1));
    }
    catch (error) {
        console.log(error);
    }
    console.log(list);

}

test();