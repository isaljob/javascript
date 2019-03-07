function panggilNestedArray() {
  var dataNama = [["isal1","eno1","mimo1"],
                  ["isal2","eno2","mimo2"],
                  ["isal3","eno3","mimo3"]]

  console.log(dataNama.length);
  console.log(dataNama[0]);
  console.log(dataNama[1]);
  console.log(dataNama[dataNama.length-1]);

  console.log(dataNama[0][0]);
  console.log(dataNama[1][1]);
  console.log(dataNama[2][2]);
  }

panggilNestedArray()
