import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getRegiseteredUsers();
  }

  users;
  getRegiseteredUsers(){
    this.dataService.getUsers().subscribe(res=>{
      this.users=res;
      console.log(res);
    })
  }

}
