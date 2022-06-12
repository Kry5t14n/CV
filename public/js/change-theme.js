let lightMode = localStorage.getItem('lightMode')
const change_mode = document.getElementById('change-mode')

const enableLightMode = () => {
    document.body.classList.add('light')
    localStorage.setItem('lightMode', 'true')
}

const disableLightMode = () => {
    document.body.classList.remove('light')
    localStorage.setItem('lightMode', null)
}

if(lightMode === 'true') {
    enableLightMode()
}

change_mode.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode')
    if(lightMode !== 'true') {
        enableLightMode()
    }
    else {
        disableLightMode()
    }
})