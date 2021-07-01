/**
   * --------------------------------------------------------------------------
    Dropdown-Menu
   * --------------------------------------------------------------------------
 */

    let iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu')

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active')

    let icon = e.target.getAttribute('src')

    if(icon == '/Assets/menu.png') {
        e.target.setAttribute('src', '/Assets/close.png')
    } else {
        e.target.setAttribute('src', '/Assets/menu.png')
    }
})