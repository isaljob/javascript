function PersonIdentity(){
    var identitas = [ 
                        {
                            name: 'Anton',
                            address: 'Villa',
                            age: 20

                        },
                        {
                            name: 'Banu',
                            address: 'Cilame',
                            age: 19
                        },
                        {
                            name: 'Danton',
                            address: 'Ngamprah',
                            age: 21
                        },
                        {
                            name: 'Ferdinan',
                            address: 'Pakuhaji',
                            age: 20
                        },
                        {
                            name: 'Louis',
                            address: 'Gunung Batu',
                            age: 18
                        }
                    ]
    
    // var temporary = [];

    function panggilSimpanRecord(){

    }

    function panggilNextRecord(){
        for (i=0;i<identitas.length;i++){
            var umur = identitas[i].age;
            var data = identitas[i]
            for (j=1;j<identitas.length;j++){
                if (umur > identitas[j].age){
                    data = identitas[j];
                }
            }
        }
        return data;
    }


    console.log(panggilNextRecord());

    // identitas.push(tambahan);
    // console.log(identitas);

}

PersonIdentity();