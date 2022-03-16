import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
template:`
<h1>Hola mundo</h1>

<h3>La base es <strong> {{base}} </strong></h3>


<button (click) = "acumular(base)">+ {{base}} </button>
<span> {{numero}} </span>
<button (click)="acumular(-base);"> - {{base}}  </button>
`
})
export class ContadorComponent{
    title = 'contador';

    base:number=5;
  
    numero:number=0;
    acumular(valor:number){
      this.numero +=valor;
    }
}