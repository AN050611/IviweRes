const name = document.getElementById('name');
const surname = document.getElementById('surname');
const res = document.getElementById('res');
const submit = document.getElementById('submit');
const fem = document.getElementById('fem');
const male = document.getElementById('male');
const date = document.getElementById('date');
const update = document.getElementById('update');


submit.onclick = function(){

    let games = [];

    if (document.getElementById("egg").checked) games.push("Egg and Spoon race");
    if (document.getElementById("tug").checked) games.push("tug-of-war");
    if (document.getElementById("three").checked) games.push("sack race");
    if (document.getElementById("sake").checked) games.push("three-legged race");
    if (document.getElementById("water").checked) games.push("balloon stomp");
    if (document.getElementById("ballon").checked) games.push("Water sponge relay");

    
   if(fem.checked){
    res.textContent = `Hi Miss ${name.value} ${surname.value} thank you for filling in the form, you chose ${games} as the games you would like to play on the sport day which you prefer it to be on the ${date.value}.`;
   }

   else if(male.checked){
    res.textContent = `Hi Mr ${name.value} ${surname.value} thank you for filling in the form, you choose ${games}.join(", ") as the games you would like to play on the sport day which you prefer it to be on the ${date.value}.`;
   }

   else{
    res.textContent = `Please mke selections in oreder to be able to register to partsipate on sport day.`;
   }

   update.textContent =`The finalized post will be shared on group whatsapp.`;
}
