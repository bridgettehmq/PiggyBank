const itemInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const shoppingList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const list = [];

// The following function renders items in a todo list as <li> elements
function renderList() {
  // Clear todoList element and update todoCountSpan
  shoppingList.innerHTML = '';
  todoCountSpan.textContent = list.length;

  // Render a new li for each todo
  for (const i = 0; i < list.length; i++) {
    const todo = list[i];

    const li = document.createElement('li');
    li.textContent = todo;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Added ✔️';

    li.appendChild(button);
    shoppingList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  const storedTodos = JSON.parse(localStorage.getItem('todos'));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderList();
}

function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem('todos', JSON.stringify(list));
}

// Add submit event to form
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const todoText = itemInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === '') {
    return;
  }

  // Add new todoText to todos array, clear the input
  list.push(todoText);
  itemInput.value = '';

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderList();
});

// Add click event to todoList element
shoppingList.addEventListener('click', function (event) {
  const element = event.target;

  // Checks if element is a button
  if (element.matches('button') === true) {
    // Get its data-index value and remove the todo element from the list
    const index = element.parentElement.getAttribute('data-index');
    list.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderList();
  }
});

// Calls init to retrieve data and render it to the page on load
init();
