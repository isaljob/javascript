function panggilKonversi(){
    var kata = new String("Merdeka..."); //salah satu cara membuat object
    console.log(typeof kata);

    var kataToString = kata.toString(); //convert object menjadi string
    console.log(typeof kataToString);

    var kataValueOf = kata.valueOf();
    console.log(typeof kataValueOf);

    console.log("----------------------------")
    console.log(kata);
    console.log(kataToString);
    console.log(kataValueOf);
}

panggilKonversi();