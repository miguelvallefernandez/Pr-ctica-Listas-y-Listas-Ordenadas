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

    if (isFull(list)) {
        throw "List is full";
    }
    if (isNaN(elem)) {
        throw "The element is not a number";
    }
    if(isEmpty(list)){
        list[0]=elem;
    }
    else{
        var i=0;
        var aux="";
        var aux2="";
        while(list[i]<=elem){
            i++;
        }
        if(isNaN(list[i])){
            list[i]=elem;
        }
        else{
            aux=list[i];
            aux2=list[i+1];
            list[i]=elem;
            list[i+1]=aux;
            list[i+2]=aux2;
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









var list = create();

console.log("IS EMPTY: ");
try {
    console.log(isEmpty(list));
}
catch (error) {
    console.log(error);
}

console.log("ADD: ");
try{
    console.log(add(list,1));
    console.log(list);
    console.log(add(list,5));
    console.log(list);
    console.log(add(list,3));
    console.log(list);
    console.log(add(list,1));
    console.log(list);
    console.log(add(list,7));
    console.log(list);
    console.log(add(list,4));
    console.log(list);
    console.log(add(list,1));

}
catch (error){
    console.log(error);
}



console.log(list);
