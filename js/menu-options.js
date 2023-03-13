const menuopts = document.getElementById('lol')
function menuoptions() {
    if (document.getElementById('header-options').checked == true) {
        menuopts.style.width = '14vh'
        menuopts.style.height = '25vh'
        menuopts.style.opacity = '1'
        menuopts.style.transition = 'var(--transition)'
        menuopts.style.fontSize = '2vh'
    } else {
        menuopts.style.width = '0%'
        menuopts.style.height = '0%'
        menuopts.style.opacity = '0'
        menuopts.style.transition = 'var(--transition)'
        menuopts.style.fontSize = '0vh'
    }

}

//document.getElementById('lol').innerHTML = ``

function menuleave() {
    menuopts.checked = false
}

menuopts.addEventListener('mouseleave', function () {
    document.getElementById('header-options').checked = false
    menuopts.style.width = '0%'
    menuopts.style.height = '0%'
    menuopts.style.opacity = '0'
    menuopts.style.transition = 'var(--transition)'
    menuopts.style.fontSize = '0vh'
})

document.getElementById('cbox-hide-tuto').addEventListener('change', function () {
    let hideTutorial = document.getElementById('cbox-hide-tuto')
    if (hideTutorial.checked == true) {
        let tutorialcheck = 'true'
        localStorage.setItem("tutorialCheckStorage", tutorialcheck)
    }


});
