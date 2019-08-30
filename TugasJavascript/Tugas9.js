// Buatlah sebuah variabel object versi teman teman.
// Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
// Setelah itu tampilkan objectnya dengan perulangan for in.

function panggilForIn(){
    var biodata = {
      nama : 'Faishal',
      umur : 29,
      alamat: 'Palbatu',
      pekerjaan: 'Karyawan',
      hobi : 'Belajar'
    }
    for(var x in biodata){
      console.log(biodata[x]);
    }
  }
panggilForIn();