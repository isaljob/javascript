// Tugas 24 Javascript
// Buatlah sorting dan reverse dari deret angka array ini : 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66 sehingga akan tampil seperti gambar berikut ini : 

var deret = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]

function panggilUrutkan(){
    console.log('Sebelumnya: ', deret.join(','));
    console.log('Ascending: ' , deret.sort().join(','));
    console.log('Descending: ', deret.reverse().join(','));
}

panggilUrutkan();

