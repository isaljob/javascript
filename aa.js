// 37. Perulangan FOR OF
var angka = [1,2,3,4,5,6,7];

for (let x of angka) {
    console.log(x);
}

// 39. Format Dasar Object
function panggilObjects() {
    var mobil = {
      type: 'Sedan',
      harga: 20000,
      warna: 'Putih',
      tahun: [2000,2001,2002,2003]
    }
  
    console.log(mobil);
    console.log(mobil.warna);
    // console.log(mobil.type);
    // console.log(mobil.harga);
    // console.log(mobil.tahun);
    // console.log(mobil.tahun[0]);
    console.log(mobil.tahun[mobil.tahun.length-1]);
  }
  
  panggilObjects()

  // Mengubah Object Property
  function panggilObjectsProperty() {
    var mobil = {
      type: 'Sedan',
      harga: 20000,
      warna: 'Putih',
      tahun: [2000,2001,2002,2003]
    }
    // ubah property
    mobil.type  = 'MPV';
    mobil.tahun = 2019;

    console.log(mobil);
    console.log(mobil.warna);
    console.log(mobil.tahun);
  }

  panggilObjectsProperty();

  // Function Dalam Object
  const functionObject = () => {
    var x = {
      pesan : halo()
    }
    console.log(x.pesan);
  }

  function halo() {
    return "Halo sobat";
  }

  functionObject();

  // Nested Object
  function panggilNestedObjects() {
    var mobil = {
      type: 'Sedan',
      harga: 200000,
      warna: {
        warna1 : 'Putih',
        warna2 : 'Merah',
        warna3 : 'Hitam'
      },
      tahun: [2000,2001,2002,2003]
    }
    console.log(mobil.warna.warna2);
  }
  panggilNestedObjects();


  // Perulangan For-In
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

