function handleMouseOver(arabic) {
    let currentButton = document.getElementById(arabic)
    currentButton.style.transform = 'scale(1.3)'
    currentButton.style.zIndex = '9'
    currentButton.textContent = arabic
}