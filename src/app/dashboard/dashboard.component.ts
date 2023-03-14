import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any

  accountnumber: any

  datedetails: any



  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {

    if(localStorage.getItem("currentName")){
      this.user = JSON.parse(localStorage.getItem("currentName") || "")
    }
    
    this.datedetails = new Date()

  }

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pass: ['', [Validators.required, Validators.pattern('[0-9A_Za-z]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pass1: ['', [Validators.required, Validators.pattern('[0-9A_Za-z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert("Please Log In")
      this.router.navigateByUrl("")
    }
  }

  deposit() {
    var acno = this.depositForm.value.acno
    var pass = this.depositForm.value.pass
    var amnt = this.depositForm.value.amnt

    if (this.depositForm.valid) {
      this.ds.deposit(acno, pass, amnt).subscribe((result: any) => {
        alert(result.message)
      },
        result => {
          alert(result.error.message)
        }

      )

    } else {
      alert("Invalid Form")
    }
  }

  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var pass = this.withdrawForm.value.pass1
    var amnt = this.withdrawForm.value.amnt1

    if (this.withdrawForm.valid) {

    this.ds.withdraw(acno, pass, amnt).subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    }
    )

    } else {
      alert("Invalid Form")
    }
  }
  logOut() {
    localStorage.removeItem('currentName')
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')

  }
  deleteParent() {
    this.accountnumber = JSON.parse(localStorage.getItem('currentAcno') || '')
  }

  cancel() {
    this.accountnumber = ''
  }

  Delete(event:any){
    this.ds.deleteAc(event).subscribe((result:any)=>{
      alert(result.message)
      this.logOut()
    })
  }
}


