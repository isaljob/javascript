function panggilNestedArray(value){

  // console.log('id :',value[0][0]);
  // console.log('name :',value[0][1]);
  // console.log('company :',value[0][2]);
  //
  // console.log('id :',value[1][0]);
  // console.log('name :',value[1][1]);
  // console.log('company :',value[1][2]);
  //
  // console.log('id :',value[2][0]);
  // console.log('name :',value[2][1]);
  // console.log('company :',value[2][2]);

  // atau menggunakan code berikut

  for (var i = 0; i < value.length; i++) {
    console.log('id :',value[i][0]);
    console.log('name :',value[i][1]);
    console.log('company :',value[i][2]);
  }

}

var nestedArray = [
  [1, "Mark Zuckerberg", "Facebook"],
  [2, "Elon Musk", "Tesla"],
  [3, "Bill Gates", "Microsoft"],
  [4, "Steve Jobs", "Apple"]
]

panggilNestedArray(nestedArray)

// -----------------------------------------------------------------------
