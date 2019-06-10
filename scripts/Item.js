'use strict';
/* global store, cuid */


const Item = (function() {
  return {
    validateName(name){
      if (!name){
        throw TypeError("Name does not exist!");
      } 
    },
    
     create(name){
      return {
        id: cuid(),
        name,
        checked: false,
      };
    },
  };
}());

