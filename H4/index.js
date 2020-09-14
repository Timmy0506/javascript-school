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

/*H4:3*/

var pictures2 = [1,2,3,4,5,6,7,8,9];
var counter2 = 0;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('img/panda7.jpg')";

slideholder2.addEventListener("click", function() {
    slideholder2.style.backgroundImage = "url('img/panda" + getPanda() + ".jpg ')";
});

function getPanda() {
    if(counter2 >= pictures2.length) {
        counter2 =1;
    } else {
        counter2 ++;
    }

    console.log(counter2);
    return counter2;
    
}

var pictures3 = [1,2,3,4,5,6,7,8,9];
var counter3 = 0;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('img/panda4.jpg')";

slideholder3.addEventListener("click", function() {
    slideholder3.style.backgroundImage = "url('img/panda" + getPanda() + ".jpg ')";
});

function getPanda() {
    if(counter3 >= pictures3.length) {
        counter3 =1;
    } else {
        counter3 ++;
    }

    console.log(counter3);
    return counter3;
    
}












