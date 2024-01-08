document.addEventListener("DOMContentLoaded", () => {
  // your code here

const form = document.querySelector('#create-task-form');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const toDoListValue = document.querySelector('#new-task-description').value;
// console.log();
handelTodoList(toDoListValue);

})
});

/* # handelTodoList() description 
    Handling addition and deletion of todo list items.
*/
function handelTodoList(todoItemValue){
// ## Addition of todo items.
// Get todo list area
const todoList =  document.querySelector("#tasks");
// create elements to be added on the to do list area
const todoItem = document.createElement('p');
// assign user input value to element created.
todoItem.textContent = `${todoItemValue}  `;
// create delete btn
const deleteBtn = document.createElement('button');
// assign value to delete btn
deleteBtn.textContent = 'X';
// append delete button to todo list item
todoItem.appendChild(deleteBtn);
// append items to be added to todo list area
todoList.appendChild(todoItem);
// ## Deletion of todo list item 
// add delete f(x) to delete btn
deleteBtn.addEventListener('click', removeItem);


}

/* # removeItem() description 
    removes parent node of item called upon 
*/

function removeItem (e){
e.target.parentNode.remove();
}