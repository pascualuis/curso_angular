import { Component} from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
heroesb: string = '';

borrarHeroe(){

  let heroeBorrado = this.heroes.shift() ;
  this.heroesb = heroeBorrado || "";
console.log(heroeBorrado);
}

}
