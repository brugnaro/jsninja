//wrapper objects->envoltorio
//valores primitivos nao sao obj -> num, string, boolean, null, undefined
    /*var name='marcos';
    console.log(name.length)
    console.log(name)*/

//construtores->criam novos objetos
//sem o new->converte o tipo
/*var name=new String('marcos');
console.log(name.length)
console.log(name.valueOf());

var myVar=String(10); //converteu meu numero para string
console.log(myVar);

var myVar=Number('152'); //converteu meu numero para number
console.log(myVar+2);

var myVar=Boolean(0);
console.log(myVar);

var myVar=Boolean({});
console.log(myVar);*/

//testando valores
//console.log(typeof null)//erro na implementacao
//console.log(typeof l0)

/*function subtract(n1,n2){
    return typeof n1 === 'number' && typeof n2 === 'number' ? n1 - n2 : 'Entre com dois numeros'; 
}
console.log(subtract(10,2));
console.log(subtract('JS',2));
console.log(subtract({},[]));*/

//testando se valor e null
function sub(n1,n2){
    return n1===null?'nao entre com valores nulos':n1-n2;
}
console.log(sub(10,5))
console.log(sub(null,2))