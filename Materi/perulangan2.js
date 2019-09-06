// cara menghasilkan array baru dengan for
function panggilPerulanganFor() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 var dataBaru = [];
 for (var i = 0; i < dataKota.length; i++) {
   dataBaru.push('Kota: ' + dataKota[i]);
 }
 console.log(dataBaru);
}

panggilPerulanganFor();


// cara menghasilkan array baru dengan forEach
function panggilPerulanganForEach() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 var dataBaru = [];
 dataKota.forEach((item, index, array) => {
   return dataBaru.push('Kota : ' + item);
 });
 console.log(dataBaru);
}

panggilPerulanganForEach();

// cara menghasilkan array baru dengan Map
function panggilPerulangan() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 var dataBaru = dataKota.map((item, index, array) => {
   return 'Kota : ' + item;
 });
 console.log(dataBaru);
}

panggilPerulangan();
