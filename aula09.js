//hoisting->içamento/elevacao
/*function myFunction(){
    var n1;
    console.log('antes de declarar:',n1);   
    n1=10;
    console.log('depois de declarar:',n1);
}
console.log(myFunction())*/

function myFunction(){
    console.log(sum())
    function sum(){
        return 1+2;
    }
    console.log(sum())
}
console.log(myFunction())
