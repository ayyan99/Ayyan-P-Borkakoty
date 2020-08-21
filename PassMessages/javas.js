const sendBtn = document.getElementById('sendBtn');
const messageIn = document.getElementById('messageIn');
const messageOut  = document.getElementById('messageOut');

function sendMsg(){
    let content = messageIn.value;

    if (content === ''){
        alert('Please Enter a valid message');
    }
    else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}