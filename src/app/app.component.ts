import { Component } from '@angular/core';
import { DialogFlowService } from './services/dialog-flow.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialogService: DialogFlowService) {

  }

  public askQuestion(question: string): void {
    this.dialogService.askQuestion(question).subscribe((response) => {
      console.log(response.result.fulfillment.speech);
    })
  }

  title = 'app';


}
