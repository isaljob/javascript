// Tugas 25 Javascript
// Buatlah filter,sorting dan reverse deret bilangan 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 dengan ketentuan filter angka lebih besar dari 10 sehingga akan tampil seperti gambar berikut ini :

var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

function panggilUrutkan(){
    console.log('Sebelumnya: ', deret.join(','));
    console.log('Ascending: ' , deret.sort().join(','));
    console.log('Descending: ', deret.reverse().join(','));
    console.log('Filter > 10: ',
        deret.filter(angka=>{
        return angka > 10;
    }).join(',')
    );
}

panggilUrutkan();