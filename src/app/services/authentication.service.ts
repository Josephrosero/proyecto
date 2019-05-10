import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  juntarosario:any = {};
  constructor(private angularFireAuth:AngularFireAuth, private router:Router) { 
  this.isAuthenticated();

  }


  public signIn = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then((response) => {
          if (email == "superadmin@gmail.com" && password =="superadmin1"){
            alert('usuario autenticado con exito');
            this.router.navigate(['/sadmin']);
          }else{
            alert('usuario autenticado con exito');
           
            console.log(""+this.juntarosario)
            this.router.navigate(['/homeadmin']);
          }

        })
        .catch((error) => {
            console.log(error);
            alert('El usuario no esta registrado.');
        });
}


 public signOut(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/login']);
}


 // Metodo para registrar usuario
public register = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((response) => {
            alert('usuario registrado con exito');
            this.router.navigate(['/user']);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Metodo para obtener los datos del usuario
public getDataUser(){
    return this.angularFireAuth.auth;
}

// Metodo para validar si el usuario esta autenticado
public isAuthenticated(){
    return this.angularFireAuth.authState;
}



}
