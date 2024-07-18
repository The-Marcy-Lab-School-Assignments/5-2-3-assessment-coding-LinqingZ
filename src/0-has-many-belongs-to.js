const { getId } = require("./utils");

class ToDoItem {
  static #ToDoItemDict = [];
  constructor(description, priorityLevel, isDone=false, dueDate=null) {
    this.id = getId();
    this.description = description
    this.priorityLevel = priorityLevel
    this.isDone = isDone
    this.dueDate = dueDate
  }
  getItems(){
    return [...ToDoItem.#ToDoItemDict];
  }
}

class ToDoList {
  #itemList = []
  static #ToDoListDict = [];
  constructor(name, dueDate=null) {
    this.id = getId();
    this.name = name
    this.dueDate = dueDate
    ToDoList.#ToDoListDict.push(this)
  }
  static list() {
    return [...ToDoList.#ToDoListDict];
  }
  createItem(description, priorityLevel){
    const addedItem = new ToDoItem(description, priorityLevel);
    this.#itemList.push(addedItem)
    return addedItem;
  }

  getItems(){
    return [...this.#itemList];
  }

  
  getCompletedCount(){
    return this.#itemList.filter((item) => item.isDone === true).length
  }
  static findBy(id){
    return ToDoList.#ToDoListDict.find((item)=>item.id === id)
  }

  removeItem(id) {
    this.#itemList.splice(this.#itemList.findIndex((item) => item.id === id), 1);
  }
 
}

module.exports = {
  ToDoItem,
  ToDoList
};