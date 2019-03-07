// perulangan dengan for
function panggilPerulangan1() {
  var dataKota = ['jakarta','bandung','bogor']
  for (var i = 0; i < dataKota.length; i++) {
    console.log(dataKota[i]);
    console.log(i);
    console.log(dataKota);
  }
}

panggilPerulangan1()

// perulangan dengan foreach
function panggilPerulangan2() {
  var dataKota = ['jakarta','bandung','bogor']
  dataKota.forEach((item,index,array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilPerulangan2()

// perulangan dengan map
function panggilPerulangan3() {
  var dataKota = ['jakarta','bandung','bogor']
  dataKota.map((item,index,array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilPerulangan3()
