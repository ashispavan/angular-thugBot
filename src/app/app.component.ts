import { Component, OnInit } from '@angular/core';
import { DialogFlowService } from './services/dialog-flow.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public messages: Array<string> = [];

  constructor(private dialogService: DialogFlowService) {

  }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };
  }

  public askQuestion(question: string): void {
    this.messages.push(question);
    this.dialogService.askQuestion(question).subscribe(
      (response) => {
        let answer = response.result.fulfillment.speech
        this.messages.push(answer);
      },
      (error) => {
        this.messages.push(`Sorry, can't talk right now`);
      }
    );
  }

  title = 'app';


}
