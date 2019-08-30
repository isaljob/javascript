// Buatlah sebuah variabel object versi teman teman.
// Tampilkan nilai awal dari masing masing object yang teman teman buat.
// Setelah itu teman teman lakukan perubahan nilai pada salah satu object yang teman teman buat dan tampilkan kembali.

function panggilObject() {
    var rumah = {
                LuasTanah : 78,
                LuasBangunan : 36,
                Alamat : "Villa Cilame Indah 2",
                Blok : "A10"
    }
    
    console.log(rumah);
    rumah.LuasBangunan = 50;
    console.log(rumah);
}

panggilObject();