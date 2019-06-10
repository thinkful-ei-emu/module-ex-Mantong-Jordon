'use strict';
/* global store, cuid */


const store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id){
    return store.items.find(item => item.id === id);
  }

  function addItem(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error){
      console.log(`${error.message}`);
    }
  }

  function findAndToggleChecked(id){
    let toggle = this.findById(id);
    toggle.checked = true;
  }

  function findAndUpdateName(id, newName){
    try{
      Item.validateName(newName);
      let update = this.findById(id);
      update.name = newName;
    }
    catch(error){
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id){
    let filteredItem = store.items.filter(word => word.id === id);
    store.items.splice(filteredItem, 1);
    //In console, run shoppinglist.render() after 
  }

  return {
    hideCheckedItems,
    searchTerm,
    items,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}());