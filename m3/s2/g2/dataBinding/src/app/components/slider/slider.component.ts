import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  images:string[] = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg',
    'assets/4.jpg'
  ]

  counter:number = 0;
  currentImage:string = this.images[this.counter];

  constructor(){

    setInterval(()=>this.changeImage(),3000)

  }

  changeImage(){

    if(this.counter < this.images.length - 1){
      this.counter++;
    }else{
      this.counter = 0;
    }
    this.currentImage = this.images[this.counter]

  }



}
