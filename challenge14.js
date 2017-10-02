(function () {
  var numberObjects = [];
  for (var i = 1; i <= 10; i++) {
    numberObjects.push({ number: i });
  }
  console.log(numberObjects);

  var justNumbers = numberObjects.map(function (item) {
    return item.number;
  });
  console.log(justNumbers);

  var justMod2Or3 = justNumbers.filter(function (item) {
    return item % 2 === 0 || item % 3 === 0
  });
  console.log(justMod2Or3);

  var operation = justMod2Or3.reduce(function (acum, atual) {
    return (acum + 1) * atual
  }, 0);
  console.log(operation);

  var operation2 = justMod2Or3.reduceRight(function (acum, atual) {
    return (acum + 1) * atual
  }, 0);
  console.log(operation2);

  var name = ['mar', 'cos'];
  var reduceP = name.reduce(function (acumulado, atual) {
    return acumulado + 'P' + atual;
  }, '');
  console.log(reduceP);

  var inversedName = name.reduceRight(function (acum, atual) {
    return acum + atual;
  });
  console.log(inversedName);

  console.log(numberObjects);
  if (numberObjects.indexOf({ number: 2 }) > -1) {
    console.log('Existe um objeto {number: 2} em numberObjects!')
  } else {
    console.log('Não existe um objeto {number: 2} em numberObjects!')
  }

  if (numberObjects.lastIndexOf({ number: 2 }, 2) > -1) {
    console.log('Existe um objeto {number: 2} em numberObjects!')
  } else {
    console.log('Não existe um objeto {number: 2} em numberObjects!')
  }

  if (Array.isArray(justMod2Or3)) {
    console.log(justMod2Or3.toString());
  }

}());