// 0 array dikanan terhapus
function panggilSplice() {
  var kota = ['jakarta', 'bandung', 'jogja', 'malang', 'bogor']
  kota.splice(2,0,'palembang')
  return kota
}

// 3 array dikanan terhapus
function panggilSplice2() {
  var kota = ['jakarta', 'bandung', 'jogja', 'malang', 'bogor']
  kota.splice(2,3,'palembang')
  return kota
}

// spilce lanjutan, menghapus data pada array
function panggilSplice3() {
  var kota = ['jakarta', 'bandung', 'jogja', 'malang', 'bogor']
  console.log(kota.length-2);
  var kota2 = kota.length-5
  console.log(kota.length);
  console.log(kota2);
  kota.splice(2,kota.length-3)
  return kota
}

console.log(panggilSplice());
console.log(panggilSplice2());
console.log(panggilSplice3());
