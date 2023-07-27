import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  //questa pipe taglia il testo riducendone la lunghezza a 10 caratteri, aggiungendo i 3 puntini nel punto in cui il testo viene troncato
  transform(value: string, ...args: unknown[]): string {
    //value è il testo sottoposto alla pipe
    return value.substring(0,10) + '...';
  }

}
