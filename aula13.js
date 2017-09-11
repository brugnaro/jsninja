// concat();  adiciona um item no final array sem alterar o array principal 
// push(); adiciona um item no final array
// pop(); remove o ultimo item do array
// unshift(); adiciona um item no começo do array
// shift(); remove o primeiro item do array
// slice(indiceInicial, indiceFinal);  retorna selecao no array e nao modifica o arr principal
// splice(indiceInicial, qtdDeItensRemove); remove seleção e modifica array principal
// splice(indiceInicial, qtdDeItensRemove, itemAdd); adiciona um item no array e modifica array principal
// splice(indiceInicial, ateIndiceRemove, itemAdd); substitui 4 itens no array e modifica array principal

/* forEach()
var arr = [1,2,3,4,5,6,7];
var sum = 0;
arr.forEach(function(item){
    sum += item;
});
console.log(sum);*/

/*every(); testa itens do array
var arr = [1,2,3,4,5,6,7];
var every = arr.every(function(item){
    console.log(item)
    return item < 8;
});
console.log(every);*/

/*some()
var arr = [1,2,3,4,5,6,7];
var some = arr.some(function(item){
    return item % 2 === 0;
});
console.log(some);*/

/* map();
var arr = [1,2,3,4,5];
var map = arr.map(function(item, index, array){
    return {index:index, item:item};
});
console.log(arr, map);

var newArr = [];
arr.forEach(function(item,index,array){
    newArr.push({index:index, item:item});
});
console.log('newArr: ');
console.log(newArr);*/

//encadeando map and filter
var arr = [1,2,3,4,5];
var map = arr.map(function(item){
    return item + 10;
}).filter(function(item){
    return item > 13;
});

var filter = arr.filter(function(item){
    return item > 13;
});
console.log(map);

