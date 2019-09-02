// Silahkan tuliskan kode Javascript berikut :
// Berdasarkan kode diatas, silahkan dilengkapi seperti dengan materi sebelumnya bagian exec sehingga apabila dijalankan akan menampilkan seperti berikut :
function panggilRegex(kata) {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    let pola = new RegExp(kata); // new membentuk object dengan RegExp 
    let hasil = pola.exec(data);

    console.log(hasil);
   }

panggilRegex('ilmu');