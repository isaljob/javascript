// panggil fungsi dengan Button onClick
function fungsi1(){
    console.log("ini fungsi 1 javascript yang dibuat secara external")
}

function fungsi2(){
    console.log("ini fungsi 2 javascript yang dibuat secara external")
}

// munculkan Alert dengan Button onClick 
function jalanAlert(){
    alert("Ini Alert JavaScript")
}

// seleksi DOM dengan .getElementById()
function getNamaDepanById(){
    let nama = document.getElementById('namadepan').value;
    console.log(nama);
}

// seleksi DOM dengan .getElementsByClassName()
function getNamaDepanByClassName(){
    let nama = document.getElementsByClassName('namadepanClass');
    console.log(nama);
}

// seleksi DOM dengan .getElementsByTagName()
function getNamaByTagName(){
    let nama = document.getElementsByTagName('input');
    console.log(nama);
}

// seleksi DOM dengan .getElementsByTagName()
function getNamaByQuerySelector(){
    let nama = document.querySelector('.namadepanClass');
    console.log(nama);
}

// Attribute Item
function getTombol(){
    var a = document.getElementsByTagName('button')[0]; // diberi [0] karena attributenya terbaca berupa array
    var b = a.attributes.item(1).name;
    document.getElementById("contoh").innerHTML = b;
    console.log(a);
    console.log(b);
}

// Attribute getNamedItem
function getTombolNamedItem(){
    var a = document.getElementsByTagName('button')[0]; // diberi [0] karena attributenya terbaca berupa array
    var b = a.attributes.getNamedItem('onclick').value;
    document.getElementById("contoh2").innerHTML = b;
    console.log(a);
    console.log(b);
}

// Attribute length
function getTombolLength(){
    var a = document.getElementsByTagName('button')[0]; // diberi [0] karena attributenya terbaca berupa array
    var b = a.attributes.length;
    var c = 'Terdapat '+ b +' element pada attribute Button';
    document.getElementById("contoh3").innerHTML = c;
    console.log(a);
    console.log(b);
}