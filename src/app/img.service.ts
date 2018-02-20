import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Configuration } from './Services/configuration.interface';

@Injectable()
export class ImgService {

  private imageUrl: string = 'https://api.themoviedb.org/3/configuration?api_key='
  private apiKey: string = 'f1dc689823def4f561ce96b21153f793';

  constructor(private httpClient: HttpClient) { }

  getConfiguration(): Observable<Configuration> {
    return this.httpClient
      .get<Configuration>(this.imageUrl + this.apiKey);
  }

}
