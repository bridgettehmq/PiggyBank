const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

// The following function renders items in a todo list as <li> elements
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = '';
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (const i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.textContent = todo;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
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
  renderTodos();
}

function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Add submit event to form
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === '') {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = '';

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// Add click event to todoList element
todoList.addEventListener('click', function (event) {
  const element = event.target;

  // Checks if element is a button
  if (element.matches('button') === true) {
    // Get its data-index value and remove the todo element from the list
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

// Calls init to retrieve data and render it to the page on load
init();
