var plaatjes = document.getElementsByTagName("img"); 
var random = 0;

var randomNumbers = [];

while(randomNumbers.length < 9 ) { 
    random = Math.floor(Math.random()*9)+1;
    if(randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
    }
    

}
random = 0;
for(var plaatje in plaatjes) {
    console.log(randomNumbers);
    plaatjes[plaatje].src = "img/panda"+randomNumbers[random]+".jpg"
    random++;

}

/*
for(var i = 0; i < plaatjes.lenght; i++) {
    random = Math.floor(Math.random() * 9) + 1;
    plaatjes[i].src = "img/panda "+random+" .jpg";
}
*/







