function panggilSplit() {
  var kalimat = 'kita sedang belajar js'
  var iniSplit = kalimat.split(' ')
  var iniJoin = iniSplit.join(' ')

  // return iniJoin
  console.log('ini kalimat: ', kalimat)
  console.log('kalimat di split: ', iniSplit);
  console.log('hasil split di join: ', iniJoin);
}

// console.log(panggilSplit());

panggilSplit();