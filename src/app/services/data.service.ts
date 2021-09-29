import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getProvincias(){
    return this.http.get('http://apis.datos.gob.ar/georef/api/provincias')
  }
}
