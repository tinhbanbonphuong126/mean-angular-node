import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

// Import routing
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { StationComponent } from './station/station.component';
import { AppChangeTextDirective } from './app-change-text.directive';

// Add pipe helper
import { SqrtPipe } from './pipe/app.sqrt';


@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        StationComponent,
        AppChangeTextDirective,
        // Import pipe
        SqrtPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,

        // Setting for route
        RouterModule.forRoot(
            [
                {
                    path: 'servers-cpn',
                    component: ServersComponent
                }
            ]
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
