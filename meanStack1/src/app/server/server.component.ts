import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {

    @Input() server: string;
    @Output()
        serverClick: EventEmitter<string> = new EventEmitter<string>();

    serverId: number = 100;
    private _serverStatus: string = 'offline'
    name: string = ''
    months: string[] = [
        'Tháng 1', 'Tháng 2', 'Tháng 3',
        'Tháng 4', 'Tháng 5', 'Tháng 6',
        'Tháng 7', 'Tháng 8', 'Tháng 9',
        'Tháng 10', 'Tháng 11', 'Tháng 12'
    ];

    constructor() {
        this._serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    ngOnInit() {
    }


    get serverStatus(): string {
        return this._serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }

    showServer(event, server): void {
        alert(server)
        this.serverClick.emit(server)
    }
}
