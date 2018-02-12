import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { User } from './interfaces/user.interface';

@Injectable()
export class AuthService {

  // tslint:disable-next-line:no-any
  public authState: any = null;
  private user: User;
  private userDoc: AngularFirestoreDocument<User>;
  private userCollection: AngularFirestoreCollection<User>;


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.userCollection = afs.collection<User>('users');
  }

  public googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.socialSignIn(provider);
  }

  // returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // returns the current user
  get currentUser(): User | null {
    return this.authenticated ? this.user : null;
  }

  // returns the current users uid
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // returns current users display name
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

  // returns current users email
  get currentUserEmail(): string {
    return this.authenticated ? this.authState.email : '';
  }

  public facebookLogin() {
    throw new Error('facebookLogin() not implemented in firebase');
    // const provider = new firebase.auth.FacebookAuthProvider();
    // this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.authState = credential.user;
        this.userDoc = this.afs.doc<User>(`user/${this.currentUserId}`);
        this.addUser();
        this.setUser();
      })
      .catch(error => console.log(error));
  }

  private addUser() {
    this.userDoc.set({
      uid: this.currentUserId,
      name: this.currentUserDisplayName,
      email: this.currentUserEmail,
      friends: [''],
      wishList: ['']
    });
  }

  // this sets the private user property
  private setUser(): User | null {
    if (!this.authenticated) {
      return null;
    } else {
      this.userDoc.valueChanges().subscribe((user) => {
        console.log(user);
        this.user = user;
      });
      return this.user;
    }
  }

}
