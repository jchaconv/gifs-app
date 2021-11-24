import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../busqueda/interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'mVDeEBESnzBKhUgvbg71o7vsVT5Plq0T';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){

    //Para romper la relación/referencia porque si hago modificaciones
    //desde este método se podría modificar el arreglo
    return [...this._historial];
  }

  constructor(private http : HttpClient){

    //Para que se muestre en el app
    /*if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }*/
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];

  }

  buscarGifs(query: string){
    
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      //Para guardar en localStorage
      localStorage.setItem('historial', JSON.stringify(this._historial));

      localStorage.setItem('resultado', JSON.stringify(this.resultados));

    }    
    
    console.log(this._historial);

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
    

  }


  
}
