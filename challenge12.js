//função auto executavel
(function(){
    var person = {
        name: 'marcos',
        lastname:'rodrigues',
        age: 30
    }
    console.log("propriedade de person");
    console.log(Object.keys(person));

    var books = [];
    books.push({name:'JQuery', pages:250});
    books.push({name:'JS Alto Desempenho', pages:150});
    books.push({name:'CSS3', pages:280});
    console.log('\nLista de livros');
    console.log('');
    console.log(books);

    var lastBook = books.pop();
    console.log(lastBook);

    console.log(books);

    //convertendo para string
    books = JSON.stringify(books);
    console.log(books);

    //convertendo para obj
    books = JSON.parse(books);
    console.log(books);

    for(var i=0; i < books.length; i++){
        for(var prop in books[i]){
            console.log(prop + ':' + books[i][prop]);
        }
    }

    var myName = ['m','a','r','c','o','s'];
    console.log(myName.join(''));
    console.log(myName.reverse().join(''));
    console.log(myName.sort());
}())