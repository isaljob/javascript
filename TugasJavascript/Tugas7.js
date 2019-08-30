// Buatlah sebuah variabel array dengan maksimal data 10 nilai yang berisikan tinggi badan;
// Tampilkan array tersebut dengan menggunakan perulangan biasa dan perulangan for off.
// Teman-teman analisis perbedaan hasilnya

// menampilkan array dengan for
var tinggibadan = [155,150,160,165,170,175,195,190,180,185];

function perulanganfor() {
    for(i=0;i<10;i++) {
        console.log(tinggibadan[i]);
    }
}
perulanganfor();

// menampilkan array dengan for-of
function perulanganforof() {
    for(let x of tinggibadan) {
        console.log(x);
    }
}
perulanganforof();