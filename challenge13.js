(function () {
    [1, 2, 3, 4, 5, 6].toString();

    var sul = ['parana', 'santa catarina', 'rio grande do sul'];
    var sudeste = ['espirito santo', 'minas gerais', 'rio de janeiro', 'sao paulo'];
    var brasil = sul.concat(sudeste);
    brasil.unshift('acre', 'amapa', 'amazonas');
    brasil.shift();

    var newSul = brasil.slice(2, 5);
    console.log(brasil);


})();