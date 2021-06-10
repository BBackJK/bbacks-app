import { transition, trigger, style, animate, AnimationTriggerMetadata } from '@angular/animations';

export const slideInOut: AnimationTriggerMetadata = trigger('coverSlideInOut', 
    [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-in-out', style({ transform: 'translateX(0%)' }))
      ],),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('400ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ]),
    ]);
    