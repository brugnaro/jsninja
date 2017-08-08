var arr=[1,'teste',null,false,true];

//add new item in arr
addItem=(item)=>{return arr.push(item);}
addItem([1,'teste',null])
console.log(arr);
console.log('O segundo elemento do segundo array é ' + arr[5][1] + '.')
console.log('O primeiro array tem '+ arr.length + ' itens.')
console.log('O segundo array tem '+ arr[5].length + ' itens.')

var i=10;
while(i<=20){
    i%2 === 0 ? console.log('numeros pares entre 10 e 20:'+i) : '';
    i++;  
}

//n pares entre 100,120
for(var a=100;a<=120;a++){
    a%2===0?console.log('pares entre 100 e 120:'+a):'';
}

//n impares entre 111,125
for(var b=111;b<=125;b++){
    b%2!==0?console.log('impares entre 111 e 125:'+b):'';
}