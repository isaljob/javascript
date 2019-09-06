//Reg Exp - Search
function panggilRegExp() {
  let str = 'hflksdjfhqwoeriyzxczas'
  return str.search(/a/);
}
console.log(panggilRegExp());


console.log('========================================================='); //pembatas
// regular expression dengan Flag i
function panggilRegExpFlag_i() {
  let str = 'abcdefghijklmnopqrstuvwxyz';

  console.log(str.search(/K/)); // case sensitive
  console.log(str.search(/K/i)); //i mengabaikan case sensitive
  console.log(str.search(/k/i)); //i mengabaikan case sensitive
}
panggilRegExpFlag_i()


console.log('========================================================='); //pembatas
// regular expression dengan Flag g
function panggilRegExpFlag_g() {
  let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";

  console.log(str.match(/c/));
  console.log(str.match(/c/g));
}
panggilRegExpFlag_g()


console.log('========================================================='); //pembatas
// RegExp dengan test()
function panggilRegExp_test() {
  let data = "Belajar Satu Tahun Bersama Niomic";

  console.log(/Satu/.test(data))
}
panggilRegExp_test()


console.log('========================================================='); //pembatas
// RegExp dengan mengambil huruf angka dan spasi
function panggilRegExp_HurufAngkaSpasi(value) {
   var hurufAngka = value.match(/\w/g)      //huruf dan angka
   var angka = value.match(/\d/g)           //angka saja
   var spasi = value.match(/\s/g)           //spasi saja
   var bukanHurufAngka = value.match(/\W/g) //karakter selain huruf dan angka
   var selainAngka  = value.match(/\D/g)    //karakter selain angka
   var selainSpasi  = value.match(/\S/g)    //karakter selain spasi

   console.log(hurufAngka)
   console.log(angka);
   console.log(spasi);
   console.log(bukanHurufAngka);
   console.log(selainAngka);
   console.log(selainSpasi);
}
panggilRegExp_HurufAngkaSpasi("Bulan ke 1 sd ke 4");


// RegExp dengan mengambil karakter spesifik
console.log('========================================================='); //pembatas
function panggilRegExp_Spesifik(value) {
  var data1 = value.match(/ke/g);
  var data2 = value.match(/[ke]/g)
  var data3 = value.match(/[^ke]/g)
  var data4 = value.match(/[a-i]/g)
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);
 }
 panggilRegExp_Spesifik("Bulan ke 1 sd ke 4");
