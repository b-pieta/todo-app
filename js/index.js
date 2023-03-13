const addBtn = document.getElementById('add-button');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const trashEl = document.getElementById('fa');

let essentialsList = [];

//adding elements and rendering on the page

addBtn.addEventListener('click', function () {
    if(inputEl.value != ''){
        if (inputEl.value.length > 26) {
            alert('Input is too long! Maximum 26 characters allowed.');
            inputEl.value = '';
        } else {
            essentialsList.push(inputEl.value);
            console.log(essentialsList);
            renderItems();
            inputEl.value = '';
        }
    }
});

function renderItems() {
	let listItems = '';
	for (let i = 0; i < essentialsList.length; i++) {
		listItems += `<li><input type='checkbox'>
			${essentialsList[i]}
			<i class='fa-solid fa-trash delete-icon data-index="${i}'></i></li>`;
	}

	ulEl.innerHTML = listItems;

	//updating the data-index attribute

	const deleteIcons = document.querySelectorAll('.delete-icon');
	deleteIcons.forEach((icon, index) => {
		icon.dataset.index = index;
	});

	//deleting items

	deleteIcons.forEach((icon) => {
		icon.addEventListener('click', function () {
			const index = parseInt(icon.dataset.index);
			essentialsList.splice(index, 1);
			renderItems();
		});
	});
}
