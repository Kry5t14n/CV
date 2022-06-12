let lightMode = localStorage.getItem('lightMode')
const change_mode = document.getElementById('change-mode')


const nav_light = () => {
    const navbar_imgs = document.getElementsByClassName('nav')

    navbar_imgs[0].src = 'img/light-mode/navbar/home.png'
    navbar_imgs[1].src = 'img/light-mode/navbar/theme.png'
    navbar_imgs[2].src = 'img/light-mode/navbar/abilities.png'
    navbar_imgs[3].src = 'img/light-mode/navbar/projects.png'
    navbar_imgs[4].src = 'img/light-mode/navbar/download.png'
}

const nav_dark = () => {
    const navbar_imgs = document.getElementsByClassName('nav')

    navbar_imgs[0].src = 'img/dark-mode/navbar/home.png'
    navbar_imgs[1].src = 'img/dark-mode/navbar/theme.png'
    navbar_imgs[2].src = 'img/dark-mode/navbar/abilities.png'
    navbar_imgs[3].src = 'img/dark-mode/navbar/projects.png'
    navbar_imgs[4].src = 'img/dark-mode/navbar/download.png'
}


const index_light = () => {
    const index_imgs = document.getElementsByClassName('index-img')

    index_imgs[0].src = 'img/light-mode/home-site/education.png'
    index_imgs[1].src = 'img/light-mode/home-site/languages.png'
    index_imgs[2].src = 'img/light-mode/home-site/info.png'
    index_imgs[3].src = 'img/light-mode/home-site/info/github.png'
    index_imgs[4].src = 'img/light-mode/home-site/info/phone.png'
    index_imgs[5].src = 'img/light-mode/home-site/info/email.png'
}

const index_dark = () => {
    const index_imgs = document.getElementsByClassName('index-img')

    index_imgs[0].src = 'img/dark-mode/home-site/education.png'
    index_imgs[1].src = 'img/dark-mode/home-site/languages.png'
    index_imgs[2].src = 'img/dark-mode/home-site/info.png'
    index_imgs[3].src = 'img/dark-mode/home-site/info/github.png'
    index_imgs[4].src = 'img/dark-mode/home-site/info/phone.png'
    index_imgs[5].src = 'img/dark-mode/home-site/info/email.png'
}


const set_light = () => {
    nav_light()
    index_light()
}

const set_dark = () => {
    nav_dark()
    index_dark()
}

const enableLightMode = () => {
    document.body.classList.add('light')
    localStorage.setItem('lightMode', 'true')
    set_light()
}

const disableLightMode = () => {
    document.body.classList.remove('light')
    localStorage.setItem('lightMode', null)
    set_dark()
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
