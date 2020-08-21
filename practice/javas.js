const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const container = document.getElementById('images');

let counter = 0;

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:800, fill:'forwards'})
  if(counter === 10){
    counter = -1;
  }

  counter++;
  container.style.backgroundImage = `url(Images/bg_${counter}.jpeg)`
}


function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:800, fill:'forwards'})
  if(counter === 0){
    counter = 10;
  }
  
  counter--;
  container.style.backgroundImage = `url(Images/bg_${counter}.jpeg)`
}