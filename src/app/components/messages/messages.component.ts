import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scrollToBottom();
  }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  @Input() messages: Array<string>;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  public scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
