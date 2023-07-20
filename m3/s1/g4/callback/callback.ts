
function scrivi(testo:string,fn:Function):void{

    let target:HTMLElement|null = document.getElementById('target');

    if(target)
    target.innerHTML += fn(testo);

}

function grassetto(testo:string):string{
    return `<b>${testo}</b>`;
}

function corsivo(testo:string):string{
    return `<i>${testo}</i>`;
}

scrivi('ciao',grassetto);
scrivi('ciao',corsivo);
scrivi('ciao',(testo)=>testo);