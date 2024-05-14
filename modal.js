let myButton = document.querySelector('#myBtn');
let modalContent = document.querySelector('.modal-content');
let backdrop = document.querySelector('.backdrop');
let closeButton = document.querySelector('#closeBtn')

myButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal)
document.addEventListener('click', function(element) {
    if (element.target === backdrop) {
        closeModal();
    }
});
document.addEventListener('keydown', function(key) {
    if(key.key === 'Escape') {
        closeModal();
    }
});


function openModal () {
    console.log("Open modal");
    backdrop.style.display = 'block';
}

function closeModal () {
    console.log("Close modal");
    backdrop.style.display = 'none';
}

function escapeModal () {
    console.log("Close modal");
    backdrop.style.display = 'none';
}