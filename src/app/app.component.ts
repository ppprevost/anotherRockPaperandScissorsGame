import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogScoresComponent} from './utils/dialog-scores/dialog-scores.component';
import {User} from './model/user.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'betclic';
    username = '';
    loading = false;
    scoreSaved = false;
    users: User[];
    data = [{username: 'test', score: 200}];
    private usersCollection: AngularFirestoreCollection<User>;

    constructor(public dialog: MatDialog, private db: AngularFirestore) {
        this.usersCollection = db.collection<User>('players', ref => ref.orderBy('score', 'desc'));
        this.usersCollection.valueChanges().subscribe(elem => this.users = elem);
    }

    ngOnInit() {

    }

    sendingUsername(event) {
        this.username = event;

    }

    sendingScore(event) {
        if (this.scoreSaved) return false;
        this.scoreSaved = true;
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const userData: User = {
            username: this.username,
            score: event,
            date: timestamp
        };
        this.usersCollection.add(userData);
    }

    launchModalBestScore(): void {
        const dialogRef = this.dialog.open(DialogScoresComponent, {
            width: '500px',
            data: this.users
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }
}


