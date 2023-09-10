import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floating-tile',
  templateUrl: './floating-tile.component.html',
  styleUrls: ['./floating-tile.component.css']
})
export class FloatingTileComponent {
  //used to update the floating tile referenced from the app component
  @Input() isLogin: boolean = true;

  //function reference app component
  @Input() updateIsLogin: Function = () => { }
}
