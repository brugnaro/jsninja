(function(){
    var once=false;
    do{
       console.log('Entrou ao menos uma vez!'); 
    }while(once); 
    
    var person={
        name:'marcos',
        age:30,
        weight:'100kg',
        birthday:'june28',
    }

    var counter=0;
    for(prop in person){
        console.log('the '+prop+' of person is '+person[prop]+'')
        counter++;
    };
    console.log('The person has '+counter+' properties')

    function moreThan(param){
        return param>person.age ? true : false;
    }
    console.log('The person has more than '+person.age+' years old?',moreThan(42))

    var numbers=[];
    for(var i=0;i<20;i++){
        if(i>10) break;
        numbers.push(i)
    }
    console.log(numbers);

    numbers=[];
    for(var i=0;i<=20;i++){
        if(i%2!==0){
            continue;
        }
        numbers.push(i);
    }
    console.log(numbers)

})();

