import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogScoresComponent} from "./utils/dialog-scores/dialog-scores.component";
import {User} from "./model/user.model";
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
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
    users: User[];
    data = [{username: 'test', score: 200}];
    private usersCollection: AngularFirestoreCollection<User>;

    constructor(public dialog: MatDialog, private db: AngularFirestore) {
        this.usersCollection = db.collection<User>('players', ref => ref.orderBy('score'));
        this.usersCollection.valueChanges().subscribe(elem => this.users = elem)
    }

    ngOnInit() {

    }

    sendingUsername(event) {
        this.username = event;
        console.log(event)
    }

    sendingScore(event) {
        console.log('score', event)
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const userData:User = {
            username: this.username,
            score: event,
            date: timestamp
        }
        this.usersCollection.add(userData);
    }

    launchModalBestScore(): void {
        const dialogRef = this.dialog.open(DialogScoresComponent, {
            width: '250px',
            data: this.users
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }

    ngOnDestroy() {

    }
}


