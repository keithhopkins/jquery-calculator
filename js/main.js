
$(document).on('ready',function(){
  var currentNumber=0;
  var numbers = ['',''];
  var operator = '';
  var operators = ['+','-','x','\u00f7'];

  $('span').on('click',function(event){

    event.preventDefault();
    var digit = $(this).html();
    var curScreen = $('#screen').html();

    //checks if the current 'digit' is an operator
    if(contains(operators,digit)){
      currentNumber = 1;
      operator = digit;
    } else if(digit!=='='){
      numbers[currentNumber]+=digit;
    }

    if(digit==='C'){
      $('#screen').html('');
      numbers = ['',''];
      operator = '';
      currentNumber=0;
    } else {
      $('#screen').html(curScreen+digit);
    }

    if(digit==='='){
      var answer = solve(numbers,operator);
      $('#screen').html(answer);
      numbers[0]=answer;
      numbers[1]='';
      operator = '';
    }
    console.log('numbers',numbers);
    console.log('operator',operator);
  });
});

function contains(array, num){
  for(var i=0;i<array.length;i++)
    if(array[i]===num)
      return true;
  return false;
}

function solve(numbers,operator){
  var num1=Number(numbers[0]);
  var num2=Number(numbers[1]);
  switch(operator){
    case '+':  return num1+num2;
    case '-':  return num1-num2;
    case 'x':  return num1*num2;
    case '\u00f7':  return num1/num2;
  }
}
