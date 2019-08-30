// Buatlah perulangan kata sehingga akan tampil seperti gambar berikut :

var kata = "Semangat..."

function panggilSemangat(){
    console.log(kata.repeat(5));
}



// Buatlah tampilan bintang dengan fungsi repeat sehingga akan tampil seperti berikut ini :
var bintang = "*****"

function panggilBintang(){
    for(i=1;i<5;i++){
        console.log(bintang.repeat(i));
    }

    for(j=5;j>0;j--){
        console.log(bintang.repeat(j));
    }
}

panggilSemangat();
console.log("");
panggilBintang();
console.log("");
panggilSemangat();
