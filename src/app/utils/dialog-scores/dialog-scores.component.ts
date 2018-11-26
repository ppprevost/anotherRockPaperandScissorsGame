import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../model/user.model';

@Component({
    selector: 'app-dialog-scores',
    templateUrl: './dialog-scores.component.html',
    styleUrls: ['./dialog-scores.component.scss']
})
export class DialogScoresComponent implements OnInit {

    displayedColumns: string[] = ['username', 'score', 'date'];
    dataSource = new MatTableDataSource(this.data);
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    constructor(
        public dialogRef: MatDialogRef<DialogScoresComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User[]) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }


}
