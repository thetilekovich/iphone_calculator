const form = document.querySelector('.form')
const allClean = document.querySelector('.clean')
const clean = document.querySelector('.anothers')
const percent = document.querySelector('.percent')
const divide = document.querySelector('.divide')
const times = document.querySelector('.times')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const equal = document.querySelector('.equal')
const num = document.querySelectorAll('.num')



const getValue = () =>{
    return form.value
}

    num.forEach(el => {
        el.addEventListener('click', () => {
            form.value.length > 10 ? form.style.fontSize = '34px' : true
            form.value = form.value + el.textContent
        })
    })


clean.addEventListener('click', () => {
    form.value = form.value.slice(0, -1)
})
allClean.addEventListener('click', () => {
    form.value = ''
})
equal.addEventListener('click', () => {
    newStr = form.value.replace('÷', '/')
    newStr = newStr.replace('×', '*')
    form.value === '' ? true : form.value = eval(newStr)
    
})

