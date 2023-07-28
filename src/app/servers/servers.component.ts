import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=true
  serverCreation="No server was created"
  serverName="Test Server "
  firstName=" "
  lastName=" "
  serverCreated=false


  constructor(){
    this.allowNewServer=true
  }

  
  
 onCreateServer(){
  this.serverCreated=true
  this.serverCreation="Server was created. The name is "+this.serverName 
}
 onUpdateServerName(event:any){
  this.serverName=(<HTMLInputElement>event.target).value
  console.log(event)

 }

}
