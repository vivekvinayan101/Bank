import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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


constructor(private router:Router, private ds:DataService,private fb:FormBuilder){}

loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pass:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

ngOnInit(): void {
  
}

login(){

  
  var acno=this.loginForm.value.acno
  var pass=this.loginForm.value.pass

  if(this.loginForm.valid){

  this.ds.login(acno,pass).subscribe((result:any)=>{
    localStorage.setItem("currentName",JSON.stringify(result.currentName))
    localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
    localStorage.setItem("token",JSON.stringify(result.token))
    alert(result.message)
    this.router.navigateByUrl("dashboard")
  },
  result=>
  { alert(result.error.message)}
  )
  



}else{
  alert("invalid form")
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





