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

  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
