// Ambilah dua kata “long established” dalam sebuah kalimat ini : “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”

var kalimat = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

// di split agar menjadi array
var kalimatSplit = kalimat.split(" ",5)
// print elemet array ke 3 dan 4
console.log(kalimatSplit[3]+" "+kalimatSplit[4]);
// bisa juga dengan cara slice
var kalimatSlice = kalimat.slice(7,-100);
console.log(kalimatSlice.trim());

console.log("--------------------------------------------------------")

// String 1 :

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// String 2 :

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

var string_1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

var string_2 = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

var gabungString = string_1.concat(string_2)

console.log(gabungString);