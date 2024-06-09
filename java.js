const canvas = document.getElementById('canvas1'); // variavel canvas que pega o elemento do html canvas
const ctx = canvas.getContext('2d'); // define o canvas como uma lousa 2D 
 

// dimensionamento da tela  
 window.addEventListener ( 'resize', function(){

  
   
 })

// tratamento da tela 
    var larguraTela = window.innerWidth;  // largura da tela 
    var alturaTela = window.innerHeight; // altura da tela   
    canvas.height = alturaTela -100;
    canvas.width = larguraTela -90;  // define o tamanho do canvas baseado na tela  - 90 

    
    larguraDoCanvas = canvas.clientWidth ; // pega o tamanho do canvas 
   alturaDoCanvas = canvas.clientHeight;
/////////////////////////////////////////////////////////



// variaveis do player 
let playerimage = new Image();   // objeto imagem player 
playerimage.src="img/shadow/correndo.png";
var poschao = alturaDoCanvas -61 ;  // altura do canvas menos o tamanho do personagem 
var playerPosX = 0;  // posição do player   X
var playerPosY = poschao; // posição do player   Y
var playerTamanhoW =700;
var playerTamanhoH = 68;
var quantidadeDeSprits = 9;
var pulo = 10;


///////////////////////////////////////////////////////////////////////////////////////////////////////

// area de recorte  

var indiceDoSprite = 0;
var CorreSprit = 0;
var inicioDoRecorteY = 0;
var LarguraRecorte= 70 ;
var AlturaRecorte= 70;

var larguraDoSprite =  playerTamanhoW/quantidadeDeSprits;

indiceDoSprite  = CorreSprit*larguraDoSprite;
///////////////////////////////////////////////////////////////////////////////////////////////////////






function animate (){
     playerimage.onload =  ()=>{ 

 
      
       


   let anima = setInterval( ()=>{ 
  
    indiceDoSprite  = CorreSprit*larguraDoSprite;
    CorreSprit++; if(CorreSprit>8){CorreSprit= 0;}  

    ctx.clearRect(playerPosX,playerPosY,70,70);

   
    ctx.drawImage (playerimage,indiceDoSprite,inicioDoRecorteY,LarguraRecorte,AlturaRecorte,playerPosX,playerPosY,70,70) 
},100)




    }

    }
  




  

    
















animate();
