// Buatlah Program Dengan Spesifikasi dibawah ini :
// Teman teman buatlah sebuah variabel array dengan 4 buah nama buah buahan pisang , jeruk , apel dan mangga
// Setelah itu teman teman tampilkan nilai awal array tersebut, lakukan perintah pop dan shift sehingga hasilnya akan seperti ini :

var buah = ['pisang','jeruk','apel','mangga']
console.log('Array:',buah);

buah.pop()      //element terakhir (mangga) dihapus dari array
console.log('Array dengan POP:',buah)

buah.shift()    //element pertama (pisang) dihapus dari array
console.log('Array dengan switch:',buah)

var x    = buah.pop()   //x berisi element terkahir, yaitu mangga
var y    = buah.shift() //y berisi element terkahir, yaitu mangga
console.log(x,'dan',y);