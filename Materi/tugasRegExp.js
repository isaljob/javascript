// Tugas 1
// buat seperti berikut
// [ 'c', 'C' ]
// [ 'k', 'K' ]
// [ 'l', 'L' ]
console.log('=========================Tugas 1================================'); //pembatas
function panggilRegexp1(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
 let c = []
 let k = []
 let l = []

 //Tulis Code Jawaban Kamu Di Bawah ini
 c = str.match(/C/g);
 c = str.match(/c/g).concat(c)

 k = str.match(/K/g);
 k = str.match(/k/g).concat(k)

 l = str.match(/L/g);
 l = str.match(/l/g).concat(l)

 console.log(c);
 console.log(k);
 console.log(l);
}
panggilRegexp1()

// Tugas 2
console.log('=========================Tugas 2================================'); //pembatas
function panggilRegexp2() {
 let data = "Belajar-Satu-Tahun-Bersama-Niomic";
 let jumlahDash = data.match(/-/g).length
 let hasil = data.replace(/-/,' ')

 //Tulis Code Jawaban Kamu Di Bawah ini
 for (var i = 0; i < jumlahDash-1; i++) {
   hasil = hasil.replace(/-/,' ')
 }
 // data.replace(/-/,' ')
 console.log(hasil);

}
panggilRegexp2()


// Tugas 3
console.log('=========================Tugas 3================================'); //pembatas
function panggilRegexp(value) {
   if (/html/.test(value)) {
     console.log(value);
   } else if (/javascript/.test(value)) {
     console.log('Belajar');
   } else if (/css/.test(value)) {
     console.log(value);
   } else if (/php/.test(value)) {
     console.log('Belajar');
   }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");
