import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD0zwe-UHbN7RNskiIb5x2iopgyk4SOJwM',
            authDomain: 'ng-recipe-book-3eee1.firebaseapp.com'
        });
    }
}
