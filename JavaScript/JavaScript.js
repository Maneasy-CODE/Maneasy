var input_projeto = document.getElementById("input_projeto");

function fundo_amarelo(){
    if(window.getComputedStyle(input_projeto).backgroundColor = "var(--branco)"){
        input_projeto.setAttribute("background-color", "var(--amarelo)")
    }
}