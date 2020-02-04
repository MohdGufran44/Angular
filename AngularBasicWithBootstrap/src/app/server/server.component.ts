// Tell to Angular below class is not normal typscript class
// it is something spacial by using spatial decorator


// create class by exporting
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,

  templateUrl: './server.component.html',
  styles: [`
    .online{
      color:white;
    }
  `]
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus:string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

   getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
   }
}
