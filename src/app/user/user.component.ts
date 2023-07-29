import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore } from '@angular/fire/firestore'; // Corrected import

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = new User();

  constructor(public dialog: MatDialog, private firestore: Firestore) {} // Updated 'Firestore' to 'AngularFirestore'

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges()
      .subscribe((changes: any) => {
        console.log('Receive changes from DB', changes);
      });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
