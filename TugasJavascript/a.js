var separator = "-------------------------------------------------";
// var bisa diubah secara global
var varvar = "Hello varvar";
// let tidak bisa dibuah secara global, tetapi secara local
let varlet = "Hello varlet";
// const tidak bisa diubah
const varconst = "Hello varconst";
varvar = "varvar diubah";
varlet = "varlet diubah";
// varconst = "varconst diubah";

// bisa membuat variable tanpa var let dan const
// tetapi stasusnya menjadi var, bisa dipanggil secara global
inivariable = "ini variabel";

console.log(separator, "variable");
console.log(varvar);
console.log(varlet);
console.log(varconst);
console.log(inivariable);


// array
var angka = [22,33,44,55,66,77,88];

console.log(separator, "array");
console.log(angka[0]);
console.log(angka[10]);


// return function
const fungsi=() => {
    var ambil = "terambil";
    return ambil;
};

console.log(separator, "return function");
console.log(fungsi());


// function dengan 1 parameter
function panggilParameter1(kota1) {
    console.log(kota1);
   }
   panggilParameter1('Jakarta', 'Medan', 'Balikpapan');
   
   // function dengan lebih dari 1 parameter
   function panggilParameter2(kota1, kota2, kota3) {
    console.log(kota1);
    console.log(kota2);
    console.log(kota3);
   }

   console.log(separator, "function dengan parameter");
   panggilParameter2('Jakarta', 'Medan', 'Balikpapan');


// function dengan parameter default
const fungsi1=(par1 = "ini dafault") => {
    console.log(par1);
};

// jika param tidak diisi, maka akan me return default param, yaitu "ini default"
console.log(separator, "function dengan default parameter");
fungsi1("aku faishal");


// if-else condition
const fungsi2=() =>{
    var nilai = 2;
    if (nilai === 3) {
        console.log("Benar");
    }
    else {
        console.log("Salah");
    };
}

console.log(separator, "if-else condition")
fungsi2();


// if-elseif

console.log(separator, "if-else if")
var x = 30;

if (x>20)
    console.log(x+" lebih besar dari 20");
else if (x>10)
    console.log(x+" lebih besar dari 10");
else if (x<10)
    console.log(x+" lebih kecil dari 10");
else
    console.log(x+" sama dengan 10");


// nested if

console.log(separator, "nested if")
var x = 20;
var y = 10;
var z = 30;

if (x>y) {
    if (x>z) {
        console.log("nilai x paling besar");
    } else {
        console.log("nilai x terbesar kedua");
    }
} else {
    if (x<z) {
        console.log("nilai x yang terkecil");
    } else {
        console.log("nilai x terkecil kedua");
    }
}


// tipe data
const tipedata=() => {
    var data = 'jakarta';
    console.log(typeof(data));

    if(data === 'jakarta') {
        return data;
    } else {
        return 'gagal';
    }
}

console.log(separator, "tipe data")
console.log(tipedata());


// perulangan dengan for
function perulangan(){
    for (var i=0; i<10; i++) {
        console.log("Jalan:",i);
    }
}

console.log(separator, "perulangan/loop dengan for");
perulangan();


// perulangan dengan while
var i = 0;
const perulanganwhile=() => {
    while(i<10) {
        console.log("ini urutan ke: ",i);
        i++;
    }
}

console.log(separator, "perulangan/loop dengan while");
perulanganwhile();


// perulangan dengan do-while
var i = 0;
const perulangandowhile=() => {
    do {
        console.log("ini urutan ke: ",i);
        i++;
    } while(i<10);    
}

console.log(separator, "perulangan/loop dengan do while");
perulangandowhile();

// perulangan dengan nested loop
console.log(separator, "perulangan/loop nested loop");
for(var i = 0;i < 2; i++) {
    console.log("i ke-",i);
    for(var j = 2;j < 4; j++) {
        console.log("j ke-",j);
    }
    console.log("");
}

// break
console.log(separator, "break");
for (var i=0;i<=10;i++){
    if (i===6){
        break;
    }
    console.log("step ke-",i);
}

// continue
console.log(separator, "continue");
for (var i=0;i<=10;i++){
    if (i===6){
        continue;
    }
    console.log("step ke-",i);
}