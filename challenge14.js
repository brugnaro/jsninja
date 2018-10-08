(function () {

  var numberObjects = [];
  for (var i = 1; i <= 10; i++) {
    numberObjects.push({ number: i });
  }

  var justNumbers = numberObjects.map(function (item, index) {
    return item.number;
  });

  var justMod2Or3 = justNumbers.filter(function (item) {
    return item % 2 === 0 || item % 3 === 0
  });

  var operation = justMod2Or3.reduce((acumulado, atual) => {
    return (acumulado + 1) * atual;
  }, 0);

  var operation2 = justMod2Or3.reduceRight((acumulado, atual) => {
    return (acumulado + 1) * atual;
  }, 0);

  var name = ['Mar', 'cos', 'tes', 'te'];
  var reduceP = name.reduce((acum, atual) => {
    return acum + 'P' + atual;
  }, '');

  var inversedName = name.reduceRight((acum, atual) => {
    return acum + atual;
  });

  if (numberObjects.indexOf({ number: 2 }) > -1) {
    console.log('Existe um objeto {number:2} em numberObjects!');
  } else {
    console.log('Não existe');
  };

  if (numberObjects.lastIndexOf(numberObjects[1], 2) > -1) {
    console.log('Existe um objeto {number:2} em numberObjects!');
  } else {
    console.log('Não existe');
  };

  if (Array.isArray(justMod2Or3)) {
    console.log(justMod2Or3.toString());
  };

})();