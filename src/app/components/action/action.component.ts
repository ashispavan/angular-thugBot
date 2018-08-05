import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public question: string = '';

  @Output() askQuestion: EventEmitter<string> = new EventEmitter<string>();

  public askQuery(): void {
    this.askQuestion.emit(this.question);
  }



}
