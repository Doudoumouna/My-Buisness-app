import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  constructor(private dialog: MatDialog) {}
  title = 'buisness_app';
}
