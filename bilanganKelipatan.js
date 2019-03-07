// mencari bilangan kelipatan 5 dengan modulus
function panggilBilanganKelipatan() {
  var bilanganKelipatan = []
  for (var i = 0; i < 50; i++) {
    if (i%5 === 0) {
      bilanganKelipatan.push(i)
    }
}
return bilanganKelipatan;
}
console.log(panggilBilanganKelipatan());
