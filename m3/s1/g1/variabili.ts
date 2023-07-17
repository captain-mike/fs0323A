let a = 0;
a = 4;//ora vale 4
var b = 1;
b = 5;//ora vale 5

{
    var x = 0;
    //la variabile var non è soggetta a blockscope
}
console.log(x);//funziona

{
    let y = 0
    console.log(y);//funziona
}
//console.log(y);//non funziona



const c = 2;//non posso riassegnarla
//c = 4 -> errore