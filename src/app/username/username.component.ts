import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
    username = '';
    usernameFormControl = new FormControl(this.username, [
        Validators.required,
    ]);
    @Output() usernameEmitter = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.usernameEmitter.emit(this.usernameFormControl.value);
    }


}
