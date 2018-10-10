import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) {
    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => {
                        localStorage.setItem('token', token);
                    });
            })
            .catch(error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }
}
