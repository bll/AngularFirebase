import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(public authService: AuthService) {

    // af.object('connected').valueChanges().subscribe((data) => {
    //   console.log(data);
    // })


  }
}
