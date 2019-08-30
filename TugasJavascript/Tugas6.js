// Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
// Setelah itu teman teman buatlah sebuah kondisi pada perulangan jika dia bilangan genap dia akan menampilkan text bilangan genap bukan angkanya, tetapi kalau yang tampil bilangan ganjil , biarkan angka nya yang ditampilkan.
// Tampilkan hasilnya dengan console.log()

const perulangan=() => {
    for (i=0; i <=20; i++){
        if (i % 2 == 0) {
            console.log("Bilangan Genap");
        } else {
            console.log(i);
        }
    }
}

perulangan();