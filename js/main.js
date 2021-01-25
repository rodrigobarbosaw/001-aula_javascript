function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar")
}
function redirecionar(){
    window.open("http://www.uol.com.br/");
    window.location.href = "http://www.uol.com.br/";
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){
    return n1 + n2;
}

function validaidade(idade){
    var validar;   
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));
*/


//alert(soma(5,10));

/*
var d = new Date();
    alert(d.getMinutes()+1);
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
    console.log(count);
}
*/

/*
var count = 0;
while (count <= 5){
console.log(count);
alert(count);    
count ++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de idade");
};
console.log(idade);
*/

/*
var frutas = [{nome:"maça", cor:"Vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var idade = 35;
//var idade2 = 10;
//var nome = "Rodrigo Wellausen";
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " Anos " );
//alert (idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase("Japão", "Brasil"));