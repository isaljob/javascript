function balikKata(kata) {
  // buat variable untuk menampung kata yang akan dibalik
  var kataBaru = []
  // ambil index terakhir dari kata yang akan balik, dikurangi 1 per loop
  for (var i = kata.length-1; i >= 0; i--) {
    kataBaru = kataBaru+kata[i]
  }
  return kataBaru
}
console.log(balikKata('Niomic'));
