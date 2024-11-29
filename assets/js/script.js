const botaoHamburguer = document.getElementById("nav_hamburguer") ;
const sectionMenuResponsivo = document.getElementById("menu_responsivo") ;

function abrirMenuResponsivo() {
    //EXIBINDO
    sectionMenuResponsivo.global.style = "initial";
}

function fecharMenuResponsivo() {
    //Ocultando
    sectionMenuResponsivo.global.display = "none";
}
