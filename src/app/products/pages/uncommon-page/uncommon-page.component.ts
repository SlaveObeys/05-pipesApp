import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female'
  }

  //i18n Plural
  public clientes: string[] = ['Fernando', 'Melissa', 'Juan', 'Carlos', 'Pedro', 'Luis', 'Ana', 'Maria', 'Jose', 'Jorge'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClientes(): void {
    this.clientes.shift();
  }

  //json pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Santiago, Chile'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(tap(value => console.log('tap', value)));

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa'),
        this.person.name = 'Penca culia'
    }, 3500);
  });


}
