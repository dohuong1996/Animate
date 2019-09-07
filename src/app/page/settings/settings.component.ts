import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    // Basic Animation Two-State
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    // MultiState Animation and Keyframe Animation
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(250%) translateY(-50%)',
      })),
      state('enlarge', style({
        transform: 'translateX(25%) translateY(50%) scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      // transition('* => *', animate('500ms ease')),
      transition('* => move',
        animate('2000ms', keyframes([
          style({ transform: 'translateX(0) rotateY(0)', offset: 0 }),
          style({ transform: 'translateX(50%)  rotateY(90deg)', offset: 0.33 }),
          style({ transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66 }),
          style({ transform: 'translateX(-100%)', offset: 1.0 })
        ])
        ))
    ]),
    //  Animating Lists
    trigger('photosAnimation', [
      transition('* => *', [
        query('img', style({ transform: 'translateX(-50%)' })),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: ' translateX(25%)'}))
          ]))
      ])
    ])

  ]
})
export class SettingsComponent implements OnInit {

  show = false;
  position: string;
  photoURL: string = 'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg';

  photos: any = [
    {
      url: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
    },
    {
      url: "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  get stateName() {
    return this.show ? 'show' : 'hide';
  }


  toggle() {
    this.show = !this.show;
  }

  onChangePosition(newPosition: string) {
    this.position = newPosition;
  }

  logAnimation($event) {
    console.log(`${this.position} animation ${$event.phaseName}`)
  }

}
