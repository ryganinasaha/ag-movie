import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  findMovie(name: string) {
    return this.httpClient.get(`http://www.omdbapi.com/?t=${name}&apikey=6dc1b408`)
  }
}
