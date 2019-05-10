import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor(private db:AngularFireDatabase) { }

public createusuario(datos){
  this.db.database.ref('usuarios/'+datos.id).set(datos);

}

public getjuntarosario(id){
  return this.db.object('juntarosario/'+id);
}


///config admin
public createruta(datos){
  this.db.database.ref('ruta/'+datos.id).set(datos);

}




public getrutas(){
  return this.db.list('ruta').valueChanges();

}

public getvalormatricula(){
  return this.db.list('valoresestaticos').valueChanges();

}

public getvalormatriculasola(){
  
 
  return    this.db.list('matriculavalor');

}

public creatematriculauser(datosmatricula){

  
  var bduser: string  ='';
  bduser =(datosmatricula.idusuario+'/matriculauser/'+datosmatricula.id);
  this.db.database.ref('usuarios/'+bduser).set(datosmatricula);

}

}
