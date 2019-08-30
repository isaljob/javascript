// Buatlah Program Dengan Spesifikasi dibawah ini :
// Teman teman buatlah sebuah variabel array dengan 2 buah nama buah buahan pisang , jeruk
// Setelah itu teman teman tampilkan nilai awal array tersebut, lakukan perintah unshift dan tambahkan data  apel dan mangga seperti :

var buah = ['pisang','jeruk']

const panggilBuah = () =>{
    console.log(buah);
    buah.unshift('apel','mangga')
    console.log(buah);
}

panggilBuah();