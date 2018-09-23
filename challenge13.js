(function () {
  [1, 2, 3, 4, 5, 6].toString();

  var sul = ["parana", "santa catarina", "rio grande do sul"];
  var sudeste = [
    "espirito santo",
    "minas gerais",
    "rio de janeiro",
    "sao paulo"
  ];
  var brasil = sul.concat(sudeste);
  brasil.unshift("acre", "amapa", "amazonas");
  brasil.shift();

  var newSul = brasil.slice(2, 5);

  var nordeste = [
    "alagoas",
    "bahia",
    "ceará",
    "maranhao",
    "paraiba",
    "pernambuco",
    "rio grando do norte"
  ];

  //a partir do quinto vou remover quatro
  var newSudeste = brasil.splice(5, 4);

  brasil = brasil.concat(nordeste);

  var newBrasil = [];
  brasil.forEach(function (item, index) {
    newBrasil.push({
      id: index,
      estado: item
    });
  });

  console.log(brasil);

  var every = brasil.every(function (item) {
    return item.length > 4;
  });

  console.log(
    every
      ? 'Sim, todos os estados tem mais de 7 letras!'
      : 'Nem todos estados tem 7 letras');

  var some = brasil.some(function (item) {
    return item === 'ceará';
  });

  console.log(some ? 'Ceará esta incluido!' : 'Ceará não foi incluido');

  var map = newBrasil.map(function (item, index) {
    return {
      id: item.id + 1,
      estado: item.estado + ' pertence ao Brasil'
    }
  });

  console.log(map);

  var filter = map.filter(function (item, index) {
    return item.id % 2 === 0
  });

  console.log(filter);

})();
