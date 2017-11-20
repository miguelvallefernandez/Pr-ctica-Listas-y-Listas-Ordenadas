"use strict";

var max_length = 6;

function create() {   //Crea una lista de tamaño "max_length" y la rellena de NaN
    var list = [];
    for (var i = 0; i < max_length; i++) {
        list[i] = NaN;
    }
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

    if (!isFull(list)) {
        if (isNaN(elem)) {
            throw "The element is not a number";
        }
        else {
            list[size(list)] = elem;
        }

    }
    else {
        throw "List is full";
    }
    return size(list);
}


function addAt(list, elem, index) {
    var aux1 = elem;
    var aux2 = 0;
    if (isNaN(elem)) {
        throw "The element is not a number";
    }
    else {
        if (!isFull(list)) {

            while (index <= size(list)) {
                aux2 = list[index];
                list[index] = aux1;
                aux1 = aux2;
                index++;
            }

        }
        else {
            throw "List is full";
        }

    }
    return size(list);
}


function get(list, index) {
    if (index < 0 || index > size(list)) {
        throw "Index out of the limit";
    }
    return list[index];
}

function toString(list) {
    var text = "";
    for (var i = 0; i < size(list); i++) {
        if (i < size(list) - 1) {
            text += list[i] + "-";
        }
        else {
            text += list[i];
        }

    }
    return text;
}

function IndexOf(list, elem) {
    var find = -1;
    if (isNaN(elem)) {
        throw "Element ins not a number"
    }
    else {

        for (var i = 0; i < size(list); i++) {
            if (list[i] == elem) {
                find = i;
            }
        }
    }

    return find;
}

function LastIndexOf(list, elem) {
    var find = -1;
    if (isNaN(elem)) {
        throw "Element ins not a number"
    }
    else {

        for (var i = size(list); i > 0; i--) {
            if (list[i] == elem) {
                find = i;
            }
        }
    }

    return find;
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
    if (index < 0 || index > size(list)) {
        throw "Index out of the limit";
    }
    else {
        list[index] = NaN;

        while (index < size(list)) {
            list[index] = list[index + 1];
            index++;
        }

    }

    return size(list);
}

function removeElement(list, elem) {
    if (isNaN(elem)) {
        throw "Element is not a number";
    }
    else {
        for (var i = 0; i < size(list); i++) {
            if (list[i] == elem) {
                list[i] = NaN;
                while (i < size(list)) {
                    list[i] = list[i + 1];
                    i++;
                }
            }
        }
    }
    return size(list);
}

function set(list, elem, index) {
    if (index < 0 || index > size(list)) {
        throw "Index out of the limit";
    }
    else {
        if(isNaN(elem)){
            throw "Is not a number";
        }
        else{
            list[index] = elem;
            return list;
        }

    }
}


function test() {

    //CREATE FUNCTION
    var list = create();


    //FUNCTION ADD
    console.log("ADD:");
    try {
        console.log(add(list, 1));
        console.log(add(list, 2));
        console.log(add(list, 3));
        console.log(add(list, 4));
        console.log(add(list, "ee"));
    }
    catch (error) {
        console.log(error);
    }

    //FUNCTION ADDAT
    console.log("ADDAT:");
    try {
        console.log(addAt(list, 7, 2));
        console.log(addAt(list, "ee", 2));
    }
    catch (error) {
        console.log(error);
    }

    //TRY LIST FULL
    console.log("ADD (Full List):");
    try {
        console.log(add(list, 8));
        console.log(add(list, 2));
    }
    catch (error) {
        console.log(error);
    }

    //FUNCTION GET
    console.log("GET:");
    try {
        console.log(get(list, 2));
        console.log(get(list, 8));
    }
    catch (error) {
        console.log(error);
    }


    //FUNCTION INDEXOF
    console.log("INDEXOF:");
    try {
        console.log(IndexOf(list, 2));
        console.log(IndexOf(list, "ee"));
    }
    catch (error) {
        console.log(error);
    }


    //FUNCTION LASTINDEXOF
    console.log("LASTINDEXOF:");
    try {
        console.log(LastIndexOf(list, 2));
        console.log(LastIndexOf(list, "ee"));
    }
    catch (error) {
        console.log(error);
    }


    //FIRST ELEMENT & LAST ELEMENT
    console.log("FIRST ELEMENT & LAST ELEMENT:");
    try {
        console.log(lastElement(list));
        console.log(firstElement(list));
    }
    catch (error) {
        console.log(error);
    }

    //REMOVE
    console.log("REMOVE: ");
    try {
        console.log(remove(list, 3));
        console.log(remove(list, 10));
    }
    catch (error) {
        console.log(error);
    }

    //REMOVE ELEMENT
    console.log("REMOVE ELEMENT: ");
    try {
        console.log(removeElement(list, 7));
    }
    catch (error) {
        console.log(error);
    }

    //SET
    console.log("SET: ");
    try {
        console.log(set(list, 10,2));
    }
    catch (error) {
        console.log(error);
    }

}

var list;

function myFunctionCreate() {
    list = create();
    result.innerHTML = list;
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
    result.innerHTML = IndexOf(list,elem);
}

function myFunctionLastIndexOf(){
    var elem = document.getElementById("introduce").value;
    result.innerHTML = LastIndexOf(list,elem);
}