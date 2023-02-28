var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
//facilitar a sua vida
var caixaTexto = document.getElementById("caixaTexto");
var camera = document.getElementById("camera");
var link = document.getElementById("link");


function start(){
    recognition.start();

}
var content = "";
//evento de obter os resultos da escuta
recognition.onresult=function(evento){
content = evento.results[0][0].transcript;
//mostra a transcrição no elemento caixaTexto
caixaTexto.innerHTML = content;
if(content=='selfie'){
    speak();
}
}


function speak(){
    //mostra na div a imagem da webcam
Webcam.attach(camera);

//guarda na mémoria o que navegador irá falar
var speakData = "tirando sua selfie em 5 segundos";

var utterThis = new SpeechSynthesisUtterance(speakData);
  //facilitar a sua vida
var synth = window.speechSynthesis;
//manda pronunciar o texto
synth.speak(utterThis);


//dá um intervalo de tempo, manda o seu pc esperar
setTimeout(function(){
    imgId = "selfie1";
    takeSelfie();
    var speakData = "tirando sua selfie em 10 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    var synth = window.speechSynthesis;
    synth.speak(utterThis);
}, 5000);
 setTimeout(function(){
    imgId = 'selfie2';
    takeSelfie();
    var speakData = "tirando sua selfie em 15 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    var synth = window.speechSynthesis;
    synth.speak(utterThis);
}, 10000);
setTimeout(function(){
    imgId="selfie3";
    takeSelfie();
    
}, 15000);
 


}

//definir a imagem da webcam
Webcam.set({
    width:300,
    height:250,
    image_format:'png',
    png_quality:90
})

function takeSelfie(){
    Webcam.snap(function(data_uri){
   console.log(data_uri);
    if(imgId == 'selfie1' ){
        document.getElementById("result1").innerHTML = "<img id='selfie1' src=" +data_uri+ ">"; 
    }
    if(imgId == 'selfie2' ){
        document.getElementById("result2").innerHTML = "<img id='selfie2' src=" +data_uri+ ">"; 
    }
    if(imgId == 'selfie3' ){
        document.getElementById("result3").innerHTML = "<img id='selfie3' src=" +data_uri+ ">"; 
    }
   link.href=data_uri;
   //clica no link por código, faz o dowload
   link.click();
    })

}