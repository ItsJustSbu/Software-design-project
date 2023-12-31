import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.css']
})
export class BasicButtonComponent {
  @Input() label: any;
  @Input() onClick: Function = () => { };

  invokeClickFunction() {
    this.onClick();
  }
}
