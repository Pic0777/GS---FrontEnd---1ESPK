/*CRIANDO UM SLIDESHOW AUTOMÁTICO */

//VARIAVEIS 

//ARRAY
let imagens=['/imgs/poluicao1.jpg','/imgs/poluicao2.jpg','/imgs/poluicao3.jpg','/imgs/poluicao4.jpg'];
//POSIÇÃO QUE VAI INICIAR 
let index =0;
//TEMPO DAS IMAGENS TROCAR
let time=3000;


//FUNÇÃO SLIDEWSHOW
function slideShow(){
    //DOM - PEGANDO O ID E PASSSANDO CAMINHO DAS IMAGENS
    document.getElementById('img-banner1').src=imagens[index];
    //INCREMENTANDO
    index++;
//CONDICONAL if
    if(index == imagens.length){
        index=0;
    }
    //metodo setTimout para executar a função e chamar o tempo
      setTimeout('slideShow()',time);
    
}

//executando a função
slideShow();

