import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

import {AuthService} from '../auth/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private dataStorage: DataStorageService,
                public authService: AuthService) {
    }

    onSaveData() {
        this.dataStorage.storeRecipes().subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    onFetchData() {
        this.dataStorage.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}
