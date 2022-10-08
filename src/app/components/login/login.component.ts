import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() text: string ="";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit()
  }
}
