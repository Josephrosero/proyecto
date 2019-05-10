import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SuperadminService } from '../services/superadmin.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any = {};
  isAuthenticated:boolean = true;

  constructor(private authentication:AuthenticationService,private fireBaseService:SuperadminService, private router:Router) {
    authentication.isAuthenticated().subscribe((result) => {
      if (result && result.uid) {
      
          this.isAuthenticated = true;
          this.router.navigate(['/homeadmin']);

      }else{
          this.isAuthenticated = false;
      }
  }, (error) => {
      this.isAuthenticated = false;
  });

   }

  ngOnInit() {
  }
  public signIn(){
    this.authentication.signIn(this.login.email, this.login.password);
}


public register(){
    this.authentication.register(this.login.email, this.login.password);
}

}
