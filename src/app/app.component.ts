import { Component } from '@angular/core';
import { ApiService, template } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-tasks';

  constructor(private service: ApiService) {  }

  tarefa : template = { activity: '', type: ''};

  cliquei() {
    this.service.callapi().subscribe( ( retorno ) => {
      this.tarefa = retorno; 
      console.log(this.tarefa);
    });
  }
}