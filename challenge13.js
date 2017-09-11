(function(){
    console.log([1,2,3,4,5].toString());
    
    var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
    var sudeste = ['Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];
    var brasil = sul.concat(sudeste);
    console.log(brasil);
    
    //add 3 itens in begin of array
    brasil.unshift('Acre','Amapa','Amazonas')
    console.log(brasil);

    //remove the first item of array brasil - shift remove begin and pop remove in the item of end
    console.log(brasil.shift())

    var newSul = brasil.slice(2,5);
    console.log(newSul);
    console.log(brasil);

    var nordeste = [
        'Alagoas',
        'Bahia',
        'Ceara',
        'Maranhão',
        'Paraiba',
        'Pernambuco',
        'Piaui',
        'Rio Grande do Norte',
        'Sergipe'
    ];
    console.log(nordeste);

    var newSudeste = brasil.splice(5);
    console.log(newSudeste,brasil);

    brasil = brasil.concat(nordeste);
    console.log(newSudeste);
    console.log(brasil);

    var newBrasil = [];
    brasil.forEach(function(item, index){
        newBrasil.push({
            id:index,
            estado:item
        });
    });
    console.log(newBrasil);

    var every = brasil.every(function(item){
        return item.length > 7;
    });
    console.log(every ? 'Sim todos os estados tem mais de 7 letras' : 'Nem todos os estados tem 7 letras');

    var some = brasil.some(function(item){
        return item === 'Ceara';
    });
    console.log(some ? 'Ceara esta incluido' : 'Ceara não esta incluido' )

    var map = newBrasil.map(function(item,index){
        return{
            id: item.id + 1,
            estado: item.estado + ' pertence ao Brasil'
        };
        /*item.id++;
        item.estado += ' pertence ao Brasil';
        return item;*/
    });
    console.log(map);

    var filter = map.filter(function(item,index){
        return item.id % 2 === 0;
    })
    console.log(filter);

})()