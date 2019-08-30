// Buatlah perulangan array dengan forEach yang mana array didapat dari String “Saya ingin belajar bersama” sehingga jika ditampilkan akan seperti gambar berikut ini :

function panggilForEach(){
    var kalimat = 'Saya ingin belajar bersama';
    var data = kalimat.split(' ');

    data.forEach(function(item, index, array){
        console.log('Item : ', item, 'Index ke ', index)
    }
    )
    
}

panggilForEach();