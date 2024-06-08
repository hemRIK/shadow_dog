const canvas = document.getElementById('canvas1'); // variavel canvas que pega o elemento do html canvas
const ctx = canvas.getContext('2d'); // define o canvas como uma lousa 2D 
 

// dimensionamento da tela  
 window.addEventListener ( 'resize', function(){
     
  
   
 })


    
    var larguraTela = window.innerWidth;  // largura da tela 
    var alturaTela = window.innerHeight; // altura da tela   
    canvas.height = alturaTela -100;
    canvas.width = larguraTela -90;  // define o tamanho do canvas baseado na tela  - 90 

    
    larguraDoCanvas = canvas.clientWidth  // pega o tamanho do canvas 
   alturaDoCanvas = canvas.clientHeight


/////////////////////////////////////////////////////////

// variaveis do player 
let playerimage = new Image();   // objeto imagem player 
playerimage.src="img/shadow/correndo.png"
var poschao = alturaDoCanvas -57 ;  // altura do canvas menos o tamanho do personagem 
var playerPosX = 0;  // posição do player   X
var playerPosY = poschao; // posição do player   Y
var playerTamanhoW =699;
var playerTamanhoH = 68;
var pulo = 30;
///////////////////////////////////////////////////////////////////////////////////////////////////////

// area de recorte  
var inicioDoRecorteX = 0;
var inicioDoRecorteY = 0;
var LarguraRecorte= 70 ;
var AlturaRecorte= 70;
///////////////////////////////////////////////////////////////////////////////////////////////////////


let anima;

document.addEventListener('keydown',(event) =>   {

if(event.keyCode===39)
{
    inicioDoRecorteX+=20
    alert(inicioDoRecorteX);
 
}

}
);

function animate ()

{ playerimage.onload =  ()=>{ 
   // img X
    
    ctx.drawImage (playerimage,inicioDoRecorteX,inicioDoRecorteY,LarguraRecorte,AlturaRecorte,playerPosX,playerPosY,70,70) 
    alert(inicioDoRecorteX);

anima =  requestAnimationFrame(animate) 

} 
  

    
}
animate();
