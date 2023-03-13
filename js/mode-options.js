const modesopts = document.getElementById('modes-options')
const btnwidth = document.getElementById('header-modes-label')
const gallerybtn = document.getElementById('header-blacklist')
function modesoptions() {
    if (document.getElementById('header-modes').checked == true) {
        modesopts.style.width = '16vh'
        modesopts.style.height = '15vh'
        modesopts.style.opacity = '1'
        modesopts.style.transition = 'var(--transition)'
        modesopts.style.fontSize = '2vh'

    } else {
        modesopts.style.width = '0%'
        modesopts.style.height = '0%'
        modesopts.style.opacity = '0'
        modesopts.style.transition = 'var(--transition)'
        modesopts.style.fontSize = '0vh'
    }

}

//document.getElementById('modes-options').innerHTML = ``

function modesleave() {
    modesopts.checked = false
}

modesopts.addEventListener('mouseleave', function () {
    document.getElementById('header-modes').checked = false
    modesopts.style.width = '0%'
    modesopts.style.height = '0%'
    modesopts.style.opacity = '0'
    modesopts.style.transition = 'var(--transition)'
    modesopts.style.fontSize = '0vh'
})

const checkbox1 = document.querySelector('#header-blacklist');
const checkbox2 = document.querySelector('#header-summary');

checkbox1.addEventListener('click', () => {
  if (checkbox1.checked) {
    if (checkbox2.checked) {
        checkbox2.click();
    }
  }
});

checkbox2.addEventListener('click', () => {
  if (checkbox2.checked) {
    if (checkbox1.checked) {
        checkbox1.click();
    }
    
  }
});