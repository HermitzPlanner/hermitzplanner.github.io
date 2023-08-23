function settings() {
    const settingsBtn  = document.getElementById('settings-container')
    settingsBtn.style.display = "flex"
}

function quitSettings() {
    const settingsBtn  = document.getElementById('settings-container')
    settingsBtn.style.display = "none"
}

function disablePrice () {
    const skinPrice = document.querySelectorAll('.skin-price')
    const skinPriceCbox = document.getElementById('disable-price')
    if (skinPriceCbox.checked) {
        skinPrice.forEach(element => {
            element.style.display = "none"        
        });
    } else {
        skinPrice.forEach(element => {
            element.style.display = "block"        
        });
    }
}

function disableLabel () {
    const skinLabel = document.querySelectorAll('.skin-category')
    const skinLabelCbox = document.getElementById('disable-label')
    if (skinLabelCbox.checked) {
        skinLabel.forEach(element => {
            element.style.display = "none"        
        });
    } else {
        skinLabel.forEach(element => {
            element.style.display = "flex"        
        });
    }
}

function smallSkin() {
    const smallSkin = document.getElementById('small-skin')
    if (smallSkin.checked) {
        document.documentElement.style.setProperty('--card-height', '210px');
    } else {
        document.documentElement.style.setProperty('--card-height', '360px');
    }
}