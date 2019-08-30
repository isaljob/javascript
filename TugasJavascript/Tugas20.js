// Buatlah pencarian kata “are”,”words” dalam kalimat :
//  “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.”
// sehingga akan tampil seperti gambar berikut :

var kalimat = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."

// match()
function kataMatch(){
    console.log(kalimat.match("are"));
    console.log(kalimat.match("words"));
}

kataMatch();
