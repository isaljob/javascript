// Buatlah pencarian kata “are”,”words” dalam kalimat :
//  “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.”
// sehingga akan tampil seperti gambar berikut :

var kalimat = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."

// search()
var indexKata = kalimat.search("are");
var arrResult = []
var arrKata = []

function panggilHasil(kata,indeks,inputan){
    arrKata.push(kata);
    arrKata.push("index: "+indeks);
    arrKata.push("input: "+inputan);

    arrResult.push(arrKata);
    arrResult.push(arrKata);

    return arrResult
}

console.log(panggilHasil("are",indexKata,kalimat));
