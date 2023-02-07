import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  acno=''

  pass=''

  data="Your perfect banking partner"

  inputplaceholder="Account Number"


constructor(private router:Router, private ds:DataService){}

ngOnInit(): void {
  
}

login(){

  
  var acno=this.acno
  var pass=this.pass

  const result=this.ds.login(acno,pass)

  if(result){
    alert("Login Successfull")
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert("Incorrect Account Number or Password")
  }

  
  

}
}


// login(a:any,b:any){
  
     
//   var userDetails=this.userDetails
//   var acno=a.value
//   var pass=b.value
//   if(acno in userDetails){

//     if(pass==userDetails[acno]["password"]){
//       alert("login successfull")
//     }else{
//       alert("Incorrect Password")
//     }

//   }else{
//     alert("Account Number incorrect or not registered yet")
//   }



// acnoChange(event:any){

//   this.acno=event.target.value
//   // console.log(this.acno);
  
// }
// passChange(event:any){

//   this.pass=event.target.value
//   // console.log(this.pass);
  
// }





