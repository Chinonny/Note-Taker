
//select the input and buttons
const noteInput = document.getElementById('input');
const submitNote = document.getElementById('addBtn');
const deleteBtn = document.getElementById('delAll');
const log = document.getElementById('log');

  //add event listeners to them
submitNote.addEventListener('click', addedNote);
deleteBtn.addEventListener('click', deleteAll);
noteInput.addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addedNote(e) : null)
});

//create the addedNote function
function addedNote(e) {
    e.preventDefault()

    //grab the log div
const noteLog = document.querySelector('.log');

    //create new p tag and delete button
const newPTag = document.createElement('p');
const delBtn = document.createElement('button');
    
delBtn.innerHTML = 'x';
delBtn.style.float = 'right';

if(noteInput.value === '') {
    alert('You must add note');
} else {
    newPTag.textContent = input.value;
    input.value = '';
    noteLog.appendChild(newPTag);
    newPTag.appendChild(delBtn);
}

delBtn.addEventListener('click', function() {
    const parent = this.parentNode;
    parent.remove();
});

}

//create the deletebtn function
function deleteAll() {
    const newPTags = document.querySelectorAll('p');
    const confirmation = confirm('Delete All Items?');
    if(confirmation === true) {
        for(let i = 0; i < newPTags.length; i++) {
            newPTags[i].remove();
        }
    }


}



