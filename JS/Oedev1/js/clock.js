
let isim = prompt("Isminizi giriniz lütfen");
//querySelector örnegi
let myName = document.querySelector('#myName');
myName.innerHTML = isim;
setInterval(showTime, 1000);

function showTime() {
    let dt = new Date();
    //getElementById örnegi
    document.getElementById("myClock").innerHTML = dt.toLocaleTimeString() + " " + dt.toLocaleDateString('tr-TR', {weekday:'long'});
}