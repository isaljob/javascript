// Buatlah Program Dengan Spesifikasi dibawah ini :
// Teman teman buatlah sebuah variabel untuk melakukan operasi pembagian , teman teman lakukan pembagian 37 dibagi tanggal lahir teman teman.
// Setelah itu teman teman tampilkan hasil pembagian tersebut.
// Setelah itu teman teman tampilkan kembali hasilnya dengan perintah math round , ceil dan floor.

var angka = 37;
var tanggalLahir = 12;

function panggilTugas14(){
    hasilBagi = angka/tanggalLahir;
    console.log(Math.round(hasilBagi))
    console.log(Math.ceil(hasilBagi))
    console.log(Math.floor(hasilBagi))
}

panggilTugas14();