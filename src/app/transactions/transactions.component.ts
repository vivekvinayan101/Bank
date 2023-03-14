import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{

  transactionData:any;
  // acno:any

  constructor(private ds:DataService){
  
    // this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")

this.ds.transaction(JSON.parse(localStorage.getItem("currentAcno") || "")).subscribe((result:any)=>{
  this.transactionData=result.transaction
}) 

 }

  ngOnInit(): void {
  

  }
}
