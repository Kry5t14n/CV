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


const skills_light = () => {
    const skills_imgs = document.getElementsByClassName('skills')

    skills_imgs[0].src = 'img/light-mode/skills-site/html.png'
    skills_imgs[1].src = 'img/light-mode/skills-site/css.png'
    skills_imgs[2].src = 'img/light-mode/skills-site/javascript.png'
    skills_imgs[3].src = 'img/light-mode/skills-site/nodejs.png'
    skills_imgs[4].src = 'img/light-mode/skills-site/python.png'
    skills_imgs[5].src = 'img/light-mode/skills-site/cpp.png'
    skills_imgs[6].src = 'img/light-mode/skills-site/office.png'
}

const skills_dark = () => {
    const skills_imgs = document.getElementsByClassName('skills')

    skills_imgs[0].src = 'img/dark-mode/skills-site/html.png'
    skills_imgs[1].src = 'img/dark-mode/skills-site/css.png'
    skills_imgs[2].src = 'img/dark-mode/skills-site/javascript.png'
    skills_imgs[3].src = 'img/dark-mode/skills-site/nodejs.png'
    skills_imgs[4].src = 'img/dark-mode/skills-site/python.png'
    skills_imgs[5].src = 'img/dark-mode/skills-site/cpp.png'
    skills_imgs[6].src = 'img/dark-mode/skills-site/office.png'
}


const set_light = () => {
    nav_light()
    skills_light()
}

const set_dark = () => {
    nav_dark()
    skills_dark()
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
