function menuonoff() {

    var menu = document.getElementById('itens');
    if (menu.style.display === "none") {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

}