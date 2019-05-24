const btnCompare = document.querySelector('.btn-compare-panel-inactive');
const checkbox = document.querySelectorAll('input[type=checkbox]');

checkbox.forEach((item) => {
    item.addEventListener('click', () => {
        const checkboxChecked = document.querySelectorAll('input[type=checkbox]:checked');
        if(checkboxChecked.length == 2) {
            btnCompare.removeAttribute('disabled');
            btnCompare.className = 'btn-compare-panel';
        } else {
            if (!btnCompare.hasAttribute('disabled')) {
                btnCompare.setAttribute('disabled','disabled');
                btnCompare.className = 'btn-compare-panel';
            }
            btnCompare.className = 'btn-compare-panel-inactive';
        }
    })
})
