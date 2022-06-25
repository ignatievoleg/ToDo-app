

const addBtn = document.querySelector('#btn-add');
const note = document.querySelector('.input-text');
const list = document.querySelector('.list');



function addNote () {
    if (note.value !== '') {
        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const completedNote = document.createElement('button');

        listItem.style.display = 'block';
        deleteBtn.textContent = 'delete';
        editBtn.textContent = 'edit';
        completedNote.textContent = 'done';

        listItem.textContent = note.value;

        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        listItem.insertBefore(completedNote, listItem.firstChild);

        note.value = '';

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem)
        })
        editBtn.addEventListener('click', () => {
            note.value = listItem.textContent;
        })
    }
}

addBtn.addEventListener('click', addNote);

note.addEventListener('keydown', (event) => {
    event.key === 'Enter' ? addNote() : false;
})

