//function sendo atribuida à variavel
var func=function myFunction(){
    return 'hi';
}

//function literal
function myFunction2(){
    return 'Function 2';
}

//console.log(func())
//console.log(func.name)
//console.log(myFunction2.name);

//javascript funcional
//funcoes sao cidadaos(objetos) de primeira classe

/*function person(){
   var info={
       name:'marcos',
       lastName:'rodrigues'
   } 
   return info;
};
console.log(person())
console.log(person().name)
console.log(person().lastName)*/

//retorno de funcoes de outra funcao
/*function adder(x){
    return function(y){
        return x+y;
    };
}

var add2=adder(2);
console.log(add2(3));
console.log(adder(5)(5));

//passando obj por parametro em fuction
var car={
    color:'yellow'
}
function getCarColor(mycar){
    return mycar.color;
}
console.log(getCarColor(car))*/

//retornando funcao como parametro
function showOtherFunction(func){
    return func();
}

console.log(showOtherFunction(()=>{ return 'functional js ninja' }))
//console.log(showOtherFunction(function retornedFunction(){ return 'returned function' }))
//console.log(showOtherFunction(retornedFunction))