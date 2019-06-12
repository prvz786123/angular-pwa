import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"
import { Router } from "@angular/router"


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private router:Router
  ) { }


  firstName:String="";
  lastName:String=""

  registerNewUser(){
    if(this.firstName && this.lastName){
      this.dataService.registerUser({firstName:this.firstName,lastName:this.lastName}).subscribe(res=>{
        if(res){
          alert("User Registration Success.");
          this.firstName="";
          this.lastName="";
        }
      },err=>{
        if(err){
          alert("Unable To Register.")
          console.log(err);
        }
      })
    }else{
      alert('Please Fill Valid Details.')
    }
  }

  ngOnInit() {
  }

}
