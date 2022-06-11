const hint = document.getElementById('hint')
const input_txt = document.getElementById('plr-input')
const enter_btn = document.getElementById('enter-btn')
const reset_btn = document.getElementById('reset-btn')

let number = Math.floor(Math.random()*100)

input_txt.addEventListener('click', () => {
    input_txt.value = ''
})

enter_btn.addEventListener('click', () => {
    let input = document.getElementById('plr-input').value
    if(number > input) {
        hint.innerHTML = 'Too low'
        hint.style.color = 'red'
    }
    else if(number < input) {
        hint.innerHTML = 'Too high'
        hint.style.color = 'red'
    }
    else if(number = input) {
        hint.innerHTML = `You guessed right! The number was ${number}`
        hint.style.color = 'green'
    }
    else {
        hint.innerHTML = 'Enter the number'
        hint.style.color = 'var(--dark0)'
    }
})

reset_btn.addEventListener('click', () => {
    hint.innerHTML = 'Enter the number'
    hint.style.color = 'var(--dark0)'
    input_txt.value = ''
    return number = Math.floor(Math.random()*100)
})