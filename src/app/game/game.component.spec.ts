import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {MatCardModule} from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule],
            declarations: [GameComponent, ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should win if player choose rock and computer choose scissors', () => {
        fixture = TestBed.createComponent(GameComponent);
        const userChoiceLitteral = 'rock';
        const computerChoiseLitteral = 'scissors';
        component.userChoice = component.choice.find(elem => elem.weapon === userChoiceLitteral).score;
        component.computerChoice = component.choice.find(elem => elem.weapon === computerChoiseLitteral).score;
        component.checkResult();

        expect(component.playerScore).toBe(1);
        expect(component.computerScore).toBe(0);
        expect(component.count).toBe(1);
    });
    it('should loose if player choose rock and computer choose paper', () => {
        fixture = TestBed.createComponent(GameComponent);
        const userChoiceLitteral = 'rock';
        const computerChoiseLitteral = 'paper';
        component.userChoice = component.choice.find(elem => elem.weapon === userChoiceLitteral).score;
        component.computerChoice = component.choice.find(elem => elem.weapon === computerChoiseLitteral).score;
        component.checkResult();

        expect(component.playerScore).toBe(0);
        expect(component.computerScore).toBe(1);
        expect(component.count).toBe(1);
    });
    it('should be a tie', () => {
        fixture = TestBed.createComponent(GameComponent);
        const userChoiceLitteral = 'rock';
        const computerChoiseLitteral = 'rock';
        component.userChoice = component.choice.find(elem => elem.weapon === userChoiceLitteral).score;
        component.computerChoice = component.choice.find(elem => elem.weapon === computerChoiseLitteral).score;
        component.checkResult();
        expect(component.computerScore).toBe(0);
        expect(component.playerScore).toBe(0);
        expect(component.count).toBe(1);
    });
    it('should reset the game if player put reset ', () => {
        fixture = TestBed.createComponent(GameComponent);
        component.userChoice = 1;
        component.computerChoice = 2;
        component.count = 3;
        component.reset();
        expect(component.count).toBe(0);
        expect(component.userChoice).toBe(null);
        expect(component.computerChoice).toBe(null);
    });
});
