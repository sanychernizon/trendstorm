var popup = document.querySelector('#popup');
var btnAddPanel = document.querySelector('#btn-add-panel');
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

btnAddPanel.addEventListener('click', showPopup);
btnClosePopup.addEventListener('click', hidePopup);