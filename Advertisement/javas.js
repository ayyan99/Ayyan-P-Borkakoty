function check(){
    var email1 = document.getElementById('email1');
    var email2 = document.getElementById('email2');
    if (email1.value != email2.value){
        alert("The two emails doesn't match!");
        return false;
    }
}

function nicknames(){
    if(document.getElementById('yesnick').checked){
        document.getElementById('nick').style.display="inline";
        document.getElementById('nicks').setAttribute('required',true);
    }
    
    else{
        document.getElementById('nicks').removeAttribute('required');
        document.getElementById('nick').style.display="none";
    }
}