import { Component, OnInit } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";
import { DataService } from "./services/data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa';


  constructor(updates : SwUpdate,  ){
    updates.available.subscribe(event=>{
      updates.activateUpdate().then(()=>document.location.reload());
    })
  }
  ngOnInit(){
  }


}
