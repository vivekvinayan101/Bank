import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any

  acno: any
  pass: any
  amnt: any

  acno1: any
  pass1: any
  amnt1: any

  constructor(private ds: DataService) {
    this.user = this.ds.currentName
    
    

  }

  ngOnInit(): void {

  }

  deposit() {
    var acno = this.acno
    var pass = this.pass
    var amnt = this.amnt
    const result = this.ds.deposit(acno, pass, amnt)

    if (result) {
      alert(`Your account has been credited with amount ${amnt}. Your current balance is ${result}`)
    } else {
      alert("Incorrect Account Number or Password")
    }
  }

  withdraw() {
    var acno = this.acno1
    var pass = this.pass1
    var amnt = this.amnt1

    const result = this.ds.withdraw(acno, pass, amnt)

    if (result) {
      alert(`An amount of ${amnt} has been debited from your account. Your current balance is ${result}`)
    }

  }
}


