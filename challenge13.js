(function() {
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
  brasil.forEach(function(item, index) {
    newBrasil.push({
        id: index,
        estado: item
    });
  });

  console.log(newBrasil);
})();
