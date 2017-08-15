/*loop while
var counter=10;
while(counter<10){
    console.log(counter++);
} 
console.log('counter nao e mais menor que 10')*/

/*do while
var counter=10;
do{
    console.log(counter++);
}while(counter<10);

//for
for(var i=1;i<10;i++){
    console.log(i);
}

var car={
    brand:'VW',
    model:'Gol',
    year:'2013'
};

for(var prop in car){
    console.log(car[prop]);
}
console.log('brand in car?','brand' in car)


//salto
function myFunction(){
    var n1=10;
    if(n1===10){
        return true;
    }
    var n2=5;
    var name='marcos';
    return name+' '+n2;
}
console.log(myFunction());*/

/*break ->switch
var n1=2;
switch(n1){
    case 1:
        console.log('1');
        
    case 2:
        console.log('2');
        
    case 10:
        console.log('10');
        
    default:
        console.log('default');
}
console.log('fim do switch')

//break ->for
var arr=[1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<arr.length;i++){
    if(i===5){
        break;
    }
    console.log(i);
}
console.log('fim do for');*/

//continue
var arr=[1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<arr.length;i++){
    //se for igual a 5 ele pula e vai para o proximo
    if(i%2!==0){
        continue;
    }
    console.log(i);
}
console.log('fim do for')