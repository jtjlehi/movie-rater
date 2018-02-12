import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUserData(uid) {
    throw new Error('getUserData() not implemented yet');
  }

  addUser() {
    throw new Error('addUser() not implemented yet');
  }

  addFriendToUser(userId, friendId) {
    throw new Error('addFriendToUser() not implemented yet');
  }

  removeFriendFromUser(userId, friendId) {
    throw new Error('removeFriendFromUser() not implemented yet');
  }

  addMovieToWishList(userId, movieId) {
    throw new Error('addMovieToWishList() not implemented yet');
  }

  removeMovieFromWishList(userId, movieId) {
    throw new Error('removeMovieFromWishList() not implemented yet');
  }

}
