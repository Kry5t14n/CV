const score_element = document.querySelector('h2')
const btn_less = document.getElementById('less')
const btn_reset = document.getElementById('reset')
const btn_more = document.getElementById('more')

let score = 0


const score_element_update = () => score_element.innerHTML = score


btn_less.onclick = () => {
    score--
    return score_element_update()
}
btn_reset.onclick = () => {
    score = 0
    return score_element_update()
}
btn_more.onclick = () => {
    score++
    return score_element_update() 
}