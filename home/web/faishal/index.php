<?php

echo ("Hallo Faishal");

function createPersonIdentity(string $name, string $address, int $age){
        return new class(
                $name,
                $address,
                $age
        ) {
                public $name;
                public $address;
                public $age;

                public function __construct(string $name, string $address, int $age){
                        $this->name     = $name;
                        $this->address  = $address;
                        $this->age      = $age;
                }
        } 
}

$people = [
        0 => createPersonIdentity('Anton','Villa',20),
        1 => createPersonIdentity('Banu','Cilame',19),
        2 => createPersonIdentity('Danton','Ngamprah',21),
        3 => createPersonIdentity('Ferdinan','Pakuhaji',20),
        4 => createPersonIdentity('Louis','Gunung Batu',18)
        ];

print_r($people[0]->name);

?>
