import { Component, OnInit } from '@angular/core';

import {SuperadminService} from '../services/superadmin.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuracionadmin',
  templateUrl: './configuracionadmin.component.html',
  styleUrls: ['./configuracionadmin.component.css']
})
export class ConfiguracionadminComponent implements OnInit {

  ruta : any = {};

  constructor(private confiadmin:SuperadminService,  private route:ActivatedRoute) { }

  ngOnInit() {
  }


  public createruta(){
    this.ruta.id=this.ruta.codigo;
    this.confiadmin.createruta(this.ruta);
  }
}
