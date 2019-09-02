// Tugas 26 Javascript
// Periksalah apakah Infinity atau Not Infinity dari deret bilangan 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 sehingga akan tampil seperti gambar berikut ini :

var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function panggilIsFinite(){
    for(x=0;x<deret.length;x++){
        if(isFinite(deret[x])==true){
            console.log('Angka',deret[x],'NOT Infinity.');
        }
    }
}

panggilIsFinite();