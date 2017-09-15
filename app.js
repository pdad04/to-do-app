function onReady() {
  const addToDoForm = document.getElementById('addTodoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input for the checkbox and set it's type
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    // create a delete button.
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn-delete';

    // set the title
    newLi.textContent = title;

    // attach it to the ul
    toDoList.appendChild(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li
    newLi.appendChild(deleteButton);


    // empty the input
    newToDoText.value = '';
  });

  toDoList.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if(clickedElement.classList.contains('btn-delete')) {
      toDoList.removeChild(clickedElement.parentElement);
    }
  })
}

window.onload = function() {
  onReady();
};
