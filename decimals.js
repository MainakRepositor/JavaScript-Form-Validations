function CheckDecimal(inputtxt) 
var decimal= /^[-+][0-9]+\.[0-9]+[eE][-+]?[0-9]+$/;  
if(inputtxt.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
} 
