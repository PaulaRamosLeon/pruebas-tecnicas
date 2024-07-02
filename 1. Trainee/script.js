// Declarar constantes

    //Imágenes
const zpump = document.getElementById("zpump");
const fontvella = document.getElementById("fontvella");
const rcar = document.getElementById("rcar");
const pulse = document.getElementById("pulse");
const alhambra = document.getElementById("alhambra");
const actimel = document.getElementById("actimel");
const ots = document.getElementById("ots");
const delicious = document.getElementById("delicious");
const roca = document.getElementById("roca");
const state = document.getElementById("state");

    //Divs
const zpump_div = document.getElementById("zpump_div");
const fontvella_div = document.getElementById("fontvella_div");
const rcar_div = document.getElementById("rcar_div");
const pulse_div = document.getElementById("pulse_div");
const alhambra_div = document.getElementById("alhambra_div");
const actimel_div = document.getElementById("actimel_div");
const ots_div = document.getElementById("ots_div");
const delicious_div = document.getElementById("delicious_div");
const roca_div = document.getElementById("roca_div");
const state_div = document.getElementById("state_div");


function addHandlers(div, img){
    div.addEventListener('mouseover', () => img.classList.add('visible'));

    div.addEventListener('mouseout', () => img.classList.remove('visible'));
}

addHandlers(zpump_div, zpump);
addHandlers(fontvella_div, fontvella);
addHandlers(rcar_div, rcar);
addHandlers(pulse_div, pulse);
addHandlers(alhambra_div, alhambra);
addHandlers(actimel_div, actimel);
addHandlers(ots_div, ots);
addHandlers(delicious_div, delicious);
addHandlers(roca_div, roca);
addHandlers(state_div, state);