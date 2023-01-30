import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  acno=''

  pass=''

  data="Your perfect banking partner"

  inputplaceholder="Username"

userDetails:any={
  1000:{acno:1000,username:"anu",password:"abc123",balance:0},
  1001:{acno:1000,username:"amal",password:"abc123",balance:0},
  1002:{acno:1000,username:"arun",password:"abc123",balance:0},
  1003:{acno:1000,username:"akhil",password:"abc123",balance:0}
}
constructor(){}

ngOnInit(): void {
  
}

login(){
  alert("login clicked")
}

acnoChange(event:any){

  this.acno=event.target.value
  console.log(this.acno);
  
}
passChange(event:any){

  this.pass=event.target.value
  console.log(this.pass);
  
}

}
