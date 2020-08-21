function changeColor(){
let hexcol = '#';
var hexnum = [0,1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']

const hex = document.getElementById('hex');

var body = document.getElementById("bodyId");
for (let i = 0; i<6;i++){
    let random = Math.floor(Math.random()*hexnum.length);
    hexcol+=hexnum[random];
}
body.style.backgroundColor = hexcol;

hex.innerHTML = hexcol;
} 