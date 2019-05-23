const btnCompare = document.querySelector('.btn-compare-panel');
const checkbox = document.querySelectorAll('input[type=checkbox]');

checkbox.forEach((item) => {
    item.addEventListener('click', () => {
        const checkboxChecked = document.querySelectorAll('input[type=checkbox]:checked');
        if(checkboxChecked.length == 2) {
            btnCompare.removeAttribute('disabled')
        } else {
            if (!btnCompare.hasAttribute('disabled')) {
                btnCompare.setAttribute('disabled','disabled')
            }
        }
    })
})
