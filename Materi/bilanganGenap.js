// mencari bilangan genap dengan modulus
function panggilBilanganGenap() {
  var bilanganGenap = []
  for (var i = 0; i < 10; i++) {
    if (i%2 === 0) {
      bilanganGenap.push(i)
    }
}
return bilanganGenap;
}
console.log(panggilBilanganGenap());
