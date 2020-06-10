
/*====NUMEROS E STRINGS=====*/
/*var nome = "Tiago Silva";
var idade = 29;
var frase = "Japão é o melhor time do mundo"
alert(nome);
console.log(nome);
console.log(idade);
console.log(frase);
alert(frase.replace("Japão", "Brasil"));
*/



/*====ARRAY=====*/
/*var lista = ["maçã", "pera", "laranja"]

//push - Add novo item a lista
lista.push("uva"); 

//poo - remove o ultimo item da lista
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/




/*====DICIONARIO=====*/
/*var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome);
console.log(fruta.cor)
alert(fruta.nome);


//Dicionario lista
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/



/*====CONDICIONAIS, LAÇOS/REPETIÇÃO e DATE=====*/
/*Input usuario
var idade = prompt("Digite sua idade")

//Condicionais
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


//Laço de Repetição - while 
/*var count = 0;
while (count <= 5){
    console.log(count);
    count ++    //+ count + 1; 
};
*/


//Laço de Repetição - for
/*var count;
for(count = 2; count <= 10; count++){
    console.log(count);
};
*/


//Data
/*var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1); 
alert(d.getHours());
alert(d.getMinutes());
*/




/*====FUNÇÃO=====*/
/*function soma(n1, n2){
    return n1 + n2
}

console.log(soma)
*/


//getElementById e innerHTML
function clicou(){
    document.getElementById("agradecimento").innerHTML = "OBRIGADO POR CLICAR!!"
    //alert("Obrigado por clicar!!!");
    //console.log(document.getElementById("agradecimento"));
};

//window.open  e window.location
function redirecionar(){
    window.open("https://www.google.com/") // abre em uma nova aba
    //window.location.href = "https://www.google.com/" // abre na mesma janela.
}

//onmouseover - trocar
//function trocar(){
    //document.getElementById("mousemove").innerHTML = "OBRIGADO POR PASSAR O MOUSE!!"
     //alert("trocar texto")

function trocar(elemento){
    elemento.innerHTML = "OBRIGADO POR PASSAR O MOUSE!!"
   
}

//onmouseout - voltar
//function voltar(){
    //document.getElementById("mousemove").innerHTML = "PASSE O MOUSE AQUI!!"

    function voltar(elemento){
        elemento.innerHTML = "PASSE O MOUSE AQUI!!"

}

//onload 
function load(){
    alert("Página carregada com sucesso!")
}


//onchange
function funcaochange(elemento){
    console.log(elemento.value)
}