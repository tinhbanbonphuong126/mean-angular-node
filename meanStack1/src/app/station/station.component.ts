import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-station',
    templateUrl: './station.component.html',
    styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
    serverName: string = '';
    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created';
    serverCreate: boolean = false;
    servers: string[] = [];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreate = true;
        this.serverCreationStatus = `Server was created!!!!. Name is ${this.serverName}`;
        this.servers.push(this.serverName);
        console.log(this.servers)
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    showAuthorFromParent(server): void {
        alert(server)
        console.log('Parent Emmiter')
    }
}
