function encriptar(){
    let texto= document.getElementById("textoAEncriptar").value;
    let mensajeEncriptado= document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");
    
  let textoEncriptado = texto
  .replace(/a/gi, "%")
  .replace(/e/gi, "zn")
  .replace(/i/gi, "#")
  .replace(/o/gi, "<")
  .replace(/u/gi, "xx")

  .replace(/á/gi, ">")
  .replace(/é/gi, "!")
  .replace(/í/gi, "@")
  .replace(/ó/gi, "œ")
  .replace(/ú/gi, "&")

  .replace(/1/gi, "=")
  .replace(/2/gi, "-")
  .replace(/3/gi, "º")
  .replace(/4/gi, "ª")
  .replace(/5/gi, ":")
  .replace(/6/gi, "ç")
  .replace(/7/gi, "{")
  .replace(/8/gi, "}")
  .replace(/9/gi, "¬")
  
  
  if(texto.length !=0){
    document.getElementById("textoAEncriptar").value = textoEncriptado;
    mensajeEncriptado.textContent = "Texto encriptado exitosamente";
    parrafo.textContent = "";
 
  }else{
    mensajeEncriptado.textContent = "Ingresa Texto a encriptar";
    parrafo.textContent = "";
  }

}

function desencriptar(){
  let texto2= document.getElementById("textoAEncriptar").value;
  let mensajeEncriptado2= document.getElementById("titulo-mensaje");
  
  let textoEncriptado2 = texto2
  .replace(/%/gi, "a")
  .replace(/zn/gi, "e")
  .replace(/#/gi, "i")
  .replace(/</gi, "o")
  .replace(/xx/gi, "u")

  .replace(/>/gi, "á")
  .replace(/!/gi, "é")
  .replace(/@/gi, "í")
  .replace(/œ/gi, "ó")
  .replace(/&/gi, "ú")

  .replace(/=/gi, "1")
  .replace(/-/gi, "2")
  .replace(/º/gi, "3")
  .replace(/ª/gi, "4")
  .replace(/:/gi, "5")
  .replace(/ç/gi, "6")
  .replace(/{/gi, "7")
  .replace(/}/gi, "8")
  .replace(/¬/gi, "9")

    if(texto2.length !=0){
    document.getElementById("textoAEncriptar").value = textoEncriptado2;
    mensajeEncriptado2.textContent = "Texto desencriptado";
    }
}
