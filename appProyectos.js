let nav_bar_extend = document.getElementById("nav-bar-extend")
let nav_bar_completo = document.getElementById("nav-bar-completo")

let nav_bar_collapsed = document.getElementById("nav-bar-collapsed")
let main = document.getElementById("main")
let svg = document.getElementsByTagName("svg");

let svgfill = document.getElementById("svgfill");

let div_luxerati = document.getElementById("div-luxerati");
let div_mercado = document.getElementById("div-mercado");
let div_tictactoe = document.getElementById("div-tictactoe");
let div_ctg = document.getElementById("div-ctg");
let tituloProyect = document.getElementsByClassName("tituloProyect");


function hoverNav() {

    nav_bar_extend.style.display = 'flex';
    nav_bar_completo.style.width = '15%';
    main.style.width = '85%';
    nav_bar_extend.classList.add("slide-in-left");
    nav_bar_collapsed.style.display = 'none';


}

function leaveNav() {
    nav_bar_extend.style.display = 'none';

    nav_bar_completo.style.width = '10%';

    main.style.width = '90%';
    nav_bar_collapsed.style.display = 'flex';

}

function click_luxerati() {
    div_luxerati.style.display = 'flex';
    div_mercado.style.display = 'none';
    div_tictactoe.style.display = 'none';
    div_ctg.style.display = 'none';

    tituloProyect[0].style.textDecoration = 'underline';
    tituloProyect[1].style.textDecoration = 'none';
    tituloProyect[2].style.textDecoration = 'none';
    tituloProyect[3].style.textDecoration = 'none';
}



function click_mercado() {

    div_luxerati.style.display = 'none';
    div_mercado.style.display = 'flex';
    div_tictactoe.style.display = 'none';
    div_ctg.style.display = 'none';

    tituloProyect[0].style.textDecoration = 'none';
    tituloProyect[1].style.textDecoration = 'underline';
    tituloProyect[2].style.textDecoration = 'none';
    tituloProyect[3].style.textDecoration = 'none';


} function click_tictactoe() {

    div_luxerati.style.display = 'none';
    div_mercado.style.display = 'none';
    div_tictactoe.style.display = 'flex';
    div_ctg.style.display = 'none';

    tituloProyect[0].style.textDecoration = 'none';
    tituloProyect[1].style.textDecoration = 'none';
    tituloProyect[2].style.textDecoration = 'underline';
    tituloProyect[3].style.textDecoration = 'none';
}
function click_ctg() {

    div_luxerati.style.display = 'none';
    div_mercado.style.display = 'none';
    div_tictactoe.style.display = 'none';
    div_ctg.style.display = 'flex';

    tituloProyect[0].style.textDecoration = 'none';
    tituloProyect[1].style.textDecoration = 'none';
    tituloProyect[2].style.textDecoration = 'none';
    tituloProyect[3].style.textDecoration = 'underline';
}

function hoverSvg() {
    svgfill.style.fill = 'rgb(246, 218, 181)';
}

function leaveHoverSvg() {
    svgfill.style.fill = '#ffffff';
}



function click_TheOffice() {
    div_luxerati.style.display = 'none';
    div_mercado.style.display = 'none';
    div_tictactoe.style.display = 'flex';

    tituloProyect[0].style.textDecoration = 'underline';
    tituloProyect[1].style.textDecoration = 'none';
    tituloProyect[2].style.textDecoration = 'none';
}

function click_Wordle() {
    div_luxerati.style.display = 'flex';
    div_mercado.style.display = 'none';
    div_tictactoe.style.display = 'none';

    tituloProyect[0].style.textDecoration = 'none';
    tituloProyect[1].style.textDecoration = 'underline';
    tituloProyect[2].style.textDecoration = 'none';
}

function click_Gestion() {
    div_luxerati.style.display = 'none';
    div_mercado.style.display = 'flex';
    div_tictactoe.style.display = 'none';

    tituloProyect[0].style.textDecoration = 'none';
    tituloProyect[1].style.textDecoration = 'none';
    tituloProyect[2].style.textDecoration = 'underline';
}