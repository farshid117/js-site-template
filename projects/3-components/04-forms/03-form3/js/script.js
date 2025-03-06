let $ = document
const loginBtn = $.querySelector('.login-btn')
const userNameInput = $.querySelector('.username')
const passwordInput = $.querySelector('.password')
const form = $.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
})

loginBtn.addEventListener('click', () => {
    let userNameInputValue = userNameInput.value
    let passwordInputValue = passwordInput.value

    if (userNameInputValue.length < 8 || passwordInputValue.length < 12) {
        swal({
            title: 'ورودی ها معتبر نیستند',
            text: 'یوزرنیم حداقل 8 و پسورد حداقل 12 کاراکتر باید داشته باشد',
            icon: 'error',
            timer: 3000,
            button: 'اوکی'
        })
    } else {
        swal({
            title: 'لاگین با موفقیت انجام شد',
            text: 'بزودی به پنل خود منتقل خواهید شد',
            icon: 'success',
            timer: 3000,
            button: 'اوکی'
        })
    }
})