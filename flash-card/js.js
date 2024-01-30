// Function to add a new flash card
function addCard() {
    var question = document.getElementById('q').value.trim();
    var answer = document.getElementById('a').value.trim();

    if (question === '' || answer === '') {
        alert('Please fill out both question and answer fields.');
        return;
    }
    

    createFlashCard(question, answer);
    clearInputFields();
}

// Function to delete a single flash card
function carddelete() {
    var showcardDiv = document.querySelector('.showcard');
    if (showcardDiv.children.length > 0) {
        showcardDiv.removeChild(showcardDiv.lastChild);
    }
}

// Function to delete all flash cards
function alldelete() {
    var showcardDiv = document.querySelector('.showcard');
    while (showcardDiv.firstChild) {
        showcardDiv.removeChild(showcardDiv.firstChild);
    }
}

// Function to create a flash card
function createFlashCard(question, answer) {
    // Create card container
    var cardContainer = document.createElement('div');
    cardContainer.classList.add('flash-card');

    // Create question element
    var questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = "qustion : " + question;

    // Create answer element (initially hidden)
    var answerElement = document.createElement('div');
    answerElement.classList.add('answer');
    answerElement.textContent =  "answe: " +answer;
    answerElement.style.display = 'none'; // Initially hide the answer

    // Toggle answer visibility on question click
    questionElement.addEventListener('click', function() {
        if (answerElement.style.display === 'none') {
            answerElement.style.display = 'block';
        } else {
            answerElement.style.display = 'none';
        }
    });

    // Append question and answer to card container
    cardContainer.appendChild(questionElement);
    cardContainer.appendChild(answerElement);

    // Append card container to the showcard div
    var showcardDiv = document.querySelector('.showcard');
    showcardDiv.appendChild(cardContainer);
}

// Function to clear input fields after adding a card
function clearInputFields() {
    document.getElementById('q').value = '';
    document.getElementById('a').value = '';
}
