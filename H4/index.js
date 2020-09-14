/*H4:1*/

var mijnauto = {
    kleur: "groen",
    merk: "ford",
    snelheid: 0,

    toeteren: function() {
        console.log("toet!")
    },

    gasgeven: function() {
        this.snelheid += 5
        console.log(this.snelheid);
    }
}

mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();


/*H4:2*/



var pictures = [1,2,3,4,5,6,7,8,9];
var counter = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/panda9.jpg')";

slideholder.addEventListener("click", function() {
    slideholder.style.backgroundImage = "url('img/panda" + getPanda() + ".jpg ')";
});

function getPanda() {
    if(counter >= pictures.length) {
        counter =1;
    } else {
        counter ++;
    }

    console.log(counter);
    return counter;
    
}









