// perulangan dengan for each
function panggilForEach() {
  var data = ['a','b','c']
  data.forEach(function(item,index,array) { //(item, index, array) boleh diganti dengan alias apa saja
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

panggilForEach()
