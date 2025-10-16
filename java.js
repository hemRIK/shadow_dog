const canvas = document.getElementById('canvas1'); // variavel canvas que pega o elemento do html canvas
const ctx = canvas.getContext('2d'); // define o canvas como uma lousa 2D 
 

// dimensionamento da tela  
 window.addEventListener ( 'resize', function(){

  
   
 })

// tratamento da tela 
    let larguraTela = window.innerWidth;  // largura da tela 
    let alturaTela = window.innerHeight; // altura da tela   
    canvas.height = alturaTela -100;
    canvas.width = larguraTela -90;  // define o tamanho do canvas baseado na tela  - 90 

    larguraDoCanvas = canvas.clientWidth ; // pega o tamanho do canvas 
    alturaDoCanvas = canvas.clientHeight;
/////////////////////////////////////////////////////////



// variaveis do player 
 
let playerimage = new Image();   // objeto imagem player 


let acaopadrao = new Image() // acao padrao
acaopadrao.src="img/shadow/correndo.png"


let acaoabaixar = new Image() // acao abaixar 
acaoabaixar.src = "img/shadow/abaixando.png"

let playerTamanhoW = playerimage.width 
let poschao = alturaDoCanvas -61 ;  // altura do canvas menos o tamanho do personagem 
let playerPosX = 0;  // posição do player   X
let playerPosY = poschao; // posição do player   Y
let quantidadeDeSprits = 9
let playerTamanhoH = 68;
let pulo = 10;
let velocidade =10;
let clicarabaixar =  false 

///////////////////////////////////////////////////////////////////////////////////////////////////////

// area de recorte  

let indiceDoSprite = 0;
let CorreSprit = 0;

let inicioDoRecorteY = 0;
let LarguraRecorte= 79 ;
let AlturaRecorte= 70;
let larguraDoSprite =playerTamanhoW/quantidadeDeSprits; 
 // tamanho total da tela dividido pelo numero de cachorros na tela
// =  largura de cada cachorro na tela 


///////////////////////////////////////////////////////////////////////////////////////////////////////

//corresprit para abaixar


let indiceDoSpriteabaixando  
let  CorreSpritabaixando 
let correpratras = 0 

function ajustasprits (playerimage, quantidadeDeSprits) 
{
const playerTamanhoW =playerimage.width;
 larguraDoSprite =  playerTamanhoW/quantidadeDeSprits;
 indiceDoSprite  = CorreSprit*larguraDoSprite;
indiceDoSpriteabaixando = CorreSpritabaixando*larguraDoSprite
return larguraDoSprite

}
function ajustaacao(acao,playerimage)
{
 playerimage.src  = acao.src   
 return playerimage

}

function limpa ()
{
     ctx.clearRect(playerPosX,playerPosY,larguraDoSprite,playerTamanhoH);
}

     function animaabaixar ()
{
  

         
         ajustasprits(acaoabaixar,6)
          ajustaacao(acaoabaixar,playerimage) 
           
console.log("indicedosprite dentro do animabaixar = ",indiceDoSprite)
           
console.log("corresprit dentro do animabaixar = ",CorreSprit)

console.log("largura do sprite",larguraDoSprite)
console.log("tamanho da tela  ",acaoabaixar.width)
  
 requestAnimationFrame( (animaabaixar)=>{
  limpa()
 CorreSpritabaixando = 0 
ctx.drawImage(playerimage,indiceDoSpriteabaixando,inicioDoRecorteY,LarguraRecorte,AlturaRecorte,playerPosX,playerPosY,larguraDoSprite,playerTamanhoH) 
  
 

      

   if (CorreSprit <= 4) {
   
CorreSprit++
  
  }

 
  
  }  )
   
  
           

       

 

 
 


}



  function desenha ( ){
  // ação correr 
    ajustasprits(playerimage,9)
    ajustaacao(acaopadrao,playerimage)
    ctx.drawImage (playerimage,indiceDoSprite,inicioDoRecorteY,LarguraRecorte,AlturaRecorte,playerPosX,playerPosY,larguraDoSprite,playerTamanhoH)
   
  
  if(clicarabaixar== true)  // ação abaixar 
        {
          
          animaabaixar ()
        }
}
 


  function animate (){
       requestAnimationFrame(animate)
       limpa();
       desenha();
}
    
  window.addEventListener('keydown',(event)=>{

     if(event.keyCode===39)  // andar pra frente 
       {
        limpa();
        
      
        playerPosX+= velocidade 
        if(CorreSprit==7) { CorreSprit = 0} // fim do sprit volta ao inicio 
        CorreSprit++;
        console.log("correspirt andar pra frente = ", CorreSprit)
   
        }
    else if(event.keyCode===37) // andar pra trás 
        { 
        limpa();
        playerPosX-= velocidade
       if(CorreSprit==0) { CorreSprit = 7}
        CorreSprit--;
       }

  else if(event.keyCode===40)  // abaixar 
       { 

       
        clicarabaixar = true
        console.log("segurando pra baixo", clicarabaixar) 
        animaabaixar()
   
       
      }
      
})



window.addEventListener('keyup', (event)=>{
  if(event.keyCode===40) 
      {
        limpa()
         clicarabaixar = false 
         CorreSprit = 0
         console.log("CorreSprit dentro do keyup  = ", CorreSprit)
         console.log("clicarabaixar = ", clicarabaixar)
      }
})



animate();