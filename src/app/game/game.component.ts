import {Component, EventEmitter, OnInit, Output} from '@angular/core';

const choice = [{
    icon: 'fa-hand-rock',
    weapon: 'rock',
    score: 0
},
    {
        icon: 'fa-hand-paper',
        weapon: 'paper',
        score: 1
    },

    {
        icon: 'fa-hand-scissors',
        weapon: 'scissors',
        score: 2
    }
];

// https://stackoverflow.com/questions/26436657/rock-paper-scissors-in-java-using-modulus
const win = [1, -2];

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    constructor() {
    }

    choice = choice;
    count = 0;
    playerScore = 0;
    computerScore = 0;
    loading = false;
    userChoice = null;
    computerChoice = null;
    result = '';
    @Output() scoreEmitter = new EventEmitter<number>();
    ngOnInit() {
    }

    reset() {
        this.userChoice = null;
        this.computerChoice = null;
        this.count = 0;
        this.result = null;
        this.computerScore = 0;
        this.playerScore = 0;
    }
    save() {
        this.scoreEmitter.emit(this.playerScore);
    }

    checkResult() {
        this.count++;
        if (this.userChoice === this.computerChoice) {
            this.result = 'it\'s a tie';
            return false;
        }
        for (const result of win) {
            if (this.userChoice - this.computerChoice === result) {
                this.result = 'You win';
                return this.playerScore = this.playerScore + 1;
            }
        }
        this.computerScore = this.computerScore + 1;
        this.result = 'You loose';
    }


    pick(value: number) {
        this.loading = true;
        this.userChoice = value;
        const randomNum: number = Math.floor(Math.random() * 3);
        setTimeout(() => {
            this.loading = false;
            // generate a number from 0 -2
            this.computerChoice = randomNum;
            this.checkResult();
        }, 1000);
    }

}
