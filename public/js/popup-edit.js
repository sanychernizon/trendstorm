var popup = document.querySelector('#popup');
var btnEditPanel = document.querySelector('#btn-edit-panel');
var btnClosePopup = document.querySelector('#close-popup');

let btnClicked = false;

function showPopup() {
    if(btnClicked === false) {
        popup.style.display = 'flex';
        btnClicked = true;
    }
}

function hidePopup() {
    if(btnClicked === true) {
        popup.style.display = 'none';
        btnClicked = false;
    }
}

btnEditPanel.addEventListener('click', showPopup);
btnClosePopup.addEventListener('click', hidePopup);