// Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
// Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
// Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

var x = 122;
var y = 115;
var z = 105;

var top = 0;
var mid = 0;
var low = 0;

if(x>y){
    if(x>z){
        top = x;
        mid = y;
        low = z;
        console.log(x);
    }
} else if (y>z) {
    top = y;
    mid = z;
    low = x;
    console.log(y);
} else {
    top = z;
    mid = y;
    low = x;
    console.log(z);
}

console.log(top, mid, low);