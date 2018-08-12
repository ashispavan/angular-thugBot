import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from './components/messages/messages.component';
import { DialogFlowService } from './services/dialog-flow.service';
import { params } from './config/particle.config.js'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public messages: Array<string> = [];

  constructor(private dialogService: DialogFlowService) {

  }

  @ViewChild(MessagesComponent) messagesComponent: MessagesComponent;

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = params;
  }

  public askQuestion(question: string): void {
    this.messages.push(question);
    this.messagesComponent.scrollToBottom();
    this.dialogService.askQuestion(question).subscribe(
      (response) => {
        let answer = response.result.fulfillment.speech
        this.messages.push(answer);
        setTimeout(() => {
          this.messagesComponent.scrollToBottom()
        }, 100
        );

      },
      (error) => {
        this.messages.push(`Yeah naah I've hit a snag.. What did you do dude?`);
        this.messagesComponent.scrollToBottom();
      }
    );
  }

  title = 'app';


}
