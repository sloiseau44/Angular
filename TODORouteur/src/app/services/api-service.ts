import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const URL = 'http://localhost:3000/pubs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http:HttpClient) { }

  getJson(){
    return this.http.get(URL);
  }


}
