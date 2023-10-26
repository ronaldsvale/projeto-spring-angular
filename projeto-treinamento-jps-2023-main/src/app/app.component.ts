import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'projeto-treinamento';
  nomePai: string = 'Rafael';

  buscaNome(): string {
    return this.nomePai;
  }
}
