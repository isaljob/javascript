// Buatlah perubahan kata “masak” menjadi “makan” dalam kalimat “Saya belajar masak nasi goreng” sehingga akan tampil seperti gambar berikut ini :

var kalimat = "Saya belajar masak nasi goreng"

function gantiKata(){
    console.log(kalimat);
    console.log(kalimat.replace("masak","makan"));
}

gantiKata();