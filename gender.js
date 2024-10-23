const female = document.getElementById("female");
const male = document.getElementById("male");
const msg = document.getElementById("msg");
const myGender = document.getElementById("myGender");


myGender.onclick = function(){
    if (female.checked){
        msg.textContent = "You are a female";
    }

    else if(male.checked){
        msg.textContent = "You are a male";
    }

    else{
        msg.textContent = "please selsect your gender"
    }
}


