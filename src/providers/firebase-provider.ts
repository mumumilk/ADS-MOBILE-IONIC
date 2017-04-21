import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

	constructor() {
		let config = {
          apiKey: "AIzaSyAL6XWZjTRnDNkCECw4Wyew9zdgaxJj2lE",
          authDomain: "ads-mobile-ionic.firebaseapp.com",
          databaseURL: "https://ads-mobile-ionic.firebaseio.com",
          projectId: "ads-mobile-ionic",
          storageBucket: "ads-mobile-ionic.appspot.com",
          messagingSenderId: "18514231486"
		};
		firebase.initializeApp(config);
	}

    database() {
        return firebase.database();
    }

    auth() {
        return firebase.auth();
    }

}
