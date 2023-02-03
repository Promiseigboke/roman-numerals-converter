function handleMouseOver(arabic) {
    let currentButton = document.getElementById(arabic)
    currentButton.style.transform = 'scale(1.3)'
    currentButton.style.zIndex = '9'
    currentButton.textContent = arabic
}

function handleMouseOut (id, roman) {
    let currentButton = document.getElementById(id)
    currentButton.style.transform = 'scale(1)'
    currentButton.stylezIndex ='0'
    currentButton.textContent = roman
}