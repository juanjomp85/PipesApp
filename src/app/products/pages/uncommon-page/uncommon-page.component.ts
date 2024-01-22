import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Juanjo';
  public gender: 'male'|'female' = 'male';
  public invitationMap= {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name= 'Diana';
    this.gender= 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria','Pedro','Juan','Adolfo','Ernesto','Juanjo','Melisa','Arancha']
  public clientsMap = {
    '=0': 'no tenemos nigun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //Json Pipe
  public person = {
    name: 'Juanjo',
    age: 38,
    addres: 'Murcia, Spain'
  }

  //KeyValue Pipe
  public coche = {
    marca: 'Chevrolet',
    CV: 168,
    modelo: 'Orlando'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.');
      this.person.name= 'Pepito'
    },4000);

  })

}
