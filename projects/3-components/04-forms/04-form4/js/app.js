let $ = document
const usernameInput = $.querySelector('#username')
const passwordInput = $.querySelector('#password')
const loginBtn = $.querySelector('#login-btn')
const form = $.querySelector('form')

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

usernameInput.addEventListener('blur', () => {
    if (usernameInput.value.length < 12) {
        toast.fire({
            title: 'یوزرنیم حداقل باید 12 کاراکتر داشته باشد',
            icon: 'error'
        })
    }
})

passwordInput.addEventListener('blur', () => {
    if (passwordInput.value.length < 8) {
        toast.fire({
            title: 'پسورد حداقل باید 8 کاراکتر داشته باشد',
            icon: 'error'
        })
    }
})

form.addEventListener('submit', event => {
    event.preventDefault()
    if (usernameInput.value.length < 12 || passwordInput.value.length < 8) {
        toast.fire({
            title: 'مقادیر ورودی معتبر نمی باشند',
            icon: 'error'
        })
    } else {
        toast.fire({
            title: 'لاگین با موفقیت انجام شد',
            icon: 'success'
        })
    }
})