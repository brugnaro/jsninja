(function(){
    var five=Number('5');
    //console.log(five+' e numero?', typeof five==='number');

    var concat=String(10)+String(10);
    //console.log('"'+concat+'" é uma string? E e igual a "1010"?', typeof concat==='string');

    var operation={
        '+':function(x,y){return x+y;},
        '-':function(x,y){return x-y;},
        '*':function(x,y){return x*y;},
        '/':function(x,y){return x/y;},
        '%':function(x,y){return x%y;}
    };

    function isOperatorValid(operator){
        //return (operator==='+' || operator==='-' || operator==='*' || operator==='/' || operator==='%');
        //return operation[operator] !== undefined;
        return !!operation[operator];//retorna o valor boolean
    }
    //console.log(isOperatorValid('3'))
    // || se o primeiro for true imprime true e ignora os outros 
    //console.log(typeof 1==='string' && typeof '2'==='string')

    function calculator(operator){
        if(!isOperatorValid(operator)){
            return false;
        }
        return function(x,y){
            if(typeof x !== 'number' && typeof y !== 'number'){
                return false;
            }
            return operation[operator](x,y);
        };
    }

    function showOperationMessage(operator,n1,n2){
        return 'a operacao '+n1+' '+operator+' '+n2+' = ';
    }
    
    function showErrorMessage(operator){
        return 'operacao '+operator+' nao valida!'
    }

    //multiplication
    var n1=0;
    var n2=0;
    var operationSignal;

    operationSignal='*';
    var multiplication=calculator(operationSignal);

    if(multiplication){
        n1=10;
        n2=12;
        console.log(showOperationMessage(operationSignal,n1,n2),multiplication(n1,n2));
    }else{
        console.log(showErrorMessage(operationSignal));
    }

    //sum
    var n1=0;
    var n2=0;
    var operationSignal;

    operationSignal='+';
    var sum=calculator(operationSignal);

    if(sum){
        n1=10;
        n2=12;
        console.log(showOperationMessage(operationSignal,n1,n2),sum(n1,n2));
    }else{
        console.log(showErrorMessage(operationSignal));
    }

}())