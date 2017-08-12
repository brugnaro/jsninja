(function(){
    function myFunction(){
        var n1=10;
        var n2=20;
        console.log('na funcao myFunction, o primeiro numero é: '+n1)
        console.log('na funcao myFunction, o segundo numero é: '+n2)
        return console.log(n1+n2);
    }
    myFunction();

    function myFunction2(){
        var number1 = 10;
        var number2 = 20;
        var sum=function sum(){
            return number1 + number2;
        };
    
        console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
        return sum();
    }
    myFunction2();

    function myFunction3(){
        var number1=40;
        var number2=50;
        function sum(){
            return number1 + number2;
        };
        console.log( 'A soma de 40 e 50 é igual a', sum());
        console.log( 'Na função myFunction3, number1 é igual a', number1 );
        return sum();
    }
    myFunction3();

    function calculator(n1,n2){
        return function(callback){
            return callback(n1,n2);
        }; //preciso do ; no final porque estou criando uma expressao por causa do return
    }

    //calculator e o retorno de sum
    //n1,n2 esta sendo chamado no callback
    var sum=calculator(10,2);

    console.log('o resultado da soma é:');
    console.log(sum(function(num1,num2){
        return num1+num2;
    }));

    var subtraction=calculator(5,2);
    var multiplication=calculator(3,3);
    var division=calculator(100,12);
    var mod=calculator(50,32);

    console.log('o resultado da subtracao e:');
    console.log(subtraction(function(num1,num2){
        return num1-num2;
    }));

    console.log('o resultado da multiplicacao e:');
    console.log(multiplication(function(num1,num2){return num1*num2}));

    console.log('o resultado da divisao e:');
    console.log(division(function(n1,n2){return n1/n2}));

    console.log('o resultado do mod e:');
    console.log(mod(function(n1,n2){return n1%n2}));

}());