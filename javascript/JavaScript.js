let input_chamado = document.getElementById("input_chamado");

// function fundo_amarelo(){
if (window.getComputedStyle(input_chamado).backgroundColor == "rgb(255, 255, 255)") {
    // input_projeto.setAttribute( "style", "background-color", "rgb(255 209 0)")
    input_chamado.style.backgroundColor = "var(--amarelo)"
}
// }                                     