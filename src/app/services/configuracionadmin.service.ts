import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionadminService {

  constructor(private db:AngularFireDatabase) { }


  public createruta(datos){
    this.db.database.ref('ruta/'+datos.id).set(datos);
  
  }
}
