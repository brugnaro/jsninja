var arr = ['f', 'e', 'r', 'n', 'a', 'n', 'd', 'o'];
var reduce = arr.reduceRight((acumulado, atual, index, array) => {
  return acumulado + atual;
});

/*
1ª - 0 + 1 = 1
2ª - 1 + 2 = 3
3ª - 3 + 3 = 6
4ª - 6 + 4 = 10
5ª - 10 + 5 = 15
*/

var arr2 = ['D', 'a', 'c', 'i', 'u', 'k'];

console.log(Array.isArray([]));