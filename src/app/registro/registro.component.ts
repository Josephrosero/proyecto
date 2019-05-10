import { Component, OnInit } from '@angular/core';
import {SuperadminService} from '../services/superadmin.service'
import { ActivatedRoute, GuardsCheckStart } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { async } from '@angular/core/testing';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:any = {};

  cuotamatricula:any = 
  {'id': null,
  'valorcuota':null,
  'idusuario': null,
  'estado':true,
    };

  cuotamatricula2:any;

  rutas = null;
  curDate = null;



   ini=0;
   numcuotas=1;
   



   valorcuota1 :number;
  valormatricula : any;
  valormatricula2 =null;
  
 
 

  constructor(private fireBaseService:SuperadminService, private route:ActivatedRoute) { 

    this.rutas=fireBaseService.getrutas();

    this.curDate=new Date();
    this.valormatricula= fireBaseService.getvalormatricula();
    this.valormatricula2=    Object.values(   fireBaseService.getvalormatriculasola());





  
  
   //   this.valorcuota1 = Object.values(this.valormatricula);
    
      //console.log(Object.values(this.valormatricula));
 
    //this.valormatricula = fireBaseService.getvalormatricula(status);
    //console.log(""+fireBaseService.getvalormatricula('valormatricula/valor'));
   
  }

  ngOnInit() {

  }

  mensaje(){

    console.log("sisasasasa");
  }


createusuario() { 
      
      this.usuario.id = this.usuario.codigo;
       
      this.fireBaseService.createusuario(this.usuario);         
   }
   MethodName($scope)
  {
      $scope.date = new Date();
      
  }


  calcularvalorcuota(){
    


    
    //this.cuotamatricula.idusuario = this.usuario.id;

    // var  numcuotas1 = parseInt(numcuotas);
    
    // var valorm1= parseInt(valorm);

    //this.valorcuota1 = this.ini  /this.numcuotas; 
   
   // this.valorcuota = ( parseInt(valorm)  -  parseInt ( inicial) / parseInt(numcuotas)  );

       /* for (var i = 0; i <= this.cuotamatricula.numcuotasusuario; i++){

      this.cuotamatricula.id = i+1;
      this.cuotamatricula.valorcuota = this.valorcuota1;
      this.fireBaseService.creatematriculauser(this.cuotamatricula);
        } 
       **/  
      
      
  }

 




}
