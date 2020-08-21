const counter = document.getElementById('counter');
const addCount = document.getElementById('addCountBtn');
const lowerCount = document.getElementById('lowerCountBtn');


let count = 0;

function AddCount(){
  count++;
  counter.innerHTML = count;
  if(counter.innerHTML >'0'){
    counter.style.color = '#4caf50';
  }
  else if(counter.innerHTML === '0'){
     counter.style.color = 'black';
  }
  counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:400,fill:'forwards'});
}


function LowerCount(){
  count--;
  counter.innerHTML = count;
  if(counter.innerHTML < '0'){
    counter.style.color = 'red';
  }
  else if(counter.innerHTML === '0'){
     counter.style.color = 'black';
  }

 counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:400,fill:'forwards'});
}


