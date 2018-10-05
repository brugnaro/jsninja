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

  console.log(justMod2Or3)

})();