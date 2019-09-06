// function tugaspanggilNestedArray(value){
//   var array1      = []
//   var array2      = []
//   var array3      = []
//   var arrayFinal  = []
//
//   for (var i = 0; i < value.length; i++) {
//         array1.push(value[i][0])
//       }
//       arrayFinal.push(array1)
//
//       for (var i = 0; i < value.length; i++) {
//             array2.push(value[i][1])
//           }
//           arrayFinal.push(array2)
//
//           for (var i = 0; i < value.length; i++) {
//                 array3.push(value[i][2])
//               }
//               arrayFinal.push(array3)
//
// for (var i = 0; i < array.length; i++) {
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
//   array[i]
// }
//
//   console.log(arrayFinal);
// }

function mapping(arr) {

  let totalRow = arr.length
  let totalCol = arr[0].length

  let result = []

  for(let i = 0; i < totalCol; i++) {
    for(let j = 0; j < totalRow; j++) {

      if(!result[i]) {
        result[i] = []
      }

      result[i][j] = arr[j][i]

    }
  }

  console.log(result)

}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

mapping(nestedArray)
// tugaspanggilNestedArray(nestedArray)
