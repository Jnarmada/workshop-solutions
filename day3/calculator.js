function appendToDisplay(value)
{
    document.getElementById('display').value+=value;
}
function calculate()
{
  var display=document.getElementById('display');
  try{
    display.value=eval(display.value);
  }catch(e){
    display.value='Error';
  }
}
function clearDisplay(){
    document.getElementById('display').value='';
}
function calculatePercentage(){
    var display=document.getElementById('display').value;
    try{
       var result=eval(display)/100;
       document.getElementById('display').value=result;
    }catch(e){
        document.getElementById('display').value='Error';
    }
}
function backspace(){
    var display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
}