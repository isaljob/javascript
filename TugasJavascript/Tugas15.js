// Diketahui segitiga siku-siku ABC dengan siku-siku di B digambarkan sebagai berikut :
// Tentukan panjang sisi miring AC pada gambar di atas dengan menggunakan kode program javascript dan wajib menggunakan fungsi POW dan SQRT.
// Lalu buatlah tampilan output seperti gambar berikut ini :

 var AB = 8;
 var BC = 6;

 function panggilPitagoras(){
     var CA = Math.sqrt(Math.pow(AB,2)+Math.pow(BC,2));
     console.log(CA);
 }

 panggilPitagoras();