var sum=calculateSum=(x,y)=>{return x+y}
//console.log('A soma de 5 e 2 é igual a ' + calculateSum(5,2) + '.')
//console.log('O nome da função que faz a soma é ' + sum.name + '.')

showName=()=>'marcos'
//quando eu passo a funcao eu passo sem invocar
var varShowName=showName; 
//console.log('A função ' + varShowName.name + ' retorna ' + varShowName() + '.')

calculator=(oper)=>{
    return (n1,n2)=>{
        var result;
        switch(oper){
        case '+':result=n1+n2;
        break;
        case '-':result=n1-n2;
        break;
        case '*':result=n1*n2;
        break;
        case '/':result=n1/n2;
        break;
        case '%':result=n1%n2;
        break;
        default: return 'operacao invalida';
        }
        return 'Resultado da operação: '+n1+' '+oper+' '+n2+' = '+result+'.'
    };
}

var sum=calculator('+');
console.log(sum(100,345))

var subtraction=calculator('-');
var multiplication=calculator('*');
var division=calculator('/');
var mod=calculator('%');
var x=calculator('$');

console.log(subtraction(10,5))
console.log(multiplication(10,5))
console.log(division(10,5))
console.log(mod(10,5))
console.log(x(10,5))

