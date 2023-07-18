enum Mesi {
    Gennaio = 0,
    Febbraio,
    Marzo
}
/*
Se non assegno valori, questi saranno assegnati automaticamente sotto forma di indice(partendo da zero)
*/
console.table(Mesi);
console.table(Mesi.Gennaio);
console.table(Mesi[0]);


//Esempio di utilizzo di un enum per la categorizzazione di libri
enum TipiLibro{
    Romanzo = 'Romanzo',
    Saggio = 'Saggio',
    Fantasy = 'Fantasy',
    Biografia = 'Biografia'
}

const libro1:{
    titolo:string,
    autore:string,
    tipo:string,
} = {
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkien",
    tipo: TipiLibro.Fantasy//vah che bello che è scritto così
}

console.log(libro1);


