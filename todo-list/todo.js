// Get references to elements
let uipInput = document.getElementById('uip'); // Input element
let eraserIcon = document.querySelector('.fa-eraser'); // Eraser icon
let plusIcon = document.querySelector('.fa-plus'); // Plus icon
let itemsContainer = document.getElementById('items'); // Items container

// Function to add a new todo item
function add() {
    // Get the value from the input field
    let todoText = uipInput.value;

    // Check if the input is not empty
    if (todoText !== '') {
        // Create a new todo item
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = '<i class="far fa-circle"></i><span>' + todoText + '</span>';

        // Append the new todo item to the items container
        itemsContainer.appendChild(newItem);

        
        uipInput.value = '';
    }
}


function clearitem() {
    itemsContainer.innerHTML = ''; 
}
