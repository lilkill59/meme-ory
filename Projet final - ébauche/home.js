const choix = document.querySelector('#niveau');



function choixniv(){
    if (choix.value === 'lvl1') {
        window.location.href = 'page_lvl1.html';
    }
    else if (choix.value === 'lvl2') {
        window.location.href = 'page_lvl2.html';
    }
    else if (choix.value === 'lvl3') {
        window.location.href = 'page_lvl3.html';
    }
};