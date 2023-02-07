import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno=''

  pass=''

  user=''

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
    
  }

  register(){
    
    var user= this.user
    var acno=this.acno
    var pass=this.pass

    const result=this.ds.register(pass,user,acno)

    if(result){

      alert("Your Account has been Registered.")
      this.router.navigateByUrl("")

    }
    else
    {

      alert("Account Number already exists")
    
    }
    
    
  }

}

