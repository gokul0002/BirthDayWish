import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class MainComponent implements OnInit {

  seconds: number;
  intervalId: any;
  timeUp: boolean;

  showGifs: boolean;
  gifIndex: number =0;
  gifIntervalId: any;
  gifs: string[] = [
  //  'assets/Gif8.gif',
   'assets/Gif1.gif',
   'assets/Gif2.gif',
   'assets/Gif3.gif',
   'assets/Gif4.gif',
   'assets/Gif5.gif',
   'assets/Gif6.gif',
   'assets/Gif7.gif',


    // 'https://i.pinimg.com/originals/6e/9f/fa/6e9ffafe13fa926ad1a25060397b3d2d.gif',
    // 'https://i.pinimg.com/originals/ca/04/37/ca04378661fd8f3f3d4dcc26442ed14d.gif',
    // 'https://i.pinimg.com/originals/a9/fe/3b/a9fe3badc96975b5a32ed74f24215509.gif',
    // Add more GIF paths here
  ];
  currentGif: string;

  constructor() {
    this.seconds = 5; // Set initial seconds
    this.timeUp = false;
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      if (this.seconds === 0) {
        this.timeUp = true;
        clearInterval(this.intervalId);
        setTimeout(() => this.startGifDisplay(), 4000); // Delay before showing GIFs
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  startGifDisplay(): void {
    this.showGifs = true;
    this.currentGif = this.gifs[this.gifIndex];

    this.gifIntervalId = setInterval(() => {
    
      
      this.gifIndex++;
      if (this.gifIndex >= this.gifs.length) {
        this.gifIndex = 0; // Loop back to the first GIF
      }
      this.currentGif = this.gifs[this.gifIndex];
    }, 3000); // Display each GIF for 3 seconds

  }

}
