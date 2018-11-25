import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from "@angular/material";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {UsernameComponent} from './username/username.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {GameComponent} from './game/game.component';
import {DialogScoresComponent} from './utils/dialog-scores/dialog-scores.component';
import {MatDialogModule} from "@angular/material";
import {MatTableModule} from "@angular/material";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {PlayerService} from "./player-service.service";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
@NgModule({
    declarations: [
        AppComponent,
        UsernameComponent,
        GameComponent,
        DialogScoresComponent
    ],
    entryComponents: [
        DialogScoresComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatTableModule,
        MatProgressSpinnerModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [PlayerService, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule {
}
