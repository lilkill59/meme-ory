const choix = document.querySelector("select");

choix.addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue === 'lvl1') {
        window.location.href = 'page_lvl1.html';
    }
    else if (selectedValue === 'lvl2') {
        window.location.href = 'page_lvl2.html';
    }
    else if (selectedValue === 'lvl3') {
        window.location.href = 'page_lvl3.html';
    }
});