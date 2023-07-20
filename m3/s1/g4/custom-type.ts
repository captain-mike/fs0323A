//Custom type normale
type user = {
    nome:string,
    cognome:string,
    anni:number
}

let persona:user = {
    nome: "Mario",
    cognome: "Rossi",
    anni: 50
}

//Custom type combinable
type combinable = number|string;


//Custom type con intersezione
//intersection type

type userBase = {
    email:string,
    password:string
}

type superUser = {
    privileges:string[]
}

type ElevatedUser = userBase & superUser;


let utente:ElevatedUser = {
    email:"",
    password:"",
    privileges:[]
}