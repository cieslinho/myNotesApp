const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const deleteAllBtn = document.querySelector('.clear')
const cancelBtn = document.querySelector('.cancel')
const closeNoteBtn = document.getElementsByClassName('.close-note')

const notesBoxes = document.querySelector('.notes-boxes')
const popup = document.querySelector('.popup')

const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardID = 0

const showPopup = () => {
	popup.style.display = 'block'
}

const closePopup = () => {
	popup.style.display = 'none'
	error.style.visibility = 'hidden'
	textarea.value = ''
	category.selectedIndex = 0
}

const addNote = () => {
	if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
		createNote()
		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}
const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('notes-box')
	newNote.setAttribute('id', cardID)
	newNote.innerHTML = `
    <div class="top">
    <p class="note-title">${selectedValue}</p>
    <i class="close-note fa-solid fa-xmark" onclick="deleteNote(${cardID})"></i>
</div>
<div class="bottom">
    <p class="note-text">${textarea.value}</p>
</div>
    `
	notesBoxes.appendChild(newNote)
	cardID++
	textarea.value = ''
	category.selectedIndex = 0
	popup.style.display = 'none'
	checkColor(newNote)
}

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
}

const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)'
			break
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)'
			break
	}
}

const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	notesBoxes.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
	notesBoxes.textContent = ''
}

addBtn.addEventListener('click', showPopup)
saveBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', closePopup)
deleteAllBtn.addEventListener('click', deleteAllNotes)
