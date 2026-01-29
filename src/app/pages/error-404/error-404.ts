import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-error-404',
  imports: [RouterModule],
  templateUrl: './error-404.html',
  styleUrl: './error-404.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('float', [
      state('*', style({ transform: 'translateY(0)' })),
      transition('* => *', [
        animate('3s ease-in-out', style({ transform: 'translateY(-20px)' })),
        animate('3s ease-in-out', style({ transform: 'translateY(0)' }))
      ])
    ]),
    trigger('pulse', [
      transition(':enter', [
        style({ opacity: 1 }),
        animate('2s', style({ opacity: 0.6 })),
        animate('2s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class Error404 {
  floatState = 'floating';

  constructor() {
    // Trigger continuous float animation
    setInterval(() => {
      this.floatState = this.floatState === 'floating' ? 'float' : 'floating';
    }, 6000);
  }
}
