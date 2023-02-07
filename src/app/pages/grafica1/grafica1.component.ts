import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
 
  public labels1: string[] = ['computadoras', 'celulares', 'TV'];

  public data1 = [10, 15, 40]

  public colors1 = [ '#FFC369' ,'#6857E8', '#F55746']

}
