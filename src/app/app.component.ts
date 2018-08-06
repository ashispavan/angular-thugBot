import { Component } from '@angular/core';
import { DialogFlowService } from './services/dialog-flow.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public messages: Array<string> = [];

  constructor(private dialogService: DialogFlowService) {

  }

  public askQuestion(question: string): void {
    this.messages.push(question);
    this.dialogService.askQuestion(question).subscribe((response) => {
      let answer = response.result.fulfillment.speech
      this.messages.push(answer);
    })
  }

  title = 'app';


}
