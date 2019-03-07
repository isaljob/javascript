// menggunakan FOR
function arrayGanjilFor() {
  var arr = [1,2,3,4,5]
  var arrGanjil = []

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 1) {
      arrGanjil.push(arr[i])
    }
  }
  console.log(arrGanjil);
}

arrayGanjilFor() //panggil function arrayGanjil

// menggunakan filter
function arrayGanjilFilter() {
  var arr = [1,2,3,4,5]
  var arrGanjil = arr.filter(function(bilangan){
    return bilangan%2 === 1
  })
  console.log(arrGanjil);
}

arrayGanjilFilter()


// membuat array baru dengan filter
function panggilFilter() {
  var arr = [
    {negara: 'Indonesia', benua: 'Asia'}, //ini adalah object
    {negara: 'Jerman', benua: 'Eropa'},
    {negara: 'Spanyol', benua: 'Eropa'},
    {negara: 'Korea', benua: 'Asia'},
    {negara: 'Portugal', benua: 'Eropa'},
    {negara: 'Amerika Serikat', benua: 'Amerika'},
  ];

  var benuaEropa = arr.filter(function(item) {
    return item.benua === 'Eropa'
  })
  return benuaEropa
}

console.log(panggilFilter());
