import { Component } from '@angular/core';
import { Observable, Subscription, catchError, filter, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {

  private sub!:Subscription;


  ngOnInit():void{

    const intervallo = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);

        if(count == 5){
          observer.complete()
          console.log('Completato');

        }

        if(count > 3){
          observer.error(new Error('Count è  troppo grande'));
        }

        count++;
      },1000)

    });


    this.sub = intervallo
    .pipe(
      filter(x => (x as number) > 1 ),
      map( x => `Siamo al numero  ${x}`),
      )
    .subscribe({
      next: dato => console.log(dato),
      error: err => console.error(err),
      complete: ()=> console.log('Completato')
    })

  }


  ngOnDestroy(){
    this.sub.unsubscribe();//prevengo iscrizioni multiple
  }




}
