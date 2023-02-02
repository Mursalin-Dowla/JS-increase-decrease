let x=0;
function increase(){
   x = x+1;
  document.getElementById('show').innerHTML= x;
  document.getElementById('range').value= x;

}
function decrease(){
  if (x<=0){
    x=0
  }
  else{
    x = x-1;
  }
 document.getElementById('show').innerHTML= x;
 document.getElementById('range').value= x;
}
function reset(){
   x =0;
 document.getElementById('show').innerHTML= x;
 document.getElementById('range').value= x;
}
function getRange(){
  x= document.getElementById('range').value;
  document.getElementById('show').innerHTML= x;
}