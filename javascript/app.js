var userName = prompt('What is your name? ');
console.log(userName);
alert ("Welcome " + userName);

var carName = prompt ("What is your favourite car?" , "BMW , Mercedes-Benz");

if (carName === 'BMW') {
    document.write ('<img src="https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_960_720.jpg" width="300px">')
}
else if (carName === 'Mercedes-Benz') {
    document.write ('<img src="https://cdn.pixabay.com/photo/2018/07/01/20/01/mercedes-3510327_960_720.jpg" width="300px">')
}
else{
    alert ("Searh for your favourite car inside our site")
}


