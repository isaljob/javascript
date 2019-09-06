function deretAngka(n) {
  var deretBaru = ''
  for (var i = 1; i < n+1; i++) {
    if (i%15 === 0) {
      deretBaru = deretBaru+' '+'NIOMIC'
    } else if (i%3 === 0) {
      deretBaru = deretBaru+' '+'NIO'
    } else if (i%3 === 0) {
      deretBaru = deretBaru+' '+'MIC'
    } else {
      deretBaru = deretBaru+' '+i
    }
  }
  return deretBaru
}
console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
