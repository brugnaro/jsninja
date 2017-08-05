/*var championship = 'brasileiro';
console.log(championship);

var teams = ['sao paulo','corinthians','flamengo','atletico','cruzeiro'];
console.log('Times que estao participando do campeonato:' + teams);

showTeamPosition=(npos)=>{
    return (npos<1 || npos>5) ? "not position information" : "o time que esta em " + npos + "º lugar é o "+ teams[npos-1] +"";
}
console.log(showTeamPosition(1));
console.log(showTeamPosition(3));
console.log(showTeamPosition(2));
console.log(showTeamPosition(5));
console.log(showTeamPosition(8));
console.log(showTeamPosition(0));

var num=20;
while(num<=30){
    console.log(num++);
}*/

convertToHex=(color)=>{
    var hexa;
    switch(color){
       case 'red':
        hexa='#FF0000';
        break; 
       case 'blue':
        hexa='#0000FF';
        break;  
       case 'green':
        hexa='#00FF00';
        break;  
       case 'black':
        hexa='#000000';
        break;  
       case 'white':
        hexa='#FFFFFF';
        break;  
       default:
        return 'nao temos o equivalente hexadecimal para ' + color + '.'; 
    }
    return 'o hexadecimal para a cor ' + color + ' é ' + hexa + '.';
}
console.log(convertToHex('red'))
console.log(convertToHex('blue'))
console.log(convertToHex('green'))
console.log(convertToHex('black'))
console.log(convertToHex('white'))
console.log(convertToHex('purple'))
console.log(convertToHex('ciano'))
console.log(convertToHex('magento'))