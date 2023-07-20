

let promise = new Promise((resolve, reject) => {

    let password = 'password';

    setTimeout(()=>{  //setTimeouit lo metto solo per simulare l'attesa della risposta
        if(password == 'password'){
            resolve('Successo');
        }else{
            reject('Insucceso');
        }
    }, 5000)

})

//console.log(promise); => non è possibile leggere il contenuto


promise.then(
    (successo)=> console.log(successo),
    (insuccesso)=> console.error(insuccesso)
    )


//versione semplificata
let promise2 = new Promise((resolve) => {
   
        setTimeout(()=>{  //setTimeouit lo metto solo per simulare l'attesa della risposta
                resolve('Successo');
        }, 5000)
    
    })


    promise2.then(res => console.log(res));