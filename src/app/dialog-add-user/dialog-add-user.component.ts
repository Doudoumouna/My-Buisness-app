import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {}

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    try {
      await addDoc(collection(this.firestore, 'user'), this.user.toJSON());
      this.loading = false;
      this.dialogRef.close();
    } catch (e) {
      console.error('Error adding document: ', e);
      this.loading = false;
    }
  }
}
