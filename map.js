function panggilPerintahMap() {
  var dataKota = ['jakarta','bandung','bogor']
  dataKota.map((item,index,array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

panggilPerintahMap()


function panggilPerintahMap2() {
  var dataKota = ['jakarta','bandung','bogor']
  dataKota.map(function(item,index,array){
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

panggilPerintahMap2()
