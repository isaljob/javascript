function panggilObjects() {
  var mobil = {
    type: 'Sedan',
    harga: 20000,
    warna: 'Putih',
    tahun: [2000,2001,2002,2003]
  }

  console.log(mobil);
  console.log(mobil.warna);
  console.log(mobil.type);
  console.log(mobil.harga);
  console.log(mobil.tahun);
  console.log(mobil.tahun[0]);
  console.log(mobil.tahun[mobil.tahun.length-1]);
}

panggilObjects()
