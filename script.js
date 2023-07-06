const inputs = document.querySelectorAll('input');
inputs.forEach(i => {
    if (!i.getAttribute('type').includes('submit') && !i.classList.contains('confirmation')) {
        // Add class that runs validation styling
        i.addEventListener('focus', () => {
            if (!i.classList.contains('validation')) 
                i.classList.add('validation');
        });
    }
});

let passwordCheck = () => {
    const pw = document.querySelector('.password');
    const confirm = document.querySelector('.confirmation');
    if (pw.value !== confirmation.value) {
        if (confirm.classList.contains('valid'))
            confirm.classList.remove('valid');
        confirm.classList.add('invalid');
    }
    else{
        if (confirm.classList.contains('invalid'))
            confirm.classList.remove('invalid');
        confirm.classList.add('valid');
    }
};

const confirmation = document.querySelector('.confirmation');
confirmation.addEventListener('focusout', () => {
    passwordCheck();
});

const password = document.querySelector('.password');
password.addEventListener('focusout', () => {
    passwordCheck();
});