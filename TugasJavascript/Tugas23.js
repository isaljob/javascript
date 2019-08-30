// Tugas 23 Javascript
// Buatlah filter deret bilangan 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66 dengan ketentuan angka lebih besar dari 15 sehingga akan tampil seperti gambar berikut ini : 


var deret = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]

// filter cara 1
// membuat function panggilFilter untuk kemudian di panggil saat declare variable cara1
const panggilFilter=(angka) => {
    return angka >= 15;
}

var cara1 = deret.filter(panggilFilter);

console.log('cara1: ', cara1);


// filter cara 2
// langsung membuat function saat declare variable cara2
var cara2 = deret.filter(angka => {
    return angka >= 15;
})

console.log('cara2: ', cara2)