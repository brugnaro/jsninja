//hoisting->içamento/elevacao
/*function myFunction(){
    var n1;
    console.log('antes de declarar:',n1);   
    n1=10;
    console.log('depois de declarar:',n1);
}
console.log(myFunction())

function myFunction(){
    console.log(sum())
    function sum(){
        return 1+2;
    }
    console.log(sum())
}
console.log(myFunction())*/

//IIFE Immediately-invoked function expression
//(funcao auto executavel)
/*function sum(){
    return 1+2;
};
console.log(sum())

var sum2=function(){
    return 3+2;
};
console.log(sum2())

var sum3=function otherSum(){
    console.log(otherSum())
    return 5+8;
};
console.log(sum3())

var obj={
    prop:function(){
        return 1+2;
    }
};
console.log(obj);
console.log(obj.prop());*/

//funcao de auto execucao, expressao forca escopo local
(function(){
    console.log(1+2)
}());

