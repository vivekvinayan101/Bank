import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//overloading headers as global
const option={
  headers:new HttpHeaders()

}

@Injectable({
  providedIn: 'root'
})



export class DataService {

  currentName: any
  currentAcno: any
  userDetails: any

  constructor(private http: HttpClient) {
    // this.getData()
  }

  // userDetails: any = {
  //   1000: { acno: 1000, username: "Anu", password: "abc123", balance: 0, transaction: [] },
  //   1001: { acno: 1000, username: "Amal", password: "abc123", balance: 0, transaction: [] },
  //   1002: { acno: 1000, username: "Arun", password: "abc123", balance: 0, transaction: [] },
  //   1003: { acno: 1000, username: "Akhil", password: "abc123", balance: 0, transaction: [] }
  // }

  saveData() {
    if (this.userDetails) {
      localStorage.setItem("database", JSON.stringify(this.userDetails))
    }
    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
    if (this.currentName) {
      localStorage.setItem("currentName", this.currentName)
    }
  }

  // getData() {
  //   if (localStorage.getItem('database')) {
  //     this.userDetails = JSON.parse(localStorage.getItem('database') || "")
  //   }
  //   if (localStorage.getItem('currentAcno')) {
  //     this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || "")
  //   }
  //   if (localStorage.getItem('currentName')) {
  //     this.currentName = localStorage.getItem('currentName')
  //   }
  // }

  getToken() {
    //access token
    const token = JSON.parse(localStorage.getItem("token") || "")
    // generate header 
    let headers = new HttpHeaders()
    if (token) {
    //append token in headers
    option.headers=headers.append("access_token",token)
    }
    return option
  }




  register(user: any, pass: any, acno: any) {
    //create body data for API req
    const data = {
      user,
      pass,
      acno
    }

    return this.http.post("http://localhost:3000/register", data)
  }


  login(acno: any, pass: any) {

    const data = {
      acno,
      pass
    }

    return this.http.post("http://localhost:3000/login", data)

  }

  deposit(acnum: any, password: any, amount: any) {

    const data={
      acnum, password, amount
    }

    return this.http.post("http://localhost:3000/deposit",data,this.getToken())

  }

  withdraw(acnum: any, password: any, amount: any) {
    
    const data={
      acnum, password, amount
    }

    return this.http.post("http://localhost:3000/withdraw",data,this.getToken())

    
  }
  transaction(acnum: any) {

    const data = {acno:acnum}

   return this.http.post("http://localhost:3000/transaction",data,this.getToken())
  }

  deleteAc(acno:any){
    return this.http.delete(`http://localhost:3000/delete/${acno}`,this.getToken())
  }
}


