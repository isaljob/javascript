function panggilShift() {
  var kota = ['jakarta', 'bandung', 'jogja', 'malang', 'bogor']
  console.log(kota);
  console.log("=======================");

  var kota2 = kota.shift()
  console.log(kota2);

  var kota3 = kota.shift()
  console.log(kota3);

  return kota

}

console.log(panggilShift());
// panggilShift()
