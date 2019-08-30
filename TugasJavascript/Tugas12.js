// Buatlah Program Dengan Spesifikasi dibawah ini :
// Teman teman buatlah sebuah variabel array dengan 4 buah nama buah buahan pisang , jeruk , apel dan mangga
// Setelah itu teman teman tampilkan nilai awal array tersebut, lakukan perintah pop dan shift sehingga hasilnya akan seperti ini :

var buah = ['pisang','jeruk','apel','mangga']

const panggilBuah = () =>{
    console.log(buah);
    buah.pop()
    console.log(buah);
    buah.shift()
    console.log(buah);
}

panggilBuah();