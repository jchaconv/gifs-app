import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html'
})
export class SiderbarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService : GifsService) { }

  buscar(item : string){
    console.log(item);
    this.gifsService.buscarGifs(item);
  }

}
