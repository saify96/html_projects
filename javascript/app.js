// var userName = prompt('What is your name? ');
// console.log(userName);
// alert ("Welcome " + userName);

// var carName = prompt ("What is your favourite car?" , "BMW , Mercedes-Benz");

// if (carName === 'BMW') {
//     document.write ('<img src="https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_960_720.jpg" width="300px">')
// }
// else if (carName === 'Mercedes-Benz') {
//     document.write ('<img src="https://cdn.pixabay.com/photo/2018/07/01/20/01/mercedes-3510327_960_720.jpg" width="300px">')
// }
// else{
//     alert ("Searh for your favourite car inside our site")
// }



var budget = prompt('what is your budget?');
while ( budget < '5000') {
    confirm("you should have at least 5000$!" )
    budget = prompt ("what is your budget?");
}


var visit = prompt("Is this your first time in our site ?" , "yes , no");

if (visit == 'yes'){
    confirm("welcome to our website , hope you will enjoy!" )
}
    else if ( visit == 'no') {

        var rate = prompt ("could you rate our website please ?", "1-5");
        while (rate < 0 || rate > 5 ){
        rate = prompt ("could you rate our website please ?", "1-5");
    }
    }

for(var i = 1 ; i <=rate; i++ ){
     document.write ('<img src="https://cdn.pixabay.com/photo/2013/07/12/19/22/hitch-154664__340.png"/>');
    }
