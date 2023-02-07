import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentName:any
  currentAcno:any

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"Anu",password:"abc123",balance:0, transaction:[]},
    1001:{acno:1000,username:"Amal",password:"abc123",balance:0, transaction:[]},
    1002:{acno:1000,username:"Arun",password:"abc123",balance:0, transaction:[]},
    1003:{acno:1000,username:"Akhil",password:"abc123",balance:0, transaction:[]}
  }

  register(user:any, pass:any, acno:any){

    if(acno in this.userDetails){

      return false
    }
    else{

      this.userDetails[acno]={acno:acno,username:user,password:pass,balance:0}
      console.log(this.userDetails);
      
      return true

    }

  }

  login(acno:any, pass:any){
    
    var userDetails=this.userDetails

    if(acno in userDetails){

      if(pass==userDetails[acno]["password"]){
        this.currentName=userDetails[acno]["username"]
        this.currentAcno=acno
                
        return true
        
  
      }else{
        return false
      }
  
    }else{
      return false
    }

  }

  deposit(acnum:any,password:any,amount:any){

    let userDetails=this.userDetails
    var amnt=parseInt(amount) //to convert string value into integer value
    
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){

        userDetails[acnum]["balance"]+=amnt // update balance

        //store transaction data
        userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})

        return userDetails[acnum]["balance"] //return current balance

      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }

  withdraw(acnum:any,password:any,amount:any){

    let userDetails=this.userDetails
    var amnt=parseInt(amount) //to convert string value into integer value
    
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){

        if(amnt<=userDetails[acnum]["balance"]){
          userDetails[acnum]["balance"]-=amnt // update balance

          //store transaction data
        userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})


        return userDetails[acnum]["balance"] //return current balance

          
        }else{
          alert("insufficient Balance")
          return false
        }

      }
      else{
        alert("incorrect Password")
        return false
      }
    }
    else{
      alert("incorrect Account Number")
      return false
    }

  }
  getTransaction(acno:any){

    return this.userDetails[acno]["transaction"]
  }

}


