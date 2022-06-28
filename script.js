

const addBtn = document.querySelector('#btn-add');
const note = document.querySelector('.input-text');
const list = document.querySelector('.list');
const notesDone = document.querySelector('.notesDone');



function addNote () {
    if (note.value !== '') {
        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('img');
        const editBtn = document.createElement('img');
        const doneBtn = document.createElement('img');

        listItem.style.display = 'block';
        listItem.classList.add('text');
        deleteBtn.src = '../images/delete.png'
        deleteBtn.classList.add('icon');
        editBtn.src = '../images/edit.png';
        editBtn.classList.add('icon');
        doneBtn.src = '../images/done.png';
        doneBtn.classList.add('icon')

        listItem.textContent = note.value;

        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        listItem.insertBefore(doneBtn, listItem.firstChild);

        note.value = '';

        editBtn.addEventListener('click', () => {
            note.value = listItem.textContent;
            list.removeChild(listItem);
            note.focus();
        })
        doneBtn.addEventListener('click', () => {
            listItem.removeChild(editBtn);
            listItem.removeChild(doneBtn);
            notesDone.appendChild(listItem);
            list.removeChild(listItem);

        })
        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem)
        })
        deleteBtn.addEventListener('click', () => {
            notesDone.removeChild(listItem)
        })
    }
}

addBtn.addEventListener('click', addNote);

note.addEventListener('keydown', (event) => {
    event.key === 'Enter' ? addNote() : false;
})



